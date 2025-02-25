
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeveloperMode = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Add console easter egg only once per visit
    if (!sessionStorage.getItem("consoleEasterEgg")) {
      console.log(
        "%cWant a challenge? There's a hidden bug on this page!",
        "color: orange; font-size: 16px; font-weight: bold;"
      );
      console.log(
        "%cFind it & submit the fix here: https://forms.google.com/submit_bug_fix",
        "color: cyan; font-size: 14px;"
      );
      sessionStorage.setItem("consoleEasterEgg", "shown");
    }
  }, []);

  return (
    <div
      className="fixed bottom-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <button
        onClick={() => navigate("/bug-challenge")}
        className={`text-xs text-white/30 hover:text-primary transition-colors ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {"<DeveloperMode />"}
      </button>
    </div>
  );
};

export default DeveloperMode;
