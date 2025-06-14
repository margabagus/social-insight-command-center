
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
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

const integrationsFormSchema = z.object({
  connectGoogleAds: z.boolean(),
  googleAdsAccountId: z.string().optional(),
});

export function IntegrationsSettingsForm() {
  const form = useForm<z.infer<typeof integrationsFormSchema>>({
    resolver: zodResolver(integrationsFormSchema),
    defaultValues: {
      connectGoogleAds: false,
      googleAdsAccountId: "",
    },
  });

  function onSubmit(data: z.infer<typeof integrationsFormSchema>) {
    console.log("Integrations settings saved:", data);
    toast.success("Integrations settings saved successfully");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="connectGoogleAds"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Connect Google Ads</FormLabel>
                <FormDescription>
                  Allow access to your Google Ads account data.
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
        {form.watch("connectGoogleAds") && (
          <FormField
            control={form.control}
            name="googleAdsAccountId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Google Ads Account ID</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 123-456-7890" {...field} value={field.value ?? ''} />
                </FormControl>
                <FormDescription>
                  Enter your Google Ads Account ID to link your account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit">Save Integration Settings</Button>
      </form>
    </Form>
  );
}
