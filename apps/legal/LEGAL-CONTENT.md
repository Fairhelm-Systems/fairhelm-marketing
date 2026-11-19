# SquareCampus legal content

`src/content/squarecampus-legal.json` is the single editable source for the
canonical web pages and version 1 mobile reading feed. Substantive changes
require legal sign-off. Edit section HTML, titles and navigation labels there.
Preserve section IDs because public links use them. The normal dev and build
commands generate `public/squarecampus/legal-content.json` with plain-text
blocks and inline links from that source before starting Next.js.
