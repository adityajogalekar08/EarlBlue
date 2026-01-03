import React from "react";

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
          padding: 20px 40px;
          background: #ffffff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #4a7c59;
        }

        .nav button {
          background: none;
          border: none;
          margin-left: 20px;
          font-size: 1rem;
          cursor: pointer;
          color: #333;
        }

        .nav button:hover {
          color: #4a7c59;
        }

        /* HERO */
        .hero {
          height: 70vh;
          background: url("https://images.unsplash.com/photo-1513639725746-c5d3e861f32a") center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 0 20px;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        .cta-btn {
          padding: 12px 28px;
          background: #4a7c59;
          border: none;
          color: white;
          font-size: 1.1rem;
          border-radius: 6px;
          cursor: pointer;
        }

        /* SECTIONS */
        section {
          padding: 60px 20px;
          max-width: 1200px;
          margin: auto;
        }

        /* PRODUCT GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          text-align: center;
        }

        .card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .price {
          font-weight: bold;
          color: #4a7c59;
        }

        /* FOOTER */
        footer {
          text-align: center;
          padding: 20px;
          background: #4a7c59;
          color: white;
        }
      `}</style>

      <Header />
      <Hero />
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
        <button>Contact Us</button>
      </div>
    </div>
  );
}

/* HERO */
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
    { name: "Green Tea", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", price: "$12" },
    { name: "Masala Chai", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba", price: "$15" },
    { name: "Herbal Tea", img: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc5a", price: "$10" },
    { name: "Black Tea", img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9", price: "$11" },
    { name: "Oolong Tea", img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9", price: "$14" },
    { name: "White Tea", img: "https://images.unsplash.com/photo-1513639725746-c5d3e861f32a", price: "$16" },
    { name: "Tulsi Tea", img: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc5a", price: "$13" },
    { name: "Kashmiri Kahwa", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba", price: "$18" },
    { name: "Lemon Ginger Tea", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", price: "$12" },
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
