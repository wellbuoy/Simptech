// About section component
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui-custom/AnimatedSection'
import { Wrench, Smile, Clock, Award, Users } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Repairs Done', icon: Wrench },
  { value: '99%', label: 'Satisfaction', icon: Smile },
  { value: '24h', label: 'Avg Turnaround', icon: Clock },
  { value: 'Certified', label: 'Technicians', icon: Award },
]

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <AnimatedSection animation="slideInLeft">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">About Us</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Who We <span className="text-gradient">Are</span>
              </h2>
              
              <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                <p>
                  At <span className="text-cyan-400 font-semibold">Simplified Tech</span>, we believe technology 
                  should empower you, not frustrate you. Founded on the principles of transparency and technical 
                  excellence, we bridge the gap between complex hardware issues and easy-to-understand solutions.
                </p>
                <p>
                  Our mission is to provide top-tier IT support that is accessible to everyone. Whether you are a 
                  student with a broken laptop or a business needing network maintenance, we treat every device as 
                  if it were our own.
                </p>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs text-slate-400"
                    >
                      <Users className="w-4 h-4" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-500">
                  Trusted by <span className="text-white font-medium">local businesses</span> & residents
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Card */}
          <AnimatedSection animation="slideInRight" delay={0.2}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <StaggerContainer className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <StaggerItem key={index}>
                      <div className="group p-6 bg-slate-950/50 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-slate-950/80">
                        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                          <stat.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-slate-500">{stat.label}</div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
