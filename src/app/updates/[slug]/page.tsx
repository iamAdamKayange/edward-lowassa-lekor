import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { campaignArticles } from "../articles";

type RouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return campaignArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = campaignArticles.find((item) => item.slug === slug);
  if (!article) return { title: "Campaign Update | Edward Lowassa" };
  return { title: `${article.title} | Edward Lowassa`, description: article.description };
}

function toSafeInlineHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

export default async function CampaignArticlePage({ params }: RouteProps) {
  const { slug } = await params;
  const article = campaignArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  const blocks = article.body.trim().split(/\r?\n\s*\r?\n/).filter(Boolean);

  return (
    <main className="article-page">
      <header className="header article-header">
        <a className="brand" href="/" aria-label="Edward Lowassa campaign home"><img className="pst-logo" src="/images/ell_logo.jpeg" alt="Edward Lowassa campaign logo" /><span className="brand-copy"><b>EDWARD LOWASSA</b><small>VICE PRESIDENT CAMPAIGN · 2026/27</small></span></a>
        <nav className="nav"><a href="/">Home</a><a href="/#about">Meet Edward</a><a href="/#vision">The Vision</a><a href="/#updates" aria-current="page">Updates</a><a href="/downloads">Downloads</a></nav>
        <a className="button download-header-cta" href="/downloads">Campaign Documents <span>↗</span></a>
      </header>
      <section className="article-hero">
        <a className="article-back" href="/#updates">← All campaign updates</a>
        <div className="article-kicker">{article.category.split(" · ").join("  ·  ")}</div>
        <h1>{article.title}</h1>
        <p className="article-deck">{article.deck}</p>
        <div className="article-byline"><span>EDWARD LOWASSA CAMPAIGN</span><i /> <span>{article.readTime}</span></div>
      </section>
      <div className="article-layout">
        <aside className="article-takeaway"><span>IN THIS ARTICLE</span><p>{article.description}</p><a href="/#vision">Explore the campaign vision <span>→</span></a></aside>
        <article className="article-body">
          {blocks.map((block, index) => block.startsWith("## ")
            ? <h2 key={index}>{block.slice(3)}</h2>
            : <p key={index} dangerouslySetInnerHTML={{ __html: toSafeInlineHtml(block) }} />)}
          <section className="article-sources" aria-labelledby="article-sources-title">
            <h2 id="article-sources-title">References</h2>
            <ol>{article.sources.map((source) => <li key={source.title}>{source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a> : source.title}</li>)}</ol>
          </section>
          <div className="article-end"><span>CONTINUE THE CONVERSATION</span><p>See the priorities Edward Lowassa is proposing for a stronger, more connected pharmacy profession.</p><a className="button button-green" href="/#vision">Explore the Vision <span>→</span></a></div>
        </article>
      </div>
      <footer className="footer article-footer"><a className="brand footer-brand" href="/"><img className="pst-logo" src="/images/ell_logo.jpeg" alt="" /><span className="brand-copy"><b>EDWARD LOWASSA</b><small>VICE PRESIDENT CAMPAIGN · 2026/27</small></span></a><p>Leadership for a stronger, more united pharmacy profession.</p><div className="footer-meta"><a href="/downloads">Downloads</a><span>@lowassa_eddie</span><span>© 2026 Edward Lowassa Campaign</span></div></footer>
    </main>
  );
}
