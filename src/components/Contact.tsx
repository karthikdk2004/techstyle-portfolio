
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import ResumeButton from "./ResumeButton";

const Contact = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

    if (apiKey) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: apiKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio contact from ${formData.name}`,
          }),
        });
        const data = await res.json();
        if (data.success) {
          toast({ title: "Message sent!", description: "I'll get back to you as soon as I can." });
          setFormData({ name: "", email: "", message: "" });
          setShowForm(false);
        } else {
          throw new Error("Web3Forms returned failure");
        }
      } catch {
        toast({
          title: "Couldn't send — try emailing directly",
          description: "karthikreddy1420@gmail.com",
          variant: "destructive",
        });
      }
    } else {
      // Fallback: open email client with pre-filled content
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:karthikreddy1420@gmail.com?subject=${subject}&body=${body}`);
      toast({
        title: "Opening your email client…",
        description: "Your mail app will open with the message pre-filled.",
      });
      setFormData({ name: "", email: "", message: "" });
    }

    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
      {/* Subtle aurora blobs for depth */}
      <div className="aurora-blob aurora-blob-subtle absolute w-[400px] h-[400px] bg-violet-600 -top-20 -left-20" aria-hidden="true" style={{ animationDelay: '5s' }} />
      <div className="aurora-blob aurora-blob-subtle absolute w-[300px] h-[300px] bg-indigo-400 bottom-0 -right-16" aria-hidden="true" style={{ animationDelay: '13s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Left column — contact */}
          <div className="lg:col-span-3 space-y-0">
            <p className="font-mono text-xs text-primary/70 mb-3" data-reveal>
              04.
            </p>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4" data-reveal data-delay="1">
              Let's work together.
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md" data-reveal data-delay="2">
              Open to Software Development Engineer, AI Engineer, Data Analyst, and Data Scientist roles — India, entry-level.
              Also happy to chat about projects, collaborations, or research.
            </p>

            {/* Primary CTA — large clickable email */}
            <div data-reveal data-delay="3">
              <a
                href="mailto:karthikreddy1420@gmail.com"
                className="group inline-flex items-center gap-3 text-xl md:text-2xl font-black text-white hover:text-primary transition-colors duration-200"
              >
                <Mail size={24} className="text-primary shrink-0" aria-hidden="true" />
                karthikreddy1420@gmail.com
                <ArrowRight
                  size={18}
                  className="text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Secondary contact links */}
            <div className="flex flex-wrap items-center gap-6 mt-7 mb-10" data-reveal data-delay="4">
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
                <div className="glass rounded-xl p-7 mt-2">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot — hidden from real users, traps bots */}
                    <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />
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
                        className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
                      >
                        {isLoading ? "Sending…" : "Send message"}
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

          {/* Right column — availability card */}
          <div className="lg:col-span-2" data-reveal data-delay="2">
            <div className="glass rounded-xl p-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-white">Available for hire</span>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">
                    Roles
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Software Development Engineer · AI Engineer · Data Analyst · Data Scientist
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-gray-300">Hyderabad, India · Open to remote</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">
                    Available from
                  </p>
                  <p className="text-gray-300">June 2026 · immediately available</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">
                    CGPA
                  </p>
                  <p className="text-gray-300">8.97 · Minor in AI &amp; ML (8.5)</p>
                </div>
              </div>

              <div className="pt-1">
                <ResumeButton text="Download resume" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
