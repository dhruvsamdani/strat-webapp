import React, { useState, useEffect } from "react";
import StockSelector from "./StockSelector";
import { ThemeProvider } from "@mui/material/styles";
import theme from './styles/DefaultTheme'
import DataTable from "./DataTable";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


function App() {
  const [data, setData] = useState([])
  const [graph, setGraph] = useState("")
  const b64graph = "data:image/png;base64," + graph
  const props = {
    data: {
      data: data,
      setData: setData
    },
    graph: {
      graph: graph,
      setGraph: setGraph
    }
  }
  let picture = <Skeleton variant="rectangular" width={'65rem'} height={'25rem'} />
  if (graph === "") {
    picture = <Skeleton variant="rectangular" animation={false} width={'65rem'} height={'25rem'} sx={{ borderRadius: '25px' }} />
  } else {
    picture = (
      <div className="subApp">
        <Box
          elevation={8}
          component="img"
          sx={{
            height: '25rem',
            width: '65rem',
            boxShadow: 8,
            borderRadius: '25px'
          }}
          src={b64graph}
        />
      </div>
    )

  }

  const elem = (
    <div className="App">

      <ThemeProvider theme={theme}>
        <StockSelector className="stockSelector" {...props} ></StockSelector>
      </ThemeProvider>
      <div className="resData">
        {picture}
        <DataTable className="dt" data={data}  ></DataTable>

      </div>

    </div >
  );
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return elem

}

export default App;
