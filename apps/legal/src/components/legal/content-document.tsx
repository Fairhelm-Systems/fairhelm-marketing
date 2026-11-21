import { Separator } from "@fairhelm/ui/components/separator";
import content from "@/content/squarecampus-legal.json";
import { LegalShell } from "@/components/legal/legal-shell";
import { PageSchema } from "@/components/site/page-schema";

const schemaDescriptions = {
  dpa: "How Fairhelm processes institutional records, including instructions, safeguards, incidents, providers and exit arrangements.",
  privacy:
    "How SquareCampus collects, processes, stores and returns institutional and personal data, and the rights available to data principals.",
  terms:
    "The terms governing use of SquareCampus by institutions, including account security, competitor access restrictions and the order form that governs commercial terms.",
};

export function ContentDocument({ kind }: { kind: keyof typeof content.documents }) {
  const document = content.documents[kind];
  const path = new URL(document.canonicalUrl).pathname;
  const current = path.slice("/squarecampus".length);
  const sections = document.sections.filter((section) => section.id !== "legal-disclaimer");
  const disclaimer = document.sections.find((section) => section.id === "legal-disclaimer");
  return (
    <>
      <PageSchema
        name={document.title}
        description={schemaDescriptions[kind]}
        path={path.replace(/\/$/, "")}
      />
      <LegalShell
        title={document.title}
        current={current}
        description={document.description}
        contents={sections.map((section) => ({
          label: section.navigationLabel ?? section.title,
          href: `#${section.id}`,
        }))}
      >
        <div className="space-y-10">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-b border-border pb-10 last:border-0"
            >
              <h2 className="display-3 sm:text-[1.6rem] text-foreground">{section.title}</h2>
              <div
                className="mt-4 flex flex-col gap-4"
                dangerouslySetInnerHTML={{ __html: section.html }}
              />
            </section>
          ))}
        </div>
        {disclaimer && (
          <>
            <Separator className="mt-10" />
            <div dangerouslySetInnerHTML={{ __html: disclaimer.html }} />
          </>
        )}
      </LegalShell>
    </>
  );
}
