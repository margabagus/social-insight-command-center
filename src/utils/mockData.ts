
// Mock data for social media analytics
export const overviewData = {
  followers: {
    facebook: 24500,
    instagram: 35700,
    tiktok: 45200,
    growth: 12.5
  },
  engagement: {
    facebook: 5.2,
    instagram: 7.8,
    tiktok: 9.6,
    growth: 3.2
  },
  impressions: {
    facebook: 125000,
    instagram: 240000,
    tiktok: 560000,
    growth: 21.4
  },
  clicks: {
    facebook: 15600,
    instagram: 22300,
    tiktok: 34500,
    growth: 8.7
  }
};

export const engagementTrend = [
  { month: 'Jan', facebook: 4.2, instagram: 6.1, tiktok: 7.8 },
  { month: 'Feb', facebook: 4.5, instagram: 6.3, tiktok: 8.1 },
  { month: 'Mar', facebook: 4.3, instagram: 6.7, tiktok: 8.4 },
  { month: 'Apr', facebook: 4.8, instagram: 7.0, tiktok: 8.7 },
  { month: 'May', facebook: 5.0, instagram: 7.2, tiktok: 9.0 },
  { month: 'Jun', facebook: 5.2, instagram: 7.8, tiktok: 9.6 },
];

export const followersGrowth = [
  { month: 'Jan', facebook: 20100, instagram: 28900, tiktok: 30500 },
  { month: 'Feb', facebook: 21200, instagram: 30500, tiktok: 33800 },
  { month: 'Mar', facebook: 22000, instagram: 31900, tiktok: 36400 },
  { month: 'Apr', facebook: 22800, instagram: 33200, tiktok: 39100 },
  { month: 'May', facebook: 23600, instagram: 34500, tiktok: 42300 },
  { month: 'Jun', facebook: 24500, instagram: 35700, tiktok: 45200 },
];

export const impressionsTrend = [
  { month: 'Jan', facebook: 90000, instagram: 170000, tiktok: 320000 },
  { month: 'Feb', facebook: 95000, instagram: 185000, tiktok: 370000 },
  { month: 'Mar', facebook: 100000, instagram: 195000, tiktok: 410000 },
  { month: 'Apr', facebook: 110000, instagram: 210000, tiktok: 450000 },
  { month: 'May', facebook: 118000, instagram: 225000, tiktok: 510000 },
  { month: 'Jun', facebook: 125000, instagram: 240000, tiktok: 560000 },
];

export const facebookPosts = [
  { id: 1, title: 'Product Launch', date: '2023-06-15', engagement: 8.3, impressions: 15200, clicks: 2350 },
  { id: 2, title: 'Customer Story', date: '2023-06-10', engagement: 7.1, impressions: 12500, clicks: 1920 },
  { id: 3, title: 'Industry Report', date: '2023-06-05', engagement: 6.2, impressions: 10800, clicks: 1540 },
  { id: 4, title: 'Team Spotlight', date: '2023-05-28', engagement: 5.8, impressions: 9700, clicks: 1350 },
  { id: 5, title: 'Feature Update', date: '2023-05-20', engagement: 5.5, impressions: 9300, clicks: 1280 },
];

export const instagramPosts = [
  { id: 1, title: 'Product Showcase', date: '2023-06-15', engagement: 9.7, impressions: 22400, clicks: 3150 },
  { id: 2, title: 'Behind the Scenes', date: '2023-06-10', engagement: 8.5, impressions: 19800, clicks: 2780 },
  { id: 3, title: 'User Testimonial', date: '2023-06-05', engagement: 8.1, impressions: 18500, clicks: 2610 },
  { id: 4, title: 'Design Preview', date: '2023-05-28', engagement: 7.8, impressions: 17900, clicks: 2520 },
  { id: 5, title: 'Team Celebration', date: '2023-05-20', engagement: 7.5, impressions: 17200, clicks: 2420 },
];

export const tiktokPosts = [
  { id: 1, title: 'Product Demo', date: '2023-06-15', engagement: 12.3, impressions: 54000, clicks: 6800 },
  { id: 2, title: 'Trending Challenge', date: '2023-06-10', engagement: 11.8, impressions: 52000, clicks: 6500 },
  { id: 3, title: 'Viral Tutorial', date: '2023-06-05', engagement: 10.9, impressions: 48000, clicks: 6000 },
  { id: 4, title: 'Employee Takeover', date: '2023-05-28', engagement: 10.5, impressions: 46000, clicks: 5800 },
  { id: 5, title: 'Product Tips', date: '2023-05-20', engagement: 10.1, impressions: 44000, clicks: 5500 },
];

export const connectedAccounts = [
  { id: 1, platform: 'facebook', name: 'Company Page', status: 'connected', lastSync: '2023-06-15T10:30:00Z' },
  { id: 2, platform: 'instagram', name: 'Brand Profile', status: 'connected', lastSync: '2023-06-15T10:30:00Z' },
  { id: 3, platform: 'tiktok', name: 'Brand Account', status: 'connected', lastSync: '2023-06-15T10:30:00Z' },
];
