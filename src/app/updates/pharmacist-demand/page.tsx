import type { Metadata } from "next";
import { articleMarkdown } from "./article";

export const metadata: Metadata = {
  title: "The World Needs More Pharmacists | Edward Lowassa",
  description: "Can Tanzania turn rising demand for pharmacists into better jobs and stronger professional opportunities?",
};

function toSafeInlineHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

const blocks = articleMarkdown.trim().split(/\r?\n\s*\r?\n/).filter(Boolean);
const paragraphs = blocks.slice(1);

export default function PharmacistDemandArticle() {
  return (
    <main className="article-page">
      <header className="header article-header">
        <a className="brand" href="/" aria-label="Edward Lowassa campaign home"><img className="pst-logo" src="/images/ell_logo.jpeg" alt="Edward Lowassa campaign logo" /><span className="brand-copy"><b>EDWARD LOWASSA</b><small>VICE PRESIDENT CAMPAIGN · 2026/27</small></span></a>
        <nav className="nav"><a href="/">Home</a><a href="/#about">Meet Edward</a><a href="/#vision">The Vision</a><a href="/updates/pharmacist-demand" aria-current="page">Updates</a><a href="/downloads">Downloads</a></nav>
        <a className="button download-header-cta" href="/downloads">Campaign Documents <span>↗</span></a>
      </header>
      <section className="article-hero">
        <a className="article-back" href="/#updates">← All campaign updates</a>
        <div className="article-kicker">PERSPECTIVES <span>·</span> PHARMACY WORKFORCE <span>·</span> TANZANIA</div>
        <h1>{blocks[0]}</h1>
        <p className="article-deck">Global health systems need more pharmacy skills. Tanzania can respond by preparing pharmacists for emerging roles and building clearer pathways from training to secure, meaningful work.</p>
        <div className="article-byline"><span>EDWARD LOWASSA CAMPAIGN</span><i /> <span>8 MIN READ</span></div>
      </section>
      <div className="article-layout">
        <aside className="article-takeaway"><span>THE CENTRAL QUESTION</span><p>How can Tanzania turn workforce need into real career opportunities while strengthening pharmacy services at home?</p><a href="/#vision">Explore the campaign vision <span>→</span></a></aside>
        <article className="article-body">
          {paragraphs.map((block, index) => block.startsWith("## ")
            ? <h2 key={index}>{block.slice(3)}</h2>
            : <p key={index} dangerouslySetInnerHTML={{ __html: toSafeInlineHtml(block) }} />)}
          <section className="article-sources" aria-labelledby="article-sources-title">
            <h2 id="article-sources-title">Sources and further reading</h2>
            <ul>
              <li><a href="https://www.who.int/teams/health-workforce/hwf_governance/health-workforce" target="_blank" rel="noreferrer">World Health Organization — Health workforce</a></li>
              <li><a href="https://www.fip.org/files/content/getinvolved/wpd2025/WPD_Factsheet_02.pdf" target="_blank" rel="noreferrer">International Pharmaceutical Federation — Global Pharmacy Workforce factsheet</a></li>
              <li><a href="https://gh.bmj.com/content/7/Suppl_1/e015972" target="_blank" rel="noreferrer">BMJ Global Health — Projected health workforce requirements in the WHO Africa Region</a></li>
              <li><a href="https://www.moh.go.tz/storage/app/uploads/public/698/337/ef7/698337ef72583788742967.pdf" target="_blank" rel="noreferrer">Tanzania Ministry of Health — Annual Health Sector Performance Profile 2024</a></li>
              <li><a href="https://www.oecd.org/en/publications/health-at-a-glance-2025_8f9e3f98-en/full-report/pharmacists-and-pharmacies_4763efdf.html" target="_blank" rel="noreferrer">OECD — Health at a Glance 2025: Pharmacists and pharmacies</a></li>
              <li><a href="https://www.fip.org/news?news=newsitem&newsitem=735" target="_blank" rel="noreferrer">International Pharmaceutical Federation — Credentialing and professional recognition in pharmacy</a></li>
            </ul>
          </section>
          <div className="article-end"><span>CONTINUE THE CONVERSATION</span><p>Read Edward Lowassa’s priorities for professional development, member wellbeing and a stronger voice for pharmacy.</p><a className="button button-green" href="/#vision">Explore the Vision <span>→</span></a></div>
        </article>
      </div>
      <footer className="footer article-footer"><a className="brand footer-brand" href="/"><img className="pst-logo" src="/images/ell_logo.jpeg" alt="" /><span className="brand-copy"><b>EDWARD LOWASSA</b><small>VICE PRESIDENT CAMPAIGN · 2026/27</small></span></a><p>Leadership for a stronger, more united pharmacy profession.</p><div className="footer-meta"><a href="/downloads">Downloads</a><span>@lowassa_eddie</span><span>© 2026 Edward Lowassa Campaign</span></div></footer>
    </main>
  );
}
