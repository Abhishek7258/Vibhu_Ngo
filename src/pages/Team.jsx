import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import { PageWrapper, Section, SectionHeader, StaggerContainer, StaggerItem } from '../components/UI'

const board = [
  { name: 'Dr. Anita Sharma', role: 'Founder & President', expertise: 'Public Health | Women\'s Rights', emoji: '👩‍⚕️', bio: 'A public health physician with 20 years of experience in rural healthcare delivery.' },
  { name: 'Priya Verma', role: 'Executive Director', expertise: 'NGO Management | Social Work', emoji: '👩‍💼', bio: 'Former government officer who left her career to serve the communities she grew up in.' },
  { name: 'Dr. Suresh Kumar', role: 'Medical Director', expertise: 'Gynecology | Maternal Health', emoji: '👨‍⚕️', bio: 'Senior gynecologist and maternal health specialist with expertise in rural settings.' },
  { name: 'Kavita Singh', role: 'Director, Programs', expertise: 'Community Development | Education', emoji: '👩‍🏫', bio: 'Designed and scaled community programs reaching over 50,000 beneficiaries.' },
]

const ambassadors = [
  { name: 'Meenakshi Jha', role: 'Cultural Ambassador', emoji: '🎭', desc: 'Classical dancer and activist using art to spread awareness about women\'s rights.' },
  { name: 'Ritu Pandey', role: 'Health Ambassador', emoji: '💊', desc: 'Retired nurse spreading health literacy in rural communities through lived experience.' },
  { name: 'Nandini Rao', role: 'Education Ambassador', emoji: '📚', desc: 'School principal championing girls\' education and preventing school dropout.' },
  { name: 'Shreya Mishra', role: 'Digital Ambassador', emoji: '💻', desc: 'Tech professional training rural women in digital skills and mobile banking.' },
]

const volunteers = [
  { area: 'Healthcare', count: 85, emoji: '🏥' },
  { area: 'Counseling', count: 42, emoji: '🧠' },
  { area: 'Education', count: 67, emoji: '📚' },
  { area: 'Skill Trainers', count: 56, emoji: '💼' },
  { area: 'Field Workers', count: 90, emoji: '🌾' },
]

function ProfileCard({ name, role, emoji, bio, expertise }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-shadow p-6 h-full flex flex-col"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-plum-200 to-rose-200 flex items-center justify-center text-4xl mb-4 mx-auto shadow-md">
        {emoji}
      </div>
      <div className="text-center flex-1">
        <h3 className="font-display font-bold text-slate-800 text-lg mb-0.5">{name}</h3>
        <p className="text-plum-600 text-sm font-medium font-body mb-1">{role}</p>
        {expertise && <p className="text-slate-400 text-xs font-body mb-3">{expertise}</p>}
        {bio && <p className="text-slate-500 text-sm font-body leading-relaxed">{bio}</p>}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {[Linkedin, Twitter, Mail].map((Icon, i) => (
          <a key={i} href="#" className="w-7 h-7 rounded-full bg-plum-50 flex items-center justify-center hover:bg-plum-100 transition-colors">
            <Icon className="w-3.5 h-3.5 text-plum-600" />
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-plum-100 text-plum-700 text-xs font-medium font-body tracking-wide mb-6">Our People</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            The <span className="text-gradient italic">Heart</span> Behind the Work
          </h1>
          <p className="text-slate-500 font-body max-w-2xl mx-auto leading-relaxed">
            A passionate team of doctors, counselors, educators, and community workers united by a single purpose.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Leadership" title="Board of Directors" subtitle="Experienced leaders who guide our strategy, governance, and mission." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {board.map((m) => (
              <StaggerItem key={m.name}>
                <ProfileCard {...m} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Ambassadors */}
      <Section className="py-20 bg-gradient-to-br from-plum-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Ambassadors" title="Voices of Change" subtitle="Passionate advocates who use their platforms to amplify our mission." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ambassadors.map(({ name, role, emoji, desc }) => (
              <StaggerItem key={name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl card-shadow p-6 text-center h-full"
                >
                  <div className="text-5xl mb-4">{emoji}</div>
                  <h3 className="font-display font-bold text-slate-800 mb-1">{name}</h3>
                  <p className="text-plum-600 text-xs font-body mb-3 font-medium">{role}</p>
                  <p className="text-slate-500 text-sm font-body leading-relaxed">{desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Volunteers */}
      <Section className="py-20 bg-gradient-to-br from-plum-900 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Volunteers" title="340+ Strong & Growing" subtitle="Volunteers are the backbone of everything we do. From field visits to counseling sessions, they make it possible." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
            {volunteers.map(({ area, count, emoji }) => (
              <div key={area} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-white/15 transition-colors">
                <div className="text-4xl mb-2">{emoji}</div>
                <div className="font-display text-3xl font-bold text-white mb-1">{count}+</div>
                <p className="text-plum-200 text-xs font-body">{area}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-4">Want to Join Our Team?</h3>
            <p className="text-plum-200 font-body mb-6">We welcome volunteers from all backgrounds — doctors, teachers, lawyers, students, and passionate citizens.</p>
            <a
              href="/donate"
              className="inline-flex px-8 py-3 rounded-full bg-white text-plum-700 font-medium text-sm hover:bg-plum-50 transition-colors"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}
