import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
/* ═══════════════════════════════════════════════════════
   GLOBAL STYLES
═══════════════════════════════════════════════════════ */
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --cream:#faf7f2;
  --parchment:#f2ece0;
  --forest:#163d2b;
  --forest2:#1e5038;
  --moss:#2e7d52;
  --gold:#c9a84c;
  --gold2:#e8c97a;
  --gold3:#f5e4b0;
  --ink:#111;
  --muted:#7a7060;
  --border:rgba(180,160,120,.22);
  --serif:'Playfair Display',Georgia,serif;
  --sans:'DM Sans',sans-serif;
  --ease:.42s cubic-bezier(.4,0,.2,1);
}
html{scroll-behavior:smooth;overflow-x:hidden}
body{font-family:var(--sans);background:var(--cream);color:var(--ink);-webkit-font-smoothing:antialiased;overflow-x:hidden}
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-track{background:var(--parchment)}
::-webkit-scrollbar-thumb{background:var(--gold);border-radius:10px}

/* NAV */
.nav{
  position:fixed;top:0;left:0;right:0;z-index:200;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 3rem;height:68px;
  background:rgba(250,247,242,.96);backdrop-filter:blur(16px);
  border-bottom:1px solid var(--border);
}
.nav-logo{display:flex;align-items:center;gap:11px;text-decoration:none}
.nav-emblem{
  width:36px;height:36px;background:var(--forest);border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--serif);font-style:italic;font-size:17px;color:var(--gold);
  box-shadow:0 2px 12px rgba(22,61,43,.28);
}
.nav-name{font-family:var(--serif);font-size:1.2rem;font-weight:500;color:var(--forest)}
.nav-links{display:flex;align-items:center;list-style:none}
.nav-links a{
  text-decoration:none;color:var(--muted);font-size:.72rem;font-weight:500;
  letter-spacing:.13em;text-transform:uppercase;padding:8px 18px;
  position:relative;transition:color var(--ease);
}
.nav-links a::after{
  content:'';position:absolute;bottom:4px;left:18px;right:18px;height:1px;
  background:var(--gold);transform:scaleX(0);transition:transform var(--ease);transform-origin:center;
}
.nav-links a:hover{color:var(--forest)}
.nav-links a:hover::after{transform:scaleX(1)}
.nav-book{
  background:var(--forest)!important;color:#fff!important;border-radius:2px;
  padding:9px 22px!important;letter-spacing:.13em!important;
  transition:background var(--ease)!important;
}
.nav-book::after{display:none!important}
.nav-book:hover{background:var(--moss)!important;color:#fff!important}

/* HERO */
.hero{
  width:100%;min-height:100vh;padding-top:68px;
  display:grid;grid-template-columns:1fr 1fr;
  background:var(--forest);position:relative;overflow:hidden;
}
.hero-bg{
  position:absolute;inset:0;pointer-events:none;
  background-image:radial-gradient(circle at 20% 50%,rgba(201,168,76,.07),transparent 55%),
    radial-gradient(circle at 80% 20%,rgba(255,255,255,.03),transparent 40%);
}
.hero-left{
  padding:80px 4rem 80px 3rem;
  display:flex;flex-direction:column;justify-content:center;position:relative;z-index:2;
}
.eyebrow{
  display:inline-flex;align-items:center;gap:10px;margin-bottom:1.2rem;
  font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;
  color:var(--gold);font-weight:500;
}
.eyebrow i{display:block;width:28px;height:1px;background:currentColor;font-style:normal}
.eyebrow-lt{color:var(--gold2)}
.eyebrow-lt i{background:var(--gold2)}
.hero-h1{
  font-family:var(--serif);font-size:clamp(2.8rem,4.5vw,4.4rem);
  font-weight:400;line-height:1.08;color:#fff;margin-bottom:1.8rem;
}
.hero-h1 em{font-style:italic;color:var(--gold2)}
.hero-desc{font-size:.95rem;color:rgba(255,255,255,.6);line-height:1.85;font-weight:300;max-width:420px;margin-bottom:2.5rem}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap}
.btn-gold{
  display:inline-flex;align-items:center;gap:8px;
  background:var(--gold);color:var(--forest);border:none;cursor:pointer;
  padding:14px 28px;font-family:var(--sans);font-size:.75rem;font-weight:500;
  letter-spacing:.14em;text-transform:uppercase;border-radius:2px;text-decoration:none;
  transition:background var(--ease),transform var(--ease);
  box-shadow:0 4px 20px rgba(201,168,76,.35);
}
.btn-gold:hover{background:var(--gold2);transform:translateY(-2px)}
.btn-outline-w{
  display:inline-flex;align-items:center;gap:8px;background:transparent;
  color:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.2);cursor:pointer;
  padding:13px 26px;font-family:var(--sans);font-size:.75rem;font-weight:500;
  letter-spacing:.14em;text-transform:uppercase;border-radius:2px;text-decoration:none;
  transition:border-color var(--ease),color var(--ease);
}
.btn-outline-w:hover{border-color:rgba(255,255,255,.6);color:#fff}
.hero-right{position:relative;overflow:hidden}
.hero-right img{width:100%;height:100%;object-fit:cover;display:block}
.hero-right::before{
  content:'';position:absolute;inset:0;z-index:1;
  background:linear-gradient(90deg,var(--forest) 0%,transparent 25%);
}
.hero-tag{
  position:absolute;bottom:40px;right:40px;z-index:3;
  background:rgba(250,247,242,.96);backdrop-filter:blur(8px);
  border-radius:3px;padding:16px 20px;border-left:3px solid var(--gold);
  box-shadow:0 8px 32px rgba(0,0,0,.25);
}
.hero-tag-num{font-family:var(--serif);font-size:2rem;font-weight:700;color:var(--forest);line-height:1}
.hero-tag-lbl{font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-top:2px}
.hero-scroll{
  position:absolute;bottom:2rem;left:3rem;z-index:3;
  display:flex;align-items:center;gap:10px;
  font-size:.65rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.35);
}
.scroll-line{width:40px;height:1px;background:rgba(255,255,255,.2);animation:sPulse 2s ease infinite}
@keyframes sPulse{0%,100%{opacity:.2;transform:scaleX(.5)}50%{opacity:1;transform:scaleX(1)}}

