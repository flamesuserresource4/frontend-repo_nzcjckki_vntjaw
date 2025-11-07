import { useState } from "react";
import { Send, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    time: "",
    goal: "",
    message: "",
  });

  const whatsappNumber = "6281234567890"; // sample number

  const buildWhatsAppUrl = () => {
    const text = `Halo Bale Basa!\nNama: ${form.name}\nWhatsApp: ${form.phone}\nPreferred Time: ${form.time}\nGoal: ${form.goal}\nMessage: ${form.message}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(), "_blank");
  };

  return (
    <section id="contact" className="bg-[#FFF8E1] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2C]">
            Book Your Free 30-Minute Trial
          </h2>
          <p className="mt-2 text-[#2C2C2C]/70">
            Tell us your dream — we’ll help you speak it.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white rounded-2xl shadow border border-[#EDE0CF] p-6 grid md:grid-cols-2 gap-4"
        >
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#2C2C2C]">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              placeholder="Your full name"
              className="mt-1 rounded-lg border border-[#EDE0CF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E8C83]/30"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#2C2C2C]">Phone (WhatsApp)</label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              required
              placeholder="e.g., +62 812-xxx"
              className="mt-1 rounded-lg border border-[#EDE0CF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E8C83]/30"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#2C2C2C]">Preferred Time</label>
            <input
              name="time"
              value={form.time}
              onChange={onChange}
              placeholder="Morning / Afternoon / Evening"
              className="mt-1 rounded-lg border border-[#EDE0CF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E8C83]/30"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#2C2C2C]">Learning Goal</label>
            <input
              name="goal"
              value={form.goal}
              onChange={onChange}
              placeholder="Conversation, IELTS, Travel, etc."
              className="mt-1 rounded-lg border border-[#EDE0CF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E8C83]/30"
            />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium text-[#2C2C2C]">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              placeholder="Share your story or any questions."
              className="mt-1 rounded-lg border border-[#EDE0CF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E8C83]/30"
            />
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#C97B63] text-white px-6 py-3 rounded-lg shadow hover:opacity-95 transition"
            >
              <Send size={18} /> Suksma! Send My Message
            </button>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              className="inline-flex items-center gap-2 text-[#2E8C83] hover:underline"
              rel="noreferrer"
            >
              <Phone size={18} /> Quick chat via WhatsApp
            </a>
          </div>
        </form>
        <p className="text-center mt-4 text-sm text-[#2C2C2C]/70">
          Suksma for being part of our family.
        </p>
      </div>
    </section>
  );
};

export default Contact;
