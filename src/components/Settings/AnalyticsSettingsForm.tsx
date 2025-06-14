
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const analyticsFormSchema = z.object({
  includePaidCampaigns: z.boolean(),
  includeOrganicContent: z.boolean(),
  defaultMetrics: z.string().min(1),
  displayFormat: z.string().min(1),
});

export function AnalyticsSettingsForm() {
  const form = useForm<z.infer<typeof analyticsFormSchema>>({
    resolver: zodResolver(analyticsFormSchema),
    defaultValues: {
      includePaidCampaigns: true,
      includeOrganicContent: true,
      defaultMetrics: "engagement",
      displayFormat: "chart",
    },
  });

  function onSubmit(data: z.infer<typeof analyticsFormSchema>) {
    console.log("Analytics settings saved:", data);
    toast.success("Analytics settings saved successfully");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
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
            </FormItem>
          )}
        />

        <Button type="submit">Save Analytics Settings</Button>
      </form>
    </Form>
  );
}
