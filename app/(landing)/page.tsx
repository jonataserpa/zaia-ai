"use client";

import Sidebar from "@/components/ui/sidebar";
import HomePage from "../(dashboard)/(routes)/dashboard/page";
import Navbar from "@/components/ui/navbar";
import { routes } from "../constants";
import { tools } from "@/constants";

const LandingPage = () => {

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar routes={routes} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        <HomePage rows={tools} />
      </main>
    </div>
  );
};

export default LandingPage;
