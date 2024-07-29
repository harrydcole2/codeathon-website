import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Featured from "./pages/Featured";
import PastPicks from "./pages/PastPicks";
import Discussions from "./pages/Discussions";
import Store from "./pages/Store";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { QueryClient, QueryClientProvider } from "react-query";
import { Box } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Box
          sx={{
            backgroundImage: 'url("/pattern.png")',
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            // bgcolor: "#F5F5F5",
            minHeight: "98vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <NavBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
            <Routes>
              <Route path="/" element={<Featured />} />
              <Route path="/pastPicks" element={<PastPicks />} />
              <Route path="/discussions" element={<Discussions />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Box>
        </Box>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
