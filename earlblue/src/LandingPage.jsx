import React from "react";
import green from "./img/1.jpeg";
import masala from "./img/2.jpeg";
import herbal from "./img/3.jpeg";
import black from "./img/4.jpeg";
import oolong from "./img/5.jpeg";
import white from "./img/6.jpeg";
import tulsi from "./img/7.jpeg";
import kahwa from "./img/8.jpeg";
import lemon from "./img/9.jpeg";
import jasmine from "./img/2.jpeg";

export default function LandingPage() {
  return (
    <>
      <style>{`
        body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: #faf7f2;
  color: #333;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 4%;
  background: #001f3f;
  box-shadow: 0 0.2rem 0.6rem rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.nav button {
  background: none;
  border: none;
  margin-left: 2%;
  font-size: 1rem;
  cursor: pointer;
  color: white;
}

.nav button:hover {
  color: #4a7c59;
}

/* HERO */
.hero {
  width: 100%;
  min-height: 80vh;
  background: #001f3f; /* Navy Blue */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 5% 5%;
}

.hero h1 {
  font-size: clamp(2rem, 6vw, 4rem);
  margin-bottom: 1rem;
}

.cta-btn {
  padding: 1rem 2rem;
  background: #4a7c59;
  border: none;
  color: white;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

/* SECTIONS */
section {
  padding: 6% 5%;
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

/* PRODUCT GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  gap: 3%;
}

.card {
  background: white;
  padding: 5%;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.8rem rgba(0,0,0,0.1);
  text-align: center;
}

.card img {
  width: 100%;
  height: 20vh;
  object-fit: cover;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
}

.price {
  font-weight: bold;
  color: #4a7c59;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 3%;
  background: #4a7c59;
  color: white;
}

      `}</style>

      <Header />
    
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

/* HEADER */
function Header() {
  return (
    <div className="header">
      <div className="logo">EarlBlue Tea Co.</div>
      <div className="nav">
        <button>Products</button>
        <button>About Us</button>
        <button>Contact</button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Premium Organic Tea</h1>
        <p>Handpicked from the finest gardens of India.</p>
        <button className="cta-btn">Shop Now</button>
      </div>
    </section>
  );
}


/* PRODUCTS */
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
    <section>
      <h2>Our Tea Collection</h2>
      <div className="grid">
        {teas.map((t, i) => (
          <div key={i} className="card">
            <img src={t.img} alt={t.name} />
            <h3>{t.name}</h3>
            <p className="price">{t.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ABOUT */
function About() {
  return (
    <section>
      <h2>About Us</h2>
      <p>
        EarlBlue Tea Co. sources premium tea leaves from sustainable farms across India.
        Our mission is to bring freshness, purity, and wellness to every cup.
      </p>
    </section>
  );
}

/* CONTACT */
function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>For business inquiries, collaborations, or wholesale orders, reach out anytime.</p>
      <p>Email: support@earlbluetea.com</p>
    </section>
  );
}

/* FOOTER */
function Footer() {
  return (
    <footer>
      <p>© 2026 EarlBlue Tea Co. All rights reserved.</p>
    </footer>
  );
}