/* STRIP */
.strip{
  background:var(--gold);color:var(--forest);
  padding:14px 3rem;display:flex;align-items:center;gap:0;
  overflow:hidden;
}
.strip-inner{display:flex;gap:3rem;animation:marquee 30s linear infinite;white-space:nowrap}
.strip-item{display:flex;align-items:center;gap:10px;font-size:.72rem;letter-spacing:.15em;text-transform:uppercase;font-weight:500;flex-shrink:0}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* SECTIONS */
.sec{width:100%;padding:96px 3rem}
.sec-h2{
  font-family:var(--serif);font-size:clamp(1.9rem,3.5vw,3rem);
  font-weight:400;color:var(--forest);line-height:1.15;margin-bottom:1rem;
}
.sec-h2 em{font-style:italic}
.sec-sub{font-size:.93rem;color:var(--muted);line-height:1.85;font-weight:300;max-width:580px}
.rule{width:44px;height:2px;background:var(--gold);margin:1.6rem 0}
.rule-c{margin-left:auto;margin-right:auto}

/* FEATURES */
.features-wrap{
  display:grid;grid-template-columns:repeat(4,1fr);gap:1px;
  background:var(--border);border:1px solid var(--border);
  border-radius:4px;overflow:hidden;margin-top:3.5rem;
}
.feat-card{
  background:var(--cream);padding:2.5rem 2rem 2.2rem;
  transition:background var(--ease);position:relative;overflow:hidden;
}
.feat-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:var(--gold);transform:scaleX(0);transition:transform var(--ease);transform-origin:left;
}
.feat-card:hover{background:var(--parchment)}
.feat-card:hover::before{transform:scaleX(1)}
.feat-icon{font-size:1.9rem;margin-bottom:1.2rem;display:block}
.feat-title{font-family:var(--serif);font-size:1.1rem;font-weight:500;color:var(--forest);margin-bottom:.6rem}
.feat-desc{font-size:.85rem;color:var(--muted);line-height:1.75;font-weight:300}

