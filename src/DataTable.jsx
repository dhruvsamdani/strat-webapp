import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { PaperTheme } from "./styles/ComponentStyles";

export default function DataTable(props) {
  const { data } = props;
  const columns = [
    { field: "id", headerName: "Date", width: 120 },
    { field: "open", headerName: "Open", width: 80 },
    { field: "high", headerName: "High", width: 80 },
    { field: "low", headerName: "Low", width: 80 },
    { field: "close", headerName: "Close", width: 80 },
    { field: "volume", headerName: "Volume", width: 100 },
    { field: "netWorth", headerName: "Net Worth", width: 100 },
    { field: "sharesOwned", headerName: "Shares Owned", width: 100 },
    { field: "sp500", headerName: "S&P500", width: 80 },
  ];
  const rows = [];
  console.log(data);
  data.forEach((item) => {
    rows.push({
      id: item.Date,
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close,
      volume: item.volume,
      netWorth: item.net_worth,
      sharesOwned: item.shares_owned,
      sp500: item.SP500,
    });
  });

  return (
    <div>
      <ThemeProvider theme={PaperTheme}>
        <Paper
          sx={{ height: "25rem", width: "65rem", marginTop: "1rem" }}
          elevation={8}
        >
          <DataGrid
            density="compact"
            sx={{
              backgroundColor: "white",
              border: "none",
              width: "60rem",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
            rows={rows}
            columns={columns}
            checkboxSelection
          />
        </Paper>
      </ThemeProvider>
    </div>
  );
}
