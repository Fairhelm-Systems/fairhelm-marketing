import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How SquareCampus handles institutional records and website enquiries, who decides how data is used, and how to make a privacy request.",
  path: "/squarecampus/privacy-policy",
  ogDescription:
    "Understand how SquareCampus handles institutional data and where students, guardians and schools can raise a privacy request.",
});

export default function TOCLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
