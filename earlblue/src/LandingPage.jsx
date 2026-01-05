import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  Button,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// ---------------------- IMAGE IMPORTS ----------------------
import green from "./img/1.jpeg";
import masala from "./img/2.jpeg";
import herbal from "./img/3.jpeg";
import black from "./img/4.jpeg";
import oolong from "./img/5.jpeg";
import white from "./img/6.jpeg";
import tulsi from "./img/7.jpeg";
import kahwa from "./img/8.jpeg";
import lemon from "./img/9.jpeg";

// ---------------------- THEME ----------------------
const theme = createTheme({
  palette: {
    primary: { main: "#000035" },
    secondary: { main: "#217b7e" },
    background: { default: "#F3F2FF", paper: "#FFFFFF" },
  },
  typography: { fontFamily: "'Inter', sans-serif", h4: { fontWeight: 700 } },
  shape: { borderRadius: 14 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "0.3s",
          paddingBottom: "10px",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
          },
        },
      },
    },
  },
});

// ---------------------- TEA DATA ----------------------
const teas = [
  { name: "Moringa", img: green, price: "€12" },
  { name: "Ashwaganda", img: masala, price: "€15" },
  { name: "Cinnamon", img: herbal, price: "€10" },
  { name: "Saffron Turmeric", img: black, price: "€11" },
  { name: "Clove", img: oolong, price: "€14" },
  { name: "Rose", img: white, price: "€16" },
  { name: "Ginger", img: tulsi, price: "€13" },
  { name: "Cardamom", img: kahwa, price: "€18" },
  { name: "Ayurvedic", img: lemon, price: "€12" },
];

// ---------------------- MAIN PAGE ----------------------
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:900px)");

  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    setMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* HEADER */}
      <AppBar position="static" color="primary" elevation={3}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
             EarlBlue Tea Co.
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              <Typography sx={{ cursor: "pointer" }}> EarlBlue Tea's</Typography>
              <Typography sx={{ cursor: "pointer" }} onClick={() => scrollToSection(contactRef)}>
                Contact Us
              </Typography>
              <Typography sx={{ cursor: "pointer" }} onClick={() => scrollToSection(aboutRef)}>
                About Us
              </Typography>
            </Box>
          )}

          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List sx={{ width: 240 }}>
          <ListItemButton onClick={() => scrollToSection(contactRef)}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
          <ListItemButton onClick={() => scrollToSection(aboutRef)}>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* MAIN CONTENT */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
           EarlBlue Tea's
        </Typography>

<Grid container spacing={4}>
  {teas.map((tea, idx) => (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={idx}>
      <Card sx={{ paddingBottom: 2 }}>
        <CardMedia
          component="img"
          height="260"
          image={tea.img}
          alt={tea.name}
        />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {tea.name}
          </Typography>

          <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
            {tea.price}
          </Typography>

          <TextField
            label="Quantity"
            type="number"
            size="small"
            defaultValue={1}
            sx={{ mt: 2, width: "100px" }}
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, display: "block" }}
          >
            Buy Now
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

      </Container>

      {/* CONTACT US SECTION */}
      <Box
        ref={contactRef}
        sx={{
          py: 6,
          px: 3,
          background: "#fff",
          border: "3px solid #001F54",
          borderRadius: 3,
          maxWidth: 800,
          mx: "auto",
          mt: 6,
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          transform: "translateX(-40px)",
          opacity: 0,
          animation: "slideInLeft 0.8s ease forwards",
        }}
      >
        <Container>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600 }}>
            Email: support@teacollection.com <br />
            Phone: +1 234 567 890
          </Typography>
        </Container>
      </Box>

      {/* ABOUT US SECTION */}
      <Box
        ref={aboutRef}
        sx={{
          py: 6,
          px: 3,
          background: "#F8F7FF",
          border: "3px solid #001F54",
          borderRadius: 3,
          maxWidth: 800,
          mx: "auto",
          mt: 6,
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          transform: "translateX(40px)",
          opacity: 0,
          animation: "slideInRight 0.8s ease forwards",
        }}
      >
        <Container>
          <Typography variant="h4" sx={{ mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600 }}>
            We bring the finest herbal and traditional teas from around the world.
          </Typography>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ py: 3, textAlign: "center", opacity: 0.7 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Tea Collection App
        </Typography>
      </Box>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes slideInLeft {
            from { transform: translateX(-40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes slideInRight {
            from { transform: translateX(40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </ThemeProvider>
  );
}
