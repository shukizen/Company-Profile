# Halaman Detail Layanan Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans after the owner selects an execution method. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give each of the six JCPWebSolutions services a dedicated Indonesian page with an explanation and six relevant website references.

**Architecture:** Keep service page content in one typed catalog, then render each service from a shared App Router dynamic route at `/layanan/[slug]`. Reuse the current site navigation and footer, with their internal links resolving to the correct home-page sections from detail routes.

**Tech Stack:** Next.js 16.4 App Router, TypeScript, React 19, existing CSS and Lucide icons.

**Spec:** `docs/superpowers/specs/2026-11-23-halaman-detail-layanan-design.md`

## Global Constraints

- The project uses Next.js 16 App Router and TypeScript.
- Each service page explains the service and shows exactly six relevant website references.
- New references are inspiration from public sites, not work claimed by JCPWebSolutions.
- Reference cards are text only; do not add screenshot or thumbnail assets.
- New copy is in Bahasa Indonesia, except brand names and terms that need to remain.
- Header and footer links on detail routes point to matching home sections, such as `/#services`.
- Preserve the current service and reference sections on the home page except for changing service card destinations.

## Review Focus

- Unknown slugs must resolve to the framework 404 page.
- Every one of the six service records must have six distinct, relevant reference entries.
- Every reference URL must be a real public site and every summary must match what that site shows.
- Home-page section links in the shared header and footer must also work from detail routes.
- Reference cards must remain readable and keyboard accessible at desktop, tablet, and mobile widths.

## File Map

- Create `lib/services.ts` as the typed source of service copy, slugs, metadata, scope examples, and reference entries.
- Modify `app/page.tsx` to read the service catalog and render a shared footer while leaving the existing home reference carousel intact.
- Modify `components/services-grid.tsx` so service cards link to their detail route.
- Modify `components/site-nav.tsx` to support home-page fragment links and detail-page links back to home sections.
- Create `components/site-footer.tsx` by extracting the current footer markup and supporting home-page fragment links.
- Create `components/service-reference-grid.tsx` to render the six text-only reference cards.
- Create `app/layanan/[slug]/page.tsx` for the detail route, page metadata, static slugs, and 404 handling.
- Modify `app/globals.css` with responsive detail-page and reference-card styles that follow the current brand.

---

### Task 1: Create the service catalog and wire the home cards

**Files:**
- Create: `lib/services.ts`
- Modify: `app/page.tsx`
- Modify: `components/services-grid.tsx`

**Interfaces:**
- `ServiceReference`: `{ name: string; category: string; note: string; href: string }`
- `ServicePageData`: `{ slug: string; title: string; description: string; pageDescription: string; examples: readonly string[]; references: readonly ServiceReference[] }`
- `services: readonly ServicePageData[]`
- `getServiceBySlug(slug: string): ServicePageData | undefined`
- `ServicesGrid` consumes `readonly ServicePageData[]`.

- [ ] Add the six service slugs from the spec and move the existing service title, description, and examples into `lib/services.ts`.
- [ ] Curate exactly six reference entries per service. Reuse existing public references where relevant and add new verified sites to fill gaps. Reuse a site across services only when it fits both; do not duplicate a site within one service.
- [ ] Write each reference note from information visible on its linked site. Keep cards text only.
- [ ] Update `app/page.tsx` to import `services` and leave the existing 20-card carousel unchanged.
- [ ] Change each `ServicesGrid` card destination to `/layanan/${slug}` and keep its existing keyboard focus and accessible link behavior.

**Result:** The home service cards point to stable slugs, and each slug resolves to complete service content with six references.

### Task 2: Share the header and footer across routes

**Files:**
- Modify: `components/site-nav.tsx`
- Create: `components/site-footer.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- `SiteNav` accepts an optional `homePage: boolean` prop, defaulting to `true`.
- `SiteFooter` accepts an optional `homePage: boolean` prop, defaulting to `true`.

- [ ] Add a `homePage` prop to `SiteNav`; use local fragments on the home page and `/#home`, `/#services`, `/#projects`, and `/#contact` on service pages.
- [ ] Extract the current footer markup to `components/site-footer.tsx` without changing its copy or visual structure.
- [ ] Give `SiteFooter` the same `homePage` behavior for its section links.
- [ ] Render `<SiteFooter />` from `app/page.tsx` so the homepage retains its current footer.

**Result:** The same navigation shell works on the home page and service detail pages.

### Task 3: Build the shared service detail route

**Files:**
- Create: `app/layanan/[slug]/page.tsx`
- Create: `components/service-reference-grid.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- `ServiceReferenceGrid` accepts `references: readonly ServiceReference[]` and renders one link card per reference.
- The route page receives `params: Promise<{ slug: string }>` as documented for the installed Next.js version.

- [ ] Add `generateStaticParams()` from the six catalog slugs.
- [ ] Resolve the awaited `slug` with `getServiceBySlug`; call `notFound()` when no service matches.
- [ ] Add `generateMetadata()` using each service's title and `pageDescription`.
- [ ] Render the shared navigation, breadcrumb, service title and description, existing scope examples, WhatsApp consultation link, six reference cards, and shared footer.
- [ ] Build the reference grid from text only: category, site name, a short relevant detail, and an external link using `target="_blank"` and `rel="noreferrer"`.
- [ ] Add responsive CSS for three columns on wide screens, two on tablet, and one on mobile. Preserve visible focus states and use existing brand colors and type.

**Result:** All six service routes render a consistent, Indonesian detail page; invalid slugs show 404.

## Implementation Note

No automated tests are included in this plan. The project instructions say not to add or run tests unless the user asks for testing or verification.
