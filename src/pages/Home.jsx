import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Users, Star, Shield, Sprout, Brain, BookOpen, ArrowRight, Quote, ChevronRight } from 'lucide-react'
import { PageWrapper, Section, Button, Card, AnimatedCounter, SectionHeader, StaggerContainer, StaggerItem } from '../components/UI'

// ── Data ──────────────────────────────────────────────
const stats = [
  { label: 'Women Helped', value: 12400, suffix: '+' },
  { label: 'Volunteers', value: 340, suffix: '+' },
  { label: 'Districts Covered', value: 18, suffix: '' },
  { label: 'Programs Run', value: 95, suffix: '+' },
]

const services = [
  { icon: Shield, title: 'Healthcare', desc: 'Teleconsultation, diagnostics, and Ayurvedic care reaching women in remote areas.', color: 'from-plum-500 to-plum-600' },
  { icon: Brain, title: 'Mental Wellness', desc: 'Counseling, therapy, and peer support groups for emotional resilience.', color: 'from-rose-500 to-rose-600' },
  { icon: BookOpen, title: 'Awareness Programs', desc: 'Health literacy, hygiene, legal rights, and reproductive education campaigns.', color: 'from-pink-500 to-plum-500' },
  { icon: Sprout, title: 'Spiritual Wellbeing', desc: 'Meditation, kumbhak therapy, and mindfulness practices for inner peace.', color: 'from-violet-500 to-plum-500' },
  { icon: Star, title: 'Skill Development', desc: 'Vocational training and financial literacy for economic independence.', color: 'from-rose-500 to-pink-500' },
  { icon: Users, title: 'Community Building', desc: 'Creating safe spaces and support networks for lasting social change.', color: 'from-plum-600 to-violet-600' },
]

const testimonials = [
  { name: 'Sunita Devi', role: 'Beneficiary, Muzaffarpur', text: 'Vibhu Manaswini gave me the courage to seek medical help and learn new skills. Today I run my own tailoring business.' },
  { name: 'Priya Kumari', role: 'Volunteer, Patna', text: 'Volunteering here changed my perspective. Seeing women transform their lives is the most rewarding experience.' },
  { name: 'Dr. Asha Rani', role: 'Healthcare Partner', text: 'The teleconsultation program has reached thousands of women who had never seen a doctor before. Incredible initiative.' },
]

