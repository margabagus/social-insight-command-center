
import React from "react";
import { BarChart3, Eye, MousePointerClick, ThumbsUp, Users } from "lucide-react";
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
import { engagementTrend, followersGrowth, impressionsTrend, overviewData, tiktokPosts } from "../utils/mockData";

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
};

const TikTok = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <Header title="TikTok Analytics" showExport={true} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard
          title="Followers"
          value={formatNumber(overviewData.followers.tiktok)}
          icon={<Users className="h-5 w-5 text-tiktok-teal" />}
          change={25.4}
          trend="up"
        />
        <OverviewCard
          title="Engagement Rate"
          value={`${overviewData.engagement.tiktok}%`}
          icon={<ThumbsUp className="h-5 w-5 text-tiktok-teal" />}
          change={4.1}
          trend="up"
        />
        <OverviewCard
          title="Impressions"
          value={formatNumber(overviewData.impressions.tiktok)}
          icon={<Eye className="h-5 w-5 text-tiktok-teal" />}
          change={35.2}
          trend="up"
        />
        <OverviewCard
          title="Clicks"
          value={formatNumber(overviewData.clicks.tiktok)}
          icon={<MousePointerClick className="h-5 w-5 text-tiktok-teal" />}
          change={18.7}
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <MetricsChart
          title="Followers Growth"
          data={followersGrowth.map(item => ({
            month: item.month,
            followers: item.tiktok
          }))}
          lines={[
            { key: "followers", color: "#69C9D0", name: "Followers" },
          ]}
        />
        <MetricsChart
          title="Engagement Rate"
          data={engagementTrend.map(item => ({
            month: item.month,
            rate: item.tiktok
          }))}
          lines={[
            { key: "rate", color: "#69C9D0", name: "Engagement Rate" },
          ]}
        />
      </div>

      <MetricsChart
        title="Impressions Over Time"
        data={impressionsTrend.map(item => ({
          month: item.month,
          impressions: item.tiktok
        }))}
        type="bar"
        lines={[
          { key: "impressions", color: "#69C9D0", name: "Impressions" },
        ]}
      />

      <Card>
        <CardHeader>
          <CardTitle>Top Performing TikTok Videos</CardTitle>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default TikTok;
