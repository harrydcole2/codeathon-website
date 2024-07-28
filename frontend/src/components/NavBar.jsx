import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import "../index.css";
import Iconify from "./Iconify";
import { Button } from "@mui/material";
import { AppContext } from "./AppContext";
import MenuIcon from "@mui/material/Menu";

const drawerWidth = 240;
const navItems = [
  "Featured Books",
  "Past Picks",
  "Discussions",
  "Store",
  "About",
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { role, setToken, setRole } = useContext(AppContext);

  const handleLoginStatusChange = () => {
    if (role) {
      setToken("");
      setRole("");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#EDB183", position: "fixed" }}>
        <Toolbar sx={{ height: 80 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Iconify
              icon="solar:book-2-linear"
              sx={{ color: "#F15152", width: 50, height: 70 }}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={NavLink}
                to={
                  item === "Featured Books"
                    ? "/"
                    : `/${item.replace(" ", "").toLowerCase()}`
                }
                sx={{
                  color: "black",
                  bgcolor: "#F15152",
                  fontWeight: "bold",
                  mx: 1,
                  "&:hover": {
                    bgcolor: "#D13132",
                  },
                  "&.active": {
                    bgcolor: "#D13132",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1E555C",
              mx: 2,
            }}
            onClick={handleLoginStatusChange}
          >
            {!role ? "Login" : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, mt: 10 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default NavBar;
