import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import cardImage from "../../static/image3.jpg";

const Recents = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={6} xs={12}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={cardImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Perfermes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Wearing this shirt is like wearing a piece of art. The intricate
              patterns and vibrant colors make a bold statement.
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              align="center"
              component="div"
            >
              it's women love it
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary">
              The shirt is made from high-quality materials, ensuring both
              comfort and durability. It's a perfect choice for those who want
              to express their individuality through fashion.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Grid>
        <Grid item sx={{ backgroundColor: "lightgreen" }}>
          Item2
        </Grid>
      </Grid>
    </Box>
  );
};
export default Recents;
