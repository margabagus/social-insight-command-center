
import React from "react";
import Header from "../components/Layout/Header";
import OverviewCard from "../components/Dashboard/OverviewCard";
import MetricsChart from "../components/Dashboard/MetricsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Users,
  BarChart3,
  Eye,
  MousePointerClick,
} from "lucide-react";
import {
  engagementTrend,
  followersGrowth,
  impressionsTrend,
  overviewData,
  facebookPosts,
  instagramPosts,
  tiktokPosts,
} from "../utils/mockData";

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
};

const Dashboard = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <Header title="Dashboard" showExport={true} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard
          title="Total Followers"
          value={formatNumber(
            overviewData.followers.facebook +
              overviewData.followers.instagram +
              overviewData.followers.tiktok
          )}
          icon={<Users className="h-5 w-5 text-muted-foreground" />}
          change={overviewData.followers.growth}
          trend="up"
        />
        <OverviewCard
          title="Avg. Engagement Rate"
          value={`${(
            (overviewData.engagement.facebook +
              overviewData.engagement.instagram +
              overviewData.engagement.tiktok) /
            3
          ).toFixed(1)}%`}
          icon={<BarChart3 className="h-5 w-5 text-muted-foreground" />}
          change={overviewData.engagement.growth}
          trend="up"
        />
        <OverviewCard
          title="Total Impressions"
          value={formatNumber(
            overviewData.impressions.facebook +
              overviewData.impressions.instagram +
              overviewData.impressions.tiktok
          )}
          icon={<Eye className="h-5 w-5 text-muted-foreground" />}
          change={overviewData.impressions.growth}
          trend="up"
        />
        <OverviewCard
          title="Total Clicks"
          value={formatNumber(
            overviewData.clicks.facebook +
              overviewData.clicks.instagram +
              overviewData.clicks.tiktok
          )}
          icon={<MousePointerClick className="h-5 w-5 text-muted-foreground" />}
          change={overviewData.clicks.growth}
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <MetricsChart
          title="Followers Growth"
          data={followersGrowth}
          lines={[
            { key: "facebook", color: "#1877F2", name: "Facebook" },
            { key: "instagram", color: "#833AB4", name: "Instagram" },
            { key: "tiktok", color: "#010101", name: "TikTok" },
          ]}
        />
        <MetricsChart
          title="Engagement Rate"
          data={engagementTrend}
          lines={[
            { key: "facebook", color: "#1877F2", name: "Facebook" },
            { key: "instagram", color: "#833AB4", name: "Instagram" },
            { key: "tiktok", color: "#010101", name: "TikTok" },
          ]}
        />
      </div>

      <MetricsChart
        title="Impressions Over Time"
        data={impressionsTrend}
        type="bar"
        lines={[
          { key: "facebook", color: "#1877F2", name: "Facebook" },
          { key: "instagram", color: "#833AB4", name: "Instagram" },
          { key: "tiktok", color: "#010101", name: "TikTok" },
        ]}
      />

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="facebook">
            <TabsList className="mb-4">
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="tiktok">TikTok</TabsTrigger>
            </TabsList>
            <TabsContent value="facebook">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Impressions</TableHead>
                    <TableHead>Clicks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {facebookPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>{post.engagement}%</TableCell>
                      <TableCell>{formatNumber(post.impressions)}</TableCell>
                      <TableCell>{formatNumber(post.clicks)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="instagram">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Impressions</TableHead>
                    <TableHead>Clicks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {instagramPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>{post.engagement}%</TableCell>
                      <TableCell>{formatNumber(post.impressions)}</TableCell>
                      <TableCell>{formatNumber(post.clicks)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="tiktok">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Impressions</TableHead>
                    <TableHead>Clicks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tiktokPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>{post.engagement}%</TableCell>
                      <TableCell>{formatNumber(post.impressions)}</TableCell>
                      <TableCell>{formatNumber(post.clicks)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
