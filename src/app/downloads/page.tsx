import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Downloads | Edward Lowassa",
  description: "Download Edward Lowassas CV and official campaign documents for the 2026/27 PST election.",
};

const documents = [
  { number: "01", title: "Curriculum Vitae (CV)", description: "Taarifa za elimu, uzoefu wa kazi na huduma kwa jamii.", file: "/documents/lowassa-edward-lekor-lormuje-cv.pdf", status: "Inapatikana", available: true },
  { number: "02", title: "Campaign Manifesto", description: "Maono na vipaumbele vya Lowassa Lormuje kwa PST.", file: "/documents/lowassa-manifesto-2026-2027.pdf", status: "Inapatikana", available: true },
  { number: "03", title: "Leadership Action Plan", description: "Mpango wa hatua wa kuendeleza ajenda ya kampeni.", file: "", status: "Inakuja", available: false },
  { number: "04", title: "Nyaraka nyingine za kampeni", description: "Nyaraka za ziada zitaongezwa hapa kadri zinavyopatikana.", file: "", status: "Inakuja", available: false },
];

export default function DownloadsPage() {
  return (
    <main className="downloads-page">
      <div className="topline"><span>PHARMACEUTICAL SOCIETY OF TANZANIA</span><span>UCHAGUZI 2026 / 2027</span></div>
      <header className="header">
        <a className="brand" href="/" aria-label="Rudi mwanzo"><img className="pst-logo" src="/images/logo.jpeg" alt="Nembo ya Pharmaceutical Society of Tanzania" /><span className="brand-copy"><b>EDWARD LOWASSA</b><small>VICE PRESIDENT CAMPAIGN · 2026/27</small></span></a>
        <nav className="nav downloads-nav"><a href="/#home">Home</a><a href="/#about">Meet Edward</a><a href="/#vision">The Vision</a><a href="/downloads" aria-current="page">Downloads</a></nav>
        <a className="button download-header-cta" href="/#support">Support the Campaign <span>↗</span></a>
      </header>

      <section className="downloads-hero">
        <div className="section-kicker">LOWASSA EDWARD LEKOR · PST 2026 / 27</div>
        <h1>Campaign <em>Downloads</em></h1>
        <p>Nyaraka rasmi za kampeni, maono na mipango ya uongozi wa Lowassa Lormuje kwa Chama cha Wafamasia Tanzania.</p>
        <div className="downloads-rule"><span>NYARAKA RASMI ZA KAMPENI</span><i /></div>
      </section>

      <section className="downloads-grid" aria-label="Nyaraka za kampeni">
        {documents.map((document) => (
          <article className={document.available ? "document-card available" : "document-card pending"} key={document.number}>
            <div className="document-meta"><span>{document.number} / CAMPAIGN DOCUMENT</span><span className={document.available ? "document-status ready" : "document-status"}>{document.status}</span></div>
            <div className="document-icon" aria-hidden="true"><span>PDF</span><i>↓</i></div>
            <h2>{document.title}</h2>
            <p>{document.description}</p>
            {document.available ? <a className="button button-burgundy" href={document.file} download>Download PDF <span>↓</span></a> : <span className="document-coming">PDF itawekwa hapa</span>}
          </article>
        ))}
      </section>

      <div className="downloads-back"><a className="text-link" href="/">← Rudi kwenye kampeni</a><span>© 2026 LOWASSA EDWARD LEKOR LORMUJE CAMPAIGN</span></div>
    </main>
  );
}
