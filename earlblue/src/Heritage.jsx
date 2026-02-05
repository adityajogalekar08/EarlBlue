import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import IndianDesign from '../src/img/iH1.svg'; // Background image

const styles = {
  heritageSection: {
    backgroundImage: `url(${IndianDesign})`,
    backgroundColor: '#5A2E91', // Royal purple
    backgroundSize: 'cover',
    padding: '60px 20px',
    borderRadius: '8px',
    color: '#F1FAEE', // Light text color for contrast
    textAlign: 'center',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#E63946',
    color: '#F1FAEE',
  },
};

export default function Heritage() {
  return (
    <Box sx={styles.heritageSection}>
      <Typography variant="h3" gutterBottom>
        Celebrate Indian Heritage
      </Typography>
      <Typography variant="h5">
        Experience the richness of India's Tea.
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '40px' }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Art & Crafts</Typography>
          <Typography>
            Discover vibrant handicrafts from different regions.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Cuisine</Typography>
          <Typography>
            Taste the diverse flavors of Indian Tea Leaves and drink.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Dance & Music</Typography>
          <Typography>
            Immerse yourself in traditional music and dance forms.
          </Typography>
        </Grid>
      </Grid>

      <Button variant="contained" sx={styles.button}>
        Explore More
      </Button>
    </Box>
  );
}