/* SERVICES DARK */
.svc-sec{background:var(--forest);padding:96px 3rem}
.svc-grid{
  display:grid;grid-template-columns:repeat(3,1fr);gap:1px;
  background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);
  border-radius:4px;overflow:hidden;margin-top:3.5rem;
}
.svc-card{
  background:rgba(255,255,255,.03);padding:2.5rem 2.2rem;
  position:relative;overflow:hidden;transition:background var(--ease);cursor:default;
}
.svc-card::after{
  content:'';position:absolute;inset:0;
  background:radial-gradient(circle at 0% 100%,rgba(201,168,76,.08),transparent 60%);
  opacity:0;transition:opacity var(--ease);
}
.svc-card:hover{background:rgba(255,255,255,.07)}
.svc-card:hover::after{opacity:1}
.svc-num{font-family:var(--serif);font-size:.82rem;color:var(--gold2);letter-spacing:.1em;margin-bottom:1rem;display:block}
.svc-name{font-family:var(--serif);font-size:1.35rem;color:#fff;font-weight:400;margin-bottom:.8rem}
.svc-desc{font-size:.84rem;color:rgba(255,255,255,.5);line-height:1.8;font-weight:300;margin-bottom:1.4rem}
.svc-duration{
  display:inline-flex;align-items:center;gap:6px;font-size:.68rem;letter-spacing:.12em;
  text-transform:uppercase;color:var(--gold2);border:1px solid rgba(201,168,76,.3);
  padding:4px 10px;border-radius:30px;
}
.svc-arrow{
  display:block;margin-top:1.2rem;font-size:.72rem;letter-spacing:.15em;
  text-transform:uppercase;color:var(--gold2);text-decoration:none;
  transition:letter-spacing var(--ease);
}
.svc-card:hover .svc-arrow{letter-spacing:.22em}

/* PROCESS */
.process-sec{background:var(--parchment)}
.process-steps{
  display:grid;grid-template-columns:repeat(4,1fr);gap:0;
  position:relative;margin-top:4rem;
}
.process-steps::before{
  content:'';position:absolute;top:28px;left:calc(12.5% + 20px);right:calc(12.5% + 20px);
  height:1px;background:var(--gold);opacity:.35;
}
.step{text-align:center;padding:0 1.5rem}
.step-circle{
  width:56px;height:56px;border-radius:50%;
  background:var(--cream);border:1.5px solid var(--gold);
  display:flex;align-items:center;justify-content:center;
  margin:0 auto 1.5rem;
  font-family:var(--serif);font-size:1.2rem;color:var(--gold);
  position:relative;z-index:1;
}
.step h3{font-family:var(--serif);font-size:1.05rem;color:var(--forest);margin-bottom:.5rem}
.step p{font-size:.84rem;color:var(--muted);line-height:1.75;font-weight:300}

/* ABOUT */
.about-wrap{display:grid;grid-template-columns:1fr 1fr;align-items:stretch}
.about-img-col{position:relative;min-height:600px;overflow:hidden}
.about-img-col img{width:100%;height:100%;object-fit:cover;display:block}
.about-overlay{
  position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(22,61,43,.55),transparent 55%);
}
.about-quote{
  position:absolute;bottom:40px;left:40px;right:40px;
  font-family:var(--serif);font-style:italic;font-size:1.2rem;
  color:#fff;line-height:1.5;text-shadow:0 2px 12px rgba(0,0,0,.4);
}
.about-quote::before{content:'"';font-size:3rem;color:var(--gold2);line-height:.5;display:block;margin-bottom:.5rem}
.about-text-col{background:var(--parchment);padding:80px 4rem}
.cert-row{display:flex;gap:1rem;flex-wrap:wrap;margin-top:2rem}
.cert-badge{
  background:var(--cream);border:1px solid var(--border);
  padding:8px 14px;border-radius:2px;
  font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:500;
}
.about-stats{display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:2.5rem}
.stat{border-left:2px solid var(--gold);padding-left:1rem}
.stat-n{font-family:var(--serif);font-size:2.2rem;font-weight:400;color:var(--forest);line-height:1}
.stat-l{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-top:.3rem}
.btn-dark{
  display:inline-flex;align-items:center;gap:8px;
  background:var(--forest);color:#fff;border:none;cursor:pointer;
  padding:14px 28px;font-family:var(--sans);font-size:.75rem;font-weight:500;
  letter-spacing:.14em;text-transform:uppercase;border-radius:2px;text-decoration:none;
  margin-top:2rem;transition:background var(--ease);
}
.btn-dark:hover{background:var(--moss)}

/* TESTIMONIALS */
.testi-sec{background:var(--forest);padding:80px 3rem}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.testi-card{
  background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);
  border-radius:4px;padding:2rem;transition:background var(--ease);
}
.testi-card:hover{background:rgba(255,255,255,.1)}
.testi-stars{color:var(--gold2);font-size:.95rem;letter-spacing:2px;margin-bottom:1rem}
.testi-text{font-family:var(--serif);font-style:italic;font-size:1rem;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:1.5rem}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-avatar{
  width:38px;height:38px;border-radius:50%;background:var(--gold);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--serif);font-size:1rem;color:var(--forest);font-weight:700;flex-shrink:0;
}
.testi-name{font-size:.85rem;color:#fff;font-weight:500}
.testi-loc{font-size:.72rem;color:rgba(255,255,255,.4)}

/* GALLERY */
.gal-grid{
  display:grid;
  grid-template-columns:repeat(12,1fr);
  grid-template-rows:240px 240px;
  gap:10px;margin-top:3rem;
}
.gal-item{overflow:hidden;border-radius:3px}
.gal-item:nth-child(1){grid-column:span 5;grid-row:span 2}
.gal-item:nth-child(2){grid-column:span 4}
.gal-item:nth-child(3){grid-column:span 3}
.gal-item:nth-child(4){grid-column:span 3}
.gal-item:nth-child(5){grid-column:span 4}
.gal-item img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s cubic-bezier(.4,0,.2,1)}
.gal-item:hover img{transform:scale(1.05)}

