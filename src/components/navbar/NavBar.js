import {
  AppBar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

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
        <MenuBox>
          {MenuItems.map((o) => (
            <Typography
              key={o.Name}
              sx={{ cursor: "pointer", fontSize: "14px" }}
            >
              {o.Name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="Search ..." sx={{ color: "white" }} />
        </SearchBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
