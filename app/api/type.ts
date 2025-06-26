export type StockInfoParams = {
  data_id?: string;
};
export type StockInfoResponse = {
  msg: string;
  status: number;
  data: StockInfoData[];
};
export type StockInfoData = {
  industry_category: string;
  stock_id: string;
  stock_name: string;
  type: string;
  date: string;
};

export type StockMonthRevenueParams = {
  data_id: string;
  start_date: string;
  end_date?: string;
};
export type StockMonthRevenueResponse = {
  msg: string;
  status: number;
  data: StockMonthRevenueData[];
};
type StockMonthRevenueData = {
  date: string;
  stock_id: string;
  country: string;
  revenue: number;
  revenue_month: number;
  revenue_year: number;
};
