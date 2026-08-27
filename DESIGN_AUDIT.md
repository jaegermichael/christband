# ChristBand design read and flyer audit

## Design read

Reading this as: a trust-first Christian community platform launch site for Zimbabwean believers, churches, pastors, ministries, and Christian businesses, with a warm, celebratory, editorial language built from the supplied ChristBand launch flyer.

The redesign keeps the flyer’s distinctive visual ingredients: deep aubergine, royal purple, sunrise gold, warm parchment, the cross as a typographic signal, and an African church-community sense of place. It avoids turning the flyer into a literal poster on the page. The site should feel like a living platform rather than a static announcement.

## Design dials

- Design variance: 8. Intentional asymmetry and editorial composition, while keeping public-service trust cues.
- Motion intensity: 4. Short, purposeful hover and reveal states only, with reduced-motion support.
- Visual density: 4. A clear launch story, then direct routes into the platform sections.

## Token direction

- Midnight aubergine: `#160B25`
- Royal purple: `#3C165C`
- ChristBand purple: `#6D2DA8`
- Sunrise gold: `#F2B544`
- Parchment: `#F6E8C8`
- Cloud: `#FFF9EF`
- Ink: `#24172D`

Typography pairs Fraunces for the occasional editorial/display moment with Geist for readable interface copy and controls. The single signature element is a gold cross running through the ChristBand wordmark and echoed as a small light-ray motif in the hero.

## Flyer-to-site coverage audit

| Flyer promise | Existing website coverage | Planned treatment | Status |
| --- | --- | --- | --- |
| Churches | `/churches`, homepage directory card | Keep and make the route prominent in the hero and platform map | Covered |
| Pastors & ministries | `/pastors`, `/organisations` | Keep both routes and label the grouping clearly | Covered |
| Sermons | `/gospel` | Keep as Gospel Music / media route; add explicit sermon language in homepage copy where truthful | Partially covered |
| Prayer requests | `/prayer` | Keep route; improve the public/private intent copy and test form state | Covered, form is currently non-persistent |
| Events | `/events` | Keep route and homepage entry point | Covered |
| Christian businesses | `/businesses` | Keep route and advert anchor; wire advert CTA behavior | Covered, CTA gap |
| Christian Store | `/shop`, `/cart` | Keep shop route and audit cart links | Covered |
| Online community / membership | `/membership` | Keep registration flow and preserve API submission | Covered |
| Subscriptions | `/subscriptions` | Keep plan route; avoid implying payment is live unless it is | Covered, mostly static |
| Contact channels | `/contact`, global tel/mail links | Align with official flyer contact details where no verified replacement is provided | Partially covered |
| Privacy / trust | `/privacy`, `/terms` | Replace short placeholder with the supplied full policy and link it in the footer | Needs implementation |
| Zimbabwe focus | Homepage copy and Harare contact | Make Zimbabwe and unity the visual/content throughline | Covered |

## Functional risks identified before implementation

1. `components/hero.tsx` uses `Link` but does not import it. The current build happened to compile, but this should be corrected explicitly.
2. The privacy page uses `Footer` without an import in the visible source and contains only a short placeholder policy.
3. The homepage advert rail routes to `/businesses#adverts`, but advert cards contain non-functional buttons.
4. The prayer form prevents default submission and does not persist or confirm requests.
5. Events and subscription controls are presentational; they should not be presented as live filtering or payment flows.
6. The footer social links point to generic provider homepages rather than verified ChristBand profiles, so they should be labeled as placeholders or kept conservative.
7. The flyer says `CHRISTBAND`, while the repository and current UI use `Christbrand`. The redesign should use `ChristBand` consistently in visible brand copy while preserving route compatibility.
