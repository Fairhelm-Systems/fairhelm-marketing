export type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

import { siteConfig } from "./company";

export const legalNovemberRevisionDate = "21 November 2026";
export const legalUpdated = "10 August 2026";

export const privacySections = [
  {
    id: "data-fiduciary",
    title: "The Data Fiduciary",
    paragraphs: [
      `${siteConfig.legalName} (CIN ${siteConfig.cin}), incorporated in India on ${siteConfig.incorporationDateDisplay} under the Companies Act, 2013 and operating as Fairhelm Systems, is the Data Fiduciary for its website, enquiries and own business records. Its registered office is ${siteConfig.address.full}.`,
      "This notice is written against the Digital Personal Data Protection Act, 2023 (the DPDP Act) and uses its vocabulary: a Data Principal is the individual the data is about, a Data Fiduciary decides why and how the data is processed, and a Data Processor processes it on a Fiduciary's instructions.",
      "Where Fairhelm processes personal data on behalf of a school, trust, or other contracting customer, that customer is the Data Fiduciary and Fairhelm acts as its Data Processor. In that case the customer's own notice governs the Data Principal relationship, and the signed agreement governs Fairhelm's handling.",
    ],
  },
  {
    id: "categories",
    title: "Categories of personal data",
    paragraphs: [
      "The categories below describe website and engagement data. The signed processing schedule identifies the fields actually enabled for a customer. Website data includes delivery, enquiry and anti-abuse information.",
    ],
    bullets: [
      "Technical and delivery data: IP address, user agent, timestamp, requested path, response status, and security signals. Where the enquiry form uses a human check, it can process challenge answers, timing, input method and limited pointer movements for abuse prevention.",
      "Inquiry data: the name, work email, organisation, role, communication preferences and message content a visitor chooses to submit through the contact form or send by email.",
      "Institutional user data: names, contact details, role and authority assignments, and audit records for the staff and administrators authorised to use a deployed system.",
      "Student data: enrolment and identification records, class and section, attendance, assessment and academic records, fee and payment status, and guardian linkage — processed only inside a contracted deployment, on the institution's instructions.",
      "Children's data: much student data belongs to Data Principals under eighteen. Fairhelm treats it as children's personal data under section 9 of the DPDP Act, and the additional restrictions below apply to all of it.",
      "Guardian and parent data: contact details, relationship to the student, consent and authorisation records, and communications.",
    ],
  },
  {
    id: "children-and-students",
    title: "Children's and student data",
    paragraphs: [
      "School deployments may include records about children — anyone under eighteen. When section 9 and the relevant DPDP Rules commence, the institution must verify parental or lawful guardian consent where required. Rule 12 and the Fourth Schedule provide narrowly conditioned exceptions, including specified educational or enrolled-child safety activities of an educational institution. The institution must document any exception for the particular purpose.",
      "In a school deployment the institution holds the relationship with students and guardians, and is responsible for obtaining and recording verifiable parental consent where required. Fairhelm's role is to process what the institution instructs and to make that instruction boundary enforceable in the product.",
    ],
    bullets: [
      "Fairhelm does not sell student, child, or guardian data, and does not share it for advertising or marketing by anyone.",
      "Fairhelm does not commercially profile children, target them with advertising or use school-directed attendance or safety records for independent marketing. Fairhelm runs no advertising technology in its products.",
      "Fairhelm does not use student or child data to train AI models. An institution cannot waive this restriction by approving a general AI feature.",
      "No processing is undertaken that is likely to have a detrimental effect on the well-being of a child.",
      "This public marketing website is directed at institutional decision-makers. It is not intended for children, and students, parents, and schools should not use it to transmit operational records.",
    ],
  },
  {
    id: "purposes",
    title: "Purposes of processing",
    paragraphs: [
      "We use personal data for a specified purpose and retain it while that purpose or an applicable preservation duty continues.",
    ],
    bullets: [
      "Delivering the website reliably, and protecting it against abuse, intrusion, and denial of service.",
      "Responding to an inquiry through team email and enquiry-management systems, assessing a possible engagement and sending optional marketing only when separately requested. Contact the grievance address to withdraw that choice.",
      "Providing, operating, supporting, and securing a contracted product or service for an institution.",
      "Maintaining audit records, access logs, and evidence of authority so institutional decisions stay reviewable.",
      "Meeting accounting, tax, corporate, and other legal obligations that apply to the company.",
    ],
  },
  {
    id: "consent-and-legitimate-uses",
    title: "Consent and legitimate uses",
    paragraphs: [
      "Where Fairhelm is the Data Fiduciary, we identify the purpose and legal authority for each use. As the relevant DPDP provisions commence, we rely on consent or a specific permitted use where its conditions apply. Voluntarily sending an enquiry allows us to use those details to answer it. Optional marketing requires a separate affirmative choice.",
      "Consent given to Fairhelm may be withdrawn at any time, with the same ease as it was given, using the offered consent channel or the grievance contact below. Withdrawal stops further processing for that purpose; it does not undo processing already carried out lawfully, and it does not affect records the company must retain by law.",
      "Fairhelm seeks separate affirmative consent for unrelated purposes. Contact the grievance address for an accessible notice or language assistance. We will offer the statutory language choices when those provisions commence.",
    ],
  },
  {
    id: "retention",
    title: "Retention and erasure",
    paragraphs: [
      "Personal data is erased once the purpose it was collected for is served and no legal requirement keeps it alive, subject to applicable preservation and security-record duties.",
    ],
    bullets: [
      "Website delivery and security logs: kept for delivery, security and any prescribed minimum for applicable ICT logs. Access is restricted and a documented hold may preserve relevant evidence.",
      "Inquiry correspondence: reviewed across enquiry systems, team email and logs. Ask the grievance contact for erasure. A continuing business or legal purpose must justify retention.",
      "Contracted product data, including student and children's data: retained and deleted according to the institution's documented instructions and the signed agreement, subject to technically reasonable backup cycles.",
      "Statutory records: retained for the period the Companies Act, tax law, or other applicable law requires.",
    ],
  },
  {
    id: "sharing-and-processors",
    title: "Sharing, processors, and locations",
    paragraphs: [
      "Fairhelm does not sell personal data. Cloud hosting, content delivery, security, and communications providers may process limited personal data under contract, only to the extent needed to run the website or deliver a contracted service, and never for their own purposes.",
      "Personal data may also be disclosed where disclosure is required by law, court order, or a lawful request from a competent authority, or where it is necessary to establish or defend a legal claim.",
      "Processing location and any residency commitment are architectural and contractual decisions for a specific engagement, and are stated in the signed agreement rather than inferred from this page.",
    ],
  },
  {
    id: "security",
    title: "Security safeguards",
    paragraphs: [
      "Fairhelm applies reasonable security safeguards to prevent a personal data breach, for its own processing and as specified in customer agreements. The product posture is role-based access control, least privilege, tenant separation, encryption in transit, and audit records that make access reviewable after the fact.",
      "Fairhelm alerts its customer without undue delay when it processes affected institutional data. Each party makes any independently required report, including a CERT-In report within six hours of noticing or being informed of a listed incident where applicable. For Fairhelm’s own data, when DPDP Rule 7 applies, Fairhelm will inform affected people and initially notify the Board without delay, then provide details to the Board within 72 hours of awareness unless the Board grants more time.",
      "No safeguard is absolute. Do not send credentials, government identifiers, payment details, health information, or student records in an initial email; a governed transfer method should be agreed first.",
    ],
  },
  {
    id: "rights",
    title: "Your rights as a Data Principal",
    paragraphs: [
      "The following statutory rights apply on commencement and subject to their conditions. You may already send requests to the grievance contact below. Fairhelm will explain its response and any legal restriction.",
    ],
    bullets: [
      "Right to access: a summary of the personal data being processed, the processing activities, and the identities of other Fiduciaries and Processors it has been shared with (section 11).",
      "Right to correction, completion, updating, and erasure of your personal data (section 12).",
      "Right of grievance redressal: a readily available means of raising a complaint with Fairhelm, answered within the period prescribed under the Act, before approaching the Data Protection Board (section 13).",
      "Right to nominate another individual to exercise these rights on your behalf in the event of your death or incapacity (section 14).",
      "Right to withdraw consent at any time, as described above.",
    ],
  },
  {
    id: "grievance-contact",
    title: "Grievance contact",
    paragraphs: [
      `The founder currently handles grievances for Fairhelm. Complaints, rights requests, and questions about this notice should be addressed to the ${siteConfig.grievanceContactName}, at ${siteConfig.grievanceEmail}, or by post to the registered office at ${siteConfig.address.full}.`,
      "Fairhelm may need to verify your identity, and your authority where you are acting for someone else, before acting on a request. We acknowledge receipt and address grievances expeditiously and within one month of receipt, or sooner where applicable law requires.",
      "Once the relevant DPDP complaint provisions commence, you may approach the Data Protection Board of India after exhausting the applicable grievance process. Existing remedies under applicable law remain available.",
      "Where your data is held inside a school or trust deployment, that institution is the Data Fiduciary. Please raise the request with the institution first; Fairhelm will support it as the institution's Processor.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this notice",
    paragraphs: [
      "The November 2025 DPDP notifications provide for phased commencement. As of this revision the main notice, children’s data, breach and individual-rights provisions are scheduled for May 2027. We identify material changes by revision, notify affected people of new purposes and obtain fresh consent where required. Institutional agreements govern processing instructions and preserve individual statutory rights.",
    ],
  },
] satisfies readonly LegalSection[];

export const termsSections = [
  {
    id: "status-and-scope",
    title: "Status and scope",
    paragraphs: [
      `These terms govern ordinary access to the public Fairhelm Systems website. ${siteConfig.legalName} (CIN ${siteConfig.cin}) is the legal entity operating as Fairhelm Systems, incorporated in India on ${siteConfig.incorporationDateDisplay} under the Companies Act, 2013 as a One Person Company, with its registered office at ${siteConfig.address.full}.`,
      "Using this website does not create a customer, partner, employment, fiduciary, or advisory relationship with Fairhelm.",
      "These terms are governed by the laws of India, and the courts at Bangalore, Karnataka have jurisdiction over any dispute arising from ordinary use of the public website. A signed customer agreement governs law and jurisdiction for its own subject matter.",
    ],
  },
  {
    id: "website-purpose",
    title: "Website purpose",
    paragraphs: [
      "This site provides general information about Fairhelm Systems, the SquareCampus product direction, data engineering services, dashboard work, and governed intelligence principles. Public content may be changed, corrected, expanded, or withdrawn without notice.",
    ],
  },
  {
    id: "product-and-service-descriptions",
    title: "Product and service descriptions",
    paragraphs: [
      "Product direction, interface examples, diagrams, operating models, and capability descriptions are illustrative unless confirmed in a signed agreement. Availability, maturity, implementation sequence, service levels, support, price, data location, and control commitments depend on the relevant contract.",
      "For an institutional pilot, the signed order identifies available features, commercial commitments and the applicable product terms and DPA. The website alone does not authorise uploading student records.",
    ],
  },
  {
    id: "permitted-use",
    title: "Permitted use",
    paragraphs: [
      "You may access and share links to public pages for lawful evaluation, research, discussion, and ordinary business communication. Fair use of short excerpts should preserve context, attribution, and any applicable rights.",
    ],
  },
  {
    id: "prohibited-use",
    title: "Prohibited use",
    paragraphs: [
      "Do not attempt unauthorized access, disrupt availability, introduce malicious code, evade security controls, impersonate Fairhelm, misrepresent public content, infringe rights, or scrape at a rate that materially degrades the service.",
      "The Acceptable Use Policy gives a clearer public statement of these boundaries. Contracted systems may impose additional role, security, and usage restrictions.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "The Fairhelm Systems and SquareCampus names, visual identities, site content, software concepts, and original materials are reserved to their applicable owners. Third-party names and marks remain the property of their respective owners.",
      "No licence or transfer of rights is granted except the limited ability to access the public website in accordance with these terms and applicable law.",
    ],
  },
  {
    id: "information-and-advice",
    title: "Information, advice, and third-party links",
    paragraphs: [
      "Public content is general information, not legal, tax, accounting, compliance, security, procurement, or other professional advice. Obtain qualified advice for your circumstances.",
      "Third-party links are provided for context or convenience and do not mean Fairhelm controls, endorses, or warrants the linked service or content.",
    ],
  },
  {
    id: "availability-and-liability",
    title: "Availability and responsibility",
    paragraphs: [
      "The public site may contain errors or become unavailable. To the extent permitted by applicable law, it is provided without implied guarantees and Fairhelm is not responsible for decisions made solely from public marketing content.",
      "Nothing here limits a responsibility that cannot lawfully be limited. A signed customer agreement governs responsibility for a contracted product or service.",
    ],
  },
  {
    id: "agreements-changes-contact",
    title: "Signed agreements, changes, and contact",
    paragraphs: [
      `If these public terms conflict with a signed agreement, the signed agreement controls for its subject matter. Questions may be directed to ${siteConfig.contactEmail}. Material updates will be reflected on this page with a revised date.`,
    ],
  },
] satisfies readonly LegalSection[];

export const refundSections = [
  {
    id: "entity-and-scope",
    title: "Who this policy is from, and what it covers",
    paragraphs: [
      `This cancellation and refund policy is published by ${siteConfig.legalName} (CIN ${siteConfig.cin}, GSTIN ${siteConfig.gstin}), incorporated in India on ${siteConfig.incorporationDateDisplay} under the Companies Act, 2013, with its registered office at ${siteConfig.address.full}.`,
      "Fairhelm sells to institutions under signed agreements: SquareCampus subscriptions, data engineering and dashboard engagements, and implementation or support work. It does not currently operate a self-service checkout, and no purchase can be completed on this website.",
      "This page states the default position. Where a signed order form, subscription agreement, or statement of work sets different cancellation, refund, or termination terms, that signed document controls for its subject matter.",
    ],
  },
  {
    id: "subscriptions",
    title: "Subscription cancellation",
    paragraphs: [
      "Subscription terms run for the period stated in the order form, and renew only as that document provides.",
    ],
    bullets: [
      "A customer may cancel a subscription at any time by written notice to the contact address below, effective at the end of the current paid term.",
      "Fixed-term pilots expire as agreed. For a subscription with an expressly agreed automatic renewal, the notice period in the signed order applies.",
      "Fees already paid for the current term are not refunded on cancellation for convenience, and the service remains available until the term ends.",
      "Where Fairhelm materially fails to provide a contracted service and does not remedy the failure within a reasonable cure period after written notice, the customer may terminate and receive a pro-rata refund of fees paid for the unserved remainder of the term.",
    ],
  },
  {
    id: "services",
    title: "Engagements and professional services",
    paragraphs: [
      "Data engineering, dashboard, implementation, and support engagements are quoted and invoiced against a statement of work.",
    ],
    bullets: [
      "Work billed on a time-and-materials basis is payable for effort delivered up to the effective date of cancellation; unearned advances are refunded.",
      "Milestone-based work is payable for milestones accepted before cancellation. Amounts paid against a milestone that was neither delivered nor accepted are refunded.",
      "Non-recoverable third-party costs already committed on the customer's instruction — licences, cloud commitments, hardware — are not refundable, and are itemised in the final reconciliation.",
      "On termination, Fairhelm returns or deletes customer data as the applicable agreement requires, regardless of any fee dispute.",
    ],
  },
  {
    id: "how-to-request",
    title: "How to request a cancellation or refund",
    paragraphs: [
      `Send a written request from an authorised institutional contact to ${siteConfig.contactEmail}, or by post to the registered office above. Include the institution name, the agreement or invoice reference, the effective date sought, and the reason.`,
      "Fairhelm acknowledges a request within three working days and confirms the outcome, with a reconciliation of amounts due or refundable, within fifteen working days of receiving the information needed to assess it.",
    ],
  },
  {
    id: "how-refunds-are-paid",
    title: "How approved refunds are paid",
    paragraphs: [
      "Approved refunds are paid to the originating bank account or payment instrument used for the original payment, in the currency of the original invoice. Fairhelm does not issue refunds in cash or to a third-party account.",
      "Refunds are initiated within seven working days of approval. The time taken for the amount to reach the account depends on the customer's bank or payment provider.",
      "Refunds are net of applicable taxes and bank charges, and any credit note is issued in accordance with applicable GST rules.",
    ],
  },
  {
    id: "disputes",
    title: "Disputes",
    paragraphs: [
      `A customer who disagrees with a cancellation or refund decision may escalate in writing to ${siteConfig.contactEmail}. Fairhelm will review the decision and respond with reasons.`,
      "This policy is governed by the laws of India, and the courts at Bangalore, Karnataka have jurisdiction, unless the signed agreement provides otherwise.",
    ],
  },
] satisfies readonly LegalSection[];

export const acceptableUseSections = [
  {
    id: "scope",
    title: "Scope",
    paragraphs: [
      "This interim policy states the baseline for using Fairhelm's public website. Contracted products, prototypes, pilots, APIs, and managed services may have additional restrictions documented in their applicable agreements and operating rules.",
    ],
  },
  {
    id: "responsible-use",
    title: "Responsible use",
    paragraphs: [
      "Use the public site for lawful evaluation, research, communication, and reference. Respect technical boundaries, intellectual property, privacy, confidentiality, and the rights of other people and institutions.",
    ],
  },
  {
    id: "prohibited-conduct",
    title: "Prohibited conduct",
    paragraphs: [
      "You must not use the website or any Fairhelm service to facilitate harm, deceive people, violate rights, compromise systems, or bypass institutional governance.",
    ],
    bullets: [
      "Attempting unauthorized access, privilege escalation, security-control evasion, or credential abuse.",
      "Introducing malware, destructive code, abusive traffic, denial-of-service activity, or material interference with availability.",
      "Collecting personal data without lawful authority or sending sensitive school, student, parent, employee, or financial records through an unapproved channel.",
      "Impersonating Fairhelm or another person, misrepresenting product capabilities, or presenting public content out of context in a deceptive way.",
      "Using automation or scraping at a rate that degrades service, defeats controls, or violates applicable law or contractual restrictions.",
    ],
  },
  {
    id: "security-research",
    title: "Security research and reporting",
    paragraphs: [
      `Do not test, exploit, or publish a suspected vulnerability in a way that increases risk to users or systems. Report a concern privately to ${siteConfig.contactEmail} with enough detail for responsible assessment, and do not include live credentials or unnecessary personal data.`,
      "A public report does not create a bug-bounty promise, safe-harbour commitment, or entitlement to access systems beyond the authority you already possess.",
    ],
  },
  {
    id: "customer-responsibilities",
    title: "Customer and authorized-user responsibilities",
    paragraphs: [
      "Where a service is provided under contract, customers are responsible for authorized-user administration, accurate instructions, lawful data collection, appropriate notices, role assignments, credential protection, and timely reporting of misuse. Fairhelm's responsibilities are defined in the signed agreement.",
    ],
  },
  {
    id: "response-and-changes",
    title: "Response and changes",
    paragraphs: [
      "Fairhelm may investigate suspected misuse, restrict access within its authority, preserve relevant evidence, or cooperate with the customer and lawful authorities where appropriate. Contract-specific suspension and termination rights are governed by the signed agreement.",
      "This policy will be formally reviewed as Fairhelm services mature.",
    ],
  },
] satisfies readonly LegalSection[];

export const aiPolicySections = [
  {
    id: "scope-and-status",
    title: "Scope and status",
    paragraphs: [
      "This page describes Fairhelm's public AI and governed-intelligence posture. It is not a claim that every described capability is complete or generally available. Product scope, controls, and responsibilities must be confirmed in the applicable agreement.",
    ],
  },
  {
    id: "aegis-direction",
    title: "AEGIS product direction",
    paragraphs: [
      "AEGIS means Adaptive Enterprise Governance & Intelligence System. It is the governed intelligence direction for SquareCampus: helping authorized people ask operational questions and understand evidence without bypassing the institution's roles, approvals, or accountability.",
    ],
    bullets: [
      "Read-only first.",
      "RBAC-aware and scoped to the requesting user's authority.",
      "Audit-backed and designed to make evidence and reasoning reviewable.",
      "No autonomous writes in the v1 posture.",
    ],
  },
  {
    id: "aegis-and-support-automation",
    title: "AEGIS and support automation",
    paragraphs: [
      "The read-only and no-autonomous-writes v1 posture applies to AEGIS within institutional workflows. Separately, customer-support systems may send disclosed, bounded automated communications under approved rules, with a route for human escalation.",
    ],
  },
  {
    id: "human-oversight",
    title: "Human authority and oversight",
    paragraphs: [
      "AI output can be incomplete, incorrect, or unsuitable for a specific decision. A qualified human remains responsible for reviewing context, exercising judgment, and approving any consequential action.",
      "Fairhelm does not present generated output as a substitute for institutional policy, professional advice, statutory responsibility, or authorized decision-making.",
    ],
  },
  {
    id: "data-and-training",
    title: "Customer data and model training",
    paragraphs: [
      "Fairhelm does not sell student or parent data. Fairhelm does not train models on student or child data. Any proposed training on other customer data requires a separate explicit agreement, a lawful basis and controls for the specific purpose. A customer engagement must define permitted data, purposes, providers, retention, access, and controls.",
    ],
  },
  {
    id: "responsible-design",
    title: "Responsible design principles",
    paragraphs: [
      "Fairhelm's direction is to minimize data, respect role and tenant boundaries, make limitations visible, preserve reviewable records, and test high-risk workflows before expanding capability.",
    ],
    bullets: [
      "Use AI where it reduces responsible decision time, not where it adds theatre.",
      "Prefer bounded assistance over ambiguous autonomy.",
      "Expose uncertainty, source context, and material limits where practical.",
      "Provide a route for human correction, escalation, and governance review.",
    ],
  },
  {
    id: "public-agents-and-crawlers",
    title: "Public AI agents and crawlers",
    paragraphs: [
      "Public agents may use crawlable content subject to the Website Terms, robots instructions, applicable law, and intellectual-property rights. The /ai, /llms.txt, and /llms-full.txt resources identify canonical public context; they do not grant access to non-public systems or customer data.",
    ],
  },
  {
    id: "questions-and-review",
    title: "Questions and review",
    paragraphs: [
      `Questions about the AI posture may be sent to ${siteConfig.contactEmail}. This interim policy will be reviewed as product architecture, providers, applicable rules, and contractual models are finalized.`,
    ],
  },
] satisfies readonly LegalSection[];

export const dataProcessingSections = [
  {
    id: "public-overview",
    title: "Public overview, not a DPA",
    paragraphs: [
      "This page explains Fairhelm's intended approach to contracted data processing. It is not a signed Data Processing Addendum, does not appoint Fairhelm as a processor, and does not create instructions or service obligations by itself.",
      "Before a pilot or production engagement uses personal data, the parties must sign terms covering the actual data flows, roles, locations, providers, risks, safeguards and exit arrangements. SquareCampus orders incorporate the product DPA. Other Fairhelm engagements require their own binding processing terms.",
    ],
  },
  {
    id: "roles-and-instructions",
    title: "Roles and documented instructions",
    paragraphs: [
      "The parties' roles depend on the facts of the engagement. Where Fairhelm processes personal data for a customer, it intends to act only on documented, lawful instructions and for the agreed service purpose. Fairhelm may act in another role for limited business administration or legal obligations where the applicable agreement and law permit.",
    ],
  },
  {
    id: "data-and-people",
    title: "Data and people in scope",
    paragraphs: [
      "The agreement should identify relevant people and data categories rather than rely on a generic list. Depending on the service, these may include institutional contacts, staff, students, parents or guardians, applicants, vendors, operational records, usage events, and support communications.",
      "Sensitive or high-risk data should not be included unless it is necessary, explicitly approved, and protected by controls appropriate to the context.",
    ],
  },
  {
    id: "fairhelm-obligations",
    title: "Fairhelm obligations under contract",
    paragraphs: [
      "A signed agreement may define confidentiality, access control, security measures, assistance, audit information, incident communication, subprocessors, transfer arrangements, return or deletion, and end-of-service handling. The exact obligations must match the service actually delivered.",
      "This public page does not promise a particular certification, data location, deletion period, recovery target, or incident-notification deadline.",
    ],
  },
  {
    id: "customer-responsibilities",
    title: "Customer responsibilities",
    paragraphs: [
      "Customers remain responsible for the lawfulness of their collection and instructions, required notices and permissions, data accuracy, authorized-user administration, role assignments, configuration decisions, and responding to people where the customer holds that responsibility.",
    ],
  },
  {
    id: "subprocessors-and-location",
    title: "Subprocessors and processing locations",
    paragraphs: [
      "Cloud and specialist providers may support a contracted service. The applicable agreement should identify the relevant subprocessors or an update mechanism, the purpose of their processing, and the agreed location or transfer safeguards where required.",
      "For SquareCampus institutional data, the product DPA requires the India-only restriction to be verified for every enabled workflow. The signed agreement sets the locations for other Fairhelm services.",
    ],
  },
  {
    id: "retention-deletion-incidents",
    title: "Retention, deletion, and incidents",
    paragraphs: [
      "Retention and deletion should follow documented customer instructions, service needs, legal requirements, and technically reasonable backup cycles. Incident responsibilities, contacts, investigation cooperation, and notification expectations should be stated in the signed agreement.",
    ],
  },
  {
    id: "request-a-dpa",
    title: "Request engagement-specific terms",
    paragraphs: [
      `Organizations evaluating a pilot or production engagement may contact ${siteConfig.contactEmail} to discuss the actual data flow and the documents required. A final DPA should follow technical discovery rather than precede it with invented assurances.`,
    ],
  },
] satisfies readonly LegalSection[];
