import { Button, Paper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import InputFilledAC, {
  PaperTheme,
  ButtonTheme,
} from "./styles/ComponentStyles";
import { ThemeProvider } from "@emotion/react";
import data from "./tickers.json";
import { createFilterOptions } from "@mui/material/Autocomplete";
import axios from "axios";

const tickers = data.tickers;

const filterOptions = createFilterOptions({
  matchFrom: "start",
  limit: 100,
  trim: true,
});

const baseUrl = "https://strat-backtest.herokuapp.com/";
async function getData(tick, years, strat) {
  if (tick === "" || years == 0) {
    console.log("ERROR");
    return;
  }
  let response = await axios.get(
    baseUrl +
      "/stock/data?ticker=" +
      tick +
      "&years=" +
      years +
      "&strat=" +
      strat
  );
  return response.data;
}

export default function StockSelector(props) {
  const [tickerState, setTickerState] = useState("");
  const [years, setYears] = useState(0);
  const [strat, setStrat] = useState("crossover");
  const { data, setData } = props.data;
  const { graph, setGraph } = props.graph;
  return (
    <div className="stockSelector">
      <ThemeProvider theme={PaperTheme}>
        <Paper sx={{ width: "15rem", height: "25rem" }} elevation={8}>
          <ThemeProvider theme={InputFilledAC}>
            <Autocomplete
              freeSolo
              options={tickers}
              filterOptions={filterOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Ticker"
                  variant="filled"
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                  onChange={(event) => {
                    setTickerState(event.target.value);
                  }}
                />
              )}
              onChange={(event) => {
                setTickerState(event.target.innerText);
              }}
            />
            <TextField
              label="Years"
              type="number"
              variant="filled"
              InputProps={{
                disableUnderline: true,
                inputProps: { min: 0, max: 10 },
              }}
              onChange={(event) => {
                setYears(event.target.value);
              }}
            />
            <Autocomplete
              options={["Crossover"]}
              filterOptions={filterOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Strategy"
                  variant="filled"
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                />
              )}
              onChange={(event) => {
                setStrat(String(event.target.innerText).toLowerCase());
              }}
            />
          </ThemeProvider>
          <ThemeProvider theme={ButtonTheme}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => {
                getData(tickerState, years, strat).then((data) => {
                  setData(data.data);
                  setGraph(data.graph);
                });
              }}
            >
              Backtest
            </Button>
          </ThemeProvider>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
