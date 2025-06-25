import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";

type Props = {
  data: {
    date: string;
    revenue: number;
    growthRate: number;
  }[];
};

export default function DataTable({ data }: Props) {
  return (
    <div className="space-y-4 max-w-screen overflow-hidden container py-4 px-0.5">
      <div className="bg-[#0386F4] py-2.5 px-4 w-fit">
        <p className="text-white">詳細數據</p>
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{
            display: "block",
            minWidth: 400,
            maxWidth: 650,
            overflow: "auto",
          }}
          stickyHeader
        >
          <TableBody sx={{ td: { textAlign: "right" } }}>
            <TableRow>
              <TableCell
                sx={{
                  position: "sticky",
                  left: 0,
                  zIndex: 1,
                  backgroundColor: "#F6F8FA",
                  border: "1px solid #DCDFE2",
                  whiteSpace: "nowrap",
                  "&:first-child": { textAlign: "left" },
                }}
              >
                年度月份
              </TableCell>

              {data.map((item) => (
                <TableCell
                  key={item.date}
                  sx={{
                    backgroundColor: "#F6F8FA",
                    border: "1px solid #DCDFE2",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.date}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  position: "sticky",
                  left: 0,
                  zIndex: 1,
                  backgroundColor: "#fff",
                  border: "1px solid #DCDFE2",
                  whiteSpace: "nowrap",
                  "&:first-child": { textAlign: "left" },
                }}
              >
                月營收
              </TableCell>

              {data.map((item) => (
                <TableCell
                  key={item.date}
                  sx={{
                    border: "1px solid #DCDFE2",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.revenue}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  position: "sticky",
                  left: 0,
                  zIndex: 1,
                  backgroundColor: "#F6F8FA",
                  border: "1px solid #DCDFE2",
                  whiteSpace: "nowrap",
                  "&:first-child": { textAlign: "left" },
                }}
              >
                月營收成長率
              </TableCell>

              {data.map((item) => (
                <TableCell
                  key={item.date}
                  sx={{
                    backgroundColor: "#F6F8FA",
                    border: "1px solid #DCDFE2",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.growthRate}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* <TableContainer component={Paper}>
        <Table aria-label="vertical table">
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "#F6F8FA",
                  border: "1px solid #DCDFE2",
                  marginRight: "16px",
                }}
              >
                年度月份
              </TableCell>
              <section className="w-full max-w-[650px] overflow-auto">
                {data.map((item) => (
                  <TableCell
                    key={item.date}
                    component="th"
                    scope="col"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      backgroundColor: "#F6F8FA",
                      border: "1px solid #DCDFE2",
                    }}
                  >
                    {item.date}
                  </TableCell>
                ))}
              </section>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
}
