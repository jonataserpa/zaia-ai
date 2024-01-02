"use client";

import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import { IHistoryProps } from "./interfaces/iHistory.interface";
import { useEffect, useState } from "react";
import { useDebounce } from "@/components/hooks";
import { HistoryService } from "./gateways/history-service";
import { routes } from "@/app/constants";
import TablePage from "@/components/table";

const ServicesPage = () => {
  const { debounce } = useDebounce();
  const [_, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [rows, setRows] = useState<IHistoryProps[]>([]);

  /**
   * Get all history
   */
  function getAllHistory() {
    debounce(() => {
      HistoryService.getAll().then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          setTotalCount(result.totalCount);
          setRows(result.data);
        }
      });
    });
  }

  /**
   * Define default values list loading
   */
  useEffect(() => {
    setIsLoading(true);
    getAllHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar routes={routes} />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        <TablePage
          rows={rows}
          totalCount={totalCount}
        />
      </main>
    </div>
  );
};

export default ServicesPage;
