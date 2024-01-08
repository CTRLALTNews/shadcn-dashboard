import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { name: "2000", revenue: 1133432 },
  { name: "2001", revenue: 1242432 },
  { name: "2002", revenue: 1442454 },
  { name: "2003", revenue: 1482432 },
  { name: "2004", revenue: 1522542 },
  { name: "2005", revenue: 1653532 },
  { name: "2006", revenue: 1733542 },
  { name: "2007", revenue: 1903564 },
  { name: "2008", revenue: 1873542 },
  { name: "2009", revenue: 2153732 },
  { name: "2010", revenue: 2263842 },
  { name: "2011", revenue: 2373854 },
  { name: "2012", revenue: 2483832 },
  { name: "2013", revenue: 2604022 },
  { name: "2014", revenue: 2724132 },
  { name: "2015", revenue: 2844154 },
  { name: "2016", revenue: 2964132 },
  { name: "2017", revenue: 3114322 },
  { name: "2018", revenue: 3294432 },
  { name: "2019", revenue: 3354454 },
  { name: "2020", revenue: 3424432 },
  { name: "2021", revenue: 3614622 },
  { name: "2022", revenue: 3794732 },
  { name: "2023", revenue: 3964754 },
  { name: "2024", revenue: 4184732 },
];

interface IDetailsCardProps {
  number: string;
  text: string;
}

const DetailsCard = (props: IDetailsCardProps) => {
  return (
    <div className="w-full h-fit border rounded p-4 flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">{props.text}</p>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold">{props.number}</p>
        <TrendingUp className="text-3xl text-blue-500"/>
      </div>
    </div>
  );
};

const GridItemChart = () => {
  return (
    <div className="w-full h-full flex p-4 border rounded gap-8">
      <div className="w-3/4 h-full p-2 border rounded">
        <div className="w-full h-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--muted))"
              />
              <YAxis
                dataKey={"revenue"}
                orientation="right"
                type="number"
                tickFormatter={(tick) => {
                  const formatter = Intl.NumberFormat("en", {
                    notation: "compact",
                  });
                  return formatter.format(tick);
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-1/4 h-full flex flex-col items-center justify-start gap-8">
        <DetailsCard text="Total Revenue 2024" number="$4184732" />
        <DetailsCard text="Revenue Increase From 2023" number="5.5%" />
        <DetailsCard text=" Projected Revenue 2025" number="$4241657" />
      </div>
    </div>
  );
};

export default GridItemChart;
