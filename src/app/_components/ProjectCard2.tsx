import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const ProjectCard2 = () => {
  return (
    <div className="flex overflow-x-auto max-w-[1080px] p-4 space-x-4">
      <Card className="w-60 flex-shrink-0 border-none h-96 bg-[#053D39] flex flex-col items-center justify-between shadow-lg rounded-lg">
        <CardHeader className="flex items-center justify-center mt-10">
          <CardTitle className="font-bold text-[#f7f7f7] text-center text-2xl">
            Weather App
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4 space-y-4">
          <Link href="/pages/weather">
            <Button className="w-40 transition duration-300 bg-[#FC7F42] hover:bg-[#D9D9D9] hover:text-black text-lg font-semibold">
              WeatherApp
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard2;
