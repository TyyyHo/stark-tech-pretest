"use client";

import { useState } from "react";
import useStockMonthRevenue from "./hook/useStockMonthRevenue";
import useStockInfo from "./hook/useStockInfo";

import { Input } from "@mui/material";
import Chart from "./components/chart";
import DataTable from "./components/table";
import TimeSelect from "./components/time-select";

import Image from "next/image";
import Label from "./components/label";

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

export default function Home() {
  const [stockId, setStockId] = useState<number>(2330);
  const [time, setTime] = useState<{ start_date: string; end_date: string }>({
    start_date: `${year - 4}-${month}-${day}`,
    end_date: `${year}-${month}-${day}`,
  });

  const { data: stockInfo, error: stockInfoError } = useStockInfo(stockId);
  const { tableData, error: stockMonthRevenueError } = useStockMonthRevenue(stockId, time);

  const isDataExist = stockInfo?.data && stockInfo.data.length > 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const stockId = Number(formData.get("stockId"));
    if (stockId) {
      setStockId(stockId);
    }
  };

  return (
    <>
      <section className="container max-w-none">
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
          <Input name="stockId" placeholder="輸入台股代號查看資料" className="w-100 px-2" />
          <button type="submit">
            <Image src="/search.svg" alt="search" width={24} height={24} />
          </button>
        </form>
      </section>

      <div className="w-full space-y-4 safe-area py-2">
        {/* Stock Name */}
        {isDataExist ? (
          <h1 className="container text-left space-x-2 font-semibold text-lg">
            <span>{stockInfo.data[0].stock_name}</span>
            <span>({stockId})</span>
          </h1>
        ) : (
          <p className="container text-left space-x-2 font-semibold text-lg">
            <span>請輸入正確台股代號查看資料</span>
          </p>
        )}

        {/* Error handling */}
        {(stockMonthRevenueError || stockInfoError) && (
          <div className="container">
            <p className="w-full text-center">Fetch failed</p>
          </div>
        )}

        {/* Chart */}
        {isDataExist && (
          <section className="w-full flex flex-col items-end gap-4 container min-h-[456px]">
            <div className="flex items-center justify-between gap-2 w-full">
              <Label text="每月營收" />
              <TimeSelect setTime={setTime} />
            </div>

            {tableData && (
              <Chart
                xAxisData={tableData.map((item) => item.date)}
                barData={tableData.map((item) => item.revenue)}
                lineData={tableData.map((item) => item.growthRate)}
              />
            )}
          </section>
        )}

        {/* Table */}
        {isDataExist && (
          <div className="space-y-4 max-w-screen overflow-hidden container">
            <Label text="詳細數據" />

            {tableData && <DataTable data={tableData} />}
          </div>
        )}

        {/* footer */}
        <p className="text-right">
          圖表單位：千元，數據來自
          <a
            href="https://finmindtrade.com/"
            className="text-blue-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            finmindtrade.com
          </a>
        </p>
      </div>
    </>
  );
}
