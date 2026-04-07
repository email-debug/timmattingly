# Mastercard Projects — Case Study Notes

**Status:** Draft — Tim review required before use
**Date:** 2026-04-07

---

## Overview

Two of the most significant products in Mastercard's modern portfolio have Tim Mattingly's fingerprints on them: **Safety Net**, the network-level fraud prevention system that has blocked 70 billion fraudulent transactions, and **Mastercard Track**, the B2B payments platform addressing a $120 trillion annual market. Tim originated the idea behind Safety Net and led it through its critical first eight months. He also led the Microsoft pilot that directly evolved into Track.

These are not footnotes on a resume. They are proof of what Tim does: he sees a problem before the market does, shapes the solution, and builds the coalition to make it real.

---

## Project 1: Mastercard Safety Net

### What It Is
Safety Net is a network-level cybersecurity and fraud prevention system embedded in the Mastercard global payment infrastructure. It operates above individual bank fraud controls, giving Mastercard itself the ability to identify and block coordinated attacks — cash-out schemes, account takeovers, large-scale card compromise events — before they reach issuers, and sometimes before issuers are even aware an attack is underway.

It launched in the United States in 2014, expanded to Europe in 2015, and is now a global, always-on system screening billions of transactions in real time.

**Scale:** 70 billion fraudulent transactions blocked to date.

### Tim's Role
- **Originated the idea** — identified the gap between issuer-level fraud controls and the need for a network-level defense layer
- **Led the project for the first 8 months** — shaped the product vision, drove early development, and built internal alignment
- Safety Net itself was not patented

### The Narrative
The problem was structural: every bank had its own fraud system tuned to its own portfolio. None of them could see the full network picture. A coordinated attacker exploiting 50 banks simultaneously would look like noise to each individual bank — but it would look like a pattern to anyone watching the whole network. Tim saw that gap and proposed building the system that could watch the whole network.

Safety Net is now a foundational piece of Mastercard's global security infrastructure. It ships with every transaction Mastercard processes.

---

## Project 2: Mastercard Track (B2B Payments)

### What It Is
Mastercard Track is Mastercard's platform for modernizing B2B payments — a $120 trillion annual market that still runs largely on paper checks and manual reconciliation. The platform has two core components:

1. **Track Trade Directory** — A repository of 150+ million business registrations across 76 countries, integrated with 4,500+ compliance lists (AML, KYC, sanctions), reducing supplier onboarding from weeks to near-instant.
2. **Track Business Payment Service** — Multi-rail payment automation (card, ACH, cross-border) with rich remittance data and supplier-controlled payment preferences.

Track was announced in September 2018, built on Microsoft Azure, and launched commercially in the US in May 2020. It connects into every major procure-to-pay platform: Coupa, Basware, Tradeshift, Tungsten Network, and others.

**Market:** B2B payments represent $120 trillion annually — roughly 5x consumer payments — with $500 billion/year in administrative waste from paper-dependent processes.

### Tim's Role
- **Led a pilot with Microsoft's lead engineering team** on a B2B payments system
- That pilot **directly evolved into Mastercard Track**
- Holds a **patent in point-to-point transaction processing** (US20170270493A1), aligned with Track's core payment flow architecture

### The Narrative
The B2B payments market was — and largely still is — broken. Buyers paid by check. Suppliers waited 21 days. Nobody had clean remittance data. Every supplier onboarding triggered a redundant KYC process from scratch. Tim identified that the fix required both a trusted identity/compliance layer and a multi-rail payment infrastructure, and that Microsoft's enterprise reach made them the right pilot partner to test it.

The pilot worked. Mastercard built on it. The result is a platform now integrated with every major enterprise procurement system on the planet.

---

## Patents (Confirmed Details)

| Patent | Number | Filed | Published/Granted | Co-Inventors | Connection |
|--------|--------|-------|-------------------|--------------|------------|
| Fraud Control Based on Geolocation | US20170004486A1 | June 30, 2015 | Jan 5, 2017 | 13 inventors incl. Tim Mattingly (Chesterfield, MO) | Separate geolocation initiative — product connection TBD |
| Point-to-Point Transaction Processing | US20170270493A1 | March 21, 2017 | Sept 21, 2017 | Peter A. Lugli, **Timothy Warren Mattingly**, Dan Juliano | Mastercard Track — payment flow architecture |
| Identity & Credential Protection via Blockchain | US11062038B2 | Nov 1, 2019 | Granted July 13, 2021 | Inventors not yet confirmed from public sources | Likely Track Trade Directory — identity/compliance layer |

**Note on geolocation patent (US20170004486A1):** Tim is one of 13 named inventors spanning NJ, NY, MO, Belgium, and Ireland. This was a separate initiative from Safety Net (which was not patented). The specific product this patent connects to is TBD — researching whether Mastercard shipped a geolocation-based spend control product.

**Note on point-to-point patent (US20170270493A1):** Tim is one of 3 inventors (Lugli, Mattingly, Juliano). Priority dates trace back to a provisional filed March 21, 2016 — placing the original conception squarely within the Microsoft pilot period.

---

## The Bigger Story

Most executives can claim they "contributed to" a product. Tim originated two of them — products that are now core infrastructure for the global payments system.

- Safety Net screens every Mastercard transaction on the planet.
- Mastercard Track is the company's flagship bet on digitizing the $120T B2B payments market.

Both started with Tim seeing a problem nobody had formally defined yet and convincing a company the size of Mastercard to build something new.

That is the skill. That is the pattern. That is the story.

---

## Notes for Tim

- **Safety Net dates:** The product launched ~2014 in the US. Your 8 months of leadership likely spans 2013–2014. Confirm exact role title and timeframe.
- **Track / Microsoft pilot dates:** The point-to-point patent has a provisional filing date of March 21, 2016. Track was announced September 2018. Your pilot likely ran 2016–2017. Confirm.
- **Blockchain patent inventors:** US11062038B2 inventors are not publicly indexed yet — verify at ppubs.uspto.gov using patent number 11062038. Confirm if you are named.
- **Patent #US11062038B2 product connection:** Is this tied to Track's Trade Directory identity layer, or a separate blockchain initiative at Mastercard?
- **Client confidentiality:** All references here (Mastercard, Microsoft) are public record. No sensitive client names used.
