const API_URL = "https://api.finmindtrade.com/api/v4/data";
const Authorization = "Bearer" + process.env.API_TOKEN;

/**
 * 台股總覽 TaiwanStockInfo
 * https://finmind.github.io/tutor/TaiwanMarket/Technical/#taiwanstockinfo
 * @param data_id 股票代號，可選
 */
export const apiGetStockInfo = (data_id?: string) => {
  const url = new URL(API_URL);
  url.searchParams.set("dataset", "TaiwanStockInfo");
  if (data_id) url.searchParams.set("data_id", data_id);

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization,
    },
  });
};

/**
 * 月營收表 TaiwanStockMonthRevenue
 * https://finmind.github.io/tutor/TaiwanMarket/Fundamental/#taiwanstockmonthrevenue
 * @param data_id 股票代號
 * @param start_date 開始日期
 * @param end_date 結束日期
 */
export const apiGetStockMonthRevenue = ({
  data_id,
  start_date,
  end_date,
}: {
  data_id: string;
  start_date?: string;
  end_date?: string;
}) => {
  const url = new URL(API_URL);
  url.searchParams.set("dataset", "TaiwanStockMonthRevenue");
  url.searchParams.set("data_id", data_id);
  if (start_date) url.searchParams.set("start_date", start_date);
  if (end_date) url.searchParams.set("end_date", end_date);

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization,
    },
  });
};
