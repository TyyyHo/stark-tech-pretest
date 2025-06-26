"use client";

import useSWR from "swr";
import { apiGetStockInfo } from "../api";

export default function useStockInfo(stockId: number) {
  const { data, error, isLoading } = useSWR({ data_id: String(stockId) }, apiGetStockInfo);

  return {
    data,
    error,
    isLoading,
  };
}
