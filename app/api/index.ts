import * as T from "./type";

const API_URL = "https://api.finmindtrade.com/api/v4/data";

/**
 * 台股總覽 TaiwanStockInfo
 * https://finmind.github.io/tutor/TaiwanMarket/Technical/#taiwanstockinfo
 * @param data_id 股票代號，可選
 */
export const apiGetStockInfo = async (params: T.StockInfoParams) => {
  const url = new URL(API_URL);
  url.searchParams.set("dataset", "TaiwanStockInfo");
  if (params.data_id) url.searchParams.set("data_id", params.data_id);

  const res = await fetch("/api/finmind", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      method: "GET",
      url,
    }),
  });

  if (!res.ok) {
    throw new Error("Fetch stock info failed");
  }
  const data: T.StockInfoResponse = await res.json();
  return data;
};

/**
 * 月營收表 TaiwanStockMonthRevenue
 * https://finmind.github.io/tutor/TaiwanMarket/Fundamental/#taiwanstockmonthrevenue
 * @param data_id 股票代號
 * @param start_date 開始日期
 * @param end_date 結束日期
 */
export const apiGetStockMonthRevenue = async (params: T.StockMonthRevenueParams) => {
  const url = new URL(API_URL);
  url.searchParams.set("dataset", "TaiwanStockMonthRevenue");
  url.searchParams.set("data_id", params.data_id);
  url.searchParams.set("start_date", params.start_date);
  if (params.end_date) url.searchParams.set("end_date", params.end_date);

  const res = await fetch("/api/finmind", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      method: "GET",
      url,
    }),
  });
  if (!res.ok) {
    throw new Error("Fetch stock month revenue failed");
  }
  const data: T.StockMonthRevenueResponse = await res.json();
  return data;
};
