import React, { useState } from "react";
import FaqItem from "./FaqItem";

const faqs = [
  {
    id: "what",
    iconSrc: "/assets/bonuses/burn.svg",
    qstn: "WHAT IS BURN BATTLE?",
    answr: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: "how-will",
    iconSrc: "/assets/bonuses/sword.svg",
    qstn: "HOW WILL LOOT WORK?",
    answr: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: "what-are",
    iconSrc: "/assets/bonuses/timer.svg",
    qstn: "WHAT ARE TIERS?",
    answr: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: "what-is",
    iconSrc: "/assets/bonuses/gift.svg",
    qstn: "WHAT IS YOUR VISION FOR THE PROJECT?",
    answr: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: "who-are",
    iconSrc: "/assets/bonuses/speedup.svg",
    qstn: "WHO ARE YOU PARTNERING WITH?",
    answr: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
];
export default function FAQ() {
  const [currentFaq, setCurrentFaq] = useState("");
  return (
    <div id="faq" className="wrap">
      <div className=" relative">
        <p className="heading text-center">FREQUENTLY ASKED QUESTIONS</p>
        <p className="paragraph text-center mt-2 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
        <div className="grid grid-cols-1  gap-4 lg:gap-4 w-full mb-14 lg:mb-20">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.id}
              id={f.id}
              currentFaq={currentFaq}
              setCurrentFaq={setCurrentFaq}
              delay={i}
              {...f}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
