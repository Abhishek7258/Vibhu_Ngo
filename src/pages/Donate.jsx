import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, CheckCircle, Star, Link2 } from 'lucide-react'
import { PageWrapper, Section, Card, SectionHeader, StaggerContainer, StaggerItem } from '../components/UI'

const donationAmounts = [500, 1000, 2500, 5000, 10000]

const impacts = [
  { amount: '₹500', impact: 'Provides health kit for one woman for a month' },
  { amount: '₹1,000', impact: 'Funds one teleconsultation camp in a village' },
  { amount: '₹2,500', impact: 'Covers skill training for one woman for 3 months' },
  { amount: '₹5,000', impact: 'Supports one peer group support circle for a month' },
  { amount: '₹10,000', impact: 'Fully funds an awareness camp for 100 women' },
]

const volunteerRoles = [
  { icon: '🏥', role: 'Healthcare Volunteer', desc: 'Help at medical camps, assist nurses, support patients.' },
  { icon: '📚', role: 'Education Volunteer', desc: 'Teach literacy, run workshops, mentor adolescent girls.' },
  { icon: '🧠', role: 'Counseling Support', desc: 'Trained counselors who run peer support sessions.' },
  { icon: '💻', role: 'Digital Trainer', desc: 'Teach mobile banking, digital safety, online services.' },
  { icon: '🌾', role: 'Field Coordinator', desc: 'Community outreach, beneficiary identification, logistics.' },
  { icon: '📣', role: 'Awareness Campaigner', desc: 'Spread the word on social media and in your community.' },
]

const partners = [
  { type: 'Corporate Partners', desc: 'CSR funding, employee volunteering, and skills-based support.' },
  { type: 'Healthcare Partners', desc: 'Hospitals, clinics, and pharmaceutical companies providing medical resources.' },
  { type: 'Academic Partners', desc: 'Universities and research institutions advancing our evidence base.' },
  { type: 'Government Partners', desc: 'Collaboration with state and district-level government bodies.' },
]

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState('')
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', phone: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const finalAmount = customAmount || selectedAmount

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-plum-100 text-plum-700 text-xs font-medium font-body tracking-wide mb-6">Take Action</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Make a <span className="text-gradient italic">Difference</span> Today
          </h1>
          <p className="text-slate-500 font-body max-w-xl mx-auto leading-relaxed">
            Donate, volunteer, or partner with us. Every contribution — big or small — changes the life of a woman in need.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      {/* <Section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Donate" title="Your Generosity Transforms Lives" subtitle="All donations are tax-exempt under Section 80G of the Income Tax Act." />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="p-8">
              <h3 className="font-display font-bold text-slate-800 text-xl mb-5">Choose an Amount</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {donationAmounts.map((amt) => (
                  <motion.button
                    key={amt}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => { setSelectedAmount(amt); setCustomAmount('') }}
                    className={`py-3 rounded-xl text-sm font-medium font-body transition-all ${
                      selectedAmount === amt && !customAmount
                        ? 'bg-gradient-to-br from-plum-600 to-rose-500 text-white shadow-md'
                        : 'bg-plum-50 text-plum-700 hover:bg-plum-100'
                    }`}
                  >
                    ₹{amt.toLocaleString()}
                  </motion.button>
                ))}
                <input
                  type="number"
                  placeholder="Custom ₹"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
                  className="col-span-3 py-3 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-100 text-slate-700 text-sm font-body"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-plum-600 to-rose-500 text-white font-medium font-body flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow mt-4"
              >
                <Heart className="w-4 h-4" fill="currentColor" />
                Donate ₹{Number(finalAmount || 0).toLocaleString()}
              </motion.button>
              <p className="text-xs text-slate-400 text-center mt-3 font-body">Secure payment via Razorpay / UPI</p>
            </Card>
            <div>
              <h3 className="font-display font-bold text-slate-800 text-xl mb-5">Your Impact</h3>
              <div className="space-y-3">
                {impacts.map(({ amount, impact }) => (
                  <div key={amount} className="flex items-start gap-3 p-4 bg-plum-50 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-plum-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-display font-bold text-plum-700 text-sm">{amount}</span>
                      <span className="text-slate-500 text-sm font-body"> — {impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section> */}

      {/* Volunteer */}
      <Section className="py-20 bg-gradient-to-br from-plum-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Volunteer" title="Join Our Family of Change-Makers" subtitle="We have roles for everyone — your skills are needed." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {volunteerRoles.map(({ icon, role, desc }) => (
              <div key={role} className="bg-white rounded-2xl p-5 card-shadow flex gap-4 items-start">
                <div className="text-3xl shrink-0">{icon}</div>
                <div>
                  <h4 className="font-display font-semibold text-slate-800 mb-1">{role}</h4>
                  <p className="text-slate-400 text-sm font-body">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Volunteer Form */}
          <Card className="max-w-2xl mx-auto p-8">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-slate-800 mb-2">Application Received!</h3>
                <p className="text-slate-500 font-body text-sm">We'll reach out to you within 48 hours.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display font-bold text-slate-800 text-xl mb-5">Apply to Volunteer</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[['name', 'Full Name', 'text'], ['email', 'Email', 'email'], ['phone', 'Phone Number', 'tel']].map(([field, placeholder, type]) => (
                      <div key={field} className={field === 'phone' ? '' : ''}>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={volunteerForm[field]}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, [field]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-100 text-slate-700 text-sm font-body"
                        />
                      </div>
                    ))}
                    <select
                      value={volunteerForm.role}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-plum-400 text-slate-700 text-sm font-body bg-white"
                    >
                      <option value="">Select Role</option>
                      {volunteerRoles.map(({ role }) => <option key={role}>{role}</option>)}
                    </select>
                  </div>
                  <textarea
                    placeholder="Why do you want to volunteer with us?"
                    rows={3}
                    value={volunteerForm.message}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-100 text-slate-700 text-sm font-body resize-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSubmitted(true)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-plum-600 to-rose-500 text-white font-medium font-body flex items-center justify-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    Submit Application
                  </motion.button>
                </div>
              </>
            )}
          </Card>
        </div>
      </Section>

      {/* Partnerships */}
      <Section className="py-20 bg-gradient-to-br from-plum-900 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Partnerships" title="Let's Build Together" subtitle="We welcome partnerships that amplify our reach and deepen our impact." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {partners.map(({ type, desc }) => (
              <StaggerItem key={type}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors h-full">
                  <Link2 className="w-6 h-6 text-rose-300 mb-3" />
                  <h3 className="font-display font-bold text-white mb-2">{type}</h3>
                  <p className="text-plum-200 text-sm font-body">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-plum-700 font-medium text-sm hover:bg-plum-50 transition-colors">
              <Star className="w-4 h-4" /> Explore Partnership
            </a>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}
