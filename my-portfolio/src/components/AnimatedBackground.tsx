import React from "react";
import "./AnimatedBackground.css";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-bg">
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
