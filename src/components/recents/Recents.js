import { Box, Grid } from "@mui/material";
import cardImage from "../../static/image3.jpg";
import Card from "../card/Card";

const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item>
          <Card image={cardImage} />
        </Grid>
        <Grid item xs={6}>
          <Card image={cardImage} />
        </Grid>
        <Grid item xs={6}>
          <Card image={cardImage} />
        </Grid>
        <Grid item xs={6}>
          <Card image={cardImage} />
        </Grid>
        <Grid item xs={6}>
          <Card image={cardImage} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Recents;
