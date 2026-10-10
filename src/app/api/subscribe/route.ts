import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendAudienceId = process.env.RESEND_AUDIENCE_ID;

    if (resendApiKey) {
      // Send contact to Resend API if API Key is set
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Guide Angel <newsletter@claudeguide.pro>',
          to: [email],
          subject: 'Welcome to Guide Angel Journal',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #181614;">
              <h2 style="color: #cc785c;">Welcome to Guide Angel</h2>
              <p>Thank you for subscribing to our journal. You will receive our latest guides, prompt engineering breakdowns, and Claude AI workflows directly in your inbox.</p>
              <p style="color: #666; font-size: 12px; margin-top: 30px;">© Guide Angel Press — <a href="https://claudeguide.pro">claudeguide.pro</a></p>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        console.warn('Resend API call warning:', await res.text());
      }
    } else {
      // In development or prior to setting API key, log subscriber email safely
      console.log(`[Newsletter Subscription] New subscriber: ${email}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to Guide Angel newsletter.',
    });
  } catch (err: any) {
    console.error('Subscription API Error:', err);
    return NextResponse.json(
      { error: 'Internal server error while processing subscription.' },
      { status: 500 }
    );
  }
}
