
import React from "react";
import Header from "../components/Layout/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar as CalendarIcon,
  ChevronDown,
  Download,
  FileText,
  Facebook,
  Instagram,
  Filter,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const Reports = () => {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleExport = (type: "pdf" | "excel") => {
    toast({
      title: "Export Started",
      description: `Exporting report as ${type.toUpperCase()}...`,
    });
    
    // Simulate export delay
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: `Your ${type.toUpperCase()} report has been downloaded.`,
      });
    }, 1500);
  };

  const reports = [
    {
      id: 1,
      name: "Weekly Performance Summary",
      platform: "All Platforms",
      date: "2023-06-15",
      type: "Automated",
    },
    {
      id: 2,
      name: "Facebook Campaign Results",
      platform: "Facebook",
      date: "2023-06-10",
      type: "Custom",
    },
    {
      id: 3,
      name: "Instagram Engagement Analysis",
      platform: "Instagram",
      date: "2023-06-05",
      type: "Custom",
    },
    {
      id: 4,
      name: "TikTok Growth Report",
      platform: "TikTok",
      date: "2023-05-28",
      type: "Automated",
    },
    {
      id: 5,
      name: "Monthly Cross-Platform Comparison",
      platform: "All Platforms",
      date: "2023-05-01",
      type: "Automated",
    },
  ];

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Facebook":
        return <Facebook className="h-4 w-4 text-facebook" />;
      case "Instagram":
        return <Instagram className="h-4 w-4" style={{ color: "#833AB4" }} />;
      case "TikTok":
        return (
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.822 4.822 0 0 1-1.001-.104z"
              fill="#010101"
            />
          </svg>
        );
      case "All Platforms":
        return (
          <div className="flex -space-x-1">
            <Facebook className="h-4 w-4 text-facebook" />
            <Instagram className="h-4 w-4" style={{ color: "#833AB4" }} />
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.822 4.822 0 0 1-1.001-.104z"
                fill="#010101"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <Header title="Reports" showExport={false} />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Card className="w-full md:w-auto">
          <CardContent className="p-4 flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium">Generate New Report</p>
              <p className="text-xs text-muted-foreground">
                Create custom analytics reports
              </p>
            </div>
            <Button>
              <FileText className="mr-2 h-4 w-4" /> Create Report
            </Button>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full sm:w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>
            View, download, or schedule your analytics reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {renderPlatformIcon(report.platform)}
                      <span className="ml-2">{report.platform}</span>
                    </div>
                  </TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset",
                        report.type === "Automated"
                          ? "bg-blue-50 text-blue-700 ring-blue-600/20"
                          : "bg-purple-50 text-purple-700 ring-purple-600/20"
                      )}
                    >
                      {report.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-3 w-3" /> Export{" "}
                          <ChevronDown className="ml-2 h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleExport("pdf")}>
                          Export as PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleExport("excel")}>
                          Export as Excel
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Scheduled Reports</CardTitle>
          <CardDescription>
            Manage your automated report generation schedules
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Next Run</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Weekly Performance Summary
                </TableCell>
                <TableCell>Weekly (Monday)</TableCell>
                <TableCell>2023-06-19</TableCell>
                <TableCell>3 recipients</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    Manage Schedule
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Monthly Cross-Platform Comparison
                </TableCell>
                <TableCell>Monthly (1st day)</TableCell>
                <TableCell>2023-07-01</TableCell>
                <TableCell>5 recipients</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    Manage Schedule
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Facebook Advertising Results
                </TableCell>
                <TableCell>Weekly (Friday)</TableCell>
                <TableCell>2023-06-16</TableCell>
                <TableCell>2 recipients</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    Manage Schedule
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
