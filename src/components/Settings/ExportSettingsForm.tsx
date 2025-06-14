
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const exportFormSchema = z.object({
  defaultExportFormat: z.string().min(1),
  includeCharts: z.boolean(),
  includeTables: z.boolean(),
  exportFileName: z.string().min(1),
});

export function ExportSettingsForm() {
  const form = useForm<z.infer<typeof exportFormSchema>>({
    resolver: zodResolver(exportFormSchema),
    defaultValues: {
      defaultExportFormat: "pdf",
      includeCharts: true,
      includeTables: true,
      exportFileName: "social-analytics-report",
    },
  });

  function onSubmit(data: z.infer<typeof exportFormSchema>) {
    console.log("Export settings saved:", data);
    toast.success("Export settings saved successfully");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
  );
}
