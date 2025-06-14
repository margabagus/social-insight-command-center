
import React from "react";
import { Bell, Download, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface HeaderProps {
  title: string;
  showExport?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showExport = false }) => {
  const { toast: showToast } = useToast();
  const navigate = useNavigate();

  const handleExport = (type: "pdf" | "excel") => {
    showToast({
      title: "Export Started",
      description: `Exporting data as ${type.toUpperCase()}...`,
    });
    
    // Simulate export delay
    setTimeout(() => {
      showToast({
        title: "Export Complete",
        description: `Your ${type.toUpperCase()} file has been downloaded.`,
      });
    }, 1500);
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleHelpSupportClick = () => {
    navigate("/help-support");
  };

  const handleLogout = () => {
    toast.success("Successfully logged out!");
    // Clear any stored user data here if needed
    navigate("/login");
  };

  return (
    <header className="border-b border-border h-16 bg-background sticky top-0 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <h1 className="text-2xl font-bold">{title}</h1>

        <div className="flex items-center space-x-4">
          {showExport && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Export Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleExport("pdf")}>
                  <FileText className="mr-2 h-4 w-4" /> Export as PDF
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport("excel")}>
                  <FileText className="mr-2 h-4 w-4" /> Export as Excel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                New follower milestone reached
              </DropdownMenuItem>
              <DropdownMenuItem>
                Engagement rate increased by 5%
              </DropdownMenuItem>
              <DropdownMenuItem>
                Weekly analytics report ready
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border-2 border-border"
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleProfileClick}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSettingsClick}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleHelpSupportClick}>
                Help & Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