/* CONTACT */
.contact-wrap{display:grid;grid-template-columns:1fr 1.3fr;align-items:stretch}
.contact-left{background:var(--forest);padding:80px 3.5rem;color:#fff}
.info-row{display:flex;gap:14px;align-items:flex-start;margin-bottom:1.6rem}
.info-icon{
  width:40px;height:40px;flex-shrink:0;border-radius:50%;
  background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:1rem;
}
.info-lbl{font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--gold2);margin-bottom:3px}
.info-val{font-size:.9rem;color:rgba(255,255,255,.8);font-weight:300}
.map-stub{
  margin-top:2rem;height:150px;background:rgba(255,255,255,.06);
  border-radius:4px;border:1px solid rgba(255,255,255,.1);
  display:flex;align-items:center;justify-content:center;
  font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.3);
}
.contact-right{background:var(--parchment);padding:80px 4rem}
.form-lbl{
  display:block;font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;
  color:var(--muted);font-weight:500;margin-bottom:.5rem;
}
.form-inp{
  width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:2px;
  background:#fff;font-family:var(--sans);font-size:.9rem;color:var(--ink);
  outline:none;transition:border-color var(--ease);margin-bottom:1.2rem;
}
.form-inp:focus{border-color:var(--forest)}
.form-inp::placeholder{color:#bbb}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.form-ta{min-height:110px;resize:vertical}
.form-radio-group{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:1.2rem}
.form-radio{display:flex;align-items:center;gap:6px;cursor:pointer;font-size:.8rem;color:var(--muted)}
.form-radio input{accent-color:var(--forest)}
.submit-btn{
  width:100%;padding:15px;background:var(--forest);color:#fff;border:none;cursor:pointer;
  font-family:var(--sans);font-size:.78rem;font-weight:500;letter-spacing:.16em;text-transform:uppercase;
  border-radius:2px;transition:background var(--ease);
}
.submit-btn:hover{background:var(--moss)}

/* FOOTER — compact single line */
.footer{
  background:var(--ink);
  display:flex;align-items:center;justify-content:space-between;
  padding:16px 3rem;
  flex-wrap:wrap;gap:.75rem;
  border-top:1px solid rgba(255,255,255,.06);
}
.footer-brand{font-family:var(--serif);font-size:.95rem;color:rgba(255,255,255,.65)}
.footer-copy{font-size:.72rem;letter-spacing:.04em;color:rgba(255,255,255,.3)}
.footer-links{display:flex;gap:1.8rem;list-style:none}
.footer-links a{text-decoration:none;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.3);transition:color var(--ease)}
.footer-links a:hover{color:var(--gold)}

/* PAGE HEADER */
.pg-header{
  background:linear-gradient(120deg,var(--forest),#1e5038);
  padding:130px 3rem 64px;position:relative;overflow:hidden;
}
.pg-header::before{
  content:'';position:absolute;right:-80px;bottom:-80px;width:400px;height:400px;
  border-radius:50%;border:1px solid rgba(201,168,76,.1);pointer-events:none;
}
.pg-header::after{
  content:'';position:absolute;right:40px;bottom:40px;width:240px;height:240px;
  border-radius:50%;border:1px solid rgba(201,168,76,.08);pointer-events:none;
}
.pg-eyebrow{
  display:flex;align-items:center;gap:10px;margin-bottom:1rem;
  font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold2);font-weight:500;
}
.pg-eyebrow i{display:block;width:28px;height:1px;background:var(--gold2);font-style:normal}
.pg-h1{font-family:var(--serif);font-size:clamp(2.4rem,5vw,4rem);font-weight:400;color:#fff}
.pg-h1 em{font-style:italic;color:var(--gold2)}

/* TEAM CARDS */
.team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem}
.team-card{background:var(--parchment);padding:2rem;border-radius:3px;border-top:2px solid var(--gold)}
.team-avatar{
  width:64px;height:64px;background:var(--forest);border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--serif);font-size:1.6rem;color:var(--gold);margin-bottom:1.2rem;
}
.team-name{font-family:var(--serif);font-size:1.1rem;color:var(--forest);margin-bottom:.25rem}
.team-role{font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:.75rem}
.team-spec{font-size:.84rem;color:var(--muted);font-weight:300;line-height:1.7}

/* RESPONSIVE */
@media(max-width:900px){
  .nav{padding:0 1.5rem}
  .nav-links{display:none}
  .hero{grid-template-columns:1fr;min-height:auto}
  .hero-left{padding:60px 1.5rem 40px}
  .hero-right{height:60vw}
  .sec{padding:64px 1.5rem}
  .svc-sec{padding:64px 1.5rem}
  .features-wrap{grid-template-columns:1fr 1fr}
  .svc-grid{grid-template-columns:1fr}
  .about-wrap,.contact-wrap{grid-template-columns:1fr}
  .about-text-col{padding:60px 1.5rem}
  .process-steps{grid-template-columns:1fr 1fr;gap:2rem}
  .process-steps::before{display:none}
  .testi-grid{grid-template-columns:1fr}
  .gal-grid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
  .gal-item{grid-column:auto!important;grid-row:auto!important;height:200px}
  .contact-left,.contact-right{padding:60px 1.5rem}
  .form-row{grid-template-columns:1fr}
  .pg-header{padding:110px 1.5rem 50px}
  .footer{padding:14px 1.5rem}
  .team-grid{grid-template-columns:1fr}
}
@media(max-width:600px){
  .features-wrap{grid-template-columns:1fr}
  .strip{display:none}
  .about-stats{grid-template-columns:1fr 1fr}
}
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return null;
};

