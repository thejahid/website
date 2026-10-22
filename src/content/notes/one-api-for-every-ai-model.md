---
title: "One API for Every AI Model: How I Built SolspaceAI"
description: "How I designed a shared AI layer at Solspace that routes between OpenAI, Anthropic and Gemini by task, cost and latency, with fallback when a provider fails."
date: 2026-10-05
tags: ["AI", "LLM", "Architecture"]
---

Every product team hits the same wall: the first AI feature hard-codes one provider, the second feature wants a different model, and by the third you have three integrations, three billing surprises and no way to switch when a provider has a bad day.

At Solspace I built **SolspaceAI** to end that pattern with one shared layer that our Craft CMS plugins, internal tools and SaaS products all call.

## One request format, every provider

The core decision was boring on purpose: a single normalized request/response shape. Products describe *what* they want (task type, messages, constraints), never *which* provider. Under the hood, LiteLLM plus our own routing logic translates that into OpenAI, Anthropic or Gemini calls, or a self-hosted model.

That one decision made every later feature cheaper. Adding a model became configuration, not a project.

## Routing by task, cost and latency

Not every request deserves the most expensive model. Summarizing a form submission and drafting long-form content are different jobs, so the router weighs:

- **Task type:** classification and extraction go to fast, cheap models; generation gets the stronger ones.
- **Cost:** per-product budgets and per-request estimates, tracked per API key.
- **Latency:** measured continuously, so "fastest provider" is data, not a guess.

## Fallback is a feature, not an afterthought

Providers fail. Rate limits happen at the worst possible moment. When a call fails or times out, the router retries against the next-best provider automatically. The user inside Craft CMS just sees their content arrive, slightly later.

## Keys are a product boundary

API keys are separated per product, so usage, limits and billing stay attributable. It also means one misbehaving tool can't burn another product's quota.

## The lesson

If you're building more than one AI feature, build the boring layer first: normalized I/O, routing, fallback, key management. The exciting features ship faster *because* the plumbing is dull.
