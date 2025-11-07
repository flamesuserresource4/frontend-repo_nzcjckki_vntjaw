export default function ProgramsPage() {
  const programs = [
    {
      title: "Private Lessons",
      desc:
        "One-on-one sessions tailored to your goals — from travel English to career growth.",
      details: [
        "Flexible scheduling (online or in-person)",
        "Level assessment and personal plan",
        "Practice-focused with real-world scenarios",
      ],
    },
    {
      title: "School Workshops",
      desc:
        "Interactive workshops for schools and communities — boost confidence through games and projects.",
      details: [
        "Native speaker facilitation",
        "Collaborative activities and presentations",
        "Custom topics for your class needs",
      ],
    },
    {
      title: "Conversation Club",
      desc:
        "Casual meetups under our bamboo roof — practice speaking with friendly prompts and themes.",
      details: [
        "Weekly themes with vocabulary support",
        "Small groups for more talk time",
        "Supportive feedback and tips",
      ],
    },
    {
      title: "Volunteer Program",
      desc:
        "Share your time and culture while guiding learners — mentoring, clubs, and special events.",
      details: [
        "Local orientation and cultural briefing",
        "Mentor toolkit and session guides",
        "Flexible commitment (2–8 weeks)",
      ],
    },
  ];

  return (
    <main className="bg-[#FDFBF8] text-[#2C2C2C]">
      <section className="pt-16 pb-10 bg-gradient-to-b from-[#FFF8E1] to-[#FDFBF8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Programs</h1>
          <p className="mt-3 text-[#2C2C2C]/80 max-w-2xl mx-auto">
            Choose a path that fits you — learn privately, join a club, or invite us to your school.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <article key={p.title} className="bg-white border border-[#EDE0CF] rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-extrabold text-[#C97B63]">{p.title}</h3>
              <p className="mt-2 text-[#2C2C2C]/80">{p.desc}</p>
              <ul className="mt-4 space-y-2 list-disc pl-5">
                {p.details.map((d) => (
                  <li key={d} className="text-sm text-[#2C2C2C]/80">{d}</li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Bale%20Basa!%20I’m%20interested%20in%20this%20program."
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#2E8C83] text-white font-semibold hover:opacity-95"
                >
                  Ask on WhatsApp
                </a>
                <a href="#/volunteer" className="px-4 py-2 rounded-xl border border-[#C97B63] text-[#C97B63] font-semibold hover:bg-[#FFF8E1]">
                  Become a Volunteer
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="rounded-3xl p-8 bg-[#EDE0CF] border border-[#C97B63]/30">
            <h4 className="text-2xl font-extrabold text-[#2E8C83]">Not sure where to start?</h4>
            <p className="mt-1 text-[#2C2C2C]/80">Message us with your goals and we’ll guide you to the right program.</p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Bale%20Basa!%20I’m%20not%20sure%20which%20program%20fits%20me.%20Can%20you%20help%3F"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-[#C97B63] text-white font-semibold hover:opacity-95"
            >
              Chat Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
