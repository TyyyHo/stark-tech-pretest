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
                "&:first-of-type": { textAlign: "left" },
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
                "&:first-of-type": { textAlign: "left" },
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
                {(item.revenue / 1000).toLocaleString()}
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
                "&:first-of-type": { textAlign: "left" },
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
  );
}
