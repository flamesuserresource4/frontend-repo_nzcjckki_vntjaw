export default function About() {
  return (
    <main className="bg-[#FDFBF8] text-[#2C2C2C]">
      <section className="pt-16 pb-10 bg-gradient-to-b from-[#FFF8E1] to-[#FDFBF8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Story</h1>
          <p className="mt-3 text-[#2C2C2C]/80 max-w-2xl mx-auto">
            From a small community class to a vibrant language home. Bale Basa is where
            Balinese warmth meets global friendship.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-[#EDE0CF]">
            <img
              src="https://images.unsplash.com/photo-1541392822223-8731c61b2300?q=80&w=1600&auto=format&fit=crop"
              alt="Community learning in an open-air pavilion"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold">Belajar dengan Hati</h2>
            <p className="mt-4 text-[#2C2C2C]/80 leading-relaxed">
              We believe language grows where people feel safe, seen, and inspired.
              Our sessions invite conversation, laughter, mistakes, and discovery.
              That’s the spirit of Menyama Braya — learning together as one family.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {["Community-driven", "Native-speaking mentors", "Real-life practice", "Accessible pricing"].map((f) => (
                <div key={f} className="rounded-xl bg-white border border-[#EDE0CF] p-4 shadow-sm">
                  <span className="font-semibold text-[#2E8C83]">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold">B.A.L.I. Values</h3>
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            {[{
              title: "Belonging",
              desc: "Everyone feels at home in our bale.",
            }, {
              title: "Authenticity",
              desc: "We show up honestly — progress over perfection.",
            }, {
              title: "Learning with Heart",
              desc: "Confidence first, grammar follows.",
            }, {
              title: "Inspiration",
              desc: "Every session sparks new horizons.",
            }].map((v) => (
              <div key={v.title} className="rounded-2xl border border-[#EDE0CF] p-5 bg-[#FDFBF8]">
                <div className="text-[#2E8C83] font-semibold">{v.title}</div>
                <p className="text-sm text-[#2C2C2C]/80 mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="rounded-3xl p-8 bg-[#EDE0CF] border border-[#C97B63]/30">
            <h4 className="text-2xl font-extrabold text-[#C97B63]">Ready to visit our bale?</h4>
            <p className="mt-1 text-[#2C2C2C]/80">Send us a message and we’ll welcome you with a smile. Suksma!</p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Bale%20Basa!%20I’m%20interested%20in%20learning%20more%20about%20your%20story."
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-[#2E8C83] text-white font-semibold hover:opacity-95"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
