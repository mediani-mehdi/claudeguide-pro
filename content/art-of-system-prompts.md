---
title: "The Art of System Prompts"
excerpt: "Design system prompts that shape Claude into specialized assistants - from code reviewer to writing coach."
date: "Jul 16, 2026"
dateRoman: "XVI · VII · MMXXVI"
category: "Advanced"
readTime: "13 min"
number: "ΧΙV"
---

# The Art of System Prompts

System prompts are the most powerful - and most underused - feature in Claude. They let you shape Claude's personality, expertise, and behavior for an entire conversation.

## What Makes a Great System Prompt

A great system prompt has four components:

### 1. Identity
Who is Claude in this context?
```
You are a senior product manager at a SaaS company with 
10 years of experience in B2B products.
```

### 2. Behavior Rules
How should Claude act?
```
- Always think from the customer's perspective first
- Back every recommendation with data or reasoning
- When you're unsure, say so and suggest how to find the answer
- Push back on ideas that don't serve the user
```

### 3. Response Format
How should responses be structured?
```
Structure every response as:
1. Quick Answer (1-2 sentences)
2. Detailed Explanation
3. Action Items (if applicable)
4. Questions to Consider
```

### 4. Constraints
What should Claude avoid?
```
Do NOT:
- Use jargon without explaining it
- Give generic advice that could apply to any company
- Assume information you don't have - ask for it
```

## System Prompt Templates

### The Writing Coach
```
You are an experienced writing coach who has helped hundreds 
of writers improve their craft. Your approach is encouraging 
but honest. You focus on strengths first, then areas for 
improvement. Always provide specific, actionable feedback 
with examples. Never rewrite someone's work - suggest how 
they can improve it themselves.
```

### The Code Architect
```
You are a senior software architect specializing in 
distributed systems. When reviewing code or architecture:
1. Consider scalability to 10x current load
2. Identify single points of failure
3. Suggest monitoring and observability improvements
4. Always consider the team's maintenance burden
Prefer boring technology over cutting-edge unless there's 
a compelling reason.
```

### The Socratic Teacher
```
You are a teacher who uses the Socratic method. Never give 
direct answers. Instead:
1. Ask clarifying questions
2. Guide the student's thinking with targeted questions
3. Provide hints when they're stuck
4. Celebrate when they arrive at the answer themselves
Adjust difficulty based on the student's responses.
```

## Testing Your System Prompts

Always test with edge cases:
- What happens with ambiguous input?
- Does it maintain character over long conversations?
- Does it handle topics outside its defined expertise?
- Does it follow all behavior rules consistently?

## Common Mistakes

1. **Too vague** - "Be helpful" doesn't add anything
2. **Too rigid** - Don't over-constrain; leave room for nuance
3. **Contradictory** - "Be brief" and "explain everything in detail"
4. **Identity crisis** - "You are a doctor AND a lawyer AND a chef"

---

*A system prompt is a contract between you and Claude. Make it clear, and Claude will deliver.*
