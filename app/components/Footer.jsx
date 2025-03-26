import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t mb-0 border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">TalentConnect</h3>
            <p className="text-gray-400">
              Connecting exceptional talent with casting professionals worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/talent" className="text-gray-400 hover:text-white transition">Browse Talent</a></li>
              <li><a href="/cast" className="text-gray-400 hover:text-white transition">Casting Calls</a></li>
              <li><a href="" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="/Blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Audition Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Casting Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={18} />
                <span>contact@talentconnect.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="text-gray-400 mt-4">
                123 Industry Plaza<br />
                Hollywood, CA 90210<br />
                United States
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} TalentConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;