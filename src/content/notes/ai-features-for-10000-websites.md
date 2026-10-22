---
title: "What 10,000+ Websites Taught Me About Shipping AI Features"
description: "Lessons from leading AI work on Craft Freeform, a form builder installed on more than ten thousand sites, and building the Craft CMS AI Assistant."
date: 2026-09-19
tags: ["AI", "Craft CMS", "Product"]
---

Shipping an AI feature to your own app is one thing. Shipping it inside a plugin installed on **10,000+ websites**, each with its own hosting, models and API keys, teaches you different lessons.

## You don't control the environment, so design for variance

Every site has different server limits, PHP versions and provider accounts. The AI Assistant for Craft CMS had to work whether a site used OpenAI, Anthropic or Gemini, and degrade gracefully when a key was missing or a provider timed out. Configuration had to be obvious; errors had to explain themselves in plain language.

## One screen, any model

Users shouldn't need to know which model is "best." The Assistant lets people generate and edit content from one screen while the system (see [SolspaceAI](/notes/one-api-for-every-ai-model)) handles provider differences. The UI stays stable even as models change underneath, and they change constantly.

## Trust is the real feature

Site owners are rightly protective of their content. AI that silently rewrites a page destroys trust; AI that *suggests*, previews and lets you accept or discard builds it. Every generation is a draft until a human says yes.

## Cost surprises kill adoption

A plugin that can quietly generate a huge API bill won't survive contact with real budgets. Predictable behaviour, sensible defaults and per-site keys matter as much as output quality.

## Ship small, learn from real sites

The most valuable feedback didn't come from demos. It came from real editors on real sites. Small releases, watched closely, beat any roadmap written in isolation.
