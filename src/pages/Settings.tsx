import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import Header from "../components/Layout/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const generalFormSchema = z.object({
  dateRange: z.string().min(1),
  comparisonPeriod: z.string().min(1),
  defaultCurrency: z.string().min(1),
  showPercentages: z.boolean(),
  darkMode: z.boolean(),
});

const analyticsFormSchema = z.object({
  includePaidCampaigns: z.boolean(),
  includeOrganicContent: z.boolean(),
  defaultMetrics: z.string().min(1),
  displayFormat: z.string().min(1),
});

const exportFormSchema = z.object({
  defaultExportFormat: z.string().min(1),
  includeCharts: z.boolean(),
  includeTables: z.boolean(),
  exportFileName: z.string().min(1),
});

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  // General Settings Form
  const generalForm = useForm<z.infer<typeof generalFormSchema>>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      dateRange: "30",
      comparisonPeriod: "previous",
      defaultCurrency: "usd",
      showPercentages: true,
      darkMode: false,
    },
  });

  // Analytics Settings Form
  const analyticsForm = useForm<z.infer<typeof analyticsFormSchema>>({
    resolver: zodResolver(analyticsFormSchema),
    defaultValues: {
      includePaidCampaigns: true,
      includeOrganicContent: true,
      defaultMetrics: "engagement",
      displayFormat: "chart",
    },
  });

  // Export Settings Form
  const exportForm = useForm<z.infer<typeof exportFormSchema>>({
    resolver: zodResolver(exportFormSchema),
    defaultValues: {
      defaultExportFormat: "pdf",
      includeCharts: true,
      includeTables: true,
      exportFileName: "social-analytics-report",
    },
  });

  const onSaveGeneral = (data: z.infer<typeof generalFormSchema>) => {
    console.log("General settings saved:", data);
    toast.success("General settings saved successfully");
  };

  const onSaveAnalytics = (data: z.infer<typeof analyticsFormSchema>) => {
    console.log("Analytics settings saved:", data);
    toast.success("Analytics settings saved successfully");
  };

  const onSaveExport = (data: z.infer<typeof exportFormSchema>) => {
    console.log("Export settings saved:", data);
    toast.success("Export settings saved successfully");
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <Header title="Settings" />

      <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="export">Export Options</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure your dashboard's general display settings.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...generalForm}>
                <form onSubmit={generalForm.handleSubmit(onSaveGeneral)} className="space-y-6">
                  <FormField
                    control={generalForm.control}
                    name="dateRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default Date Range</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a default time period" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="7">Last 7 days</SelectItem>
                            <SelectItem value="30">Last 30 days</SelectItem>
                            <SelectItem value="90">Last 90 days</SelectItem>
                            <SelectItem value="365">Last 12 months</SelectItem>
                            <SelectItem value="custom">Custom range</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Default time period for analytics display
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={generalForm.control}
                    name="comparisonPeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comparison Period</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select comparison period" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="previous">Previous period</SelectItem>
                            <SelectItem value="year">Same period last year</SelectItem>
                            <SelectItem value="none">No comparison</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose how to compare changes over time
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={generalForm.control}
                    name="defaultCurrency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default Currency</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a default currency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                            <SelectItem value="gbp">GBP (£)</SelectItem>
                            <SelectItem value="jpy">JPY (¥)</SelectItem>
                            <SelectItem value="idr">IDR (Rp)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Currency for cost and revenue metrics
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={generalForm.control}
                    name="showPercentages"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Show Percentages</FormLabel>
                          <FormDescription>
                            Display percent changes alongside metrics
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={generalForm.control}
                    name="darkMode"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Dark Mode</FormLabel>
                          <FormDescription>
                            Enable dark mode for the dashboard
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Save General Settings</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Settings */}
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Settings</CardTitle>
              <CardDescription>Configure how analytics data is processed and displayed.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...analyticsForm}>
                <form onSubmit={analyticsForm.handleSubmit(onSaveAnalytics)} className="space-y-6">
                  <FormField
                    control={analyticsForm.control}
                    name="includePaidCampaigns"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Include Paid Campaigns</FormLabel>
                          <FormDescription>
                            Include data from paid advertising campaigns
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={analyticsForm.control}
                    name="includeOrganicContent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Include Organic Content</FormLabel>
                          <FormDescription>
                            Include data from organic (non-paid) content
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={analyticsForm.control}
                    name="defaultMetrics"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default Metrics</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select primary metric" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="engagement">Engagement</SelectItem>
                            <SelectItem value="reach">Reach & Impressions</SelectItem>
                            <SelectItem value="conversion">Conversion</SelectItem>
                            <SelectItem value="revenue">Revenue & ROI</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Primary metrics to highlight in dashboard
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={analyticsForm.control}
                    name="displayFormat"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default Display Format</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select display format" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="chart">Charts</SelectItem>
                            <SelectItem value="table">Tables</SelectItem>
                            <SelectItem value="combined">Charts & Tables</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          How to display data by default
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Save Analytics Settings</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Export Settings */}
        <TabsContent value="export">
          <Card>
            <CardHeader>
              <CardTitle>Export Options</CardTitle>
              <CardDescription>Configure how reports are exported from the system.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...exportForm}>
                <form onSubmit={exportForm.handleSubmit(onSaveExport)} className="space-y-6">
                  <FormField
                    control={exportForm.control}
                    name="defaultExportFormat"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default Export Format</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select export format" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pdf">PDF Document</SelectItem>
                            <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                            <SelectItem value="csv">CSV File</SelectItem>
                            <SelectItem value="json">JSON Data</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Default format for exporting reports
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={exportForm.control}
                    name="includeCharts"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Include Charts</FormLabel>
                          <FormDescription>
                            Include visual charts in exported reports
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={exportForm.control}
                    name="includeTables"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Include Tables</FormLabel>
                          <FormDescription>
                            Include data tables in exported reports
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={exportForm.control}
                    name="exportFileName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default File Name</FormLabel>
                        <FormControl>
                          <Input placeholder="social-analytics-report" {...field} />
                        </FormControl>
                        <FormDescription>
                          Default file name prefix for exported files
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Save Export Settings</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
