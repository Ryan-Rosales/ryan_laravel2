import React from "react";
import Card from "../components/Card";
import "../../sass/Home.scss"; // using SCSS

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Web Application</h1>
          <p className="hero-subtitle">
            Explore powerful features designed to make your life easier and more fun.
          </p>
          <a href="#features" className="hero-btn">
            Discover More
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="features-title">Awesome Features</h2>
        <div className="features-grid">
          <Card
            title="Feature 1"
            description="An awesome feature that boosts your productivity instantly."
          />
          <Card
            title="Feature 2"
            description="Smart tools that simplify your workflow and save time."
          />
          <Card
            title="Feature 3"
            description="A beautifully designed interface you'll enjoy using every day."
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
