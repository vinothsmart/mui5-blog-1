import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

function App() {
  return (
    <div className="App">
      <Button endIcon={<FacebookIcon />} variant="outlined" color="secondary">
        Text
      </Button>
    </div>
  );
}

export default App;
