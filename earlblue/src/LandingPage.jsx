import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import EarlBlueLogo from "../src/img/logo.jpeg";
// Import video
import gbVideo from "./img/tea-bg-vid.mp4";

// Import a premium Google Font (Playfair Display)
import "@fontsource/playfair-display/600.css"; // weight 600

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Force play if browser blocks autoplay
          videoRef.current.muted = true;
          videoRef.current.play();
        });
      }
    }
  }, []);

  const menuItems = ["Products", "Collection", "Specials", "About Us"];

  // -------------------------------
  // COMMON CSS (inside this page only)
  // -------------------------------
  const goldColor = "#D4AF37";

  const StyledMenuItem = styled(MenuItem)(() => ({
    color: goldColor,
    fontWeight: 600,
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.1rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "0.3s ease",
    "&:hover": {
      color: "#f5d77c",
      transform: "translateY(-2px)",
    },
  }));

  return (
    <>
      {/* Transparent Menu */}
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          background: "transparent",
          boxShadow: "none",
          paddingTop: 1,
          zIndex: 20, // stays above overlay + video
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* Logo */}
          <img
    src={EarlBlueLogo}
    alt="Logo"
    style={{ height: 100, objectFit: "contain" }}
  />


          {/* Desktop Menu */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 4,
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              {menuItems.map((item) => (
                <StyledMenuItem key={item}>{item}</StyledMenuItem>
              ))}
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: goldColor }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    sx: {
                      color: goldColor,
                      fontWeight: 600,
                      fontFamily: "'Playfair Display', serif",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* HERO SECTION WITH VIDEO OR NAVY BACKGROUND */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {!isMobile ? (
          <>
            {/* Video */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => videoRef.current && videoRef.current.play()}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none",
              }}
            >
              <source src={gbVideo} type="video/mp4" />
            </video>

            {/* Black Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.45)",
                zIndex: 5,
              }}
            />
          </>
        ) : (
          // Mobile → Navy Blue Background
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#000035",
            }}
          />
        )}
      </Box>
    </>
  );
};

export default LandingPage;
