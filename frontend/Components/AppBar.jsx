import React, { useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ComputerIcon from "@mui/icons-material/Computer";
import Link from "next/link";
import { useRouter } from "next/router";
import { userContext } from "../Context/auth-context";
import { useLogout } from "../hooks/authToken";

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const logout = useLogout();

  const { state, dispatch } = useContext(userContext);
  //const logout = useLogout();
  const router = useRouter();

 /*  useEffect(() => {
    if (state) {
      dispatch({
        token: data.login.token,
        userId: data.login.userId,
        userRole: data.login.userRole,
        email: data.login.email,
      });
    }
  }, [state]); */

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    logout();

    dispatch({
      token: null,
      userId: null,
      userRole: null,
      email: null,
    });
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#0B142B" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link href="/" style={{ color: "white" }}>
              <ComputerIcon />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link
                href="/conditions"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem key="conditions" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Conditions</Typography>
                </MenuItem>
              </Link>
              <Link
                href="/winners"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem key="winner" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Winner</Typography>
                </MenuItem>
              </Link>
              {state.token &&
                (state.userRole === "ADMIN" || state.userRole === "JUDGE") && (
                  <Link
                    href="/submission/all"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem key="submission" onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Submission</Typography>
                    </MenuItem>
                  </Link>
                )}
              {state.token && state.userRole === "USER" && (
                <Link
                  href="/submission/submitted"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem key="submission" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Submission</Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link href="/" style={{ color: "white" }}>
              <ComputerIcon />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href="/conditions" style={{ textDecoration: "none" }}>
              <Button
                key="conditions"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Conditions
              </Button>
            </Link>
            <Link href="/winners" style={{ textDecoration: "none" }}>
              <Button
                key="winners"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Winners
              </Button>
            </Link>
            {state.token &&
              (state.userRole === "ADMIN" || state.userRole === "JUDGE") && (
                <Link href="/submission/all" style={{ textDecoration: "none" }}>
                  <Button
                    key="submission"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Submissions
                  </Button>
                </Link>
              )}
            {state.token && state.userRole === "USER" && (
              <Link
                href="/submission/submitted"
                style={{ textDecoration: "none" }}
              >
                <Button
                  key="submission"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Submissions
                </Button>
              </Link>
            )}
          </Box>
          {!state.token && (
            <Link
              href="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box sx={{ flexGrow: 0 }}>
                <Button style={{ textDecoration: "none", color: "white" }}>
                  Login
                </Button>
              </Box>
            </Link>
          )}
          {state.token && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="profile" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>

                <MenuItem key="settings" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Settings</Typography>
                </MenuItem>

                <MenuItem key="logout" onClick={handleLogout()}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
