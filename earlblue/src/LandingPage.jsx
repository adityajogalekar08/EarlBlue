import React, { useEffect, useState } from "react";
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, 
  Card, CardContent, CardMedia, Box 
} from '@mui/material';
import { keyframes } from '@mui/system';

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

// Animation for cards
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Extract two colors using Canvas
function extractTwoColors(imgSrc, callback) {
  const image = new Image();
  image.src = imgSrc;
  image.crossOrigin = "anonymous";

  image.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    let r = 0, g = 0, b = 0, count = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    const avgR = Math.floor(r / count);
    const avgG = Math.floor(g / count);
    const avgB = Math.floor(b / count);

    const color1 = `rgb(${avgR}, ${avgG}, ${avgB})`;

    // Slightly darker secondary color
    const color2 = `rgb(${avgR * 0.7}, ${avgG * 0.7}, ${avgB * 0.7})`;

    callback(color1, color2);
  };
}

function TeaCard({ name, img, price }) {
  const [gradient, setGradient] = useState("linear-gradient(135deg, #ffffff, #dddddd)");

  useEffect(() => {
    extractTwoColors(img, (c1, c2) => {
      setGradient(`linear-gradient(135deg, ${c1}, ${c2})`);
    });
  }, [img]);

  return (
    <Card
      sx={{
        maxWidth: 360,
        borderRadius: 4,
        overflow: "hidden",
        background: gradient,
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        animation: `${slideIn} 0.7s ease-out`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={img}
        alt={name}
      />

      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
    </Card>
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
          <Grid item key={i} xs={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <TeaCard name={t.name} img={t.img} price={t.price} />
            </Box>
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
    <Box 
      component="footer" 
      style={{ marginTop: '20px', background: '#4a7c59', color: 'white', padding: '10px 0' }}
    >
      <Typography align="center">
        © 2026 EarlBlue Tea Co. All rights reserved.
      </Typography>
    </Box>
  );
}
