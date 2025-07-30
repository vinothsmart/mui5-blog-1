import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import { memo } from "react";
import kidsImage from "../../static/kids.jpg";
import mensName from "../../static/men.jpg";
import womensName from "../../static/women.jpg";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: 0.8,
});

const Categories = () => {
  return (
    <Box>
      <Stack
        direction={{
          xs: "column",
          sm: "row",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        spacing={{
          xs: 2,
          sm: 3,
          md: 4,
          lg: 5,
          xl: 6,
        }}
      >
        <StyledBox
          sx={{
            backgroundImage: `url(${kidsImage})`,
          }}
        >
          <StyledTypography align="center" variant="h3">
            Kids
          </StyledTypography>
        </StyledBox>
        <StyledBox
          sx={{
            backgroundImage: `url(${mensName})`,
          }}
        >
          <StyledTypography align="center" variant="h3">
            Men
          </StyledTypography>
        </StyledBox>
        <StyledBox
          sx={{
            backgroundImage: `url(${womensName})`,
          }}
        >
          <StyledTypography align="center" variant="h3">
            Women
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};
export default memo(Categories);
