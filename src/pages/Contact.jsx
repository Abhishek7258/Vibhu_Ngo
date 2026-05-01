import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Send, CheckCircle } from 'lucide-react'
import { PageWrapper, Section, Card, SectionHeader } from '../components/UI'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-plum-100 text-plum-700 text-xs font-medium font-body tracking-wide mb-6">Get in Touch</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            We'd Love to <span className="text-gradient italic">Hear From You</span>
          </h1>
          <p className="text-slate-500 font-body max-w-xl mx-auto leading-relaxed">
            Whether you're looking for support, want to partner with us, or simply have a question — we're here.
          </p>
        </div>
      </section>

      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
              {[
                { icon: MapPin, label: 'Address', value: 'Patna, Bihar – 800001, India', color: 'text-plum-500' },
                { icon: Phone, label: 'Phone', value: '+91 XXXX XXX XXX', color: 'text-rose-500' },
                { icon: Mail, label: 'Email', value: 'info@vibhumanaswini.org', color: 'text-plum-500' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-plum-50 flex items-center justify-center shrink-0">
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-body text-slate-400 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-slate-700 font-body text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-body text-slate-400 font-medium uppercase tracking-wide mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-plum-100 flex items-center justify-center hover:bg-plum-200 transition-colors">
                    <Icon className="w-4 h-4 text-plum-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-plum-50 to-rose-50 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-plum-400 mx-auto mb-2" />
                  <p className="text-slate-500 text-sm font-body">Patna, Bihar</p>
                  <p className="text-plum-600 text-xs font-body font-medium">Google Map</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 font-body">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 px-6 py-2 rounded-full bg-plum-100 text-plum-700 text-sm font-body hover:bg-plum-200 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {[['name', 'Your Name', 'text'], ['email', 'Email Address', 'email']].map(([field, placeholder, type]) => (
                        <div key={field}>
                          <label className="block text-xs font-body font-medium text-slate-500 uppercase tracking-wide mb-1.5">{placeholder}</label>
                          <input
                            type={type}
                            required
                            value={form[field]}
                            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                            placeholder={placeholder}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-100 text-slate-700 text-sm font-body transition-all"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-slate-500 uppercase tracking-wide mb-1.5">Subject</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-100 text-slate-700 text-sm font-body transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-slate-500 uppercase tracking-wide mb-1.5">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us more..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-100 text-slate-700 text-sm font-body transition-all resize-none"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-plum-600 to-rose-500 text-white font-medium font-body flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </motion.button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}
