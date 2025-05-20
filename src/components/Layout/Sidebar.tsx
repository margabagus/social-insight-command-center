
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3,
  FacebookIcon,
  FileText,
  Instagram,
  LayoutDashboard, 
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);

  const navItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/dashboard",
    },
    {
      title: "Facebook",
      icon: <FacebookIcon className="h-5 w-5 text-facebook" />,
      href: "/facebook",
    },
    {
      title: "Instagram",
      icon: (
        <Instagram className="h-5 w-5" style={{ color: "#833AB4" }} />
      ),
      href: "/instagram",
    },
    {
      title: "TikTok",
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.822 4.822 0 0 1-1.001-.104z"
            fill="#010101"
          />
        </svg>
      ),
      href: "/tiktok",
    },
    {
      title: "Accounts",
      icon: <Users className="h-5 w-5" />,
      href: "/accounts",
    },
    {
      title: "Reports",
      icon: <FileText className="h-5 w-5" />,
      href: "/reports",
    },
    {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/settings",
    },
  ];

  return (
    <aside
      className={cn(
        "bg-background border-r border-border h-screen sticky top-0 transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="h-16 flex items-center px-4 border-b border-border">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-primary mr-2" />
            {!collapsed && <span className="text-xl font-bold">SocialCRM</span>}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-3 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {item.icon}
                {!collapsed && <span className="ml-3">{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-border">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center justify-center w-full px-3 py-2 text-sm font-medium rounded-md bg-secondary text-foreground hover:bg-accent transition-colors"
          >
            {collapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            )}
            {!collapsed && <span className="ml-2">Collapse</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
