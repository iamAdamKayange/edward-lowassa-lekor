import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Downloads | Edward Lowassa",
  description: "Download Edward Lowassa’s CV and official campaign documents for the 2026/27 PST election.",
};

const documents = [
  { number: "01", title: "Curriculum Vitae (CV)", description: "Education, professional experience and community service.", file: "/documents/lowassa-edward-lekor-lormuje-cv.pdf", status: "Available", available: true },
  { number: "02", title: "Campaign Manifesto", description: "Edward Lowassa’s vision and priorities for PST.", file: "/documents/lowassa-manifesto-2026-2027.pdf", status: "Available", available: true },
  { number: "03", title: "Leadership Action Plan", description: "A practical plan for advancing the campaign agenda.", file: "", status: "Coming soon", available: false },
  { number: "04", title: "Additional Campaign Documents", description: "More campaign resources will be added here.", file: "", status: "Coming soon", available: false },
];

export default function DownloadsPage() {
  return (
    <main className="downloads-page">
      <header className="header">
        <a className="brand" href="/" aria-label="Edward Lowassa campaign home"><img className="pst-logo" src="/images/logo.jpeg" alt="Pharmaceutical Society of Tanzania logo" /><span className="brand-copy"><b>EDWARD LOWASSA</b><small>VICE PRESIDENT CAMPAIGN · 2026/27</small></span></a>
        <nav className="nav downloads-nav"><a href="/#home">Home</a><a href="/#about">Meet Edward</a><a href="/#vision">The Vision</a><a href="/updates/pharmacist-demand">Updates</a><a href="/downloads" aria-current="page">Downloads</a></nav>
        <a className="button download-header-cta" href="/#support">Support the Campaign <span>↗</span></a>
      </header>
      <section className="downloads-hero">
        <div className="section-kicker">EDWARD LOWASSA · PST 2026 / 27</div>
        <h1>Campaign <em>Downloads</em></h1>
        <p>Official campaign documents, priorities and leadership plans from Edward Lowassa.</p>
        <div className="downloads-rule"><span>OFFICIAL CAMPAIGN DOCUMENTS</span><i /></div>
      </section>
      <section className="downloads-grid" aria-label="Campaign documents">
        {documents.map((document) => (
          <article className={document.available ? "document-card available" : "document-card pending"} key={document.number}>
            <div className="document-meta"><span>{document.number} / CAMPAIGN DOCUMENT</span><span className={document.available ? "document-status ready" : "document-status"}>{document.status}</span></div>
            <div className="document-icon" aria-hidden="true"><span>PDF</span><i>↓</i></div>
            <h2>{document.title}</h2>
            <p>{document.description}</p>
            {document.available ? <a className="button button-burgundy" href={document.file} download>Download PDF <span>↓</span></a> : <span className="document-coming">PDF coming soon</span>}
          </article>
        ))}
      </section>
      <div className="downloads-back"><a className="text-link" href="/">← Back to the campaign</a><span>© 2026 EDWARD LOWASSA CAMPAIGN</span></div>
    </main>
  );
}
