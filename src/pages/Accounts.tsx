
import React from "react";
import Header from "../components/Layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Facebook, Instagram, Plus, RefreshCw, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { connectedAccounts } from "../utils/mockData";

const Accounts = () => {
  const { toast } = useToast();
  const [accounts, setAccounts] = React.useState(connectedAccounts);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleSyncAccount = (id: number) => {
    toast({
      title: "Account Sync Started",
      description: "We're updating your account data...",
    });

    // Simulate sync delay
    setTimeout(() => {
      const updatedAccounts = accounts.map((account) =>
        account.id === id
          ? { ...account, lastSync: new Date().toISOString() }
          : account
      );
      setAccounts(updatedAccounts);

      toast({
        title: "Account Sync Complete",
        description: "Your account data has been updated.",
      });
    }, 1500);
  };

  const handleDeleteAccount = (id: number) => {
    const updatedAccounts = accounts.filter((account) => account.id !== id);
    setAccounts(updatedAccounts);

    toast({
      title: "Account Removed",
      description: "The account has been removed from your dashboard.",
    });
  };

  const handleAddAccount = () => {
    // In a real application, this would initiate OAuth flow
    toast({
      title: "Account Connected",
      description: "Your new social media account has been connected.",
    });
    setIsDialogOpen(false);
  };

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-5 w-5 text-facebook" />;
      case "instagram":
        return <Instagram className="h-5 w-5" style={{ color: "#833AB4" }} />;
      case "tiktok":
        return (
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <Header title="Social Media Accounts" />

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Connected Accounts</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Account
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Connect a Social Media Account</DialogTitle>
              <DialogDescription>
                Choose the platform and enter your account credentials to connect your social media account.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="platform">Platform</Label>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Facebook className="mr-2 h-4 w-4 text-facebook" /> Facebook
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Instagram 
                      className="mr-2 h-4 w-4" 
                      style={{ color: "#833AB4" }}
                    /> Instagram
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <svg
                      className="mr-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.822 4.822 0 0 1-1.001-.104z"
                        fill="#010101"
                      />
                    </svg> TikTok
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Account Name</Label>
                <Input id="name" placeholder="Enter account name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key/Token</Label>
                <Input id="apiKey" type="password" placeholder="Enter API key or token" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddAccount}>Connect Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Social Media Accounts</CardTitle>
          <CardDescription>
            Manage your connected social media accounts and API integrations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Platform</TableHead>
                <TableHead>Account Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Sync</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell>
                    <div className="flex items-center">
                      {renderPlatformIcon(account.platform)}
                      <span className="ml-2 capitalize">{account.platform}</span>
                    </div>
                  </TableCell>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {account.status}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(account.lastSync).toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleSyncAccount(account.id)}
                      title="Sync account"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteAccount(account.id)}
                      title="Delete account"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Documentation</CardTitle>
          <CardDescription>
            Learn how to integrate your social media accounts with our platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Getting Started</h3>
            <p className="text-muted-foreground">
              To connect your social media accounts, you'll need to create an app on each platform's developer portal and get API credentials.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Facebook</h4>
            <ol className="list-decimal pl-5">
              <li>Go to the Facebook Developers portal</li>
              <li>Create a new app and select "Business" type</li>
              <li>Add the Facebook Marketing API product</li>
              <li>Generate a token with ads_management permission</li>
            </ol>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Instagram</h4>
            <ol className="list-decimal pl-5">
              <li>Connect your Instagram Business Account to a Facebook Page</li>
              <li>Use the Facebook Graph API to access Instagram insights</li>
              <li>Request the instagram_basic, instagram_manage_insights permissions</li>
            </ol>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">TikTok</h4>
            <ol className="list-decimal pl-5">
              <li>Go to the TikTok for Business developer portal</li>
              <li>Create an app and request access to the Marketing API</li>
              <li>Generate an app secret and access token</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Accounts;
