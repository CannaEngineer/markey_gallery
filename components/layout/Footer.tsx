export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-serif text-text-primary mb-3">
              Markey Gallery
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              An intimate event space in the heart of Hell's Kitchen, NYC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#space"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  The Space
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#details"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  Details
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-3">
              Get in Touch
            </h4>
            <p className="text-sm text-text-secondary">
              Hell's Kitchen, NYC
            </p>
            <p className="text-sm text-text-secondary mt-4">
              <a
                href="#contact"
                className="hover:text-gold transition-colors duration-300"
              >
                Send us an inquiry →
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border-subtle text-center">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} Markey Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
