import {
  AppBar,
  Box,
  InputBase,
  Menu,
  styled,
  Toolbar,
  Typography,
  MenuItem,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const StyledBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Products", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact Us", Link: "#" },
  ];

  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });

  return (
    <AppBar sx={{ background: "black" }}>
      <StyledToolbar>
        <StyledBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </StyledBox>
        <MenuIcon
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
        >
          {MenuItems.map((o) => (
            <Typography
              key={o.Name}
              sx={{ cursor: "pointer", fontSize: "14px" }}
            >
              {o.Name}
            </Typography>
          ))}
        </MenuIcon>
        <SearchBox>
          <InputBase placeholder="Search ..." sx={{ color: "white" }} />
          <Menu
            sx={{
              color: "white",
              display: {
                xs: "block",
                sm: "block",
                md: "none",
              },
            }}
          />
        </SearchBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={true}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box sx={{ width: 350, height: "90vh" }}>
            <MenuItem>Profile</MenuItem>
          </Box>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
