import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui-custom/AnimatedSection'
import {
  Monitor,
  FileText,
  ArrowUpCircle,
  Shield,
  Cpu,
  Smartphone,
  HeadphonesIcon,
  Network,
  Video
} from 'lucide-react'

const services = [
  {
    id: 'it-support',
    title: 'IT Support',
    description: 'Comprehensive technical support for businesses and individuals. Remote and on-site assistance for all your tech needs.',
    icon: HeadphonesIcon,
    featured: true,
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Professional network setup, configuration, and maintenance. Wi-Fi optimization, cabling, and security solutions.',
    icon: Network,
    featured: true,
  },
  {
    id: 'cctv',
    title: 'Camera Installation',
    description: 'CCTV & security systems installation and configuration. Protect your home or business with professional surveillance solutions.',
    icon: Video,
    featured: true,
  },
  {
    id: 'os-install',
    title: 'OS Installation',
    description: 'Clean installation of Windows 10/11 or Linux distributions. Includes driver updates and system optimization.',
    icon: Monitor,
    featured: false,
  },
  {
    id: 'office-setup',
    title: 'Office Setup',
    description: 'Installation and configuration of Microsoft Office Suite and email clients. Full productivity suite setup.',
    icon: FileText,
    featured: false,
  },
  {
    id: 'windows-upgrade',
    title: 'Windows Upgrade',
    description: 'Seamless migration from older Windows versions to the latest OS without data loss or downtime.',
    icon: ArrowUpCircle,
    featured: false,
  },
  {
    id: 'virus-removal',
    title: 'Virus Removal',
    description: 'Complete system scan and removal of malware, spyware, and viruses. Includes security hardening.',
    icon: Shield,
    featured: false,
  },
  {
    id: 'hardware-repair',
    title: 'Hardware Repair',
    description: 'Diagnostics and repair for RAM, hard drives, power supplies, and motherboard issues.',
    icon: Cpu,
    featured: false,
  },
  {
    id: 'screen-replacement',
    title: 'Screen Replacement',
    description: 'Professional replacement of cracked or broken laptop and monitor screens using quality parts.',
    icon: Smartphone,
    featured: false,
  },
]

export function Services() {
  const featuredServices = services.filter(s => s.featured)
  const regularServices = services.filter(s => !s.featured)

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-gradient">Tech Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            From web development to hardware repair, we offer a full range of IT services
            to meet all your technology needs.
          </p>
        </AnimatedSection>

        {/* Featured Services */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service) => (
            <StaggerItem key={service.id}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity blur" />
                <div className="relative h-full bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-5 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                    <service.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>

                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                      New
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Regular Services */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularServices.map((service) => (
            <StaggerItem key={service.id}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <div className="h-full bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/10 hover:bg-slate-900/80 transition-all card-glow">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
