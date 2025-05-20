
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OverviewCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  trend?: "up" | "down";
  className?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  icon,
  change,
  trend,
  className,
}) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change !== undefined && (
          <p
            className={cn(
              "text-xs pt-1",
              trend === "up"
                ? "text-emerald-600"
                : trend === "down"
                ? "text-rose-600"
                : ""
            )}
          >
            {trend === "up" && "+"}
            {change}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
