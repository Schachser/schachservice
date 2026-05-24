"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, MapPin, Home, Truck, Package, User, Shield } from "lucide-react";

type FormData = {
  von: string;
  nach: string;
  datum: string;
  umzugsart: string;
  groesse: string;
  zusatzleistungen: string[];
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  nachricht: string;
  datenschutz: boolean;
};

const INITIAL: FormData = {
  von: "", nach: "", datum: "",
  umzugsart: "",
  groesse: "",
  zusatzleistungen: [],
  vorname: "", nachname: "", email: "", telefon: "", nachricht: "",
  datenschutz: false,
};

const STEPS = [
  { id: 1, label: "Route",          icon: MapPin },
  { id: 2, label: "Umzugsart",      icon: Truck },
  { id: 3, label: "Wohnungsgröße",  icon: Home },
  { id: 4, label: "Zusatzleistungen", icon: Package },
  { id: 5, label: "Kontakt",        icon: User },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.38, ease } },
  exit:  (dir: number) => ({ x: dir < 0 ? 40 : -40, opacity: 0, transition: { duration: 0.22, ease: "easeIn" as const } }),
};

function RadioCard({
  label, value, selected, onChange, description,
}: { label: string; value: string; selected: boolean; onChange: () => void; description?: string }) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={selected}
      className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
        ${selected
          ? "border-gold bg-gold/6 shadow-gold"
          : "border-navy/10 bg-white hover:border-gold/30 hover:bg-ivory"
        }`}
    >
      <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200
        ${selected ? "border-gold bg-gold" : "border-navy/20"}`}
      >
        {selected && <span className="w-2 h-2 rounded-full bg-white" />}
      </div>
      <div>
        <span className={`font-body text-sm font-semibold ${selected ? "text-navy" : "text-navy"}`}>{label}</span>
        {description && <p className="font-body text-xs text-muted mt-0.5">{description}</p>}
      </div>
    </button>
  );
}

function CheckCard({
  label, value, checked, onChange,
}: { label: string; value: string; checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={checked}
      className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
        ${checked
          ? "border-gold bg-gold/6"
          : "border-navy/10 bg-white hover:border-gold/30 hover:bg-ivory"
        }`}
    >
      <div className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200
        ${checked ? "border-gold bg-gold" : "border-navy/20"}`}
      >
        {checked && <Check className="w-3 h-3 text-white stroke-[3]" />}
      </div>
      <span className="font-body text-sm font-medium text-navy">{label}</span>
    </button>
  );
}

