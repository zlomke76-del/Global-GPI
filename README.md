# Global GPI

Global GPI is a dual-pillar technology company focused on **sustainable material systems** and **intelligent AI systems**. The public website brings both areas together under one brand while preserving clear product, governance, and partner boundaries.

**Live site:** https://www.global-gpi.com  
**Location:** Newfoundland, Canada  
**Public brand:** Global GPI

---

## Positioning

Global GPI is organized around two complementary pillars:

### Sustainable Materials

Advanced material platforms intended to improve safety, sustainability, durability, and end-of-life performance.

Current public material areas include:

- **BioSyntar** — biodegradable antibacterial microfilms for food safety and food-contact packaging.
- **PolyVerdia** — moisture-active protection for HVAC and industrial environments.
- **Single-Use Plastics** — performance-oriented biodegradable or recyclable single-use material solutions.
- **PhantomFiber™** — proprietary platform technology delivering embedded antibacterial performance at the material level. PhantomFiber links externally to Neurovia Applied Defense.

### Intelligent Systems

Global GPI also presents AI systems powered by the Moral Clarity AI ecosystem, including:

- **SolaceMed** — intelligent systems for healthcare operations, compliance, and patient outcomes.
- **SolaceLegal** — AI systems for legal workflows, research, compliance, and document intelligence.
- **SolaceTrade** — AI solutions for trade intelligence, risk analysis, valuation, and commercial operations.
- **Veil** — runtime governance for agentic AI.
- **Harmonic** — the governed-execution boundary used to determine whether execution authority is established at the point of consequence.

The site intentionally distinguishes model capability from governed execution. The Harmonic position presented publicly is:

> Models propose. Governance decides. Truth survives.

---

## Harmonic Certified Distribution Partner

Global GPI is presented on the site as a **Harmonic Certified Distribution Partner** of Moral Clarity AI.

The homepage includes:

- the official Harmonic Certified Distribution Partner mark;
- Global GPI partner identity;
- public location in Newfoundland, Canada;
- current standing shown as **ACTIVE**;
- a link to the Moral Clarity AI Certified Distribution Network; and
- a direct Harmonic governance link.

Official certification-mark asset:

```text
public/images/harmonic-certified-distribution-partner-mark.png
```

Current partner-network URL:

```text
https://moralclarity.ai/partners
```

Current Harmonic URL:

```text
https://www.solace-harmonic.com
```

### Credential verification

No individual Harmonic credential ID is hard-coded into this repository.

When the live Global GPI / Charlie credential record is issued by Moral Clarity AI, update the certification CTA so it links directly to the verified credential record rather than only to the general Certified Distribution Network page.

The public badge should only represent current authorized standing. If certification standing is suspended, revoked, or otherwise no longer active, the public presentation should be updated accordingly.

---

## Current Homepage Structure

The homepage is a single visual composition with five major regions:

1. **Hero** — Global GPI logo, headline, and dual-pillar positioning.
2. **Sustainable Materials** — four primary material cards.
3. **Earth / network visual** — animated center video with overlay graphics.
4. **AI Systems** — SolaceMed, SolaceLegal, SolaceTrade, Veil, and Harmonic governance.
5. **Certified Partner strip** — Harmonic certification mark, Global GPI identity, ACTIVE standing, and network link.

The bottom mission statement is:

> MATERIAL SCIENCE. INTELLIGENT SYSTEMS. MEASURABLE IMPACT.

The former **Reality Contact** promotion has been removed and should not be reintroduced unless specifically approved.

---

## Routes

### Public pages

| Route | Purpose |
| --- | --- |
| `/` | Main Global GPI homepage |
| `/contact` | Contact page |
| `/materials/biosyntar` | BioSyntar product page |
| `/materials/polyverdia` | PolyVerdia product page |
| `/materials/single-use-plastics` | Single-Use Plastics product page |
| `/materials/antimicrobial` | Antimicrobial materials page |
| `/materials/filtration` | Filtration systems page |
| `/materials/textiles` | Technical textiles page |
| `/materials/defense` | Defense applications page |
| `/materials/infrastructure` | Infrastructure materials page |
| `/materials/research` | Research pipeline page |

### API route

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/contact` | `POST` | Sends contact-form submissions through Resend |

---

## External Destinations

The site currently links to these external properties:

- Global GPI — `https://www.global-gpi.com/`
- Moral Clarity AI — `https://www.moralclarity.ai/`
- Harmonic — `https://www.solace-harmonic.com`
- Moral Clarity AI Certified Distribution Network — `https://moralclarity.ai/partners`
- SolaceMed — `https://www.solacemed.ai`
- SolaceLegal — `https://www.solacelegal.ai`
- SolaceTrade — `https://www.solacetrade.ai`
- Veil — `https://moralclarity.ai/systems/veil`
- PhantomFiber™ / Neurovia Applied Defense — `https://neuroviaapplieddefense.com/`
- Solace Authority Console — `https://sac.moralclarity.ai/login`
- Solace Kernel — `https://kernel.moralclarity.ai/`

External destinations should remain explicit links rather than copied or embedded representations unless Global GPI has authority to host the underlying material directly.

---

## Technology Stack

- **Next.js** — application framework
- **React** — UI layer
- **TypeScript** — application language
- **Resend** — contact-form email delivery
- **Vercel** — intended production hosting/deployment platform

Current package versions are controlled by `package.json`.

---

## Project Structure

