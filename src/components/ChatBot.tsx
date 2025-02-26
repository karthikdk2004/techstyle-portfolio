
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

interface Message {
  type: "user" | "bot";
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Load previous conversation from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save conversation to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const sendMessage = async (message: string) => {
    try {
      const response = await fetch(
        "https://eqfqdeuhwbyrrzocliqj.supabase.co/functions/v1/chat-with-portfolio",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      if (!response.ok) throw new Error("Failed to get response");
      
      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const reply = await sendMessage(userMessage);
      setMessages((prev) => [...prev, { type: "bot", content: reply }]);
    } catch (error) {
      toast.error("Failed to get response. Please try again.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 h-12 w-12 rounded-full shadow-lg hover-glow z-50 transition-transform duration-300 hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 w-96 h-[500px] glass-card rounded-lg shadow-xl z-50 flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h3 className="font-heading font-semibold">Chat with Me</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === "user"
                      ? "bg-primary text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-white rounded-lg p-3">
                  <span className="animate-pulse">Typing...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about my skills & projects..."
                className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" size="icon" disabled={isTyping}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
