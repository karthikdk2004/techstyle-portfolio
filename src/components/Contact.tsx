
import { Mail, Linkedin, Github, Phone, Instagram } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import ResumeButton from "./ResumeButton";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("messages").insert([formData]);

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Let's build something amazing together!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <ResumeButton 
            text="Want a detailed look? Download my resume!"
            className="neon-border hover:shadow-xl hover:shadow-primary/20"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
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
                  href="https://www.linkedin.com/in/karthik-reddy-devi-reddy-ab6927260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors hover-glow"
                >
                  <Linkedin size={20} />
                  LinkedIn Profile
                </a>
                <a
                  href="https://www.instagram.com/karthikreddy__2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors hover-glow"
                >
                  <Instagram size={20} />
                  Instagram Profile
                </a>
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
