
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-card to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Section */}
        <div id="contactme" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Get In Touch</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            Ready to collaborate? Here's how you can reach me for your next project.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="group bg-card hover:bg-accent/10 border border-border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg
                className="w-8 h-8 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
              </svg>
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Hattiban, Lalitpur</p>
          </div>

          <div className="group bg-card hover:bg-accent/10 border border-border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg
                className="w-8 h-8 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
              </svg>
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">+977 9849966860</p>
          </div>

          <div className="group bg-card hover:bg-accent/10 border border-border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg
                className="w-8 h-8 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm break-all">biwanshrestha77@gmail.com</p>
          </div>

          <div className="group bg-card hover:bg-accent/10 border border-border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg
                className="w-8 h-8 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Resume</h3>
            <a
              href="/src/assets/docs/BiwanCV.pdf"
              download
              className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors font-medium"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-4">
            <a
              onClick={() => window.open("https://github.com/biwanshrestha14")}
              className="group w-12 h-12 bg-card hover:bg-primary border border-border rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              href="javascript:void(0);"
            >
              <svg
                className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              onClick={() => window.open("https://www.instagram.com/beewan_derer/")}
              className="group w-12 h-12 bg-card hover:bg-primary border border-border rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              href="javascript:void(0);"
            >
              <svg
                className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              onClick={() => window.open("https://facebook.com/biwan.shrestha.9")}
              className="group w-12 h-12 bg-card hover:bg-primary border border-border rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              href="javascript:void(0);"
            >
              <svg
                className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2025 <span className="text-primary font-medium">Biwan Shrestha</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