function FieldInput({
  id, label, type = "text", value, onChange, placeholder, required,
}: {
  id: string; label: string; type?: string;
  value: string; onChange: (v: string) => void;
  placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-body text-xs font-semibold text-muted tracking-wider uppercase mb-2">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        id={id} name={id} type={type} value={value} required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 px-4 rounded-xl border border-navy/15 bg-ivory text-navy text-sm font-body placeholder-muted/40
          focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200"
      />
    </div>
  );
}

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const toggleZusatz = (val: string) => {
    setData((d) => ({
      ...d,
      zusatzleistungen: d.zusatzleistungen.includes(val)
        ? d.zusatzleistungen.filter((x) => x !== val)
        : [...d.zusatzleistungen, val],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 px-8"
      >
        <div className="w-16 h-16 rounded-full bg-gold/12 border border-gold/30 flex items-center justify-center mb-6">
          <Check className="w-7 h-7 text-gold stroke-[2.5]" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-navy mb-3">Anfrage erhalten</h3>
        <p className="font-body text-sm text-muted leading-relaxed max-w-xs">
          Vielen Dank, {data.vorname}. Wir melden uns innerhalb von
          <strong className="text-navy"> 24 Stunden</strong> persönlich bei Ihnen.
        </p>
        <div className="mt-8 flex items-center gap-2 px-5 py-3 rounded-xl bg-ivory border border-navy/8">
          <Shield className="w-4 h-4 text-gold flex-shrink-0" />
          <p className="font-body text-xs text-muted">Ihre Daten werden vertraulich behandelt.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-0 mb-8" role="tablist" aria-label="Formular-Schritte">
        {STEPS.map((s, i) => (
          <div key={s.id} className="flex items-center flex-1 last:flex-none">
            <div
              role="tab"
              aria-selected={step === s.id}
              aria-label={`Schritt ${s.id}: ${s.label}`}
              className={`flex flex-col items-center gap-1 cursor-default`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300
                ${step > s.id
                  ? "bg-gold border-gold"
                  : step === s.id
                    ? "bg-white border-gold shadow-gold"
                    : "bg-white border-navy/15"
                }`}
              >
                {step > s.id
                  ? <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  : <s.icon className={`w-3.5 h-3.5 ${step === s.id ? "text-gold" : "text-navy/30"}`} />
                }
              </div>
              <span className={`hidden sm:block font-body text-[9px] font-medium tracking-wider uppercase
                ${step === s.id ? "text-gold" : "text-navy/30"}`}>
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-px mx-2 transition-colors duration-300 ${step > s.id ? "bg-gold/50" : "bg-navy/10"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <form onSubmit={handleSubmit}>
        <div className="relative overflow-hidden" style={{ minHeight: 320 }}>
          <AnimatePresence mode="wait" custom={dir}>
            {/* Step 1: Von / Nach */}
            {step === 1 && (
              <motion.div key="step1" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <h3 className="font-heading text-xl font-semibold text-navy mb-1">Von wo nach wo?</h3>
                <p className="font-body text-sm text-muted mb-6">Geben Sie Ihre Start- und Zieladresse an.</p>
                <div className="space-y-4">
                  <FieldInput id="von" label="Umzug von" value={data.von} onChange={(v) => setData(d => ({ ...d, von: v }))} placeholder="68161 Mannheim" required />
                  <FieldInput id="nach" label="Umzug nach" value={data.nach} onChange={(v) => setData(d => ({ ...d, nach: v }))} placeholder="69115 Heidelberg" required />
                  <FieldInput id="datum" label="Wunschdatum" type="date" value={data.datum} onChange={(v) => setData(d => ({ ...d, datum: v }))} />
                </div>
              </motion.div>
            )}

            {/* Step 2: Umzugsart */}
            {step === 2 && (
              <motion.div key="step2" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <h3 className="font-heading text-xl font-semibold text-navy mb-1">Art des Umzugs</h3>
                <p className="font-body text-sm text-muted mb-6">Wählen Sie den passenden Umzugstyp.</p>
                <div className="space-y-2.5">
                  {[
                    { value: "privatumzug",   label: "Privatumzug",     description: "Wohnung, Haus, Zimmer" },
                    { value: "firmenumzug",   label: "Firmenumzug",     description: "Büro, Gewerbe, B2B" },
                    { value: "fernumzug",     label: "Fernumzug",       description: "Über 50 km Entfernung" },
                    { value: "seniorenumzug", label: "Seniorenumzug",   description: "Mit persönlicher Begleitung" },
                    { value: "studentenumzug",label: "Studentenumzug",  description: "WG, Zimmer, kleiner Haushalt" },
                    { value: "sonstige",      label: "Sonstige",        description: "Entrümpelung, Lagerung, etc." },
                  ].map((o) => (
                    <RadioCard key={o.value} {...o} selected={data.umzugsart === o.value}
                      onChange={() => setData(d => ({ ...d, umzugsart: o.value }))} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Wohnungsgröße */}
            {step === 3 && (
              <motion.div key="step3" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <h3 className="font-heading text-xl font-semibold text-navy mb-1">Wie groß ist Ihre Wohnung?</h3>
                <p className="font-body text-sm text-muted mb-6">Das hilft uns, einen realistischen Zeitrahmen zu planen.</p>
                <div className="space-y-2.5">
                  {[
                    { value: "1zi",    label: "1 Zimmer",      description: "Studio / Einzimmerwohnung" },
                    { value: "2zi",    label: "2 Zimmer",      description: "Ca. 40–60 m²" },
                    { value: "3zi",    label: "3 Zimmer",      description: "Ca. 60–90 m²" },
                    { value: "4zi",    label: "4–5 Zimmer",    description: "Ca. 90–130 m²" },
                    { value: "5zi",    label: "Haus / 6+ Zimmer", description: "Großes Objekt" },
                    { value: "buero",  label: "Büro / Gewerbe", description: "Arbeitsplätze und Equipment" },
                  ].map((o) => (
                    <RadioCard key={o.value} {...o} selected={data.groesse === o.value}
                      onChange={() => setData(d => ({ ...d, groesse: o.value }))} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Zusatzleistungen */}
            {step === 4 && (
              <motion.div key="step4" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <h3 className="font-heading text-xl font-semibold text-navy mb-1">Welche Zusatzleistungen?</h3>
                <p className="font-body text-sm text-muted mb-6">Mehrfachauswahl möglich – alles optional.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Einpackservice",
                    "Auspackservice",
                    "Möbelmontage",
                    "Küchenmontage",
                    "Endreinigung",
                    "Klaviertransport",
                    "Einlagerung",
                    "Außenaufzug / Kran",
                    "Halteverbotszone",
                    "Behörden-Ummeldung",
                  ].map((s) => (
                    <CheckCard key={s} label={s} value={s}
                      checked={data.zusatzleistungen.includes(s)}
                      onChange={() => toggleZusatz(s)} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Kontakt */}
            {step === 5 && (
              <motion.div key="step5" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <h3 className="font-heading text-xl font-semibold text-navy mb-1">Ihre Kontaktdaten</h3>
                <p className="font-body text-sm text-muted mb-6">Wir melden uns innerhalb von 24 Stunden persönlich.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <FieldInput id="vorname" label="Vorname" value={data.vorname}
                      onChange={(v) => setData(d => ({ ...d, vorname: v }))} placeholder="Max" required />
                    <FieldInput id="nachname" label="Nachname" value={data.nachname}
                      onChange={(v) => setData(d => ({ ...d, nachname: v }))} placeholder="Mustermann" required />
                  </div>
                  <FieldInput id="email" label="E-Mail" type="email" value={data.email}
                    onChange={(v) => setData(d => ({ ...d, email: v }))} placeholder="max@beispiel.de" required />
                  <FieldInput id="telefon" label="Telefon" type="tel" value={data.telefon}
                    onChange={(v) => setData(d => ({ ...d, telefon: v }))} placeholder="+49 621 …" />
                  <div>
                    <label htmlFor="nachricht" className="block font-body text-xs font-semibold text-muted tracking-wider uppercase mb-2">
                      Anmerkungen
                    </label>
                    <textarea
                      id="nachricht" name="nachricht" rows={3} value={data.nachricht}
                      onChange={(e) => setData(d => ({ ...d, nachricht: e.target.value }))}
                      placeholder="Besondere Gegenstände, Etage ohne Aufzug, Wunschtermin…"
                      className="w-full px-4 py-3 rounded-xl border border-navy/15 bg-ivory text-navy text-sm font-body placeholder-muted/40
                        focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 resize-none"
                    />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div
                      onClick={() => setData(d => ({ ...d, datenschutz: !d.datenschutz }))}
                      className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer
                        ${data.datenschutz ? "border-gold bg-gold" : "border-navy/20 group-hover:border-gold/50"}`}
                    >
                      {data.datenschutz && <Check className="w-3 h-3 text-white stroke-[3]" />}
                    </div>
                    <span className="font-body text-xs text-muted leading-relaxed">
                      Ich stimme der{" "}
                      <a href="/datenschutz" className="text-gold hover:underline" target="_blank" rel="noopener">
                        Datenschutzerklärung
                      </a>{" "}
                      zu. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                    </span>
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy/8">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => go(step - 1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-navy/15 text-sm font-body font-medium text-muted hover:border-navy/30 hover:text-navy transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={() => go(step + 1)}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-xl bg-gold text-navy text-sm font-body font-semibold hover:bg-gold-muted transition-all duration-200 shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              data-event="quote_next_step"
            >
              Weiter
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!data.datenschutz || !data.vorname || !data.email}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-xl bg-gold text-navy text-sm font-body font-semibold hover:bg-gold-muted transition-all duration-200 shadow-gold disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              data-event="quote_click"
            >
              Angebot anfordern
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Step counter */}
        <p className="mt-4 text-center font-body text-xs text-muted/60">
          Schritt {step} von {STEPS.length}
        </p>
      </form>
    </div>
  );
}
