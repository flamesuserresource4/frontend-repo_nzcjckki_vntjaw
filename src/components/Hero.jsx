import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "6281234567890"; // sample number in international format without +
  const whatsappMsg = encodeURIComponent(
    "Halo Bale Basa! I’d love to book a free trial."
  );

  return (
    <section className="relative overflow-hidden bg-[#FFF8E1]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#EDE0CF] rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C97B63]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-white/70 text-[#2E8C83] font-semibold px-3 py-1 rounded-full shadow-sm mb-4">
              Menyama Braya • Community First
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#2C2C2C]">
              Welcome to <span className="text-[#C97B63]">Bale Basa</span> —
              <br className="hidden md:block" /> The Pavilion of Languages
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[#2C2C2C]/80">
              Learn English with native volunteers in Bali. A warm community
              where language connects hearts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                className="inline-flex items-center gap-2 bg-[#2E8C83] text-white px-6 py-3 rounded-lg shadow hover:opacity-95 transition"
              >
                Book Free Trial <MessageCircle size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#2E8C83] border border-[#2E8C83]/30 px-6 py-3 rounded-lg shadow-sm hover:bg-[#EDE0CF]/60 transition"
              >
                Join as Volunteer <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-[#EDE0CF]">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop"
                alt="Open-air class in Bali with smiles and natural light"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 border border-[#EDE0CF]">
              <p className="text-sm text-[#2C2C2C]">
                Formerly <span className="font-semibold">Putra Bali English Course</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="-mb-1" aria-hidden>
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,0 L0,0 Z" fill="#FDFBF8" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