/* ═══════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════ */
const Nav = () => {
  const loc = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Book Now" },
  ];
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <div className="nav-emblem">A</div>
        <span className="nav-name">AyurVeda Elite</span>
      </Link>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={l.to === "/contact" ? "nav-book" : ""}
              style={
                loc.pathname === l.to && l.to !== "/contact"
                  ? { color: "var(--forest)" }
                  : {}
              }
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

/* ═══════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════ */
const Footer = () => (
  <footer className="footer">
    <span className="footer-brand">AyurVeda Elite</span>
    <span className="footer-copy">
      © 2026 · Taliparamba, Kerala · All rights reserved
    </span>
    {/* <ul className="footer-links">
      {[
        ["Home", "/"],
        ["Services", "/services"],
        ["About", "/about"],
        ["Gallery", "/gallery"],
        ["Contact", "/contact"],
      ].map(([l, to]) => (
        <li key={l}>
          <Link to={to as string}>{l}</Link>
        </li>
      ))}
    </ul> */}
    <ul>

    </ul>


  </footer>
);

/* ═══════════════════════════════════════════════════════
   HOME
═══════════════════════════════════════════════════════ */
const stripItems = [
  "Abhyanga · Full Body Massage",
  "Shirodhara · Mind Therapy",
  "Steam Detox · Svedana",
  "Pain Relief · Marma Therapy",
  "Certified Expert Therapists",
  "Open Daily 9 AM – 8 PM",
  "Abhyanga · Full Body Massage",
  "Shirodhara · Mind Therapy",
  "Steam Detox · Svedana",
  "Pain Relief · Marma Therapy",
  "Certified Expert Therapists",
  "Open Daily 9 AM – 8 PM",
];

