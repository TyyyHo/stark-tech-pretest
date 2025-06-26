import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type TimeSelectProps = {
  setTime: (time: { start_date: string; end_date: string }) => void;
};

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

export default function TimeSelect({ setTime }: TimeSelectProps) {
  const [currentVal, setCurrentVal] = useState<string>("3");

  const handleChange = (event: SelectChangeEvent) => {
    const value: string = event.target.value;
    setCurrentVal(value);

    switch (value) {
      case "3":
        setTime({
          start_date: `${year - 4}-${month}-${day}`,
          end_date: `${year}-${month}-${day}`,
        });
        break;
      case "5":
        setTime({
          start_date: `${year - 6}-${month}-${day}`,
          end_date: `${year}-${month}-${day}`,
        });
        break;
      case "8":
        setTime({
          start_date: `${year - 9}-${month}-${day}`,
          end_date: `${year}-${month}-${day}`,
        });
        break;
      // TODO: 自訂還需要處理2002年之前的沒有資料無法計算成長率的情境
      //   case "自訂":
      //     setTime({
      //       start_date: ``,
      //       end_date: ``,
      //     });
      //     break;

      default:
        setTime({
          start_date: `${year - 4}-${month}-${day}`,
          end_date: `${year}-${month}-${day}`,
        });
        break;
    }
  };

  return (
    <FormControl sx={{ width: "120px" }}>
      <InputLabel id="demo-simple-select-label">時間</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentVal}
        label="時間"
        onChange={handleChange}
      >
        <MenuItem value={"3"}>近3年</MenuItem>
        <MenuItem value={"5"}>近5年</MenuItem>
        <MenuItem value={"8"}>近8年</MenuItem>
        {/* <MenuItem value={"自訂"}>自訂</MenuItem> */}
      </Select>
    </FormControl>
  );
}
