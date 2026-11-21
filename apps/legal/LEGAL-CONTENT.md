# SquareCampus legal content

`src/content/squarecampus-legal.json` is the single editable source for the
SquareCampus Privacy, Terms and DPA web pages and the version 1 mobile reading feed.
The current mobile reader displays Privacy and Terms natively. Their inline DPA links
open the canonical DPA. A revision identifies the wording, independently of the feed schema. Substantive changes
require legal sign-off. Edit section HTML, titles and navigation labels there.
Preserve section IDs because public links use them. The normal dev and build
commands generate `public/squarecampus/legal-content.json` with plain-text
blocks and inline links from that source before starting Next.js.
