import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import ProgramsPage from "./pages/ProgramsPage";
import Volunteer from "./pages/Volunteer";

function Home() {
  return (
    <div>
      <Hero />

      {/* About / Story */}
      <section className="bg-[#FDFBF8] py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-[#EDE0CF]">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
              alt="Bamboo pavilion with natural light"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2C]">
              From Putra Bali to <span className="text-[#C97B63]">Bale Basa</span>
            </h2>
            <p className="mt-4 text-[#2C2C2C]/80 leading-relaxed">
              Bale Basa is the new identity of Putra Bali English Course — a
              community-based English learning hub in Bali. Inspired by the word
              <em className="font-semibold"> Bale </em>(pavilion) and
              <em className="font-semibold"> Basa </em>(language), we create a
              space where learning feels like belonging.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white border border-[#EDE0CF] p-4 shadow-sm">
                <div className="text-[#2E8C83] font-bold">Belonging</div>
                <p className="text-sm text-[#2C2C2C]/70">Everyone feels at home.</p>
              </div>
              <div className="rounded-xl bg-white border border-[#EDE0CF] p-4 shadow-sm">
                <div className="text-[#2E8C83] font-bold">Authenticity</div>
                <p className="text-sm text-[#2C2C2C]/70">Learn with honesty and heart.</p>
              </div>
              <div className="rounded-xl bg-white border border-[#EDE0CF] p-4 shadow-sm">
                <div className="text-[#2E8C83] font-bold">Learning with Heart</div>
                <p className="text-sm text-[#2C2C2C]/70">Build confidence, not just vocabulary.</p>
              </div>
              <div className="rounded-xl bg-white border border-[#EDE0CF] p-4 shadow-sm">
                <div className="text-[#2E8C83] font-bold">Inspiration</div>
                <p className="text-sm text-[#2C2C2C]/70">Every class sparks new possibilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <Programs />

      {/* Values */}
      <Values />

      {/* Testimonials */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">Voices from Our Pavilion</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[{
              name: "Ayu, Student",
              text: "I never thought learning English could be this fun!",
              img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
            },{
              name: "Tom, Volunteer",
              text: "Teaching here feels like family — Suksma!",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
            },{
              name: "Made, Parent",
              text: "My daughter gained confidence and smiles.",
              img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop"
            }].map((t) => (
              <div key={t.name} className="bg-[#FDFBF8] border border-[#EDE0CF] rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy"/>
                  <div className="font-semibold text-[#2C2C2C]">{t.name}</div>
                </div>
                <p className="mt-4 text-[#2C2C2C]/80">“{t.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Block */}
      <section className="bg-[#EDE0CF] py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <a href="#contact" className="rounded-2xl bg-white border border-[#C97B63]/30 p-6 shadow hover:shadow-md transition">
            <h3 className="text-2xl font-extrabold text-[#C97B63]">I want to Learn English</h3>
            <p className="text-[#2C2C2C]/80 mt-1">Join the Bale — start your journey with heart.</p>
          </a>
          <a href="#contact" className="rounded-2xl bg-white border border-[#2E8C83]/30 p-6 shadow hover:shadow-md transition">
            <h3 className="text-2xl font-extrabold text-[#2E8C83]">I want to Volunteer</h3>
            <p className="text-[#2C2C2C]/80 mt-1">Share your time and inspire local learners.</p>
          </a>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </div>
  );
}

function App() {
  return (
    <div className="font-inter bg-[#FDFBF8] text-[#2C2C2C] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
