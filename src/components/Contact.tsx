
import { Mail, Linkedin, Github, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const Contact = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:karthikreddy1420@gmail.com?subject=${subject}&body=${body}`);
    toast({
      title: "Opening your email client…",
      description: "Your default mail app will open with the message pre-filled.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 max-w-3xl">

        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3" data-reveal>
          Contact
        </p>

        <h2 className="text-3xl md:text-4xl font-black text-white mb-4" data-reveal data-delay="1">
          Let's work together.
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md" data-reveal data-delay="2">
          Open to AI/ML engineering, software development, and data science roles — India, entry-level.
          Also happy to chat about projects, collaborations, or research.
        </p>

        {/* Primary CTA — large clickable email */}
        <div data-reveal data-delay="3">
          <a
            href="mailto:karthikreddy1420@gmail.com"
            className="group inline-flex items-center gap-3 text-xl md:text-2xl lg:text-3xl font-black text-white hover:text-primary transition-colors duration-200"
          >
            <Mail size={26} className="text-primary shrink-0" aria-hidden="true" />
            karthikreddy1420@gmail.com
            <ArrowRight
              size={18}
              className="text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Secondary contact links */}
        <div className="flex flex-wrap items-center gap-6 mt-8 mb-12" data-reveal data-delay="4">
          <a
            href="tel:+919618626228"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
          >
            <Phone size={14} aria-hidden="true" />
            +91-9618626228
          </a>
          <a
            href="https://www.linkedin.com/in/karthik-reddy-devireddy-ab6927260/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
          >
            <Linkedin size={14} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://github.com/karthikdk2004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
          >
            <Github size={14} aria-hidden="true" />
            GitHub
          </a>
        </div>

        {/* Form — secondary, opt-in */}
        <div data-reveal>
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200 underline underline-offset-4"
            >
              Prefer a structured message? Open form →
            </button>
          ) : (
            <div className="glass rounded-xl p-8 mt-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1.5">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none resize-none"
                    required
                  />
                </div>
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? "Opening…" : "Send"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
