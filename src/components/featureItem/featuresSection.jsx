import React from 'react';
import FeatureItem from './featuresItem';
import featuresData from '../../../featuresData.json';
import ImageChat from "../../assets/icon-chat.png";
import ImageMoney from "../../assets/icon-money.png";
import ImageSecurity from "../../assets/icon-security.png";

const images = {
  "../../assets/icon-chat.png": ImageChat,
  "../../assets/icon-money.png": ImageMoney,
  "../../assets/icon-security.png": ImageSecurity,
};

function FeaturesSection() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={images[feature.icon]}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}

export default FeaturesSection;