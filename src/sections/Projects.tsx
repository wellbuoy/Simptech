import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { X, ZoomIn } from 'lucide-react'

const projects = [
  {
    id: '1',
    title: 'Office Network Setup',
    category: 'Networking',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    description: 'Complete network infrastructure for a 50-person office',
  },
  {
    id: '2',
    title: 'CCTV Security System',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
    description: '16-camera surveillance system with remote monitoring',
  },
  {
    id: '3',
    title: 'Server Room Upgrade',
    category: 'IT Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    description: 'Enterprise server rack installation and configuration',
  },
  {
    id: '4',
    title: 'Smart Home Integration',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    description: 'Complete smart home system with voice control',
  },
]

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Explore our recent work across web development, networking, security systems, and more.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                ? 'bg-cyan-500 text-white shadow-glow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-slate-900/95 backdrop-blur-xl border-white/10 p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedProject?.title || 'Project Details'}
          </DialogTitle>
          {selectedProject && (
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                  Close
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
