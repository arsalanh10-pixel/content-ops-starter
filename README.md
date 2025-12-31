import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="font-semibold tracking-tight">
            <span className="text-slate-900">SyncHaul</span>{" "}
            <span className="text-slate-500">Logistics</span>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <Link className="hover:text-slate-600" href="/services">Services</Link>
            <Link className="hover:text-slate-600" href="/coverage">Coverage</Link>
            <Link className="hover:text-slate-600" href="/about">About</Link>
            <Link className="hover:text-slate-600" href="/contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50"
            >
              Carrier Setup
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800"
            >
              Request Dispatch
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              Nationwide Dispatch & Load Coordination
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Dispatch that keeps your wheels turning.
            </h1>

            <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
              SyncHaul helps carriers and brokers move freight faster with proactive
              dispatching, real-time updates, document handling, and rate support.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-slate-50"
              >
                View Services
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border p-4">
                <div className="text-lg font-semibold">24/7</div>
                <div className="text-slate-600">Load updates</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-lg font-semibold">48+</div>
                <div className="text-slate-600">States covered</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-lg font-semibold">Fast</div>
                <div className="text-slate-600">Carrier setup</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-gradient-to-br from-slate-50 to-white p-6">
            <h2 className="text-lg font-semibold">Quick request</h2>
            <p className="mt-1 text-sm text-slate-600">
              Tell us what you need and we’ll respond ASAP.
            </p>

            <form className="mt-6 grid gap-3">
              <input className="rounded-lg border px-3 py-3 text-sm" placeholder="Name" />
              <input className="rounded-lg border px-3 py-3 text-sm" placeholder="Email" />
              <input className="rounded-lg border px-3 py-3 text-sm" placeholder="Phone" />
              <select className="rounded-lg border px-3 py-3 text-sm">
                <option>Dispatch service</option>
                <option>Carrier onboarding</option>
                <option>Load coverage / capacity</option>
                <option>General inquiry</option>
              </select>
              <textarea
                className="min-h-[120px] rounded-lg border px-3 py-3 text-sm"
                placeholder="Message"
              />
              <button
                type="button"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
              >
                Send
              </button>
              <p className="text-xs text-slate-500">
                Tip: we can convert this to a Netlify Form so submissions hit your email.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Services</h2>
            <p className="mt-2 text-slate-600">
              A clean, reliable dispatch workflow—built for speed and visibility.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Dispatch Management", "Driver check calls, ETA updates, and proactive issue handling."],
              ["Load Coordination", "Tender, confirm, track, and close out loads cleanly."],
              ["Rate Support", "Market-based negotiation and rate confirmation assistance."],
              ["Paperwork & PODs", "BOLs, POD collection, and document organization."],
              ["Carrier Setup", "Onboarding, compliance basics, and profile cleanup."],
              ["Customer Updates", "Status reporting that keeps brokers confident."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border bg-white p-6 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Ready to launch your dispatch desk?</h3>
              <p className="mt-1 text-sm text-slate-600">
                We’ll help you set up a simple workflow and start moving loads.
              </p>
            </div>
            <div className="mt-4 flex gap-3 md:mt-0">
              <Link className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-slate-50" href="/contact">
                Contact
              </Link>
              <Link className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800" href="/contact">
                Request Dispatch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} SyncHaul Logistics LLC</div>
          <div className="flex gap-4">
            <Link className="hover:text-slate-900" href="/privacy">Privacy</Link>
            <Link className="hover:text-slate-900" href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
