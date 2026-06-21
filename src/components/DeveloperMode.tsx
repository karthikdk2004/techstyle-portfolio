
import { useNavigate } from "react-router-dom";

const DeveloperMode = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
      <button
        onClick={() => navigate("/bug-challenge")}
        className="text-xs text-white/20 hover:text-primary/60 transition-colors"
        aria-label="Developer challenge"
      >
        {"<DeveloperMode />"}
      </button>
    </div>
  );
};

export default DeveloperMode;
