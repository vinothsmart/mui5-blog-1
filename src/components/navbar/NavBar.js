import { AppBar, Box, styled, Toolbar } from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <AppBar>
      <StyledToolbar>
        <Box>Social</Box>
        <Box>Menu</Box>
        <Box>Searh</Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
