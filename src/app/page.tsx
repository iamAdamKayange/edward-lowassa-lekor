"use client";

import { useEffect, useState } from "react";

const priorities = [
  { number: "01", icon: "↗", title: "Maendeleo ya taaluma", text: "Kupanua fursa za mafunzo endelevu, ushauri wa kitaaluma na mentorship kwa wafamasia katika hatua tofauti za taaluma." },
  { number: "02", icon: "◎", title: "Ustawi wa wanachama", text: "Kujenga utaratibu wa kusikiliza wanachama na kuunganisha mahitaji yao na huduma na ushiriki ndani ya PST." },
  { number: "03", icon: "✳", title: "Ubora wa huduma", text: "Kukuza majadiliano na ushirikiano kuhusu viwango vya huduma, elimu ya umma na nafasi ya famasia kwenye afya ya jamii." },
  { number: "04", icon: "⌂", title: "Sauti yenye nguvu", text: "Kuimarisha uwakilishi wa wanachama kwa mawasiliano ya wazi na ushirikiano na wadau wa sekta ya afya." },
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function submitPoll(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!choice) return;
    setPollStatus("Hii ni mock tu. Kura haijatumwa wala kuhifadhiwa.");
  }

  function submitPledge(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPledgeStatus("Hii ni mock tu. Hakuna taarifa iliyotumwa wala kuhifadhiwa.");
    setEmail("");
  }

  return (
    <main>
      <div className="topline"><span>PHARMACEUTICAL SOCIETY OF TANZANIA</span><span>KAMPENI YA UCHAGUZI · 2026 / 2027</span></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Kampeni ya Lowassa Edward Lekor Lormuje"><img className="pst-logo" src="/images/logo.jpeg" alt="Nembo ya Pharmaceutical Society of Tanzania" /><span className="brand-copy"><b>EDWARD LOWASSA</b><small>VICE PRESIDENT CAMPAIGN · 2026/27</small></span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Fungua menyu">{menuOpen ? "×" : "☰"}</button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#about" onClick={() => setMenuOpen(false)}>Meet Edward</a><a href="#vision" onClick={() => setMenuOpen(false)}>The Vision</a><a href="#updates" onClick={() => setMenuOpen(false)}>Updates</a><a href="/downloads">Downloads</a>
        </nav>
        <a className="button button-dark header-cta" href="#support">Support the Campaign <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <a className="manifesto-prompt" href="/documents/lowassa-manifesto-2026-2027.pdf" download>Click here to download Lowassa’s Manifesto <span>↓</span></a>
          <p className="eyebrow"><span></span> KAMPENI YA PST · 2026 / 27</p>
          <h1>Edward<br />Lowassa<span className="mobile-title-break"><br /></span> <em>Lekor</em></h1>
          <div className="candidate-role">For Vice President, PST</div>
          <p className="hero-lede">Leadership for a stronger,<br />more united pharmaceutical<br />profession in Tanzania.</p>
          <div className="hero-actions"><a className="button button-green" href="#vision">Explore the Vision <span>↗</span></a><a className="button button-outline" href="#about">Meet Edward</a></div>
          <div className="social-line"><span>@lowassa_eddie</span><i></i><span className="social-icons">𝕏　◎　in　f</span></div>
        </div>
        <div className="hero-visual"><div className="photo-frame"><img src="/images/lowassa-portrait-cutout.png" alt="Edward Lowassa Lekor, mgombea Makamu wa Rais wa Chama cha Wafamasia Tanzania" /></div><div className="photo-caption"><span>UONGOZI · HUDUMA · UMOJA</span><b>Pamoja tujenge mustakabali wa famasia.</b></div><div className="hero-stamp">PST<br /><strong>26/27</strong></div></div>
        <div className="hero-bottom"><span>LOWASSA LORMUJE</span><span>MGOMBEA MAKAMU WA RAIS · PST</span><span>↓</span></div>
      </section>

      <section className="intro section" id="about">
        <div className="section-kicker">01 — MEET EDWARD</div><div className="intro-content"><div className="bio-photo"><img src="/images/lowassa-portrait-cutout.png" alt="Edward Lowassa Lekor akiwa amevalia suti" /><span>SIMANJIRO · MANYARA</span></div><h2>Mfamasia.<br />Mwalimu.<br /><em>Mjenzi wa jamii.</em></h2><div className="intro-text"><p><strong>Lowassa Edward Lekor Lormuje</strong>, anayejulikana pia kama Lowassa Lormuje, ni mfamasia na mjasiriamali wa kijamii kutoka Simanjiro, Mkoa wa Manyara. Alizaliwa takriban mwaka 1994 na ana Shahada ya Famasia kutoka St. John’s University.</p><p>Safari yake ya taaluma ilianzia mafunzo kwa vitendo katika Haydom Lutheran Hospital. Amehudumu kama mkufunzi na Mkuu wa Idara ya Famasia Nkinga College, Mkuu wa Excellent College Arusha Campus, na kwa sasa ni mkufunzi na Afisa Mitihani katika Kuwait College of Health and Allied Sciences, chuo kinachomilikiwa na serikali.</p><p>Kwa Edward, taaluma ya famasia inaenda sambamba na kuwekeza kwa watu na jamii. Ndiyo msingi wa dhamira yake ya kuongoza kwa kusikiliza, kushirikisha wanachama na kuimarisha nafasi ya wafamasia. Kwenye mitandao ya kijamii hutumia majina Lowassa Lekor na Lowassa Lormuje kushiriki taarifa za jamii na juhudi za kuchangisha.</p><a className="button button-outline cv-download" href="/documents/lowassa-edward-lekor-lormuje-cv.pdf" download>Pakua CV (PDF) <span>↓</span></a><a className="text-link" href="#vision">Kutana na maono yake <span>→</span></a></div></div>
        <div className="facts"><div><span>01</span><b>Shahada ya Famasia<br />St. John’s University</b></div><div><span>02</span><b>Elimu na taaluma<br />Mkufunzi · Afisa Mitihani</b></div><div><span>03</span><b>Huduma kwa jamii<br />Mwanzilishi wa mashirika</b></div><div className="facts-note">ASILI YAKE<br /><b>Simanjiro · Manyara</b></div></div>
        <div className="community-story"><div><span>HUDUMA KWA JAMII</span><h3>Kujali. Kuelimisha. Kuwezesha.</h3></div><p>Ameanzisha <strong>Helping Hearts Initiative</strong>, inayosaidia watoto walio katika mazingira magumu kupitia kampeni kama “Tabasamu Tunakujali”, na <strong>Jamii Yangu Begani Community Service</strong>. Takriban mwaka 2021, akiwa Katibu Mkuu wa Elimisha Simanjiro Organization (ESO), alianzisha kampeni ya “Niache Nisome” kuhamasisha elimu katika jamii za wafugaji.</p></div>
      </section>

      <section className="vision section" id="vision"><div className="vision-head"><div><div className="section-kicker">02 — MAONO NA VIPAUMBELE</div><h2>Famasia imara.<br /><em>Wanachama mbele.</em></h2></div><p>Ninagombea nafasi ya Makamu wa Rais wa PST ili tushirikiane kuijenga taasisi inayosikiliza wanachama, kuendeleza taaluma na kuwakilisha famasia kwa nguvu.</p></div><div className="priority-grid">{priorities.map((item) => <article className="priority" key={item.number}><div className="priority-top"><span>{item.number}</span><span className="priority-icon">{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p><a href="#support" aria-label={`Ungana nasi: ${item.title}`}>↗</a></article>)}</div><div className="delivery"><div className="section-kicker">NAMNA NITAKAVYOFANYA KAZI</div><div className="delivery-grid"><article><span>01 / SIKILIZA</span><h3>Fungua mazungumzo</h3><p>Kutafuta maoni ya wanachama kutoka maeneo na hatua mbalimbali za taaluma, na kuweka nafasi ya mazungumzo ya mara kwa mara.</p></article><article><span>02 / SHIRIKISHA</span><h3>Geuza maoni kuwa ajenda</h3><p>Kushirikiana na Rais, viongozi wa PST na wadau kuainisha vipaumbele vinavyotekelezeka katika mafunzo, ustawi na ubora wa huduma.</p></article><article><span>03 / TOA TAARIFA</span><h3>Rudisha mrejesho kwa wanachama</h3><p>Kuwasiliana kuhusu hatua zilizopigwa, changamoto na kazi inayofuata, ili wanachama wafuatilie maendeleo ya vipaumbele vyao.</p></article></div></div></section>

      <section className="poll-section section" id="poll"><div className="poll-copy"><div className="section-kicker">03 — SAUTI YAKO</div><h2>Tuanzie hapa.<br /><em>Tusonge pamoja.</em></h2><p>Ni eneo gani linapaswa kupewa kipaumbele zaidi katika kipindi kijacho cha uongozi wa PST?</p><small>Hii ni demo ya kura ya maoni. Majibu hayaendi kwenye server na hayahifadhiwi.</small></div><form className="poll-card" onSubmit={submitPoll}><div className="poll-card-head"><span>KURA YA MAONI · DEMO</span><span className="live-dot">● DEMO</span></div><h3>Kipaumbele chako ni kipi?</h3>{["Maendeleo ya kitaaluma", "Ustawi na ushiriki wa wanachama", "Ubora wa huduma za famasia", "Sauti na uwakilishi imara"].map((option) => <label className={choice === option ? "poll-option selected" : "poll-option"} key={option}><input type="radio" name="priority" value={option} checked={choice === option} onChange={() => setChoice(option)} /><span>{option}</span><i></i></label>)}<button className="button button-green poll-submit" type="submit">Tuma maoni ya demo <span>→</span></button><p className="form-status" aria-live="polite">{pollStatus}</p></form></section>

      <section className="support section" id="support"><div className="support-seal">EL<span>✳</span></div><div className="support-content"><div className="section-kicker">04 — UNGA NAYE</div><h2>Taaluma yetu.<br /><em>Sauti yetu.</em></h2><p>Jiunge na wanachama wanaotaka kuona famasia yenye umoja na mustakabali wenye fursa zaidi.</p></div><form className="support-form" onSubmit={submitPledge}><label htmlFor="support-email">Barua pepe yako · DEMO</label><div className="input-row"><input id="support-email" type="email" placeholder="jina@mfano.co.tz" value={email} onChange={(e) => setEmail(e.target.value)} required /><button className="button button-cream" type="submit">Ninaunga mkono ↗</button></div><p className="privacy-note">Mock tu: taarifa hazitumwi wala kuhifadhiwa.</p><p className="form-status" aria-live="polite">{pledgeStatus}</p></form></section>

      <section className="updates section" id="updates"><div className="updates-heading"><div><div className="section-kicker">05 — HABARI ZA KAMPENI</div><h2>Safari <em>inaendelea.</em></h2></div><a className="text-link" href="#support">Pata taarifa <span>→</span></a></div><div className="update-card"><div className="update-date">2026 <span>·</span> PST 2026/27</div><div><h3>Maono ya pamoja kwa mustakabali wa famasia</h3><p>Karibu ujifunze kuhusu vipaumbele vya kampeni na kushiriki mawazo yako.</p></div><a href="#vision" aria-label="Soma vipaumbele">↗</a></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><img className="pst-logo" src="/images/logo.jpeg" alt="" /><span className="brand-copy"><b>EDWARD LOWASSA</b><small>VICE PRESIDENT CAMPAIGN · 2026/27</small></span></a><p>Uongozi kwa famasia yenye nguvu na umoja.</p><div className="footer-meta"><a href="/downloads">Downloads</a><span>@lowassa_eddie</span><span>© 2026 Lowassa Edward Lekor Lormuje Campaign</span></div></footer>
    </main>
  );
}
