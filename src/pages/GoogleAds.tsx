
import Header from "../components/Layout/Header";

const GoogleAds = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <Header title="Google Ads" />
      <div className="flex h-[60vh] items-center justify-center rounded-lg border border-dashed">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Google Ads Analytics</h2>
          <p className="text-muted-foreground mt-2">
            Your Google Ads data will be displayed here once connected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleAds;
