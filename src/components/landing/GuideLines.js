import React from 'react';
import { Card } from 'antd';
import './styles/GuideLines.css';

const dataStore = [
  {
    title: 'Avoid Crowds',
    img: '/images_svg/SVG/Asset 1.svg',
    alt: 'Avoid crowds',
    desc: 'Avoid crowds',
  },
  {
    title: 'Use Sanitizers',
    img: '/images_svg/SVG/Asset 2.svg',
    alt: 'Use Sanitizers',
    desc: 'Use Sanitizers',
  },
  {
    title: 'Wear Masks',
    img: '/images_svg/SVG/Asset 4.svg',
    alt: 'Wear Masks',
    desc: 'Wear Masks',
  },
  {
    title: 'Dont Touch Face',
    img: '/images_svg/SVG/Asset 5.svg',
    alt: 'Dont Touch Face',
    desc: 'Dont Touch Face',
  },
  {
    title: 'Stay Home',
    img: '/images_svg/SVG/Asset 6.svg',
    alt: 'Stay Home',
    desc: 'Stay Home',
  },
  {
    title: 'Wash Hands',
    img: '/images_svg/SVG/Asset 7.svg',
    alt: 'Wash Hands',
    desc: 'Wash Hands',
  },
  {
    title: 'Eat Healthy',
    img: '/images_svg/SVG/Asset 9.svg',
    alt: 'Eat Healthy',
    desc: 'Eat Healthy',
  },
  {
    title: 'Excecise',
    img: '/images_svg/SVG/Asset 10.svg',
    alt: 'Excecise',
    desc: 'Excecise',
  },
];

function GuidelineCard({ title, img, alt, desc }) {
  const { Meta } = Card;

  return (
    <Card hoverable className="card" cover={<img alt={alt} src={img} />}>
      <Meta />
    </Card>
  );
}

function GuideLines() {
  return (
    <div className="guidelines_main_div">
      {dataStore.map((card) => (
        <div className="guidelines_card_div">
          <GuidelineCard
            // title={card.title}
            img={card.img}
            alt={card.alt}
            desc={card.desc}
          />
        </div>
      ))}
    </div>
  );
}

export default GuideLines;