```text
app/
  api/
    contact/
      route.ts              # Resend contact endpoint
  contact/
    page.tsx                # Contact page
  materials/
    antimicrobial/
    biosyntar/
    defense/
    filtration/
    infrastructure/
    polyverdia/
    research/
    single-use-plastics/
    textiles/
  globals.css               # Main site styling and responsive layout
  icon.png
  layout.tsx                # Root layout and site metadata
  page.tsx                  # Main Global GPI homepage

lib/
  site-data.ts              # Shared internal/external card data

public/
  images/                   # Brand, product, background, and certification assets
  video/
    earth_01.mp4            # Homepage center animation
  favicon.png

README.md
GLOBAL_GPI_UPGRADE_NOTES.md
package.json
next.config.mjs
tsconfig.json
```

---

## Important Visual Assets

Primary homepage assets include:

```text
public/images/logo.png
public/images/background_image.png
public/images/overlay_video.png
public/video/earth_01.mp4
```

Material-card assets include:

```text
public/images/biosyntar_hero.png
public/images/polyverdia_hero.png
public/images/single_use_hero.png
public/images/phantomfiber_hero.png
```

AI-system assets include:

```text
public/images/solacemed_hero.png
public/images/solacelegal_hero.png
public/images/solacetrade_hero.png
public/images/veil.png
```

Certification asset:

```text
public/images/harmonic-certified-distribution-partner-mark.png
```

Do not replace the certification mark with a recreated version unless Moral Clarity AI explicitly approves the replacement.

---

## Contact Form

The homepage contact modal submits to:

```text
POST /api/contact
```

The endpoint uses Resend and currently sends inquiries to:

```text
charlie@global-gpi.com
```

The sender identity is configured as:

```text
Global GPI <contact@global-gpi.com>
```

Required fields:

- name
- email
- message

Optional fields:

- company
- phone

### Required environment variable

```bash
RESEND_API_KEY=your_resend_api_key
```

The Resend sender domain must be verified before production email delivery will work reliably.

---

## Local Development

### Requirements

- Node.js compatible with the version of Next.js declared in `package.json`
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
```

### Run the production build locally

```bash
npm start
```

---

## Vercel Deployment

1. Connect the repository to Vercel.
2. Confirm the production branch.
3. Add `RESEND_API_KEY` to the Vercel project environment variables.
4. Confirm that the `global-gpi.com` domain is attached to the correct project.
5. Verify the Resend sender domain for `global-gpi.com`.
6. Run a production deployment.
7. Test the homepage at desktop and mobile widths.
8. Submit the contact form and verify email delivery to Charlie.
9. Test every external product and partner link.
10. Confirm the Harmonic certification strip does not overlap the AI panel or footer band at supported breakpoints.

---

## Brand and Content Rules

### Name

The public company name is:

**Global GPI**

Do not refer to the public company/site as `mcai-materials-site` in customer-facing copy. That name may appear historically or internally in code/package metadata, but it is not the public brand.

### Location

Public-facing location should be written as:

**Newfoundland, Canada**

Use a more specific location only if Global GPI explicitly chooses to publish it.

### Harmonic representation

Global GPI may represent Harmonic only within the current scope of its authorized Certified Distribution Partner standing.

Public copy should avoid inventing or extending claims beyond what Moral Clarity AI has established and authorized. In particular:

- do not represent certification as ownership of Harmonic;
- do not imply Global GPI can alter Harmonic pricing or contractual terms without authorization;
- do not claim regulatory approval or guaranteed legal compliance unless specifically established;
- do not present the certification badge if current standing no longer authorizes its use; and
- keep Harmonic product and governance claims aligned with current Moral Clarity AI materials.

### Materials claims

Material-performance statements should remain tied to the evidence and approved claim surface for each platform. Marketing copy should not silently upgrade research, testing, or development-stage results into broader commercial guarantees.

---

## Content Maintenance

### Update homepage copy

Primary homepage content is in:

```text
app/page.tsx
```

### Update global styling

```text
app/globals.css
```

### Update metadata / SEO

```text
app/layout.tsx
```

Current metadata should identify the site as Global GPI and describe both sustainable materials and governed AI systems.

### Update card/link data

```text
lib/site-data.ts
```

### Update the verified partner link

When the live Global GPI credential exists, replace the general network URL in the homepage certification CTA with the exact MCAI verification URL for the Global GPI / Charlie credential.

---

## Pre-Deployment QA Checklist

Before each production deployment, verify:

- [ ] Public brand reads **Global GPI** everywhere customer-facing.
- [ ] Homepage logo renders correctly.
- [ ] Sustainable Materials cards link correctly.
- [ ] AI Systems cards link correctly.
- [ ] Harmonic governance card links to `solace-harmonic.com`.
- [ ] Harmonic certification badge renders correctly.
- [ ] Certification strip does not overlap adjacent elements.
- [ ] ACTIVE standing is accurate before publication.
- [ ] Credential/network link points to the correct current destination.
- [ ] Reality Contact is not present unless intentionally restored.
- [ ] Earth video autoplays muted and loops correctly.
- [ ] Contact modal opens and closes correctly.
- [ ] Contact form validates required fields.
- [ ] Contact submission reaches `charlie@global-gpi.com`.
- [ ] Resend production domain is verified.
- [ ] Desktop layout is visually balanced.
- [ ] Tablet layout is usable.
- [ ] Mobile layout has no clipping or overlap.
- [ ] Site metadata identifies Global GPI correctly.
- [ ] External links open the intended current properties.
- [ ] No stale or unsupported Harmonic claims have been introduced.

---

## Current Identity Summary

**Company:** Global GPI  
**Location:** Newfoundland, Canada  
**Focus:** Sustainable Materials + Intelligent Systems  
**Harmonic relationship:** Certified Distribution Partner  
**MCAI relationship:** Harmonic distribution and governed-AI ecosystem presentation  
**Website:** https://www.global-gpi.com  

**Mission line:**

> MATERIAL SCIENCE. INTELLIGENT SYSTEMS. MEASURABLE IMPACT.
