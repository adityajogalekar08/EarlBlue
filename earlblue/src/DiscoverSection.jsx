import * as React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import TeaImage1 from "../src/img/tea-ds.jpg";
import TeaImage2 from "../src/img/tee-ds2.jpg";
import One from "../src/img/tea-ds1.jpg";
import Two from "../src/img/tee-ds2.jpg";
export default function DiscoverSection() {
  return (
    <Box
    sx={{  // centers horizontally
    px: { xs: 2, md: 4 },
        py: 8,
        marginTop: 4,
        
  }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 700, letterSpacing: 1, mb: 6 }}
      >
        DISCOVER EARL BLUE
      </Typography>

      {/* Content Grid */}
      <Grid container spacing={6} justifyContent="center">
        {/* Left Card */}
        <Grid item xs={12} md={6}>
          <Box>
            <Box
              component="img"
              src={One}
              alt="teaImage1"
              sx={{
                width: "100%",
                height: 380,
                objectFit: "cover",
                mb: 3,
              }}
            />

            <Typography
              variant="h6"
              sx={{ fontWeight: 700, letterSpacing: 0.5, mb: 2 }}
            >
              FIND THE LATEST NEWS ABOUT EARL BLUE
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "	#000035",
                color: "white",
                borderRadius: 0,
                px: 3,
                py: 1.2,
                "&:hover": { bgcolor: "#222" },
              }}
            >
              LATEST NEWS →
            </Button>
          </Box>
        </Grid>

        {/* Right Card */}

                <Grid item xs={12} md={6}>
          <Box>
            <Box
              component="img"
              src={TeaImage2}
              alt="Racing"
              sx={{
                width: "100%",
                height: 380,
                objectFit: "cover",
                mb: 3,
              }}
            />

            <Typography
              variant="h6"
              sx={{ fontWeight: 700, letterSpacing: 0.5, mb: 2 }}
            >
              BEST TEA, BEST EXPERIENCE, BEST PRICES
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#000035",
                color: "white",
                borderRadius: 0,
                px: 3,
                py: 1.2,
                "&:hover": { bgcolor: "#222" },
              }}
            >
              BUY NOW →
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
