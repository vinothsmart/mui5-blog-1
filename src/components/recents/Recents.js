import { Box, Grid } from "@mui/material";

const Recents = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={6} xs={12}>
          Item1
        </Grid>
        <Grid item sx={{ backgroundColor: "lightgreen" }}>
          Item2
        </Grid>
      </Grid>
    </Box>
  );
};
export default Recents;
