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
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
