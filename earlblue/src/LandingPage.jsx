import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import green from "./img/1.jpeg";
import masala from "./img/2.jpeg";
import herbal from "./img/3.jpeg";
import black from "./img/4.jpeg";
import oolong from "./img/5.jpeg";
import white from "./img/6.jpeg";
import tulsi from "./img/7.jpeg";
import kahwa from "./img/8.jpeg";
import lemon from "./img/9.jpeg";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          EarlBlue Tea Co.
        </Typography>
        <Button color="inherit">Products</Button>
        <Button color="inherit">About Us</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

function Products() {
  const teas = [
    { name: "Moringa", img: green, price: "$12" },
    { name: "Ashwaganda", img: masala, price: "$15" },
    { name: "Cinnamon", img: herbal, price: "$10" },
    { name: "Saffron Turmeric", img: black, price: "$11" },
    { name: "Clove", img: oolong, price: "$14" },
    { name: "Rose", img: white, price: "$16" },
    { name: "Ginger", img: tulsi, price: "$13" },
    { name: "Cardamom", img: kahwa, price: "$18" },
    { name: "Ayurvedic", img: lemon, price: "$12" },
  ];

  return (
    <Container id="products" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Tea Collection
      </Typography>
      <Grid container spacing={4}>
        {teas.map((t, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="140" image={t.img} alt={t.name} />
              <CardContent>
                <Typography variant="h5">{t.name}</Typography>
                <Typography variant="body2">{t.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function About() {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4">About Us</Typography>
      <Typography>
        EarlBlue Tea Co. sources premium tea leaves from sustainable farms across India.
        Our mission is to bring freshness, purity, and wellness to every cup.
      </Typography>
    </Container>
  );
}

function Contact() {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4">Contact Us</Typography>
      <Typography>
        For business inquiries, collaborations, or wholesale orders, reach out anytime.
        Email: support@earlbluetea.com
      </Typography>
    </Container>
  );
}

function Footer() {
  return (
    <Box component="footer" style={{ marginTop: '20px', background: '#4a7c59', color: 'white', padding: '10px 0' }}>
      <Typography align="center">© 2026 EarlBlue Tea Co. All rights reserved.</Typography>
    </Box>
  );
}

