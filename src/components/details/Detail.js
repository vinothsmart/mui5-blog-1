import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import HeroImage from "../../static/image5.jpg";
import postImage from "../../static/image3.jpg";
import RightBar from "../rightbar/RightBar";

const Detail = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backckgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          variant="h2"
          color="black"
          sx={{ fontWeight: 900, padding: 10 }}
        >
          Clicked Post Details
        </Typography>
      </Box>
      <Container>
        <hr />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            <Typography
              m={4}
              align="center"
              variant="body1"
              color="gray"
              sx={{ fontWeight: 900 }}
            >
              This is the detailed view of the clicked post. Here you can add
              more information about the post, such as the author, date, and
              content.
            </Typography>
            <CardMedia
              component="img"
              height="300px"
              image={postImage}
              alt="Post image"
            />
            <Typography
              m={4}
              align="center"
              variant="body1"
              color="gray"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              non aliquam dicta molestias, eos minima aperiam corrupti placeat
              labore architecto facilis nesciunt veritatis optio consectetur,
              beatae sunt animi delectus esse?.
            </Typography>
          </Box>
          <Box flex={1}>
            <RightBar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
export default Detail;
