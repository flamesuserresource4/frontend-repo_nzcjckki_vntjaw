export default function Volunteer() {
  return (
    <main className="bg-[#FDFBF8] text-[#2C2C2C]">
      <section className="pt-16 pb-10 bg-gradient-to-b from-[#FFF8E1] to-[#FDFBF8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Volunteer with Us</h1>
          <p className="mt-3 text-[#2C2C2C]/80 max-w-2xl mx-auto">
            Share your language and culture — help learners grow with confidence and joy.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[{
            title: "What You’ll Do",
            points: [
              "Facilitate conversation clubs",
              "Mentor small groups or individuals",
              "Support workshops and events",
            ],
          }, {
            title: "What You’ll Get",
            points: [
              "Local orientation and cultural tips",
              "Mentor playbook and session guides",
              "A family-like community — Suksma!",
            ],
          }, {
            title: "How to Join",
            points: [
              "Share your schedule and skills",
              "Online intro chat with our team",
              "Flexible commitment: 2–8 weeks",
            ],
          }].map((card) => (
            <div key={card.title} className="bg-white border border-[#EDE0CF] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#2E8C83]">{card.title}</h3>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                {card.points.map((p) => (
                  <li key={p} className="text-sm text-[#2C2C2C]/80">{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-[#EDE0CF]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
              alt="Volunteers and students smiling together"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[#C97B63]">Ready to inspire?</h2>
            <p className="mt-3 text-[#2C2C2C]/80">Tell us when you’re in Bali and what you’d love to help with.</p>
            <a
              className="inline-block mt-5 px-5 py-2.5 rounded-xl bg-[#2E8C83] text-white font-semibold hover:opacity-95"
              href="https://wa.me/6281234567890?text=Halo%20Bale%20Basa!%20I’d%20love%20to%20volunteer.%20Here’s%20my%20availability%20and%20skills:"
              target="_blank"
              rel="noreferrer"
            >
              Apply via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
