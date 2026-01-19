import * as React from "react";
import { Box, Grid, Typography, Divider, Link } from "@mui/material";

import TEA1 from "../src/img/1.jpeg";
import TEA2 from "../src/img/2.jpeg";
import TEA3 from "../src/img/3.jpeg";
import TEA4 from "../src/img/4.jpeg";

const teas = [
  {
    name: "MORINGA",
    price: "Prices from €20.99",
    img: TEA1,
  },
  {
    name: "ASHWAGANDHA",
    price: "Prices from €22.99",
    img: TEA2,
  },
  {
    name: "CINNAMON",
    price: "Prices from €21.99",
    img: TEA3,
  },
  {
    name: "SAFFRON TURMERIC TEA ",
    price: "Prices from €23.99",
    img: TEA4,
  },
];

export default function TeaRangeSection() {
  return (
    <Box sx={{ py: 12, px: { xs: 2, md: 6 }, bgcolor: "#ffe5d0" }}>
      {/* Title */}
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 700,
          letterSpacing: 2,
            mb: 10,
          color: "#000035", 
        }}
      >
        EARL BLUE TEA RANGE
      </Typography>

      {/* Grid */}
      <Grid container spacing={6} justifyContent="center">
        {teas.map((tea, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            {/* Card */}
            <Box
              component="a"
              href="#"
              sx={{
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
                p: 3,
                borderRadius: 1,
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  overflow: "hidden",
                  mb: 4,
                }}
              >
                <Box
                  component="img"
                  src={tea.img}
                  alt={tea.name}
                  sx={{
                    width: "100%",
                    maxWidth: 260,
                    mx: "auto",
                    display: "block",
                    transition: "transform 0.5s ease",
                    "&:hover": {
                      transform: "scale(1.08)",
                    },
                  }}
                />
              </Box>

              {/* Name */}
              <Typography
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  mb: 1.2,
                }}
              >
                {tea.name}
              </Typography>

              {/* Price */}
              <Typography
                sx={{
                  fontSize: 14,
                  color: "text.secondary",
                  mb: 3,
                }}
              >
                {tea.price}
              </Typography>

              {/* Actions */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                            gap: 2,
                  
                }}
              >
                {["SEE DETAILS", "ORDER NOW"].map(
                  (label, i) => (
                    <React.Fragment key={label}>
                      <Link
                        underline="none"
                        sx={{
                          fontSize: 12,
                          letterSpacing: 1,
                          fontWeight: 700,
                          color: "#000035",
                          position: "relative",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: "0%",
                            height: "2px",
                            left: 0,
                            bottom: -4,
                            backgroundColor: "#466e92",
                            transition: "width 0.3s ease",
                          },
                          "&:hover::after": {
                            width: "100%",
                          },
                        }}
                      >
                        {label}
                      </Link>

                      {i === 0 && (
                        <Divider orientation="vertical" flexItem />
                      )}
                    </React.Fragment>
                  )
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
