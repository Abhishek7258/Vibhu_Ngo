import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-plum-900 via-plum-800 to-rose-900 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-1">
              Ready to Make a Difference?
            </h3>
            <p className="text-plum-200 text-sm font-body">Join us in empowering women across rural India.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/donate" className="px-6 py-3 rounded-full bg-white text-plum-700 font-medium text-sm hover:bg-plum-50 transition-colors">
              Connect Now
            </Link>
            <Link to="/donate" className="px-6 py-3 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors">
              Volunteer
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-plum-400 to-rose-400 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="font-display font-bold text-lg">Vibhu Manaswini</span>
          </div>
          <p className="text-plum-300 text-sm leading-relaxed font-body">
            A women's health and empowerment initiative bringing healthcare, awareness, and dignity to every woman.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Our Services'], ['/impact', 'Our Impact'], ['/team', 'Our Team']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-plum-300 text-sm hover:text-white transition-colors font-body">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            {['Healthcare', 'Mental Wellness', 'Awareness Programs', 'Spiritual Wellbeing', 'Skill Development'].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-plum-300 text-sm hover:text-white transition-colors font-body">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
              <span className="text-plum-300 text-sm font-body">Patna, Bihar, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-rose-400 shrink-0" />
              <a href="tel:+91XXXXXXXXXX" className="text-plum-300 text-sm hover:text-white transition-colors font-body">+91 XXXX XXX XXX</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-rose-400 shrink-0" />
              <a href="mailto:info@vibhumanaswini.org" className="text-plum-300 text-sm hover:text-white transition-colors font-body">info@vibhumanaswini.org</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-plum-400 text-xs font-body">
          <span>© 2024 Vibhu Manaswini. All rights reserved.</span>
          <span>Made with <Heart className="inline w-3 h-3 text-rose-400" fill="currentColor" /> for women's empowerment</span>
        </div>
      </div>
    </footer>
  )
}
