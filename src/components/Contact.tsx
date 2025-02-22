
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Let's build something amazing together!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass rounded-xl p-8">
              <h3 className="font-heading font-semibold text-xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:karthikreddy1420@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                  karthikreddy1420@gmail.com
                </a>
                <a
                  href="tel:+919618626228"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                  +91-9618626228
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn Profile
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
                >
                  <Github size={20} />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
