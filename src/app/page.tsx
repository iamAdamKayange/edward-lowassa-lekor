"use client";

import { useEffect, useState } from "react";

const priorities = [
  { number: "01", icon: "↗", title: "Professional development", text: "Expand continuing education, mentorship and career guidance for pharmacists at every stage." },
  { number: "02", icon: "◎", title: "Member wellbeing", text: "Listen to members and connect their needs with meaningful services and participation in PST." },
  { number: "03", icon: "✳", title: "Quality pharmacy practice", text: "Promote high standards, public education and the contribution of pharmacy to community health." },
  { number: "04", icon: "⌂", title: "A stronger professional voice", text: "Strengthen member representation through open communication and collaboration across health care." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [choice, setChoice] = useState("");
  const [pollStatus, setPollStatus] = useState("");
  const [email, setEmail] = useState("");
  const [pledgeStatus, setPledgeStatus] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".hero-copy, .hero-visual, .section, .priority, .poll-card, .update-card");
    elements.forEach((element) => element.classList.add("reveal-on-view"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function submitPoll(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (choice) setPollStatus("This is a demo. Your response has not been submitted or saved.");
  }
  function submitPledge(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPledgeStatus("This is a demo. Your details have not been submitted or saved.");
    setEmail("");
  }

  return (
    <main>
      <header className="header">
        <a className="brand" href="#home" aria-label="Edward Lowassa campaign home"><img className="pst-logo" src="/images/ell_logo.jpeg" alt="Edward Lowassa campaign logo" /><span className="brand-copy"><b>EDWARD LOWASSA</b><small>VICE PRESIDENT CAMPAIGN · 2026/27</small></span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? "×" : "☰"}</button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#about" onClick={() => setMenuOpen(false)}>Meet Edward</a><a href="#vision" onClick={() => setMenuOpen(false)}>The Vision</a><a href="#updates" onClick={() => setMenuOpen(false)}>Updates</a><a href="/downloads">Downloads</a>
        </nav>
        <a className="button button-dark header-cta" href="#support">Support the Campaign <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <a className="manifesto-prompt" href="/documents/lowassa-manifesto-2026-2027.pdf" download>Click here to download Lowassa’s Manifesto <span>↓</span></a>
          <p className="eyebrow"><span></span> PST ELECTIONS · 2026 / 27</p>
          <h1>Edward<br />Lowassa<span className="mobile-title-break"><br /></span> <em>Lekor</em></h1>
          <div className="candidate-role">Candidate for Vice President, PST</div>
          <p className="hero-lede">Leadership for a stronger,<br />more united pharmacy<br />profession in Tanzania.</p>
          <div className="hero-actions"><a className="button button-green" href="#vision">Explore the Vision <span>↗</span></a><a className="button button-outline" href="#about">Meet Edward</a></div>
          <div className="social-line"><span>@lowassa_eddie</span><i></i><span className="social-icons">𝕏　◎　in　f</span></div>
        </div>
        <div className="hero-visual"><div className="photo-frame"><img src="/images/lowassa-portrait-cutout.png" alt="Edward Lowassa, candidate for Vice President of the Pharmaceutical Society of Tanzania" /></div><div className="photo-caption"><span>LEADERSHIP · SERVICE · UNITY</span><b>Together, building a stronger pharmacy future.</b></div><div className="hero-stamp">PST<br /><strong>26/27</strong></div></div>
        <div className="hero-bottom"><span>EDWARD LOWASSA</span><span>VICE PRESIDENT CANDIDATE · PST</span><span>↓</span></div>
      </section>

      <section className="intro section" id="about">
        <div className="section-kicker">01 — MEET EDWARD</div>
        <div className="intro-content"><div className="bio-photo"><img src="/images/lowassa-portrait-cutout.png" alt="Edward Lowassa in a suit" /><span>SIMANJIRO · MANYARA</span></div><h2>Pharmacist.<br />Educator.<br /><em>Community builder.</em></h2><div className="intro-text"><p><strong>Lowassa Edward Lekor Lormuje</strong>, also known as Lowassa Lormuje, is a Tanzanian pharmacist and social entrepreneur from Simanjiro, Manyara Region. Born around 1994, he holds a Bachelor of Pharmacy degree from St. John’s University.</p><p>He began his career as an intern pharmacist at Haydom Lutheran Hospital. He has served as a tutor and Head of the Pharmacy Department at Nkinga College, Principal of Excellent College Arusha Campus, and currently works as a tutor and Examination Officer at the government-owned Kuwait College of Health and Allied Sciences.</p><p>Edward believes pharmacy goes hand in hand with investing in people and communities. He founded Helping Hearts Initiative, which supports vulnerable children through campaigns such as “Tabasamu Tunakujali,” and Jamii Yangu Begani Community Service. In 2021, he served as Secretary-General of Elimisha Simanjiro Organization and initiated the “Niache Nisome” education campaign.</p><a className="button button-outline cv-download" href="/documents/lowassa-edward-lekor-lormuje-cv.pdf" download>Download CV (PDF) <span>↓</span></a><a className="text-link" href="#vision">Explore his vision <span>→</span></a></div></div>
        <div className="facts"><div><span>01</span><b>Bachelor of Pharmacy<br />St. John’s University</b></div><div><span>02</span><b>Education and practice<br />Tutor · Examination Officer</b></div><div><span>03</span><b>Community service<br />Founder of community initiatives</b></div><div className="facts-note">ORIGIN<br /><b>Simanjiro · Manyara</b></div></div>
        <div className="community-story"><div><span>COMMUNITY SERVICE</span><h3>Care. Educate. Empower.</h3></div><p>Through his community organisations and earlier work with Elimisha Simanjiro Organization, Edward has supported vulnerable children and promoted access to education in pastoralist communities.</p></div>
      </section>

      <section className="vision section" id="vision"><div className="vision-head"><div><div className="section-kicker">02 — VISION AND PRIORITIES</div><h2>A stronger profession.<br /><em>Members first.</em></h2></div><p>I am seeking to serve as PST Vice President so we can build an association that listens to members, advances the profession and represents pharmacy with a stronger voice.</p></div><div className="priority-grid">{priorities.map((item) => <article className="priority" key={item.number}><div className="priority-top"><span>{item.number}</span><span className="priority-icon">{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p><a href="#support" aria-label={`Join us: ${item.title}`}>↗</a></article>)}</div><div className="delivery"><div className="section-kicker">HOW I WILL WORK</div><div className="delivery-grid"><article><span>01 / LISTEN</span><h3>Open the conversation</h3><p>Gather views from members across regions and career stages, with regular opportunities for dialogue.</p></article><article><span>02 / COLLABORATE</span><h3>Turn ideas into priorities</h3><p>Work with the President, PST leaders and partners on practical priorities in training, wellbeing and service quality.</p></article><article><span>03 / REPORT BACK</span><h3>Keep members informed</h3><p>Share progress, challenges and next steps so members can follow the work on their priorities.</p></article></div></div></section>

      <section className="poll-section section" id="poll"><div className="poll-copy"><div className="section-kicker">03 — YOUR VOICE</div><h2>Start the conversation.<br /><em>Move forward together.</em></h2><p>Which area should be the top priority in PST’s next term of leadership?</p><small>This is a demonstration poll. Responses are not sent to a server or stored.</small></div><form className="poll-card" onSubmit={submitPoll}><div className="poll-card-head"><span>MEMBER POLL · DEMO</span><span className="live-dot">● DEMO</span></div><h3>What matters most to you?</h3>{priorities.map((item) => <label className={choice === item.title ? "poll-option selected" : "poll-option"} key={item.number}><input type="radio" name="priority" value={item.title} checked={choice === item.title} onChange={() => setChoice(item.title)} /><span>{item.title}</span><i></i></label>)}<button className="button button-green poll-submit" type="submit">Submit demo response <span>→</span></button><p className="form-status" aria-live="polite">{pollStatus}</p></form></section>

      <section className="support section" id="support"><div className="support-seal">EL<span>✳</span></div><div className="support-content"><div className="section-kicker">04 — GET INVOLVED</div><h2>Our profession.<br /><em>Our voice.</em></h2><p>Join members who want to build a more united pharmacy profession with greater opportunity for the future.</p></div><form className="support-form" onSubmit={submitPledge}><label htmlFor="support-email">Your email · DEMO</label><div className="input-row"><input id="support-email" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required /><button className="button button-cream" type="submit">I support the campaign ↗</button></div><p className="privacy-note">Demo only: details are not sent or stored.</p><p className="form-status" aria-live="polite">{pledgeStatus}</p></form></section>

      <section className="updates section" id="updates"><div className="updates-heading"><div><div className="section-kicker">05 — CAMPAIGN UPDATES</div><h2>Ideas for the <em>profession.</em></h2></div><span className="text-link">Read the latest <span>→</span></span></div><a className="update-card" href="/updates/pharmacist-demand"><div className="update-date">FEATURED ARTICLE <span>·</span> 8 MIN READ</div><div><h3>The World Needs More Pharmacists. Can Tanzania Turn Global Demand into Jobs?</h3><p>How workforce intelligence, stronger partnerships and relevant skills can help Tanzanian pharmacists access opportunity.</p></div><span aria-hidden="true">↗</span></a></section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><img className="pst-logo" src="/images/ell_logo.jpeg" alt="" /><span className="brand-copy"><b>EDWARD LOWASSA</b><small>VICE PRESIDENT CAMPAIGN · 2026/27</small></span></a><p>Leadership for a stronger, more united pharmacy profession.</p><div className="footer-meta"><a href="/downloads">Downloads</a><span>@lowassa_eddie</span><span>© 2026 Edward Lowassa Campaign</span></div></footer>
    </main>
  );
}
