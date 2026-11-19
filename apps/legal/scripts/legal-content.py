"""Generate native reading blocks from the reviewed website HTML."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin

LEGAL_ORIGIN = "https://legal.fairhelmsystems.com"
VOID_TAGS = {"br", "hr", "img", "meta", "link", "input", "source", "area", "wbr"}


class Node:
    def __init__(self, tag="", attrs=None):
        self.tag = tag
        self.attrs = dict(attrs or [])
        self.children = []


class Parser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in VOID_TAGS:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                self.stack = self.stack[:index]
                return

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def reading_blocks(root):
    result = []

    def walk(node):
        if isinstance(node, str):
            return
        if node.tag in ("p", "li", "address"):
            spans = []

            def inline(child, url=None):
                if isinstance(child, str):
                    if child:
                        spans.append({"text": child, **({"url": url} if url else {})})
                    return
                if child.tag == "br":
                    spans.append({"text": "\n"})
                    return
                if child.tag == "a":
                    url = urljoin(LEGAL_ORIGIN, child.attrs.get("href", ""))
                for item in child.children:
                    inline(item, url)
                    if (child.tag == "address" and not isinstance(item, str)
                            and "block" in item.attrs.get("class", "").split()):
                        spans.append({"text": "\n"})

            inline(node)
            value = "".join(span["text"] for span in spans)
            if value.strip():
                result.append({"type": "listItem" if node.tag == "li" else "paragraph",
                               "text": value, "spans": spans})
            return
        for child in node.children:
            walk(child)

    walk(root)
    return result


root = Path(__file__).resolve().parent.parent
source = root / "src/content/squarecampus-legal.json"
output = root / "public/squarecampus/legal-content.json"
content = json.loads(source.read_text())
for document in content["documents"].values():
    for section in document["sections"]:
        parser = Parser()
        parser.feed(section["html"])
        section["blocks"] = reading_blocks(parser.root)
output.parent.mkdir(parents=True, exist_ok=True)
output.write_text(json.dumps(content, ensure_ascii=False, indent=2) + "\n")
print("Generated the SquareCampus legal reading feed.")
