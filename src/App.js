import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Box
        flex={1}
        sx={{
          backgroundColor: "tomato",
        }}
      >
        Box1
      </Box>
      <Box
        flex={5}
        sx={{
          backgroundColor: "blue",
        }}
      >
        Box2
      </Box>
      <Box
        flex={2}
        sx={{
          backgroundColor: "green",
        }}
      >
        Box3
      </Box>
    </Stack>
  );
}

export default App;
