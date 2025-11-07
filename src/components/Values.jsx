const values = [
  {
    key: "Belonging",
    desc: "Everyone feels at home.",
    color: "#C97B63",
  },
  {
    key: "Authenticity",
    desc: "Learn with honesty and heart.",
    color: "#2E8C83",
  },
  {
    key: "Learning with Heart",
    desc: "Build confidence, not just vocabulary.",
    color: "#EDE0CF",
  },
  {
    key: "Inspiration",
    desc: "Every class sparks new possibilities.",
    color: "#FFF8E1",
  },
];

const Values = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2C2C2C] mb-10">
          Our B.A.L.I. Values
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {values.map((v) => (
            <div
              key={v.key}
              className="rounded-2xl border border-[#EDE0CF] p-5 shadow-sm bg-[#FDFBF8]"
              style={{ backgroundColor: v.color === "#EDE0CF" ? "#FDFBF8" : "white" }}
            >
              <div className="text-2xl font-bold text-[#2C2C2C]">{v.key}</div>
              <p className="mt-2 text-[#2C2C2C]/70">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
