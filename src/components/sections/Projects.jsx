import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bookstore",
      description:
        "A full-stack literary hub with intuitive search and elegant design, enabling seamless book collection management through a polished, responsive interface.",
      image: "/src/assets/images/bookstore.png",
      githubUrl: "https://github.com/biwanshrestha14/Ebon-Stacks",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Todo List",
      description:
        "A clean, intuitive task management application built with React that helps users organize their daily responsibilities with modern design patterns.",
      image: "/src/assets/images/todo.png",
      githubUrl: "https://github.com/biwanshrestha14/TO-DO-list-app",
      technologies: ["React", "CSS3", "JavaScript"],
    },
    {
      id: 3,
      title: "PassFort Manager",
      description:
        "A sleek password manager with secure storage and intuitive design. Built with React, it features elegant gradients and a user-friendly interface for effortless credential management.",
      image: "/src/assets/images/passfort.png",
      githubUrl: "https://github.com/biwanshrestha14/PassFort-Manager",
      technologies: ["React", "Encryption", "LocalStorage"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-card to-muted/20 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-border/50"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} Project`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Title and Technologies */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{project.description}</p>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200 text-sm font-medium group/btn"
                  >
                    <Github className="h-4 w-4 transition-transform duration-200 group-hover/btn:rotate-12" />
                    View Code
                  </a>

                  <button className="inline-flex items-center gap-2 px-4 py-2 border border-border text-card-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-sm font-medium group/btn">
                    <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

export default Projects
