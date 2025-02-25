
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { toast } from "sonner";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    toast.success(`Switched to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative overflow-hidden glass-card transition-colors duration-500"
      onClick={handleToggle}
    >
      <Sun className={`h-4 w-4 transition-all duration-500 rotate-0 scale-100 absolute ${theme === 'dark' ? 'rotate-90 scale-0' : ''}`} />
      <Moon className={`h-4 w-4 transition-all duration-500 rotate-90 scale-0 absolute ${theme === 'dark' ? 'rotate-0 scale-100' : ''}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
