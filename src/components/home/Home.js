import { Box, Container, Stack } from "@mui/material";
import Hero from "../hero/Hero";
import Categories from "../category/Categories";
import Recents from "../recents/Recents";
import RightBar from "../rightbar/RightBar";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Container>
        <Categories />
        <Stack direction={"row"} spacing={2} mt={8}>
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            <Recents />
          </Box>
          <Box flex={1}>
            <RightBar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
export default Home;
