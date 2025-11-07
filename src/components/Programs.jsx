const programs = [
  {
    title: "Private Lessons",
    desc: "Flexible one-on-one sessions tailored to your goals.",
    img:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "School Workshops",
    desc: "Partnered programs bringing English to local schools.",
    img:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Conversation Club",
    desc: "Weekly meetups with native volunteers to practice speaking.",
    img:
      "https://images.unsplash.com/photo-1523580846011-44a1b1f9a1ec?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Volunteer Program",
    desc: "Meaningful teaching opportunities for foreigners in Bali.",
    img:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="bg-[#FDFBF8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2C]">
            Learn, Share, and Connect through English
          </h2>
          <p className="mt-3 text-[#2C2C2C]/70">
            Choose the path that fits your journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl overflow-hidden border border-[#EDE0CF] bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#2C2C2C]">{p.title}</h3>
                <p className="text-sm text-[#2C2C2C]/70 mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
