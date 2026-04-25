// import React, {  useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// /* ─────────────────────────────────────────────
//    GLOBAL STYLES (injected once)
// ───────────────────────────────────────────── */
// const GlobalStyles = () => {
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.textContent = `
//       @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

//       *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//       :root {
//         --ivory:    #f7f3ec;
//         --parchment:#ede8de;
//         --forest:   #1a4433;
//         --moss:     #2d6a4f;
//         --gold:     #b8973a;
//         --gold-lt:  #d4b05a;
//         --ink:      #1c1c1c;
//         --muted:    #6b6456;
//         --border:   #d9d2c5;
//         --serif:    'Cormorant Garamond', Georgia, serif;
//         --sans:     'Jost', sans-serif;
//         --transition: 0.35s cubic-bezier(.4,0,.2,1);
//       }

//       html { scroll-behavior: smooth; }

//       body {
//         font-family: var(--sans);
//         background: var(--ivory);
//         color: var(--ink);
//         font-size: 16px;
//         line-height: 1.6;
//         -webkit-font-smoothing: antialiased;
//       }

//       /* ── NAV ── */
//       .nav {
//         position: fixed; top: 0; left: 0; right: 0; z-index: 100;
//         display: flex; align-items: center; justify-content: space-between;
//         padding: 0 4rem;
//         height: 72px;
//         background: rgba(247,243,236,0.92);
//         backdrop-filter: blur(12px);
//         border-bottom: 1px solid var(--border);
//         transition: box-shadow var(--transition);
//       }
//       .nav-logo {
//         display: flex; align-items: center; gap: 10px;
//         text-decoration: none; color: var(--forest);
//       }
//       .nav-logo-icon {
//         width: 32px; height: 32px;
//         background: var(--forest); border-radius: 50%;
//         display: flex; align-items: center; justify-content: center;
//         color: var(--gold);  font-family: var(--serif); font-size: 18px; font-style: italic;
//       }
//       .nav-logo-text {
//         font-family: var(--serif); font-size: 1.3rem; font-weight: 600; letter-spacing: .02em;
//       }
//       .nav-links { display: flex; gap: 2rem; list-style: none; }
//       .nav-links a {
//         text-decoration: none; color: var(--muted);
//         font-family: var(--sans); font-size: .8rem; font-weight: 500;
//         letter-spacing: .12em; text-transform: uppercase;
//         transition: color var(--transition);
//         position: relative; padding-bottom: 2px;
//       }
//       .nav-links a::after {
//         content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
//         background: var(--gold); transform: scaleX(0); transition: transform var(--transition);
//         transform-origin: left;
//       }
//       .nav-links a:hover { color: var(--forest); }
//       .nav-links a:hover::after { transform: scaleX(1); }
//       .nav-cta {
//         background: var(--forest); color: #fff !important;
//         padding: 10px 22px !important; border-radius: 2px;
//         font-size: .75rem !important; letter-spacing: .14em !important;
//       }
//       .nav-cta::after { display: none !important; }
//       .nav-cta:hover { background: var(--moss); opacity: 1; }

//       /* ── HERO ── */
//       .hero {
//         min-height: 100vh;
//         display: grid; grid-template-columns: 1fr 1fr;
//         align-items: center;
//         padding: 100px 4rem 60px;
//         gap: 4rem;
//         background:
//           radial-gradient(ellipse 60% 80% at 0% 50%, rgba(26,68,51,.06) 0%, transparent 70%),
//           var(--ivory);
//         position: relative; overflow: hidden;
//       }
//       .hero::before {
//         content: 'ॐ';
//         position: absolute; right: -2rem; top: 50%; transform: translateY(-50%);
//         font-size: 28rem; color: rgba(26,68,51,.04);
//         font-family: serif; pointer-events: none; user-select: none;
//         line-height: 1;
//       }
//       .hero-label {
//         display: inline-flex; align-items: center; gap: 8px;
//         font-size: .7rem; letter-spacing: .2em; text-transform: uppercase;
//         color: var(--gold); font-weight: 500; margin-bottom: 1.5rem;
//       }
//       .hero-label span { display: block; width: 28px; height: 1px; background: var(--gold); }
//       .hero-title {
//         font-family: var(--serif); font-size: clamp(2.8rem, 5vw, 4.5rem);
//         font-weight: 300; line-height: 1.1; color: var(--forest);
//         margin-bottom: 1.5rem;
//       }
//       .hero-title em { font-style: italic; color: var(--moss); }
//       .hero-subtitle {
//         font-size: .95rem; color: var(--muted); line-height: 1.8;
//         max-width: 460px; margin-bottom: 2.5rem;
//         font-weight: 300;
//       }
//       .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
//       .btn-primary {
//         background: var(--forest); color: #fff;
//         border: none; cursor: pointer;
//         padding: 14px 32px; font-family: var(--sans);
//         font-size: .78rem; font-weight: 500; letter-spacing: .14em; text-transform: uppercase;
//         border-radius: 2px; text-decoration: none;
//         transition: background var(--transition), transform var(--transition);
//         display: inline-block;
//       }
//       .btn-primary:hover { background: var(--moss); transform: translateY(-1px); }
//       .btn-ghost {
//         background: transparent; color: var(--forest);
//         border: 1px solid var(--border); cursor: pointer;
//         padding: 13px 28px; font-family: var(--sans);
//         font-size: .78rem; font-weight: 500; letter-spacing: .14em; text-transform: uppercase;
//         border-radius: 2px; text-decoration: none;
//         transition: border-color var(--transition), color var(--transition);
//         display: inline-block;
//       }
//       .btn-ghost:hover { border-color: var(--forest); }

//       /* hero image */
//       .hero-visual { position: relative; }
//       .hero-img {
//         width: 100%; aspect-ratio: 4/5; object-fit: cover;
//         border-radius: 4px;
//         box-shadow: 0 32px 80px rgba(26,68,51,.18);
//       }
//       .hero-badge {
//         position: absolute; bottom: -20px; left: -20px;
//         background: var(--gold); color: #fff;
//         padding: 18px 22px; border-radius: 4px;
//         text-align: center; box-shadow: 0 8px 24px rgba(184,151,58,.35);
//       }
//       .hero-badge-num {
//         font-family: var(--serif); font-size: 2rem; font-weight: 600; line-height: 1;
//       }
//       .hero-badge-text {
//         font-size: .68rem; letter-spacing: .12em; text-transform: uppercase;
//         opacity: .9; margin-top: 2px;
//       }

//       /* ── SECTION COMMONS ── */
//       .section { padding: 100px 4rem; }
//       .section-label {
//         font-size: .7rem; letter-spacing: .2em; text-transform: uppercase;
//         color: var(--gold); font-weight: 500; margin-bottom: 1rem;
//         display: flex; align-items: center; gap: 8px;
//       }
//       .section-label span { display: block; width: 28px; height: 1px; background: var(--gold); }
//       .section-title {
//         font-family: var(--serif); font-size: clamp(2rem, 4vw, 3rem);
//         font-weight: 300; color: var(--forest); line-height: 1.15;
//         margin-bottom: 1rem;
//       }
//       .section-subtitle {
//         font-size: .95rem; color: var(--muted); max-width: 560px;
//         font-weight: 300; line-height: 1.8;
//       }
//       .divider { width: 48px; height: 2px; background: var(--gold); margin: 2rem 0; }

//       /* ── WHY US ── */
//       .why-grid {
//         display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
//         background: var(--border); border: 1px solid var(--border);
//         margin-top: 4rem; border-radius: 4px; overflow: hidden;
//       }
//       .why-card {
//         background: var(--ivory); padding: 2.5rem 2rem;
//         transition: background var(--transition);
//       }
//       .why-card:hover { background: var(--parchment); }
//       .why-icon {
//         font-size: 1.8rem; margin-bottom: 1.2rem;
//         display: block;
//       }
//       .why-card h3 {
//         font-family: var(--serif); font-size: 1.2rem; font-weight: 600;
//         color: var(--forest); margin-bottom: .5rem;
//       }
//       .why-card p { font-size: .88rem; color: var(--muted); line-height: 1.7; font-weight: 300; }

//       /* ── SERVICES ── */
//       .services-section { background: var(--forest); color: #fff; }
//       .services-section .section-title { color: #fff; }
//       .services-section .section-subtitle { color: rgba(255,255,255,.6); }
//       .services-section .divider { background: var(--gold-lt); }
//       .services-grid {
//         display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
//         background: rgba(255,255,255,.12);
//         border: 1px solid rgba(255,255,255,.12);
//         margin-top: 3rem; border-radius: 4px; overflow: hidden;
//       }
//       .service-card {
//         background: rgba(255,255,255,.04);
//         padding: 2.5rem 2rem;
//         transition: background var(--transition);
//         position: relative; overflow: hidden;
//       }
//       .service-card::before {
//         content: ''; position: absolute; inset: 0;
//         background: linear-gradient(135deg, rgba(184,151,58,.1) 0%, transparent 60%);
//         opacity: 0; transition: opacity var(--transition);
//       }
//       .service-card:hover { background: rgba(255,255,255,.08); }
//       .service-card:hover::before { opacity: 1; }
//       .service-num {
//         font-family: var(--serif); font-size: .9rem; color: var(--gold-lt);
//         letter-spacing: .1em; margin-bottom: 1rem; display: block;
//       }
//       .service-card h3 {
//         font-family: var(--serif); font-size: 1.4rem; font-weight: 400;
//         color: #fff; margin-bottom: .75rem;
//       }
//       .service-card p { font-size: .85rem; color: rgba(255,255,255,.55); line-height: 1.7; font-weight: 300; }
//       .service-arrow {
//         display: inline-block; margin-top: 1.5rem; color: var(--gold-lt);
//         font-size: .8rem; letter-spacing: .1em; text-transform: uppercase;
//         text-decoration: none;
//         transition: letter-spacing var(--transition);
//       }
//       .service-card:hover .service-arrow { letter-spacing: .18em; }

//       /* ── ABOUT ── */
//       .about-grid {
//         display: grid; grid-template-columns: 1fr 1fr; gap: 6rem;
//         align-items: center;
//       }
//       .about-img-wrap { position: relative; }
//       .about-img {
//         width: 100%; aspect-ratio: 3/4; object-fit: cover;
//         border-radius: 4px;
//       }
//       .about-accent {
//         position: absolute; top: 40px; right: -30px;
//         width: 200px; aspect-ratio: 1;
//         border: 1px solid var(--gold); border-radius: 4px;
//         pointer-events: none;
//       }
//       .about-stats {
//         display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem;
//       }
//       .stat-item { border-left: 2px solid var(--gold); padding-left: 1rem; }
//       .stat-num {
//         font-family: var(--serif); font-size: 2.4rem; font-weight: 300;
//         color: var(--forest); line-height: 1;
//       }
//       .stat-label { font-size: .78rem; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); margin-top: .25rem; }

//       /* ── GALLERY ── */
//       .gallery-section { background: var(--parchment); }
//       .gallery-grid {
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);
//         grid-template-rows: 280px 280px;
//         gap: 12px;
//         margin-top: 3rem;
//       }
//       .gallery-item { overflow: hidden; border-radius: 4px; }
//       .gallery-item:first-child { grid-row: span 2; }
//       .gallery-item img {
//         width: 100%; height: 100%; object-fit: cover;
//         transition: transform .6s cubic-bezier(.4,0,.2,1);
//         display: block;
//       }
//       .gallery-item:hover img { transform: scale(1.04); }

//       /* ── CONTACT ── */
//       .contact-grid {
//         display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem;
//         align-items: start; margin-top: 3rem;
//       }
//       .contact-info-card {
//         background: var(--forest); color: #fff;
//         padding: 2.5rem; border-radius: 4px;
//       }
//       .contact-info-card h3 {
//         font-family: var(--serif); font-size: 1.6rem; font-weight: 300;
//         margin-bottom: 2rem; color: #fff;
//       }
//       .contact-detail {
//         display: flex; align-items: flex-start; gap: 1rem;
//         margin-bottom: 1.5rem;
//       }
//       .contact-detail-icon {
//         width: 36px; height: 36px; flex-shrink: 0;
//         background: rgba(255,255,255,.1); border-radius: 50%;
//         display: flex; align-items: center; justify-content: center;
//         font-size: .9rem;
//       }
//       .contact-detail-label {
//         font-size: .68rem; letter-spacing: .14em; text-transform: uppercase;
//         color: var(--gold-lt); margin-bottom: 2px;
//       }
//       .contact-detail-val { font-size: .9rem; color: rgba(255,255,255,.85); font-weight: 300; }
//       .form-group { margin-bottom: 1.25rem; }
//       .form-label {
//         display: block; font-size: .72rem; letter-spacing: .14em;
//         text-transform: uppercase; color: var(--muted); margin-bottom: .5rem; font-weight: 500;
//       }
//       .form-input {
//         width: 100%; padding: 12px 14px;
//         border: 1px solid var(--border); border-radius: 2px;
//         background: #fff; font-family: var(--sans); font-size: .92rem;
//         color: var(--ink); outline: none;
//         transition: border-color var(--transition);
//       }
//       .form-input:focus { border-color: var(--forest); }
//       .form-textarea { min-height: 120px; resize: vertical; }

//       /* ── FOOTER ── */
//       .footer {
//         background: var(--ink); color: rgba(255,255,255,.5);
//         padding: 3rem 4rem;
//         display: flex; align-items: center; justify-content: space-between;
//       }
//       .footer-brand {
//         font-family: var(--serif); font-size: 1.1rem; color: rgba(255,255,255,.8);
//       }
//       .footer-copy { font-size: .8rem; }

//       /* ── PAGE HERO (inner pages) ── */
//       .page-hero {
//         background: linear-gradient(135deg, var(--forest), #2d6a4f);
//         color: #fff;
//         padding: 140px 4rem 60px;
//         margin-bottom: 0;
//       }
//       .page-hero-label {
//         font-size: .7rem; letter-spacing: .2em; text-transform: uppercase;
//         color: var(--gold-lt); margin-bottom: 1rem;
//         display: flex; align-items: center; gap: 8px;
//       }
//       .page-hero-label span { display: block; width: 28px; height: 1px; background: var(--gold-lt); }
//       .page-hero h1 {
//         font-family: var(--serif); font-size: clamp(2.5rem,5vw,4rem);
//         font-weight: 300; color: #fff;
//       }

//       /* Responsive */
//       @media (max-width: 900px) {
//         .nav { padding: 0 1.5rem; }
//         .hero { grid-template-columns: 1fr; padding: 100px 1.5rem 60px; }
//         .hero::before { display: none; }
//         .about-grid, .contact-grid { grid-template-columns: 1fr; }
//         .why-grid { grid-template-columns: 1fr 1fr; }
//         .services-grid { grid-template-columns: 1fr; }
//         .section { padding: 60px 1.5rem; }
//         .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
//         .gallery-item:first-child { grid-row: auto; }
//         .footer { flex-direction: column; gap: 1rem; text-align: center; }
//       }
//       @media (max-width: 600px) {
//         .nav-links { display: none; }
//         .why-grid { grid-template-columns: 1fr; }
//         .gallery-grid { grid-template-columns: 1fr; }
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);
//   return null;
// };

// /* ─────────────────────────────────────────────
//    NAV
// ───────────────────────────────────────────── */
// const Nav = () => {
//   const location = useLocation();
//   const links = [
//     { to: "/", label: "Home" },
//     { to: "/services", label: "Services" },
//     { to: "/about", label: "About" },
//     { to: "/gallery", label: "Gallery" },
//     { to: "/contact", label: "Contact" },
//   ];
//   return (
//     <nav className="nav">
//       <Link to="/" className="nav-logo">
//         <div className="nav-logo-icon">A</div>
//         <span className="nav-logo-text">AyurVeda Elite</span>
//       </Link>
//       <ul className="nav-links">
//         {links.map(l => (
//           <li key={l.to}>
//             <Link
//               to={l.to}
//               className={l.to === "/contact" ? "nav-cta" : ""}
//               style={location.pathname === l.to ? { color: "var(--forest)" } : {}}
//             >
//               {l.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// /* ─────────────────────────────────────────────
//    FOOTER
// ───────────────────────────────────────────── */
// const Footer = () => (
//   <footer className="footer">
//     <span className="footer-brand">AyurVeda Elite</span>
//     <span className="footer-copy">© 2026 AyurVeda Elite · Taliparamba, Kerala · All rights reserved</span>
//   </footer>
// );

// /* ─────────────────────────────────────────────
//    HOME
// ───────────────────────────────────────────── */
// const Home = () => (
//   <>
//     {/* HERO */}
//     <section className="hero">
//       <div>
//         <div className="hero-label"><span />Premium Ayurvedic Wellness</div>
//         <h1 className="hero-title">
//           Ancient Healing,<br />
//           <em>Timeless Serenity</em>
//         </h1>
//         <p className="hero-subtitle">
//           Authentic Kerala Ayurveda treatments delivered by master therapists,
//           using pure herbs and medicinal oils crafted from centuries-old traditions.
//         </p>
//         <div className="hero-actions">
//           <Link to="/contact" className="btn-primary">Book a Consultation</Link>
//           <Link to="/services" className="btn-ghost">Explore Therapies</Link>
//         </div>
//       </div>
//       <div className="hero-visual">
//         <img
//           className="hero-img"
//           src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop"
//           alt="Ayurvedic massage therapy"
//         />
//         <div className="hero-badge">
//           <div className="hero-badge-num">15+</div>
//           <div className="hero-badge-text">Years of Excellence</div>
//         </div>
//       </div>
//     </section>

//     {/* WHY US */}
//     <section className="section">
//       <div className="section-label"><span />Why Choose Us</div>
//       <h2 className="section-title">A sanctuary built on <em style={{fontFamily:"var(--serif)",fontStyle:"italic"}}>tradition</em></h2>
//       <div className="divider" />
//       <div className="why-grid">
//         {[
//           { icon: "🌿", title: "Expert Therapists", desc: "Our practitioners hold advanced certifications from Kerala's premier Ayurvedic institutions." },
//           { icon: "🫙", title: "Pure Herbal Oils", desc: "Cold-pressed, organic oils prepared fresh with traditional recipes and seasonal herbs." },
//           { icon: "🕗", title: "Open Daily", desc: "We welcome you every day from 9 AM to 8 PM for scheduled and walk-in sessions." },
//           { icon: "✨", title: "Serene Ambience", desc: "A peaceful sanctuary designed to quieten the mind before your therapy even begins." },
//         ].map((c, i) => (
//           <div key={i} className="why-card">
//             <span className="why-icon">{c.icon}</span>
//             <h3>{c.title}</h3>
//             <p>{c.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>

//     {/* SERVICES PREVIEW */}
//     <section className="section services-section">
//       <div className="section-label" style={{color:"var(--gold-lt)"}}>
//         <span style={{background:"var(--gold-lt)"}} />Our Therapies
//       </div>
//       <h2 className="section-title">Signature Treatments</h2>
//       <div className="divider" />
//       <div className="services-grid">
//         {[
//           { name: "Abhyanga", desc: "Full-body synchronised oil massage that calms the nervous system and nourishes every tissue." },
//           { name: "Shirodhara", desc: "A warm oil stream poured in a continuous flow over the forehead — deeply meditative." },
//           { name: "Pain Relief Therapy", desc: "Targeted marma therapy and herbal poultice treatments for chronic pain and joint issues." },
//           { name: "Steam Detox", desc: "Medicated steam chamber therapy that opens channels and flushes accumulated toxins." },
//           { name: "Head Massage", desc: "Scalp and cranial massage with warm oils to relieve tension and promote clarity." },
//           { name: "Couples Therapy", desc: "A shared wellness journey — parallel treatments in our private couples suite." },
//         ].map((s, i) => (
//           <div key={i} className="service-card">
//             <span className="service-num">0{i + 1}</span>
//             <h3>{s.name}</h3>
//             <p>{s.desc}</p>
//             <span className="service-arrow">Learn more →</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   </>
// );

// /* ─────────────────────────────────────────────
//    SERVICES
// ───────────────────────────────────────────── */
// const Services = () => (
//   <>
//     <div className="page-hero">
//       <div className="page-hero-label"><span />Our Offerings</div>
//       <h1>Healing Therapies</h1>
//     </div>
//     <section className="section services-section" style={{paddingTop:"60px"}}>
//       <div className="services-grid">
//         {[
//           { name: "Abhyanga", desc: "Full-body synchronised oil massage using warm medicinal oils that deeply nourish the tissues, calm the nervous system, and restore vitality. Duration: 60 or 90 min." },
//           { name: "Shirodhara", desc: "Warm medicated oil or herbal decoction poured in a continuous stream onto the forehead, inducing a profoundly meditative and relaxing state. Duration: 45 min." },
//           { name: "Pain Relief Therapy", desc: "Customised combination of targeted marma point therapy, herbal poultice (Kizhi), and deep tissue work to address chronic pain and musculoskeletal conditions." },
//           { name: "Steam Detox (Svedana)", desc: "Whole-body medicated steam therapy following an oil massage. Opens channels, loosens accumulated toxins, and prepares the body for deeper healing." },
//           { name: "Head Massage (Shiro Abhyanga)", desc: "Therapeutic scalp and cranial massage with warm herbal oils. Relieves tension headaches, improves sleep quality, and promotes mental clarity." },
//           { name: "Couples Wellness", desc: "Side-by-side therapies in our private suite — choose matching or complementary treatments for a shared journey toward relaxation and renewal." },
//           { name: "Panchakarma Consultation", desc: "A complete Ayurvedic assessment and personalised detoxification programme designed around your Prakriti (body constitution) and health goals." },
//           { name: "Kati Vasti (Back Therapy)", desc: "Warm medicated oil pooled in a dough dam placed on the lower back — highly effective for lumbar issues, sciatica, and spinal stiffness." },
//           { name: "Netra Tarpana (Eye Care)", desc: "Nourishing medicated ghee bath for the eyes that relieves strain, dryness, and fatigue caused by excessive screen use or environmental exposure." },
//         ].map((s, i) => (
//           <div key={i} className="service-card">
//             <span className="service-num">0{i + 1}</span>
//             <h3>{s.name}</h3>
//             <p>{s.desc}</p>
//             <Link to="/contact" className="service-arrow">Book now →</Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   </>
// );

// /* ─────────────────────────────────────────────
//    ABOUT
// ───────────────────────────────────────────── */
// const About = () => (
//   <>
//     <div className="page-hero">
//       <div className="page-hero-label"><span />Our Story</div>
//       <h1>Rooted in Kerala</h1>
//     </div>
//     <section className="section">
//       <div className="about-grid">
//         <div className="about-img-wrap">
//           <img
//             className="about-img"
//             src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
//             alt="Ayurvedic therapist preparing oils"
//           />
//           <div className="about-accent" />
//         </div>
//         <div>
//           <div className="section-label"><span />About AyurVeda Elite</div>
//           <h2 className="section-title">Where tradition meets <em style={{fontStyle:"italic",fontFamily:"var(--serif)"}}>care</em></h2>
//           <div className="divider" />
//           <p style={{color:"var(--muted)", lineHeight:1.9, fontWeight:300, marginBottom:"1.5rem"}}>
//             Founded in the heart of Taliparamba, Kerala — the very cradle of Ayurvedic medicine — AyurVeda Elite was born from a simple conviction: that ancient wisdom, when practiced with integrity and genuine care, can transform lives.
//           </p>
//           <p style={{color:"var(--muted)", lineHeight:1.9, fontWeight:300, marginBottom:"1.5rem"}}>
//             Our therapists are trained at Kerala's most respected Ayurvedic colleges and bring years of clinical experience to every session. We prepare our herbal formulations in-house using ingredients sourced from certified organic farms across the region.
//           </p>
//           <p style={{color:"var(--muted)", lineHeight:1.9, fontWeight:300}}>
//             At AyurVeda Elite, luxury is not an add-on. It is the standard. From the moment you arrive, every detail — the fragrance in the air, the warmth of the oils, the attentiveness of our staff — is designed to let you surrender fully to the healing process.
//           </p>
//           <div className="about-stats">
//             {[
//               { num: "15+", label: "Years of Practice" },
//               { num: "4000+", label: "Clients Served" },
//               { num: "12", label: "Therapists" },
//               { num: "20+", label: "Therapies Offered" },
//             ].map((s, i) => (
//               <div key={i} className="stat-item">
//                 <div className="stat-num">{s.num}</div>
//                 <div className="stat-label">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   </>
// );

// /* ─────────────────────────────────────────────
//    GALLERY
// ───────────────────────────────────────────── */
// const Gallery = () => (
//   <>
//     <div className="page-hero">
//       <div className="page-hero-label"><span />Visual Journey</div>
//       <h1>Our Sanctuary</h1>
//     </div>
//     <section className="section gallery-section">
//       <div className="section-label"><span />Gallery</div>
//       <h2 className="section-title">A glimpse inside</h2>
//       <div className="gallery-grid">
//         {[
//           "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
//         ].map((src, i) => (
//           <div key={i} className="gallery-item">
//             <img src={src} alt={`Gallery image ${i + 1}`} />
//           </div>
//         ))}
//       </div>
//     </section>
//   </>
// );

// /* ─────────────────────────────────────────────
//    CONTACT
// ───────────────────────────────────────────── */
// const Contact = () => (
//   <>
//     <div className="page-hero">
//       <div className="page-hero-label"><span />Reach Out</div>
//       <h1>Book a Session</h1>
//     </div>
//     <section className="section">
//       <div className="contact-grid">
//         <div>
//           <div className="section-label"><span />Find Us</div>
//           <h2 className="section-title">We'd love to hear from you</h2>
//           <div className="divider" />
//           <div className="contact-info-card">
//             <h3>Contact Information</h3>
//             {[
//               { icon: "📞", label: "Phone", val: "+91 99999 99999" },
//               { icon: "📍", label: "Location", val: "Taliparamba, Kerala, India" },
//               { icon: "🕗", label: "Hours", val: "Daily · 9:00 AM – 8:00 PM" },
//               { icon: "✉️", label: "Email", val: "hello@ayurvedaelite.in" },
//             ].map((d, i) => (
//               <div key={i} className="contact-detail">
//                 <div className="contact-detail-icon">{d.icon}</div>
//                 <div>
//                   <div className="contact-detail-label">{d.label}</div>
//                   <div className="contact-detail-val">{d.val}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div>
//           <div className="section-label" style={{marginTop:"3.5rem"}}><span />Enquiry Form</div>
//           <h2 className="section-title" style={{fontSize:"1.8rem"}}>Send us a message</h2>
//           <div style={{marginTop:"2rem"}}>
//             {[
//               { label: "Full Name", type: "text", placeholder: "Your name" },
//               { label: "Phone Number", type: "tel", placeholder: "+91 00000 00000" },
//               { label: "Email Address", type: "email", placeholder: "you@email.com" },
//             ].map((f, i) => (
//               <div key={i} className="form-group">
//                 <label className="form-label">{f.label}</label>
//                 <input className="form-input" type={f.type} placeholder={f.placeholder} />
//               </div>
//             ))}
//             <div className="form-group">
//               <label className="form-label">Select a Therapy</label>
//               <select className="form-input">
//                 <option value="">— Choose a service —</option>
//                 {["Abhyanga","Shirodhara","Pain Relief Therapy","Steam Detox","Head Massage","Couples Therapy"].map(s => (
//                   <option key={s}>{s}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label className="form-label">Message</label>
//               <textarea className="form-input form-textarea" placeholder="Any questions or special requirements…" />
//             </div>
//             <button className="btn-primary" style={{width:"100%", padding:"16px"}}>
//               Send Enquiry
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   </>
// );

// /* ─────────────────────────────────────────────
//    APP
// ───────────────────────────────────────────── */
// export default function App() {
//   return (
//     <Router>
//       <GlobalStyles />
//       <Nav />
//       <main style={{paddingTop: "72px"}}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }