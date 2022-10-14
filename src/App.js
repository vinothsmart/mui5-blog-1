import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

function App() {
  return (
    <div className="App">
      <Button startIcon={<FacebookIcon />} variant="outlined" color="secondary">
        Text
      </Button>
    </div>
  );
}

export default App;
