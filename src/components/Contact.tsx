import { motion } from "framer-motion";
import { useState } from "react";

const info = {
  email: "ashishpipaliya.dev@gmail.com",
  phone: "+91 63543 48235",
  location: "Surat, Gujarat, India · Remote-friendly",
  linkedin: "https://www.linkedin.com/in/ashish-pipaliya-b0716730b/",
  github: "https://github.com/Its-Ashu",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${info.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative gradient-border overflow-hidden rounded-[2rem] p-8 sm:p-12 md:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.74 0.19 290 / 0.5), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.78 0.16 215 / 0.45), transparent 70%)",
            }}
          />

          <div className="relative grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="eyebrow mb-5">Contact</div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
                Let&apos;s build something <span className="gradient-text">great</span> together.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Looking for a React Native developer for your team or project? I&apos;d love to
                hear about what you&apos;re working on.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${info.email}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.32_0.08_290)] to-[oklch(0.22_0.04_215)] ring-1 ring-white/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="min-w-0 truncate">{info.email}</span>
                </a>
                <a
                  href={`tel:${info.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.32_0.08_290)] to-[oklch(0.22_0.04_215)] ring-1 ring-white/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h2.27a1 1 0 01.95.68l1.49 4.47a1 1 0 01-.5 1.21l-1.6.8a11 11 0 005.36 5.36l.8-1.6a1 1 0 011.21-.5l4.47 1.49a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span>{info.phone}</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted-foreground">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.32_0.08_290)] to-[oklch(0.22_0.04_215)] ring-1 ring-white/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13zm0-10a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span>{info.location}</span>
                </div>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
              <Field
                label="Message"
                id="message"
                textarea
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
              />
              <button type="submit" className="btn-primary w-full">
                Send Message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  textarea = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) {
  const shared =
    "peer block w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 pt-5 pb-2 text-sm text-foreground outline-none transition-all placeholder-transparent focus:border-[oklch(0.74_0.19_290/0.5)] focus:bg-white/[0.05] focus:ring-4 focus:ring-[oklch(0.74_0.19_290/0.15)]";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          required
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
          className={shared + " resize-none"}
        />
      ) : (
        <input
          id={id}
          required
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
          className={shared}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[oklch(0.85_0.13_290)]"
      >
        {label}
      </label>
    </div>
  );
}
