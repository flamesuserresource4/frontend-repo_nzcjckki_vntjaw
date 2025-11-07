import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-[#FDFBF8] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-2xl font-extrabold">
            <span className="inline-block w-6 h-6 bg-[#C97B63] rounded-sm" />
            Bale Basa
          </div>
          <p className="mt-3 text-sm text-[#FDFBF8]/80">
            Formerly Putra Bali English Course — connecting Bali with the world
            through language and heart.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Links</div>
          <ul className="space-y-2 text-sm text-[#FDFBF8]/80">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#programs" className="hover:text-white">Programs</a></li>
            <li><a href="#contact" className="hover:text-white">Volunteer</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-[#FDFBF8]/80">
            <li className="flex items-center gap-2"><Phone size={16}/> +62 812-3456-7890</li>
            <li className="flex items-center gap-2"><Mail size={16}/> hello@balebasa.org</li>
            <li className="flex items-center gap-2"><Instagram size={16}/> @balebasa</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/10 text-xs text-[#FDFBF8]/60">
        © {new Date().getFullYear()} Bale Basa. Menyama Braya.
      </div>
    </footer>
  );
};

export default Footer;
