
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BugChallenge = () => {
  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    // Simulate glitch effect duration
    const timer = setTimeout(() => {
      setIsGlitching(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmitFix = () => {
    window.open("https://forms.google.com/submit_bug_fix", "_blank");
    toast.success("Opening submission form...");
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className={`container mx-auto px-6 space-y-8 ${isGlitching ? "animate-glitch" : ""}`}>
        <div className="glass-card p-8 space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-primary">
            🕵️‍♂️ Spot the Bug Challenge!
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl">
              There's a sneaky bug in my portfolio. Can you find and fix it?
            </p>

            <div className="glass p-6 space-y-4">
              <h2 className="text-2xl font-heading">Your Mission:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Open DevTools (F12 or Ctrl + Shift + I)</li>
                <li>Spot the intentional bug in JavaScript/React/CSS</li>
                <li>Fix it and submit your correction in the form below!</li>
              </ul>
            </div>

            <div className="glass p-6">
              <h2 className="text-2xl font-heading mb-4">🏆 Reward:</h2>
              <p className="text-gray-300">
                If you're the first to fix it, you unlock a hidden "Bug Hunter" badge and bragging rights! 🚀
              </p>
            </div>

            <Button
              onClick={handleSubmitFix}
              className="w-full py-6 text-lg neon-border hover-glow"
            >
              Submit Your Fix
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugChallenge;
