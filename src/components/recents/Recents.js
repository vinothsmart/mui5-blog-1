import { Box, Grid } from "@mui/material";
import cardImage from "../../static/image3.jpg";
import Card from "../card/Card";

const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item>
          <Card image={cardImage} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card image={cardImage} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card image={cardImage} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card image={cardImage} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card image={cardImage} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Recents;
