import { motion } from 'framer-motion'
import { Shield, Brain, BookOpen, Leaf, Star, Users, Stethoscope, Heart, Wind, Dumbbell, Scale, Globe } from 'lucide-react'
import { PageWrapper, Section, Card, SectionHeader, StaggerContainer, StaggerItem } from '../components/UI'

const services = [
  {
    icon: Shield,
    title: 'Healthcare',
    gradient: 'from-plum-500 to-plum-700',
    light: 'from-plum-50 to-plum-100',
    features: [
      { icon: Stethoscope, name: 'Teleconsultation', desc: 'Connect with qualified doctors via phone or video — free of cost for all beneficiaries.' },
      { icon: Heart, name: 'Diagnostics Support', desc: 'Subsidized blood tests, maternal health checkups, and diagnostic camps in remote villages.' },
      { icon: Leaf, name: 'Ayurvedic Care', desc: 'Traditional herbal treatments and Panchakarma therapies delivered by certified practitioners.' },
    ],
  },
  {
    icon: Brain,
    title: 'Mental Wellness',
    gradient: 'from-rose-500 to-rose-700',
    light: 'from-rose-50 to-rose-100',
    features: [
      { icon: Heart, name: 'Counseling', desc: 'Individual and group counseling sessions by trained mental health volunteers and professionals.' },
      { icon: Users, name: 'Peer Support Groups', desc: 'Safe circles where women share experiences, support each other, and heal collectively.' },
      { icon: Brain, name: 'Trauma Recovery', desc: 'Structured programs for survivors of domestic violence and gender-based trauma.' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Awareness Programs',
    gradient: 'from-pink-500 to-plum-600',
    light: 'from-pink-50 to-plum-50',
    features: [
      { icon: BookOpen, name: 'Health Literacy', desc: 'Workshops on reproductive health, nutrition, hygiene, and preventive care.' },
      { icon: Scale, name: 'Legal Rights', desc: 'Know-your-rights sessions covering property, domestic violence laws, and entitlements.' },
      { icon: Globe, name: 'Digital Awareness', desc: 'Training in safe internet use, mobile banking, and digital government services.' },
    ],
  },
  {
    icon: Wind,
    title: 'Spiritual Wellbeing',
    gradient: 'from-violet-500 to-plum-600',
    light: 'from-violet-50 to-plum-50',
    features: [
      { icon: Wind, name: 'Kumbhak Therapy', desc: 'Breath-retention practices that reduce anxiety, improve focus, and restore inner calm.' },
      { icon: Leaf, name: 'Meditation', desc: 'Daily guided meditation sessions adapted for rural women with busy lives and limited time.' },
      { icon: Star, name: 'Mindfulness Practices', desc: 'Simple awareness exercises that can be practiced at home, integrated into daily routines.' },
    ],
  },
  {
    icon: Dumbbell,
    title: 'Skill Development',
    gradient: 'from-rose-500 to-pink-600',
    light: 'from-rose-50 to-pink-50',
    features: [
      { icon: Dumbbell, name: 'Vocational Training', desc: 'Tailoring, handicrafts, food processing, and other income-generating skills taught in community centres.' },
      { icon: Scale, name: 'Financial Literacy', desc: 'Savings, microfinance, and entrepreneurship education empowering women to manage their own money.' },
      { icon: Globe, name: 'SHG Linkage', desc: 'Connecting women to Self-Help Groups and government welfare schemes for sustained economic support.' },
    ],
  },
]

export default function Services() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-plum-100 text-plum-700 text-xs font-medium font-body tracking-wide mb-6">What We Do</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Our <span className="text-gradient italic">Services</span>
          </h1>
          <p className="text-slate-500 font-body max-w-2xl mx-auto leading-relaxed">
            Five integrated pillars of support — designed to address every dimension of a woman's wellbeing, from physical health to economic freedom.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map(({ icon: Icon, title, gradient, light, features }, idx) => (
        <Section key={title} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-plum-50 to-rose-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-slate-800">{title}</h2>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-plum-400 to-rose-400 mt-1" />
              </div>
            </div>
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {features.map(({ icon: FIcon, name, desc }) => (
                <StaggerItem key={name}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className={`bg-gradient-to-br ${light} rounded-2xl p-6 h-full border border-white card-shadow hover:card-shadow-hover transition-shadow cursor-default`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-md`}>
                      <FIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-slate-800 text-lg mb-2">{name}</h3>
                    <p className="text-slate-500 text-sm font-body leading-relaxed">{desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="py-16 bg-gradient-to-br from-plum-900 to-rose-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Need Our Services?</h2>
          <p className="text-plum-200 font-body mb-8">All our services are free or highly subsidized for women in need. Reach out to us today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+91XXXXXXXXXX" className="px-8 py-3 rounded-full bg-white text-plum-700 font-medium text-sm hover:bg-plum-50 transition-colors">
              Call Us Now
            </a>
            <a href="/contact" className="px-8 py-3 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}
