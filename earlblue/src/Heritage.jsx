import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import IndianDesign from '../src/img/iH3.svg'; // Background image

const styles = {
  heritageSection: {
    backgroundImage: `url(${IndianDesign})`,
    backgroundColor: '#5A2E91', // Royal purple
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 20px',
    borderRadius: '12px',
    color: '#F1FAEE',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(90,46,145,0.8), rgba(230,57,70,0.7))',
    zIndex: 0,
    borderRadius: '12px',
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
    card: {
      color: '#F1FAEE',
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(6px)',
    borderRadius: '12px',
    padding: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    },
  },
  button: {
    marginTop: '40px',
    background: 'linear-gradient(90deg, #E63946, #FFB703)',
    color: '#F1FAEE',
    fontWeight: 'bold',
    padding: '12px 28px',
    borderRadius: '30px',
    textTransform: 'uppercase',
    '&:hover': {
      background: 'linear-gradient(90deg, #FFB703, #E63946)',
    },
  },
};

export default function Heritage() {
  return (
    <Box sx={styles.heritageSection}>
      <Box sx={styles.overlay} />
      <Box sx={styles.content}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: 2 }}>
          Celebrate Indian Heritage
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Experience the richness of India’s Tea Leaves & Drinks
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Card sx={styles.card}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#FFB703', fontWeight: 'bold' }}>
                  Art & Crafts
                </Typography>
                <Typography>
                  Discover vibrant handicrafts inspired by tea culture and heritage.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={styles.card}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#8ECAE6', fontWeight: 'bold' }}>
                  Tea & Cuisine
                </Typography>
                <Typography>
                  Taste the diverse flavors of Indian Tea leaves, chai blends, and spiced drinks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={styles.card}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#FB8500', fontWeight: 'bold' }}>
                  Dance & Music
                </Typography>
                <Typography>
                  Immerse yourself in rhythms that pair beautifully with a cup of chai.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Button variant="contained" sx={styles.button}>
          Explore More
        </Button>
      </Box>
    </Box>
  );
}
