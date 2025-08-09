import { Box, Stack, styled, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
});

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black", height: "300px" }}>
      <Stack direction={{ xs: "row", sm: "row", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography color="white" align="center">
            Contact US
          </Typography>
          <Typography color="white" align="center">
            About US
          </Typography>
          <Typography color="white" align="center">
            Link 2
          </Typography>
          <Typography color="white" align="center">
            Link 3
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color="white" align="center">
            Data Policy
          </Typography>
          <Typography color="white" align="center">
            Terms of Service
          </Typography>
          <Typography color="white" align="center">
            Cookies
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color="white" align="center">
            Data Policy
          </Typography>
          <Typography color="white" align="center">
            Terms of Service
          </Typography>
          <Typography color="white" align="center">
            Cookies
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color="white" align="center">
            Categories
          </Typography>
          <Typography color="white" variant="body2" align="center">
            Kids
          </Typography>
          <Typography color="white" variant="body2" align="center">
            Mens
          </Typography>
          <Typography color="white" variant="body2" align="center">
            Womens
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color="white" align="center">
            Follow Us
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};
export default Footer;
