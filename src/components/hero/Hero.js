import React, { memo } from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box>
      <Typography variant="h3" align="center" sx={{ fontWeight: 900 }}>
        Fashions <b style={{ color: "red" }}>Blog</b>
      </Typography>
      <Typography variant="body2" align="center" sx={{ fontWeight: 900 }}>
        We make you look the better of you!
      </Typography>
      {/* <Box sx={{ backgroundImage: `url()` }}></Box> */}
    </Box>
  );
};

export default memo(Hero);
