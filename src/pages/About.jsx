import { Target, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
import { PageWrapper, Section, Card, Button, SectionHeader, StaggerContainer, StaggerItem } from '../components/UI'

const approach = [
  { step: '01', title: 'Identify & Reach', desc: 'We partner with local NGOs and self-help groups to identify and reach the most vulnerable women in each community.' },
  { step: '02', title: 'Assess Needs', desc: 'A holistic assessment covers health, mental wellness, economic situation, and spiritual needs of each beneficiary.' },
  { step: '03', title: 'Deliver Programs', desc: 'Tailored interventions — from teleconsultation to skill workshops — are delivered at the community level.' },
  { step: '04', title: 'Measure Impact', desc: 'We track progress, collect stories, and continuously refine our programs based on real-world outcomes.' },
]

const timeline = [
  { year: '2018', event: 'Founded in Patna, Bihar with a vision to address women\'s health gap in rural areas.' },
  { year: '2019', event: 'Launched first teleconsultation camp, reaching 500 women in 3 districts.' },
  { year: '2020', event: 'COVID response — distributed health kits and mental wellness support to 2,000 families.' },
  { year: '2021', event: 'Expanded to 10 districts; launched Skill Development Centre in Muzaffarpur.' },
  { year: '2022', event: 'Kumbhak Therapy Program introduced; partnered with 5 Ayurvedic institutions.' },
  { year: '2023', event: 'Crossed 10,000 beneficiaries; recognized by Bihar State Women Commission.' },
  { year: '2024', event: 'Operating in 18 districts with 340+ volunteers and 95+ programs.' },
]

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-plum-100 text-plum-700 text-xs font-medium font-body tracking-wide mb-6">Our Story</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            About <span className="text-gradient italic">Vibhu Manaswini</span>
          </h1>
          <p className="text-slate-500 font-body max-w-2xl mx-auto leading-relaxed">
            A movement built on the belief that every woman — in every village — deserves health, dignity, and the freedom to thrive.
          </p>
        </div>
      </section>

      {/* Overview */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader badge="Who We Are" title="A Women-Centered Initiative" center={false} />
            <p className="text-slate-500 font-body leading-relaxed mb-4">
              Vibhu Manaswini is a women's health and empowerment organization operating at the grassroots level across rural Bihar. We work with some of the most underserved communities — reaching adolescent girls before they drop out of school, pregnant women who have never seen a doctor, and elderly women whose pain is invisible to the system.
            </p>
            <p className="text-slate-500 font-body leading-relaxed mb-6">
              Our integrated approach combines modern healthcare with traditional wisdom, mental wellness support with vocational training, and spiritual practices with rights-based advocacy — creating whole-person transformation.
            </p>
            <Button to="/services" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
              Our Programs
            </Button>
          </div>
          <div className="bg-gradient-to-br from-plum-50 to-rose-50 rounded-3xl p-8">
            <div className="text-6xl text-center mb-6">🌺</div>
            <blockquote className="font-display text-xl text-plum-800 italic text-center leading-relaxed">
              "When a woman heals, her family heals. When her family heals, the community transforms."
            </blockquote>
            <p className="text-center text-plum-600 text-sm font-body mt-4">— Founding Vision</p>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="py-20 bg-gradient-to-br from-plum-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Purpose" title="Vision & Mission" />
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-plum-500 to-plum-600 flex items-center justify-center mb-5 shadow-md">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-800 mb-3">Our Vision</h3>
              <p className="text-slate-500 font-body leading-relaxed">
                A Bihar where every woman — regardless of caste, class, or geography — lives with good health, mental peace, economic security, and full dignity. A society where women lead their own transformation.
              </p>
            </Card>
            <Card className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center mb-5 shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-800 mb-3">Our Mission</h3>
              <p className="text-slate-500 font-body leading-relaxed">
                To deliver holistic, community-based interventions in healthcare, mental wellness, spiritual wellbeing, awareness, and skill development — ensuring no woman is left behind.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Problem Statement */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="The Challenge" title="Why This Work Matters" subtitle="Rural women in Bihar face a compounded crisis — invisible to most systems, underserved by all." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { stat: '63%', desc: 'of rural women in Bihar lack access to formal healthcare', emoji: '🏥' },
              { stat: '1 in 3', desc: 'adolescent girls drop out of school due to lack of support', emoji: '📚' },
              { stat: '78%', desc: 'of women report signs of anxiety or depression but receive no help', emoji: '🧠' },
              { stat: '45%', desc: 'of rural women are economically dependent with no income of their own', emoji: '💼' },
              { stat: '2.4x', desc: 'more maternal deaths in rural areas compared to urban Bihar', emoji: '🤱' },
              { stat: '0', desc: 'certified mental health professionals for every 10,000 rural women', emoji: '💙' },
            ].map(({ stat, desc, emoji }) => (
              <StaggerItem key={stat}>
                <Card className="p-6 border-l-4 border-rose-400">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <div className="font-display text-3xl font-bold text-gradient mb-2">{stat}</div>
                  <p className="text-slate-500 text-sm font-body leading-relaxed">{desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Our Approach */}
      <Section className="py-20 bg-gradient-to-br from-plum-900 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="How We Work" title="Our Approach" subtitle="A four-step cycle of identification, assessment, intervention, and impact measurement." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map(({ step, title, desc }) => (
              <div key={step} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden group hover:bg-white/15 transition-colors">
                <div className="font-display text-6xl font-bold text-white/10 absolute -top-2 -right-2">{step}</div>
                <div className="relative">
                  <div className="font-display text-sm font-bold text-rose-300 mb-2">{step}</div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{title}</h3>
                  <p className="text-plum-200 text-sm font-body leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Journey" title="Milestones That Shaped Us" />
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-plum-200 to-rose-200" />
            <div className="space-y-8">
              {timeline.map(({ year, event }) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="w-12 text-right shrink-0">
                    <span className="font-display font-bold text-plum-600 text-sm">{year}</span>
                  </div>
                  <div className="relative shrink-0">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-plum-500 to-rose-500 border-2 border-white shadow-md mt-0.5" />
                  </div>
                  <Card className="flex-1 p-4">
                    <p className="text-slate-600 text-sm font-body leading-relaxed">{event}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}
