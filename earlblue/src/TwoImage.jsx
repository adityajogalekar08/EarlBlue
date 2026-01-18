import { Box } from "@mui/material";
import One from "../src/img/2.jpeg";
import Two from "../src/img/3.jpeg";
export default function TwoImageRow() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      width="100%"
      gap={2}
    >
      <Box
        component="img"
        src={One}
        alt="Image 1"
        sx={{
          width: "50%",
          height: "auto",
          boxShadow: 3,
          borderRadius: 1,
        }}
      />

      <Box
        component="img"
        src={Two}
        alt="Image 2"
        sx={{
          width: "50%",
          height: "auto",
          boxShadow: 3,
          borderRadius: 1,
        }}
      />
    </Box>
  );
}
