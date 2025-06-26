"use client";

import useSWR from "swr";
import { apiGetStockMonthRevenue } from "../api";

export default function useStockMonthRevenue(
  stockId: number,
  time: { start_date: string; end_date: string }
) {
  const { data, error, isLoading } = useSWR(
    {
      data_id: String(stockId),
      start_date: time.start_date,
      end_date: time.end_date,
    },
    apiGetStockMonthRevenue
  );

  // 所選資料的上一年度月營收
  const lastYearRevenue = data?.data
    .map((item, index) => {
      if (index < data?.data.length - 12) return item.revenue;
    })
    .filter((item) => item !== undefined);

  // 整理所選區間資料
  const tableData = data?.data
    .map((item, index) => {
      // 不顯示最早的12個月，因為是用來計算成長率
      if (index < 12) return;

      const date = item.date.split("-")[0] + item.date.split("-")[1];
      const growthRate = lastYearRevenue?.[index - 12]
        ? ((item.revenue - lastYearRevenue?.[index - 12]) / lastYearRevenue?.[index - 12]) * 100
        : -1000;

      return {
        date,
        revenue: item.revenue,
        growthRate: Number(growthRate.toFixed(2)),
      };
    })
    .filter((item) => item !== undefined); // 移除最早的12個月的數據

  return {
    data,
    error,
    isLoading,
    tableData,
    lastYearRevenue,
  };
}
