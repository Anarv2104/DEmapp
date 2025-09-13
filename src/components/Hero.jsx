import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Power Up with <span>Persistent Memory</span>
        </h1>
        <p>
          De-MAPP (Decentralized Multi-Agent Persistent Protocol) brings 
          <strong> portable, Web3-native memory</strong> to your AI agents. 
          Store conversations in secure vaults, recall them anywhere, 
          and power truly connected intelligence.
        </p>
        <button className="cta-btn">Explore Protocol →</button>

        {/* ✅ Trusted Users Row */}
        <div className="trusted">
          <div className="avatars">
            <img src="/avatar1.png" alt="User 1" className="avatar" />
            <img src="/avatar2.png" alt="User 2" className="avatar" />
            <img src="/avatar3.png" alt="User 3" className="avatar" />
          </div>
          <span>
            Trusted by builders, researchers, and{" "}
            <strong>30,000+ early adopters</strong> worldwide
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;