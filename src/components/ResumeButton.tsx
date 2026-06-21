
import { Download } from "lucide-react";
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
  text = "Download Resume",
}: ResumeButtonProps) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/D_Karthik_Reddy_Resume.pdf";
    link.download = "D_Karthik_Reddy_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Resume download started!");
  };

  return (
    <Button
      onClick={handleDownload}
      variant={variant}
      className={`transition-all duration-300 hover:scale-105 ${className}`}
    >
      {showIcon && <Download className="mr-2 h-4 w-4" />}
      {text}
    </Button>
  );
};

export default ResumeButton;
