import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui-custom/AnimatedSection'
import { Zap, UserCheck, Tag, Heart, Clock, Shield, Award, Headphones } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'We understand downtime costs money. Most repairs are completed within 24-48 hours.',
    color: 'yellow',
  },
  {
    icon: UserCheck,
    title: 'Expert Techs',
    description: 'Certified professionals with years of experience in hardware and software diagnostics.',
    color: 'cyan',
  },
  {
    icon: Tag,
    title: 'Affordable Pricing',
    description: 'Transparent quotes with no hidden fees. High-quality service that fits your budget.',
    color: 'green',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We prioritize your satisfaction. If we can\'t fix it, you don\'t pay.',
    color: 'red',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support for critical business systems and emergencies.',
    color: 'purple',
  },
  {
    icon: Shield,
    title: 'Secure Solutions',
    description: 'Your data security is our priority. We follow best practices for all services.',
    color: 'blue',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'All our work comes with a satisfaction guarantee and warranty on repairs.',
    color: 'orange',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'We don\'t just fix and leave. We provide continued support for all our clients.',
    color: 'pink',
  },
]

const colorClasses: Record<string, { bg: string; text: string }> = {
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400' },
  red: { bg: 'bg-red-500/10', text: 'text-red-400' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-400' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-400' },
}

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The <span className="text-gradient">Simplified Tech</span> Difference
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </AnimatedSection>

        {/* Features Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color]
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group h-full"
                >
                  <div className="h-full bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto rounded-2xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            Ready to experience the difference?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-lg transition-all"
          >
            Get Started Today
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  )
}
