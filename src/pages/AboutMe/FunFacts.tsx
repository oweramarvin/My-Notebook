import { useState } from "react";
import "./FunFacts.css";

interface Fact {
  id: number;
  category: string;
  title: string;
  description: string;
}

const facts: Fact[] = [
  {
    id: 1,
    category: "Never Have I Ever",
    title: "Smelled a fart",
    description:
      "Yes, that’s correct I don’t have a sense of smell (pang-amoy). I’ve never smelled farts, perfume, or anything similar - just like Blythe. Don’t get me wrong though, I can still sense strong substances like gasoline or Vicks when they’re very close, but I can’t actually smell them.",
  },
  {
    id: 2,
    category: "Childhood Thoughts",
    title: "I thought we were inside the Earth",
    description:
      "When I was a kid, I was always curious about how airplanes travel. For a long time, I thought we were living inside the Earth, until I eventually realized that we live on the surface of it.",
  },
  {
    id: 3,
    category: "Birth Story",
    title: "Santa Cruz, Laguna is not my Birth Place",
    description:
      "All my records, including my birth certificate, say I was born in Santa Cruz, Laguna. The truth is, I first tried to be born at home in Santa Cruz, but there were complications. My mother had to go to a hospital, and since I still couldn’t come out, they transferred her to another hospital in Unson, Pagsanjan, where I was finally born.",
  },
  {
    id: 4,
    category: "Childhood Dream",
    title: "My first dream job is",
    description:
      "As a kid, my dream job was simply to make money. I imagined that by doing this, I would eventually become rich and have everything I wanted.",
  },
  {
    id: 5,
    category: "School Days",
    title: "I considered myself the best in math",
    description:
      "From grade 2 to grade 7, I considered myself the best in math along with all my classmates. I wasn’t necessarily the highest scorer, and no one else really said it; it was just how I saw myself. Everything changed in grade 8 when I met Ron and others, they were truly the best!",
  },
  {
    id: 6,
    category: "Personality Quirk",
    title: "People think I always debate",
    description:
      "Throughout my school days, people often thought I liked to argue. The truth is, I just want to explain myself clearly. I always try to prove my point, not to win, so others can understand my perspective.",
  },
  {
    id: 7,
    category: "Unique Features",
    title: "I have two hair whorls (puyo) near my cheeks",
    description:
      "I have two little hair whorls, one near each cheek. They’re like tiny hair “swirls” that make me unique. Soon I’ll add an image of this in my portfolio so you can see them for yourself.",
  },
  {
    id: 8,
    category: "Work Life",
    title: "I got my 13th month pay before my first salary",
    description:
      "I started my corporate job on November 27, xxxx, and surprisingly, I received my 13th month pay before my first salary. It was an unexpected and exciting start to my professional life!",
  },
];

export default function FunFacts() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Fun Facts</h2>

        <div className="funfacts-container">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className={`fact-card ${openId === fact.id ? "open" : ""}`}
              onClick={() => toggle(fact.id)}
            >
              <div className="top-row">
                <span className="category">✦ {fact.category}</span>
                <span className="plus">{openId === fact.id ? "−" : "+"}</span>
              </div>

              <div className="title">{fact.title}</div>

              <div className="description-wrapper">
                <p className="description">{fact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