const Home = () => (
  <>
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-left">
        <div className="eyebrow eyebrow-lt">
          <i />
          Authentic Kerala Ayurveda
          <i />
        </div>
        <h1 className="hero-h1">
          Ancient wisdom.
          <br />
          <em>Modern serenity.</em>
        </h1>
        <p className="hero-desc">
          Step into a sanctuary where centuries-old Ayurvedic traditions meet
          refined hospitality. Our master therapists restore balance, ease pain,
          and renew your spirit — naturally.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn-gold">
            Book a Session ↗
          </Link>
          <Link to="/services" className="btn-outline-w">
            View Therapies
          </Link>
        </div>
        <div className="hero-scroll">
          <span className="scroll-line" />
          Scroll to explore
        </div>
      </div>
      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop"
          alt="Ayurvedic therapy"
        />
        <div className="hero-tag">
          <div className="hero-tag-num">15+</div>
          <div className="hero-tag-lbl">Years of excellence</div>
        </div>
      </div>
    </section>

    <div className="strip">
      <div className="strip-inner">
        {stripItems.map((t, i) => (
          <span key={i} className="strip-item">
            ✦ &nbsp;{t}&nbsp;{" "}
          </span>
        ))}
      </div>
    </div>

    {/* WHY US */}
    <section className="sec">
      <div className="eyebrow">
        <i />
        Why Choose Us
      </div>
      <h2 className="sec-h2">
        A tradition of <em>healing excellence</em>
      </h2>
      <div className="rule" />
      <p className="sec-sub">
        For over 15 years we have served thousands of guests seeking genuine
        Ayurvedic care — not wellness tourism, but deep, transformative healing
        rooted in classical tradition.
      </p>
      <div className="features-wrap">
        {[
          {
            icon: "🌿",
            t: "Master Therapists",
            d: "Our practitioners train at Kerala's premier Ayurvedic colleges — minimum 5 years clinical practice required before joining our team.",
          },
          {
            icon: "🫙",
            t: "Pure Herbal Oils",
            d: "We cold-press and prepare all medicinal oils in-house using traditionally sourced, organically certified herbs from the Western Ghats.",
          },
          {
            icon: "🧘",
            t: "Personalised Care",
            d: "Every session begins with a Dosha consultation to understand your constitution and design the most effective treatment plan for you.",
          },
          {
            icon: "✨",
            t: "Sacred Ambience",
            d: "Warm lighting, natural fragrances, and curated soundscapes create a sanctuary that quietens the mind before your treatment begins.",
          },
        ].map((c, i) => (
          <div key={i} className="feat-card">
            <span className="feat-icon">{c.icon}</span>
            <div className="feat-title">{c.t}</div>
            <div className="feat-desc">{c.d}</div>
          </div>
        ))}
      </div>
    </section>

    {/* SERVICES */}
    <section className="svc-sec">
      <div className="eyebrow eyebrow-lt">
        <i />
        Signature Therapies
      </div>
      <h2 className="sec-h2" style={{ color: "#fff" }}>
        Our <em>treatments</em>
      </h2>
      <div className="rule" style={{ background: "var(--gold2)" }} />
      <div className="svc-grid">
        {[
          {
            n: "Abhyanga",
            d: "Full-body synchronised oil massage by two therapists. Nourishes tissues, calms the nervous system, and restores vital energy (Ojas).",
            dur: "60 / 90 min",
          },
          {
            n: "Shirodhara",
            d: "Warm medicated oil poured in a continuous stream onto the third-eye point — induces a profoundly meditative state unlike anything else.",
            dur: "45 min",
          },
          {
            n: "Pain Relief Therapy",
            d: "Targeted Kizhi (herbal poultice) and Marma point therapy for chronic back pain, arthritis, sciatica, and joint stiffness.",
            dur: "75 min",
          },
          {
            n: "Steam Detox (Svedana)",
            d: "Whole-body medicated steam cabinet that dilates channels, loosens Ama (toxins), and prepares the body for deeper healing.",
            dur: "30 min",
          },
          {
            n: "Head Massage",
            d: "Therapeutic scalp, neck and cranial massage with warm herbal oils — relieves migraines, improves sleep, and clears the mind.",
            dur: "45 min",
          },
          {
            n: "Couples Wellness",
            d: "Side-by-side therapies in our private couples suite — matching or complementary treatments for a shared healing journey.",
            dur: "90 min",
          },
        ].map((s, i) => (
          <div key={i} className="svc-card">
            <span className="svc-num">0{i + 1}</span>
            <div className="svc-name">{s.n}</div>
            <div className="svc-desc">{s.d}</div>
            <span className="svc-duration">⏱ {s.dur}</span>
            <Link to="/contact" className="svc-arrow">
              Reserve a slot →
            </Link>
          </div>
        ))}
      </div>
    </section>

    {/* PROCESS */}
    <section className="sec process-sec">
      <div style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          <i />
          How It Works
        </div>
        <h2 className="sec-h2">
          Your journey to <em>wellness</em>
        </h2>
        <div className="rule rule-c" />
      </div>
      <div className="process-steps">
        {[
          {
            n: "01",
            t: "Book a Session",
            p: "Call us or fill the enquiry form. We confirm your appointment within 2 hours.",
          },
          {
            n: "02",
            t: "Dosha Consultation",
            p: "Arrive 10 minutes early. Our therapist assesses your Prakriti and current imbalances.",
          },
          {
            n: "03",
            t: "Personalised Therapy",
            p: "Your tailored treatment begins in our serene, fully private therapy suite.",
          },
          {
            n: "04",
            t: "Aftercare Guidance",
            p: "Leave with personalised diet, lifestyle, and home-remedy recommendations.",
          },
        ].map((s, i) => (
          <div key={i} className="step">
            <div className="step-circle">{s.n}</div>
            <h3>{s.t}</h3>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="testi-sec">
      <div className="eyebrow eyebrow-lt">
        <i />
        Client Stories
      </div>
      <h2 className="sec-h2" style={{ color: "#fff" }}>
        What our guests <em>say</em>
      </h2>
      <div className="testi-grid">
        {[
          {
            stars: "★★★★★",
            text: "The Shirodhara was unlike anything I've experienced. I walked in with a week of tension headaches and walked out completely clear. Remarkable therapy.",
            name: "Priya Menon",
            loc: "Kannur, Kerala",
          },
          {
            stars: "★★★★★",
            text: "We came as a couple for the Abhyanga. The therapists were supremely professional, the oils smelled divine, and we both slept like children that night.",
            name: "Rohan & Anjali S.",
            loc: "Bangalore",
          },
          {
            stars: "★★★★★",
            text: "My chronic lower-back pain of 3 years improved significantly after just 5 sessions of the Pain Relief Therapy. This is real, authentic medicine.",
            name: "Thomas Mathew",
            loc: "Thalassery",
          },
        ].map((t, i) => (
          <div key={i} className="testi-card">
            <div className="testi-stars">{t.stars}</div>
            <div className="testi-text">{t.text}</div>
            <div className="testi-author">
              <div className="testi-avatar">{t.name[0]}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-loc">{t.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

/* ═══════════════════════════════════════════════════════
   SERVICES PAGE
═══════════════════════════════════════════════════════ */
const Services = () => (
  <>
    <div className="pg-header">
      <div className="pg-eyebrow">
        <i />
        All Treatments
      </div>
      <h1 className="pg-h1">
        Healing <em>Therapies</em>
      </h1>
    </div>
    <section className="svc-sec" style={{ paddingTop: "56px" }}>
      <p
        className="sec-sub"
        style={{ marginBottom: "2rem", color: "rgba(255,255,255,.5)" }}
      >
        Every treatment is personalised on the day of your visit following a
        Dosha assessment. All sessions use freshly prepared medicinal oils and
        herb formulations.
      </p>
      <div className="svc-grid">
        {[
          {
            n: "Abhyanga",
            d: "Full-body synchronised massage by two therapists using warm medicinal oils. Stimulates lymphatic flow, nourishes all seven tissue layers, and deeply calms the nervous system.",
            dur: "60 / 90 min",
          },
          {
            n: "Shirodhara",
            d: "Warm medicated oil, milk, or buttermilk poured continuously onto the forehead. One of Ayurveda's most profound therapies for mental clarity and neurological balance.",
            dur: "45 min",
          },
          {
            n: "Pain Relief (Kizhi)",
            d: "Herbal poultices filled with medicinal leaves, rice, or sand, heated and applied rhythmically. Highly effective for arthritis, sports injuries, and chronic musculoskeletal pain.",
            dur: "60 – 90 min",
          },
          {
            n: "Steam Detox (Svedana)",
            d: "Medicated steam cabinet therapy following oil treatment. Opens microchannels, mobilises toxins, and dramatically enhances absorption of herbal formulations.",
            dur: "20 – 30 min",
          },
          {
            n: "Shiro Abhyanga",
            d: "Deep therapeutic scalp and cranial massage with warm herbal oils. Targets pressure points to dissolve tension, strengthen hair roots, and improve cognitive clarity.",
            dur: "45 min",
          },
          {
            n: "Couples Wellness",
            d: "A shared healing experience in our private couples suite. Choose matching or personalised therapies — includes a pre-treatment consultation for both guests.",
            dur: "90 min",
          },
          {
            n: "Kati Vasti",
            d: "Warm medicated oil retained in a dough dam placed over the lumbosacral region. Extraordinarily effective for lumbar disc issues, sciatica, and degenerative spine conditions.",
            dur: "45 min",
          },
          {
            n: "Netra Tarpana",
            d: "Nourishing medicated ghee bath for the eyes. Relieves chronic dryness, screen-induced strain, improves visual acuity, and soothes inflamed eye tissues.",
            dur: "30 min",
          },
          {
            n: "Panchakarma Programme",
            d: "A multi-day personalised detoxification and rejuvenation programme. Includes diagnostic assessment, preparatory oleation, primary purification procedures, and post-treatment diet plan.",
            dur: "7 – 21 days",
          },
        ].map((s, i) => (
          <div key={i} className="svc-card">
            <span className="svc-num">0{i + 1}</span>
            <div className="svc-name">{s.n}</div>
            <div className="svc-desc">{s.d}</div>
            <span className="svc-duration">⏱ {s.dur}</span>
            <Link to="/contact" className="svc-arrow">
              Book this therapy →
            </Link>
          </div>
        ))}
      </div>
    </section>
  </>
);

/* ═══════════════════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════════════════ */
const About = () => (
  <>
    <div className="pg-header">
      <div className="pg-eyebrow">
        <i />
        Our Story
      </div>
      <h1 className="pg-h1">
        Rooted in <em>Kerala</em>
      </h1>
    </div>
    <div className="about-wrap">
      <div className="about-img-col">
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&auto=format&fit=crop"
          alt="Therapist preparing oils"
        />
        <div className="about-overlay" />
        <div className="about-quote">
          Healing is not a luxury.
          <br />
          It is your natural state.
        </div>
      </div>
      <div className="about-text-col">
        <div className="eyebrow">
          <i />
          About AyurVeda Elite
        </div>
        <h2 className="sec-h2">
          Where <em>tradition</em> meets care
        </h2>
        <div className="rule" />
        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.9,
            fontWeight: 300,
            marginBottom: "1.2rem",
            fontSize: ".93rem",
          }}
        >
          Founded in Taliparamba — the cradle of Ayurvedic medicine in northern
          Kerala — AyurVeda Elite was established on a simple conviction: that
          ancient wisdom, practiced with true integrity, transforms lives.
        </p>
        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.9,
            fontWeight: 300,
            marginBottom: "1.2rem",
            fontSize: ".93rem",
          }}
        >
          Our therapists trained at Kerala's most respected Ayurvedic colleges
          and hospitals, accumulating years of clinical experience before
          joining our centre. We prepare all herbal oils in-house using
          organically certified herbs sourced from the Western Ghats.
        </p>
        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.9,
            fontWeight: 300,
            fontSize: ".93rem",
          }}
        >
          We are members of the Kerala Ayurveda Practitioners Association and
          follow the classical protocols of the Ashtanga Hridayam — one of the
          principal texts of Ayurvedic medicine.
        </p>
        <div className="cert-row">
          {[
            "KAPA Certified",
            "Classical Protocol",
            "ISO 9001",
            "Organic Oils",
          ].map((c) => (
            <span key={c} className="cert-badge">
              {c}
            </span>
          ))}
        </div>
        <div className="about-stats">
          {[
            { n: "15+", l: "Years of Practice" },
            { n: "4,000+", l: "Guests Served" },
            { n: "12", l: "Expert Therapists" },
            { n: "20+", l: "Therapies Offered" },
          ].map((s) => (
            <div key={s.l} className="stat">
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
        <Link to="/contact" className="btn-dark">
          Book a Consultation ↗
        </Link>
      </div>
    </div>
    <section className="sec">
      <div className="eyebrow">
        <i />
        Our Team
      </div>
      <h2 className="sec-h2">
        Meet the <em>therapists</em>
      </h2>
      <div className="rule" />
      <div className="team-grid">
        {[
          {
            name: "Dr. Lakshmi Varma",
            role: "Senior Therapist · 14 yrs",
            spec: "Panchakarma, Shirodhara, Neurological disorders",
          },
          {
            name: "Suresh Nair",
            role: "Lead Therapist · 10 yrs",
            spec: "Kizhi, Sports injury, Musculoskeletal therapy",
          },
          {
            name: "Meena Pillai",
            role: "Therapist · 7 yrs",
            spec: "Abhyanga, Netra Tarpana, Women's wellness",
          },
        ].map((m) => (
          <div key={m.name} className="team-card">
            <div className="team-avatar">{m.name[0]}</div>
            <div className="team-name">{m.name}</div>
            <div className="team-role">{m.role}</div>
            <div className="team-spec">{m.spec}</div>
          </div>
        ))}
      </div>
    </section>
  </>
);

/* ═══════════════════════════════════════════════════════
   GALLERY PAGE
═══════════════════════════════════════════════════════ */
const Gallery = () => (
  <>
    <div className="pg-header">
      <div className="pg-eyebrow">
        <i />
        Visual Journey
      </div>
      <h1 className="pg-h1">
        Our <em>Sanctuary</em>
      </h1>
    </div>
    <section className="sec">
      <div className="eyebrow">
        <i />
        Inside AyurVeda Elite
      </div>
      <h2 className="sec-h2">
        A glimpse of <em>tranquility</em>
      </h2>
      <div className="gal-grid">
        {[
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=900&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=900&auto=format&fit=crop",
        ].map((src, i) => (
          <div key={i} className="gal-item">
            <img src={src} alt={`Gallery ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  </>
);

/* ═══════════════════════════════════════════════════════
   CONTACT PAGE
═══════════════════════════════════════════════════════ */
const Contact = () => (
  <>
    <div className="pg-header">
      <div className="pg-eyebrow">
        <i />
        Get in Touch
      </div>
      <h1 className="pg-h1">
        Book a <em>Session</em>
      </h1>
    </div>
    <div className="contact-wrap">
      <div className="contact-left">
        <div className="eyebrow eyebrow-lt">
          <i />
          Contact Details
        </div>
        <h2 className="sec-h2" style={{ color: "#fff" }}>
          We'd love to welcome you
        </h2>
        <div className="rule" style={{ background: "var(--gold2)" }} />
        <p
          className="sec-sub"
          style={{ marginBottom: "2.5rem", color: "rgba(255,255,255,.5)" }}
        >
          Walk-ins welcome. For guaranteed slots, we recommend calling or using
          the enquiry form — we confirm within 2 hours.
        </p>
        {[
          { icon: "📞", l: "Phone", v: "+91 99999 99999" },
          {
            icon: "📍",
            l: "Location",
            v: "Main Road, Taliparamba, Kannur, Kerala 670141",
          },
          {
            icon: "🕗",
            l: "Timings",
            v: "Daily · 9:00 AM – 8:00 PM · No holiday closure",
          },
          { icon: "✉️", l: "Email", v: "hello@ayurvedaelite.in" },
          { icon: "🌐", l: "Languages", v: "Malayalam, English, Hindi" },
        ].map((d, i) => (
          <div key={i} className="info-row">
            <div className="info-icon">{d.icon}</div>
            <div>
              <div className="info-lbl">{d.l}</div>
              <div className="info-val">{d.v}</div>
            </div>
          </div>
        ))}
        <div className="map-stub">📍 Google Maps integration coming soon</div>
      </div>
      <div className="contact-right">
        <div className="eyebrow">
          <i />
          Enquiry Form
        </div>
        <h2 className="sec-h2">
          Send us a <em>message</em>
        </h2>
        <div className="rule" />
        <div style={{ marginTop: "1.5rem" }}>
          <div className="form-row">
            <div>
              <label className="form-lbl">Full Name</label>
              <input className="form-inp" placeholder="Your name" />
            </div>
            <div>
              <label className="form-lbl">Phone Number</label>
              <input className="form-inp" placeholder="+91 00000 00000" />
            </div>
          </div>
          <label className="form-lbl">Email Address</label>
          <input
            className="form-inp"
            type="email"
            placeholder="you@email.com"
          />
          <label className="form-lbl">Preferred Therapy</label>
          <select className="form-inp">
            <option value="">— Select a therapy —</option>
            {[
              "Abhyanga",
              "Shirodhara",
              "Pain Relief (Kizhi)",
              "Steam Detox",
              "Head Massage",
              "Couples Wellness",
              "Kati Vasti",
              "Netra Tarpana",
              "Panchakarma Programme",
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <label className="form-lbl">Preferred Date & Time</label>
          <input className="form-inp" type="datetime-local" />
          <label className="form-lbl">First visit?</label>
          <div className="form-radio-group">
            {["Yes, first time", "No, returning guest", "Not sure"].map((o) => (
              <label key={o} className="form-radio">
                <input type="radio" name="visit" />
                {o}
              </label>
            ))}
          </div>
          <label className="form-lbl">Message / Special Requirements</label>
          <textarea
            className="form-inp form-ta"
            placeholder="Any health conditions, allergies, or questions we should know about…"
          />
          <button className="submit-btn">Send Enquiry →</button>
        </div>
      </div>
    </div>
  </>
);

/* ═══════════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════════ */
export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Nav />
      <main style={{ paddingTop: "68px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
