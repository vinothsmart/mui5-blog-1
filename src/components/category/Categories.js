import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { memo } from "react";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
});

const StyledTypography = styled(Box)({
  margin: "25p% 50px 25% 50px",
  background: "white",
  opcity: "0.8",
});

const Categories = () => {
  return (
    <Box>
      <Stack direction={"row"} spacing={4}>
        <StyledBox>
          <StyledTypography align="center" variant="h3">
            Category 1
          </StyledTypography>
        </StyledBox>
        <StyledBox>
          <StyledTypography align="center" variant="h3">
            Category 2
          </StyledTypography>
        </StyledBox>
        <StyledBox>
          <StyledTypography align="center" variant="h3">
            Category 3
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};
export default memo(Categories);
