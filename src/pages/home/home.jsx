import React from 'react';
import ImageTree from "../../assets/bank-tree.webp";
import FeaturesSection from '../../components/featureItem/featuresSection';
import './home.css';

function Home() {
  return (
    <>

      <main>      
        <div className="hero">
        <div className="hero"
        style={{
          backgroundImage: `url(${ImageTree})`,
        }}></div>
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>

        <FeaturesSection />
        
      </main>
    </>
  );
}

export default Home;