// ── Component ─────────────────────────────────────────
export default function Home() {
  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden pt-16">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-plum-200/40 to-rose-200/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-plum-100/50 to-pink-100/50 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-rose-50/30 to-plum-50/30 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-plum-100 text-plum-700 text-xs font-medium font-body tracking-wide mb-6">
                🌸 Women's Health & Empowerment Initiative
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-[1.1] mb-6"
            >
              Empowering Women,{' '}
              <span className="text-gradient italic">Transforming</span>{' '}
              Generations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="font-body text-lg text-slate-500 leading-relaxed mb-10 max-w-xl"
            >
              A grassroots initiative bringing healthcare, mental wellness, awareness, and financial independence to rural women and adolescent girls across Bihar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button to="/donate" size="lg" icon={<Heart className="w-4 h-4" fill="currentColor" />}>
                Donate Now
              </Button>
              <Button to="/about" variant="secondary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Get Involved
              </Button>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {['Healthcare', 'Mental Wellness', 'Skill Development', 'Spiritual Care'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/80 rounded-full text-xs font-body text-slate-600 shadow-sm border border-plum-100">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative illustration area */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-plum-200 to-rose-200 opacity-60" />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-plum-100 to-rose-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">🌸</div>
                <p className="font-display text-plum-800 font-semibold text-sm">Vibhu Manaswini</p>
                <p className="text-plum-600 text-xs font-body">Empowering Lives</p>
              </div>
            </div>
            {/* Orbiting dots */}
            {[0, 90, 180, 270].map((deg, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-plum-500 to-rose-500"
                style={{
                  top: `${50 + 47 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${50 + 47 * Math.cos((deg * Math.PI) / 180)}%`,
                  transform: 'translate(-50%,-50%)',
                }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <Section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ label, value, suffix }) => (
              <Card key={label} className="p-6 text-center">
                <div className="font-display text-4xl font-bold text-gradient mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <p className="text-slate-500 text-sm font-body">{label}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ABOUT SNIPPET ── */}
      <Section className="py-20 bg-gradient-to-br from-plum-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader
                badge="Our Story"
                title="A Movement Born from Empathy"
                subtitle=""
                center={false}
              />
              <p className="text-slate-500 font-body leading-relaxed mb-4">
                Vibhu Manaswini was founded with a singular belief: every woman deserves access to healthcare, dignity, and opportunity — regardless of her geography or circumstance.
              </p>
              <p className="text-slate-500 font-body leading-relaxed mb-8">
                Working across rural Bihar, we reach adolescent girls, pregnant women, elderly women, and survivors — meeting them where they are and walking alongside them toward a life of health, confidence, and independence.
              </p>
              <Button to="/about" variant="secondary" icon={<ChevronRight className="w-4 h-4" />}>
                Read Our Story
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🏥', title: 'Healthcare Access', desc: 'Bringing quality care to doorsteps' },
                { emoji: '🧠', title: 'Mental Strength', desc: 'Building resilience from within' },
                { emoji: '📚', title: 'Education', desc: 'Knowledge as the greatest equalizer' },
                { emoji: '💼', title: 'Economic Power', desc: 'Skills for financial freedom' },
              ].map((item) => (
                <Card key={item.title} className="p-5">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h4 className="font-display font-semibold text-slate-800 text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs font-body">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What We Do" title="Our Core Programs" subtitle="Holistic support covering every dimension of a woman's wellbeing — from body to mind, spirit to livelihood." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, color }) => (
              <StaggerItem key={title}>
                <Card className="p-6 h-full">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-slate-800 text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm font-body leading-relaxed">{desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-10">
            <Button to="/services" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
              Explore All Services
            </Button>
          </div>
        </div>
      </Section>

      {/* ── IMPACT HIGHLIGHT ── */}
      <Section className="py-20 bg-gradient-to-br from-plum-900 via-plum-800 to-rose-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-white" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-plum-200 text-xs font-medium font-body tracking-wide mb-6">Our Impact</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Every Number Is a{' '}
            <span className="text-rose-300 italic">Woman's Story</span>
          </h2>
          <p className="text-plum-200 font-body max-w-xl mx-auto mb-12 leading-relaxed">
            Behind every statistic is a real woman — a mother, a daughter, a dreamer — whose life we've had the privilege of touching.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map(({ label, value, suffix }) => (
              <div key={label} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <p className="text-plum-300 text-sm font-body">{label}</p>
              </div>
            ))}
          </div>
          <Button to="/impact" variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            See Full Impact Report
          </Button>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Voices" title="What They Say" subtitle="Stories of transformation from the women and partners we serve." />
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text }) => (
              <StaggerItem key={name}>
                <Card className="p-6 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-plum-200 mb-4" fill="currentColor" />
                  <p className="text-slate-500 font-body text-sm leading-relaxed flex-1 mb-6">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-plum-400 to-rose-400 flex items-center justify-center text-white font-display font-bold text-sm">
                      {name[0]}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-slate-800 text-sm">{name}</p>
                      <p className="text-slate-400 text-xs font-body">{role}</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section className="py-20 bg-gradient-to-br from-plum-50 via-rose-50 to-plum-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="text-5xl mb-6">🌺</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Be the Change You Want to See
          </h2>
          <p className="text-slate-500 font-body mb-8 leading-relaxed">
            Whether you donate, volunteer, or simply spread the word — every action matters in this journey of empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/donate" size="lg" icon={<Heart className="w-4 h-4" fill="currentColor" />}>
              Donate Now
            </Button>
            <Button to="/donate" variant="secondary" size="lg">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}
