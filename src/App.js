//components
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import { Box } from "@mui/material";

export default function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </div>
  );
}
