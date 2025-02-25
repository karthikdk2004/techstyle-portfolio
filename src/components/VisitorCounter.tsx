
import { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVisitorCount = async () => {
      try {
        // This is a placeholder. In a real implementation, you would fetch from your analytics API
        const count = parseInt(localStorage.getItem("visitorCount") || "0");
        const newCount = count + 1;
        localStorage.setItem("visitorCount", newCount.toString());
        setVisitorCount(newCount);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    getVisitorCount();
  }, []);

  if (loading) return null;

  return (
    <div className="text-sm text-white/70">
      <span className="neon-text animate-pulse">
        You're visitor #{visitorCount}
      </span>
    </div>
  );
};

export default VisitorCounter;
