
import React from "react";
import { BarChart3, Eye, Heart, MousePointerClick, Users } from "lucide-react";
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
import { engagementTrend, followersGrowth, impressionsTrend, overviewData, instagramPosts } from "../utils/mockData";

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
};

const Instagram = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <Header title="Instagram Analytics" showExport={true} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard
          title="Followers"
          value={formatNumber(overviewData.followers.instagram)}
          icon={<Users className="h-5 w-5" style={{ color: "#833AB4" }} />}
          change={10.2}
          trend="up"
        />
        <OverviewCard
          title="Engagement Rate"
          value={`${overviewData.engagement.instagram}%`}
          icon={<Heart className="h-5 w-5" style={{ color: "#833AB4" }} />}
          change={2.5}
          trend="up"
        />
        <OverviewCard
          title="Impressions"
          value={formatNumber(overviewData.impressions.instagram)}
          icon={<Eye className="h-5 w-5" style={{ color: "#833AB4" }} />}
          change={15.8}
          trend="up"
        />
        <OverviewCard
          title="Clicks"
          value={formatNumber(overviewData.clicks.instagram)}
          icon={<MousePointerClick className="h-5 w-5" style={{ color: "#833AB4" }} />}
          change={8.9}
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <MetricsChart
          title="Followers Growth"
          data={followersGrowth.map(item => ({
            month: item.month,
            followers: item.instagram
          }))}
          lines={[
            { key: "followers", color: "#833AB4", name: "Followers" },
          ]}
        />
        <MetricsChart
          title="Engagement Rate"
          data={engagementTrend.map(item => ({
            month: item.month,
            rate: item.instagram
          }))}
          lines={[
            { key: "rate", color: "#833AB4", name: "Engagement Rate" },
          ]}
        />
      </div>

      <MetricsChart
        title="Impressions Over Time"
        data={impressionsTrend.map(item => ({
          month: item.month,
          impressions: item.instagram
        }))}
        type="bar"
        lines={[
          { key: "impressions", color: "#833AB4", name: "Impressions" },
        ]}
      />

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Instagram Posts</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Instagram;
