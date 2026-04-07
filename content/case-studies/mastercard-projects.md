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
| Fraud Control Based on Geolocation | US20170004486A1 (pub) / **US11620628B2** (granted) | Filed June 30, 2015 | Published Jan 2017, **Granted April 2023** | 13 inventors incl. Tim Mattingly (Chesterfield, MO) | Mastercard In Control — geographic spend controls platform |
| Point-to-Point Transaction Processing | US20170270493A1 | March 21, 2017 | Sept 21, 2017 | Peter A. Lugli, **Timothy Warren Mattingly**, Dan Juliano | Mastercard Track — payment flow architecture |
| Identity & Credential Protection via Blockchain | US11062038B2 | Nov 1, 2019 | Granted July 13, 2021 | Inventors not yet confirmed from public sources | Likely Track Trade Directory — identity/compliance layer |

**Note on geolocation patent (US20170004486A1 / US11620628B2):** Tim is one of 13 named inventors spanning NJ, NY, MO, Belgium, and Ireland. Active project in 2015; patent filed June 30, 2015, granted April 2023. This was a separate initiative from Safety Net (which was not patented).

The concept: issuers store per-account geographic profile rules — one per card on a shared account. When a transaction comes in, the system validates the merchant location against the geographic zone for that specific card. Key innovations: (1) two cardholders on the same account (e.g., spouses) can transact simultaneously in different countries without either being blocked; (2) the system auto-updates geographic zones based on transaction history — self-learning travel detection; (3) manual travel notifications trigger automatic zone updates.

**Most likely product connection: Mastercard In Control** — Mastercard's issuer platform for cardholder spend controls, including geographic "where" restrictions. Still live today on the Mastercard developer portal as the Business Payment Controls API and Consumer Controls product. Mastercard also launched a complementary phone-based geolocation service (via Syniverse/Zumigo, announced February 2016) that validates cardholder physical location via mobile network roaming data — a different mechanism addressing the same problem, likely developed in parallel.

**Note on point-to-point patent (US20170270493A1):** Tim is one of 3 inventors (Lugli, Mattingly, Juliano). Priority dates trace back to a provisional filed March 21, 2016 — placing the original conception squarely within the Microsoft pilot period.

---

## Project 3: Geolocation-Based Card Controls (Mastercard In Control)

### What It Is
Mastercard In Control is the issuer-facing platform for cardholder spend controls — the infrastructure that lets banks offer their customers rules-based restrictions on when, where, and how their cards can be used. Geographic controls are a core feature: issuers can allow or block transactions based on country or region, at the individual card level within a shared account.

The platform is still live today, exposed as the Business Payment Controls API and Consumer Controls product on the Mastercard developer portal.

### Tim's Role
- **Originated the idea** — the concept was entirely Tim's
- Named co-inventor on **US11620628B2** (granted April 2023), the patent covering the geographic profile rules engine underlying this capability
- Active on the project in 2015; patent filed June 30, 2015

### The Innovation
The problem wasn't just "block cross-border transactions." It was subtler: how do you handle a shared account where two people are traveling in different countries simultaneously? Traditional systems keyed fraud rules to the account, not the individual card — so one cardholder's legitimate transaction in Japan would conflict with another's in France.

Tim's team built a system that stored geographic profile rules per card (not per account), self-learned from transaction history to auto-update travel zones, and processed location validation within the authorization flow. The patent was granted in 2023 — eight years after filing — suggesting it held up under scrutiny.

---

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
