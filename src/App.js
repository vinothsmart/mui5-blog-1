import { Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <Button endIcon={<FacebookIcon />} variant="outlined" color="secondary">
        Text
      </Button>
    </div>
  );
}

export default App;
