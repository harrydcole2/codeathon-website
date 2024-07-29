import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  CircularProgress,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLoginUser } from "../hooks/users";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLoginUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password }); // TODO: Snackbar notification
  };

  if (loginMutation.isLoading) {
    return (
      <Container maxWidth="xs">
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {loginMutation.isError && (
              <Typography color="error" sx={{ mt: 2 }}>
                {loginMutation.error.message}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#9a0147",
                "&:hover": {
                  backgroundColor: "#7f003e",
                },
              }}
            >
              Sign In
            </Button>

            <Link to="/register" variant="body2">
              <Typography color="primary" variant="body2">
                {"Don't have an account? Sign up here!"}
              </Typography>
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
