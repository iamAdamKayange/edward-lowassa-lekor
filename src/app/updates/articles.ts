export type CampaignArticle = {
  slug: string;
  title: string;
  description: string;
  deck: string;
  category: string;
  readTime: string;
  body: string;
  sources: { title: string; url?: string }[];
};

export const campaignArticles: CampaignArticle[] = [
  {
    slug: "ai-ready-professional-society",
    title: "Beyond Membership Cards: Why Tanzania’s Pharmacists Need an AI-Ready Professional Society",
    description: "How PST can prepare pharmacists for digital healthcare and emerging professional competencies.",
    deck: "Artificial intelligence and digital healthcare are changing pharmacy practice. PST can help Tanzanian pharmacists prepare for that shift and ensure new tools strengthen, rather than weaken, professional care.",
    category: "DIGITAL HEALTH · PROFESSIONAL DEVELOPMENT",
    readTime: "5 MIN READ",
    body: String.raw`
The future of pharmacy will depend on more than the medicines on the shelf. Pharmacists will also need to work confidently with technology, interpret clinical data and adapt as healthcare is delivered in new ways.

Artificial intelligence is already influencing pharmaceutical research, medication management, clinical decision support and healthcare administration. These tools could support better services, but they also raise practical questions: Is the information accurate? Who is responsible when an automated recommendation is wrong? How will patient privacy be protected? And will pharmacists in every region have fair access to the training and technology?

The International Pharmaceutical Federation’s *Global Situation Report on Pharmacy 2025* identifies workforce development, education pathways and digital health innovation as priorities for the profession (FIP, 2025). In January 2026, FIP’s Academic Institutional Membership handbook highlighted future-ready competencies such as artificial intelligence, digital health, interprofessional education and innovation (FIP, 2026).

For Tanzania, the lesson is straightforward: a changing profession needs a professional society that can change with it.

PST’s 2021–2025 strategic-plan draft proposed an online membership management system, stronger professional development and collaboration with training institutions on curriculum reform (PST, 2022). The next step is to turn those ambitions into services members can use and assess.

Imagine one reliable PST platform where members can find continuing education, verified employment opportunities, mentors, professional consultations and relevant updates from across the sector. It would make the Society easier to reach and give members a practical reason to return between annual meetings and renewals.

PST could work with universities, the Pharmacy Council and other competent institutions to advocate for stronger coverage of AI literacy, pharmaceutical data analysis, clinical pharmacy and digital health in education and continuing professional development. This work should be shaped by pharmacists, educators and employers together, so learning reflects the decisions pharmacists actually face at work.

Technology should serve the profession and the people who rely on it. Any AI-supported service needs clear privacy safeguards, human professional oversight and a plan for members with limited connectivity or access to devices. Digital tools should not widen the gap between urban and underserved communities.

The aim is not to adopt technology because it is fashionable. It is to make PST more accessible, responsive and useful to its members. The pharmacist of tomorrow is being shaped today; Tanzania’s professional institutions can help pharmacists take part in that change.
`,
    sources: [
      { title: "International Pharmaceutical Federation. (2025). Global situation report on pharmacy 2025.", url: "https://www.fip.org/news?news=newsitem&newsitem=658" },
      { title: "International Pharmaceutical Federation. (2026, January 21). New FIP AIM handbook aims to strengthen future-ready pharmacy education.", url: "https://www.fip.org/news?news=newsitem&newsitem=684" },
      { title: "Pharmaceutical Society of Tanzania. (2022). Strategic plan 2021–2025 [Draft strategic plan]." },
    ],
  },
  {
    slug: "connecting-pharmacists-to-jobs",
    title: "Tanzania Has Qualified Pharmacists. Why Is Connecting Them to Jobs Still So Difficult?",
    description: "Why qualifications need to be matched with workforce evidence, funded positions and growing sectors.",
    deck: "A pharmacy qualification does not guarantee a job. Better workforce data and stronger links between employers, educators and pharmacists could help close the gap between training and opportunity.",
    category: "CAREER OPPORTUNITY · WORKFORCE",
    readTime: "4 MIN READ",
    body: String.raw`
The world needs more healthcare professionals, yet a qualification does not always lead to employment. For pharmacists in Tanzania, that gap deserves serious attention.

The World Health Organization projects a global shortage of about 11 million health workers by 2030. FIP’s global workforce figures also show a marked difference in pharmacist density: 12.1 pharmacists per 10,000 people in high-income countries compared with 3.8 in low-income countries. These figures describe a wider workforce imbalance; they do not mean every unemployed pharmacist can move abroad and find work. Recruitment budgets, licensing rules and specialist competencies remain real barriers.

In Tanzania, the Ministry of Health reported that pharmaceutical staffing rose from 2.76 to 2.96 personnel per 10,000 people between 2023 and 2024. This measure covers pharmaceutical staff more broadly, not registered pharmacists alone (Ministry of Health, 2025).

The issue is not simply how many graduates are trained. It is whether we know where pharmacists are needed, where funded positions exist and which sectors could make better use of their expertise.

PST could help connect the pieces. A national pharmaceutical employment observatory could collect and publish workforce information with relevant partners. An employer-partnership programme could bring hospitals, manufacturers, research institutions, regulators and digital-health organisations into regular conversations about skills and vacancies. A professional opportunities portal could then share verified openings, training and career information in one place.

These steps would not create jobs by announcement. They could make opportunities easier to identify, show employers where qualified professionals are available, and give policymakers stronger evidence when they plan services and staffing.

Hospitals and community services remain important employers. Pharmaceutical manufacturing, research, regulatory work and digital health also offer pathways worth examining. Better information can help graduates see the requirements for each path and help educators understand where additional preparation is needed.

A professional qualification should open doors. A modern professional society should help its members find them—and make a credible case when too few doors are open.
`,
    sources: [
      { title: "World Health Organization. Health workforce: projected global shortage by 2030.", url: "https://www.who.int/teams/health-workforce/hwf_governance/health-workforce" },
      { title: "International Pharmaceutical Federation. (2025). Global pharmacy workforce: Key statistics.", url: "https://www.fip.org/files/content/getinvolved/wpd2025/WPD_Factsheet_02.pdf" },
      { title: "Ministry of Health, United Republic of Tanzania. (2025). Annual health statistical tables and figures 2024.", url: "https://www.moh.go.tz/storage/app/uploads/public/698/4e8/b7b/6984e8b7b067c606076637.pdf" },
    ],
  },
  {
    slug: "professional-dignity-at-work",
    title: "A Pharmacist’s Licence Should Come With Professional Dignity, Not Workplace Insecurity",
    description: "Why fair working conditions, professional independence and career progression matter for pharmacy.",
    deck: "Employment is only the beginning. Fair conditions, professional independence and a path to progress are part of building a workforce that can serve patients well.",
    category: "WORKPLACE DIGNITY · PROFESSIONAL RIGHTS",
    readTime: "4 MIN READ",
    body: String.raw`
Behind every medicine dispensed safely is a professional carrying significant responsibility. One question deserves more attention: who supports the people responsible for protecting patients?

Job security means more than keeping a position. It includes fair pay, predictable working arrangements, professional recognition, workplace safety and protection from improper interference in professional judgement.

The World Health Organization’s *Global Health and Care Worker Compact Assessment Tool*, published in May 2026, sets out four areas for decent employment: preventing harm, ensuring inclusivity, providing support and safeguarding rights (WHO, 2026). Those principles matter in pharmacy, where workplace pressure can affect both professional ethics and patient safety.

PST already has a constitutional basis for representing these interests. Article 3 of the PST Constitution includes protecting the rights, privileges and interests of the profession among the Society’s objectives (PST, 2021). The practical task is to make that commitment visible in the support members can access.

PST could work with the relevant stakeholders to establish an employment advisory service, strengthen channels for reporting workplace concerns, provide guidance on fair professional engagement and advocate for transparent career progression across public and private employment.

The Society’s role would be professional advocacy, representation and appropriate referrals. It would not replace trade unions, labour authorities, regulators or courts. Clear boundaries would help members understand what support PST can provide and where a concern should be taken next.

PST could also publish an annual overview of employment conditions, career opportunities and recurring professional concerns, using information that is responsibly collected and anonymised. A clear evidence base would make the Society’s advocacy more useful and allow members to see what issues recur over time.

A pharmacist working in fair, safe and professionally supportive conditions is better placed to serve patients and contribute to Tanzania’s health system. Job security is not only an employment benefit; it is part of professional dignity and quality care.
`,
    sources: [
      { title: "Pharmaceutical Society of Tanzania. (2021). The constitution of the Pharmaceutical Society of Tanzania (First amendment)." },
      { title: "World Health Organization. (2026). Global health and care worker compact assessment tool.", url: "https://www.who.int/publications/i/item/9789240118102" },
    ],
  },
];
