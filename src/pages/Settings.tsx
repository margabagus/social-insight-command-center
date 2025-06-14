
import React from "react";
import Header from "../components/Layout/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { GeneralSettingsForm } from "../components/Settings/GeneralSettingsForm";
import { AnalyticsSettingsForm } from "../components/Settings/AnalyticsSettingsForm";
import { ExportSettingsForm } from "../components/Settings/ExportSettingsForm";
import { IntegrationsSettingsForm } from "../components/Settings/IntegrationsSettingsForm";

const Settings = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <Header title="Settings" />

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="export">Export Options</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure your dashboard's general display settings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GeneralSettingsForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Settings</CardTitle>
              <CardDescription>
                Configure how analytics data is processed and displayed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnalyticsSettingsForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export">
          <Card>
            <CardHeader>
              <CardTitle>Export Options</CardTitle>
              <CardDescription>
                Configure how reports are exported from the system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ExportSettingsForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>
                Connect and manage your third-party integrations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IntegrationsSettingsForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
