import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import FeaturedBooks from "./pages/FeaturedBooks";
import PastPicks from "./pages/PastPicks";
import Discussions from "./pages/Discussions";
import Store from "./pages/Store";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

import { QueryClient, QueryClientProvider } from "react-query";
import { Box } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Box
          sx={{
            bgcolor: "#F4D8CD",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <NavBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
            <Routes>
              <Route path="/" element={<FeaturedBooks />} />
              <Route path="/pastPicks" element={<PastPicks />} />
              <Route path="/discussions" element={<Discussions />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<SignUpPage />} />
            </Routes>
          </Box>
        </Box>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
