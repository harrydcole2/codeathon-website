import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Iconify from "./Iconify";

const navItems = [
  { name: "Featured", path: "/" },
  { name: "Past Picks", path: "/pastPicks" },
  { name: "Discussions", path: "/discussions" },
  { name: "Store", path: "/store" },
  { name: "About", path: "/about" },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <NavLink
              to={item.path}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight:
                        location.pathname === item.path ? "bold" : "normal",
                    }}
                  >
                    {item.name}
                  </Typography>
                }
                sx={{ textAlign: "center" }}
              />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#9a0147" }}>
      <Toolbar sx={{ height: "80px" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" }, mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Iconify
          icon="solar:book-2-linear"
          sx={{ color: "white", width: 40, height: 40, mr: 2 }}
        />
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{
            flexGrow: 1,
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          Red Letter Book Club
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                }}
              >
                {item.name}
              </Typography>
            </NavLink>
          ))}
        </Box>
        <Button
          variant="contained"
          onClick={() => navigate("/login")}
          sx={{
            backgroundColor: "white",
            color: "#9a0147",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Login
        </Button>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
