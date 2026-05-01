import { MapPin } from 'lucide-react'
import { PageWrapper, Section, Card, AnimatedCounter, SectionHeader, StaggerContainer, StaggerItem } from '../components/UI'

const stats = [
  { label: 'Women Helped', value: 12400, suffix: '+', emoji: '👩' },
  { label: 'Volunteers', value: 340, suffix: '+', emoji: '🤝' },
  { label: 'Districts Covered', value: 18, suffix: '', emoji: '🗺️' },
  { label: 'Programs Run', value: 95, suffix: '+', emoji: '📋' },
  { label: 'Healthcare Camps', value: 210, suffix: '+', emoji: '🏥' },
  { label: 'Skills Trained', value: 3800, suffix: '+', emoji: '💼' },
]

const categories = [
  { name: 'Adolescent Girls', count: '3,200+', emoji: '👧', desc: 'Menstrual health, education, and rights awareness' },
  { name: 'Pregnant Women', count: '2,100+', emoji: '🤱', desc: 'Antenatal care, nutrition, and safe delivery support' },
  { name: 'Rural Women (18–45)', count: '5,400+', emoji: '👩', desc: 'Healthcare, skill development, and livelihood' },
  { name: 'Elderly Women', count: '1,700+', emoji: '👵', desc: 'Geriatric care, mental wellness, and social support' },
]

const districts = ['Patna', 'Muzaffarpur', 'Gaya', 'Bhagalpur', 'Darbhanga', 'Nalanda', 'Vaishali', 'Sitamarhi', 'Madhubani', 'Purnia', 'Katihar', 'Samastipur', 'Begusarai', 'Saran', 'Siwan', 'Gopalganj', 'Motihari', 'Bettiah']

const stories = [
  { name: 'Rani Devi', district: 'Muzaffarpur', story: 'A 28-year-old mother of three, Rani had never visited a hospital until Vibhu Manaswini\'s teleconsultation camp came to her village. Diagnosed with severe anemia, she received treatment, nutrition support, and follow-up care. Today she is healthy and runs a small tiffin business.', tag: 'Healthcare' },
  { name: 'Sarita Kumari', district: 'Darbhanga', story: 'Sarita dropped out of school at 14. At 22, she joined our skill development centre and learned tailoring. Within a year she started her own boutique and now employs three other women from her village.', tag: 'Skill Development' },
  { name: 'Meera Prasad', district: 'Gaya', story: 'After years of domestic violence, Meera found refuge in our peer support group. With legal aid, mental health counseling, and economic support, she rebuilt her life — and now volunteers as a counselor herself.', tag: 'Mental Wellness' },
]

export default function Impact() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-plum-100 text-plum-700 text-xs font-medium font-body tracking-wide mb-6">Our Impact</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Numbers with a <span className="text-gradient italic">Human Face</span>
          </h1>
          <p className="text-slate-500 font-body max-w-2xl mx-auto leading-relaxed">
            Every statistic represents a real woman whose life has changed. Here's the story of our collective impact.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="By the Numbers" title="Measuring What Matters" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map(({ label, value, suffix, emoji }) => (
              <Card key={label} className="p-6 text-center">
                <div className="text-4xl mb-3">{emoji}</div>
                <div className="font-display text-4xl font-bold text-gradient mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <p className="text-slate-500 text-sm font-body">{label}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Beneficiaries */}
      <Section className="py-20 bg-gradient-to-br from-plum-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Who We Serve" title="Beneficiary Categories" subtitle="Our programs are designed for the most underserved groups of women across Bihar." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(({ name, count, emoji, desc }) => (
              <StaggerItem key={name}>
                <Card className="p-6 text-center h-full">
                  <div className="text-5xl mb-3">{emoji}</div>
                  <div className="font-display text-2xl font-bold text-gradient mb-1">{count}</div>
                  <h3 className="font-display font-semibold text-slate-800 mb-2">{name}</h3>
                  <p className="text-slate-400 text-xs font-body leading-relaxed">{desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Coverage Map */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Geographic Reach" title="Districts We Serve" subtitle="We are actively present in 18 districts of Bihar, with plans to expand to all 38." />
          <div className="bg-gradient-to-br from-plum-50 to-rose-50 rounded-3xl p-8">
            {/* Map placeholder */}
            <div className="bg-white rounded-2xl p-8 mb-6 text-center card-shadow min-h-48 flex flex-col items-center justify-center">
              <MapPin className="w-10 h-10 text-plum-400 mb-3" />
              <p className="text-slate-500 font-body text-sm">Interactive map of Bihar showing coverage areas</p>
              <p className="text-plum-600 font-display font-semibold mt-2">18 Districts Active</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {districts.map((d) => (
                <span key={d} className="px-3 py-1.5 bg-white rounded-full text-xs font-body text-plum-700 card-shadow flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5" /> {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section className="py-20 bg-gradient-to-br from-plum-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Real Stories" title="Lives Transformed" subtitle="These are not case studies — these are our neighbors, our sisters, our hope." />
          <StaggerContainer className="grid lg:grid-cols-3 gap-8">
            {stories.map(({ name, district, story, tag }) => (
              <StaggerItem key={name}>
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-plum-400 to-rose-400 flex items-center justify-center text-white font-display font-bold">
                      {name[0]}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-slate-800">{name}</p>
                      <p className="text-slate-400 text-xs font-body">{district}, Bihar</p>
                    </div>
                    <span className="ml-auto px-2.5 py-1 rounded-full bg-plum-100 text-plum-700 text-xs font-body">{tag}</span>
                  </div>
                  <p className="text-slate-500 text-sm font-body leading-relaxed flex-1">"{story}"</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>
    </PageWrapper>
  )
}
