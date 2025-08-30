import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="text-3xl font-bold underline">
      Home
      <Button variant="outline" className="hover:bg-ring">
        Simple Button
      </Button>
    </div>
  );
};

export default Page;
