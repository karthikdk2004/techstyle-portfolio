
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ResumeButtonProps {
  variant?: "default" | "outline" | "ghost";
  className?: string;
  showIcon?: boolean;
  text?: string;
}

const ResumeButton = ({ 
  variant = "default", 
  className = "", 
  showIcon = true,
  text = "Download Resume"
}: ResumeButtonProps) => {
  const handleDownload = () => {
    // In a real implementation, this would be a link to your actual resume PDF
    const resumeUrl = "public/Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Resume download started!");
  };

  return (
    <Button
      onClick={handleDownload}
      variant={variant}
      className={`hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {showIcon && <FileText className="mr-2 h-4 w-4 animate-pulse" />}
      {text}
    </Button>
  );
};

export default ResumeButton;
