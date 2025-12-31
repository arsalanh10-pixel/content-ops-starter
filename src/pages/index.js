import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <Link href="/" className="brand">
          <span className="brandBold">SyncHaul</span>{" "}
          <span className="brandLight">Logistics</span>
        </Link>

        <nav className="nav">
          <Link href="/" className="navLink">Home</Link>
          <Link href="/about" className="navLink">About</Link>
          <Link href="/services" className="navLink">Services</Link>
          <Link href="/resources" className="navLink">Resources</Link>
          <Link href="/contact" className="navLink">Contact / Request a Quote</Link>
        </nav>

        <div className="navCtas">
          <Link href="/contact" className="btn btnGhost">Talk to a Specialist</Link>
          <Link href="/contact" className="btn btnPrimary">Request a Quote</Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>© {new Date().getFullYear()} SyncHaul Logistics LLC</div>
        <div className="footerLinks">
          <Link href="/contact">Contact</Link>
          <Link href="/resources">Resources</Link>
        </div>
      </div>
    </footer>
  );
}

function QuoteForm() {
  return (
    <form
      name="request-quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/contact?submitted=1"
      className="form"
    >
      <input type="hidden" name="form-name" value="request-quote" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid2">
        <input name="companyName" placeholder="Company Name" required />
        <input name="yourName" placeholder="Your Name" required />
      </div>

      <input name="contact" placeholder="Email / Phone" required />

      <select name="service" required defaultValue="">
        <option value="" disabled>
          Select Service
        </option>
        <option>Truckload Coordination</option>
        <option>Carrier Sourcing / Capacity Support</option>
        <option>Live Tracking & Updates</option>
        <option>Paperwork & POD Closeout</option>
        <option>Consulting / Process Setup (SOPs, workflows)</option>
      </select>

      <div className="grid2">
        <input name="pickup" placeholder="Pickup City/State" />
        <input name="delivery" placeholder="Delivery City/State" />
      </div>

      <textarea
        name="notes"
        placeholder="Notes (equipment, windows, special instructions)"
        rows={6}
      />

      <button type="submit" className="btn btnPrimary btnFull">
        Request a Quote
      </button>

      <p className="finePrint">
        Send your lane details and timelines—SyncHaul will respond with a clear plan and next steps.
      </p>
    </form>
  );
}

export default function ContactPage() {
  const router = useRouter();
  const submitted = router?.query?.submitted === "1";

  return (
    <>
      <Head>
        <title>Contact / Request a Quote | SyncHaul Logistics</title>
        <meta
          name="description"
          content="Let’s move your freight with less friction. Send your lane details and timelines—SyncHaul will respond with a clear plan and next steps."
        />
      </Head>

      <Header />

      <section className="page">
        <div className="container">
          <h1 className="h1">Let’s move your freight with less friction.</h1>
          <p className="sub">
            Send your lane details and timelines—SyncHaul will respond with a clear plan and next steps.
          </p>

          <div className="gridMain">
            <div className="panel">
              <div className="panelTitle">Contact</div>

              <div className="info">
                <div>
                  <div className="muted">Email</div>
                  <div className="strong">dispatch@synchaultrucking.com</div>
                </div>
                <div>
                  <div className="muted">Phone</div>
                  <div className="strong">—</div>
                </div>
              </div>

              {submitted && (
                <div className="success">
                  ✅ Thanks! Your request was submitted. We’ll reach out shortly.
                </div>
              )}

              <div className="note">
                <div className="noteTitle">Built for</div>
                <div>Brokers • Shippers • Owner-Operators • Small Fleets</div>
                <div className="spacer" />
                <div className="noteTitle">Coverage</div>
                <div>Nationwide USA (all states)</div>
              </div>
            </div>

            <div className="panel panelAlt">
              <div className="panelTitle">Request a Quote</div>
              <div className="panelSub">
                Tell us what you’re moving and when—SyncHaul will respond with next steps and a simple plan to execute.
              </div>
              <div className="spacer" />
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        :global(body) { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; }
        a { color: inherit; text-decoration: none; }

        .container { max-width: 1120px; margin: 0 auto; padding: 0 18px; }

        .header { position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,0.92); backdrop-filter: blur(10px); border-bottom: 1px solid #e5e7eb; }
        .headerInner { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 12px 0; }
        .brand { font-weight: 700; letter-spacing: -0.02em; }
        .brandBold { color: #0f172a; }
        .brandLight { color: #64748b; font-weight: 600; }
        .nav { display: none; gap: 18px; font-size: 14px; color: #0f172a; }
        .navLink { color: #0f172a; opacity: 0.85; }
        .navLink:hover { opacity: 1; }
        .navCtas { display: flex; gap: 10px; align-items: center; }

        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 10px 14px; border-radius: 12px; font-size: 14px; font-weight: 600; border: 1px solid transparent; }
        .btnPrimary { background: #0f172a; color: white; }
        .btnPrimary:hover { background: #111c33; }
        .btnGhost { background: white; border-color: #e5e7eb; color: #0f172a; }
        .btnGhost:hover { background: #f8fafc; }
        .btnFull { width: 100%; }

        .page { padding: 56px 0; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); }
        .h1 { margin: 0; font-size: 40px; line-height: 1.1; letter-spacing: -0.03em; color: #0f172a; }
        .sub { margin: 14px 0 0; font-size: 16px; line-height: 1.6; color: #475569; max-width: 760px; }

        .gridMain { margin-top: 26px; display: grid; gap: 14px; }
        .panel { border: 1px solid #e5e7eb; background: #fff; border-radius: 20px; padding: 18px; }
        .panelAlt { background: #fff; }
        .panelTitle { font-weight: 900; color: #0f172a; font-size: 16px; }
        .panelSub { margin-top: 6px; color: #475569; font-size: 13px; line-height: 1.45; }

        .info { margin-top: 14px; display: grid; gap: 12px; }
        .muted { color: #64748b; font-size: 12px; font-weight: 700; }
        .strong { color: #0f172a; font-weight: 800; }

        .success { margin-top: 14px; border: 1px solid #bbf7d0; background: #ecfdf5; color: #065f46; border-radius: 14px; padding: 12px; font-size: 14px; }
        .note { margin-top: 14px; border-radius: 14px; background: #f8fafc; border: 1px solid #e5e7eb; padding: 14px; color: #334155; font-size: 14px; }
        .noteTitle { font-weight: 900; color: #0f172a; }
        .spacer { height: 12px; }

        .form { display: grid; gap: 12px; margin-top: 10px; }
        input, select, textarea {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 12px 12px;
          font-size: 14px;
          outline: none;
          width: 100%;
        }
        input:focus, select:focus, textarea:focus { border-color: #94a3b8; box-shadow: 0 0 0 3px rgba(148,163,184,0.25); }
        .grid2 { display: grid; gap: 12px; }
        .finePrint { margin: 0; font-size: 12px; color: #64748b; }
        .hidden { display: none; }

        .footer { border-top: 1px solid #e5e7eb; background: #fff; }
        .footerInner { padding: 22px 0; display: flex; flex-direction: column; gap: 10px; color: #64748b; font-size: 14px; }
        .footerLinks { display: flex; gap: 14px; }

        @media (min-width: 860px) {
          .nav { display: flex; }
          .gridMain { grid-template-columns: 0.9fr 1.1fr; }
          .grid2 { grid-template-columns: 1fr 1fr; }
          .footerInner { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </>
  );
}
