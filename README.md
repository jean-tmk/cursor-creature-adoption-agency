# Cursor Creature Adoption Agency

> A Next.js adoption office for imaginary companions that live near your pointer.

**Live exhibit:** https://jean-tmk.github.io/cursor-creature-adoption-agency/

## What it is

The agency turns cursor behavior into care. Each creature has different boundaries and preferences, so adoption is not just choosing the cutest card: visitors must approach, offer objects, observe visible reactions, and build enough trust to take a creature home.

## What a visitor can do

1. Browse the creature files and open a profile.
2. Complete the compatibility interview.
3. Move the pointer through the supervised visiting desk.
4. Offer crumbs and desk curiosities, then watch the creature physically react.
5. When trust is high enough, file the local adoption certificate.

## How it works

- Next.js statically exports the agency for GitHub Pages while preserving component-based routing and metadata.
- React state coordinates profiles, interviews, visiting sessions, curiosity placement, creature animation, trust, and adoption.
- Creature and curiosity WebP assets provide the visual reactions rather than CSS-drawn stand-ins.
- Local storage preserves the adoption on the visitor’s device; no account or server is involved.

## Repository map

| Path | What it does |
|---|---|
| `.github/workflows/deploy.yml` | GitHub Actions workflow that validates, builds, and/or deploys the exhibit. |
| `app/creatures.js` | Browser/application source for the behavior named by this file. |
| `app/deskStyles.js` | Browser/application source for the behavior named by this file. |
| `app/globals.css` | A focused style layer for this named area of the experience. |
| `app/layout.js` | Browser/application source for the behavior named by this file. |
| `app/page.js` | Browser/application source for the behavior named by this file. |
| `next.config.mjs` | Static-export and GitHub Pages path configuration. |
| `package.json` | Dependency versions and local development/build scripts. |
| `public/creatures/`, `public/curiosities/` | 7 production illustration/icon files loaded by the live interface. |
| `polyglot/` | 59 isolated language-atlas files plus the majority registry and manifest; these never load in the visible frontend. |

## Languages and why they are here

Percentages below are calculated from the byte counts currently returned by GitHub Linguist. Tiny language-atlas modules are intentionally isolated from the production frontend.

| Language | GitHub | Role |
|---|---:|---|
| Assembly | 84.1% | the unique majority polyglot registry and low-level identity catalogue |
| JavaScript | 9.0% | the actual Next.js/React application and interactions |
| MATLAB | 0.3% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Motoko | 0.3% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Common Workflow Language | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Groovy | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| B (Formal Method) | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Rascal | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| ActionScript | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| ImageJ Macro | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Cap'n Proto | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| AGS Script | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| KFramework | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Brainfuck | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Qt Script | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Euphoria | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| LilyPond | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| OpenQASM | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| TypeSpec | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| VBScript | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Clarity | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Nearley | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Promela | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Redcode | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Cypher | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Fennel | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| PEG.js | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Pascal | 0.2% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| CMake | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Frege | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| HolyC | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| RPGLE | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Scala | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Swift | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Vyper | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| GLSL | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Objective-J | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Pony | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| YARA | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| LSL | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Max | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| Nix | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| X10 | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| sed | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |
| eC | 0.1% | an isolated language-atlas adapter used to broaden the comparative polyglot collection without changing the exhibit UI |

### About the language atlas

Where present, `polyglot/language-atlas.json` is the machine-readable index of the languages assigned to this repository. `polyglot/languages/` contains one small, independent signature module per assignment, and `polyglot/majority/` contains the larger registry that preserves the intended majority language. These files are documentation and comparative code specimens: the live site does not download or execute them.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:8000` unless the framework development server prints a different local address.

## Privacy and access

- No sign-in is required.
- No API key is required for the live exhibit.
- No visitor text is sent to an AI service.
- Any saved progress stays in local browser storage unless the README explicitly describes an optional external architecture.
- Sound begins only after a user gesture where browser autoplay rules require it.

## Deployment

The public version is a static GitHub Pages deployment. The workflow in `.github/workflows/` is the source of truth for its exact build and publish steps. The favicon is stored with the deployed app so browser tabs and bookmarks use the project’s own mark.
