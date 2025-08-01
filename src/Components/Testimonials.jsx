import { useState } from "react";
import { IoTriangle, IoTriangleOutline } from "react-icons/io5";

const testimonials = [
  {
    content: "Partnering with Captivating has significantly boosted our brand presence across India. Their network is strong, and their strategies are sharp and results-driven.",
    author: "Rohan Malhotra",
    designation: "Director of Sales, LuxeVoyage"
  },
  {
    content: "We were amazed by the level of personalized service and the quality of leads we received. The team's deep knowledge of the Indian travel market truly stands out.",
    author: "Emily Watson",
    designation: "Regional Manager, Elegant Escapes (UK)"
  },
  {
    content: "Their cost-effective approach helped us scale operations without heavy investment in local teams. We felt fully supported from day one.",
    author: "Jay Shah",
    designation: "Co-Founder, WanderElite"
  },
  {
    content: "Captivating played a pivotal role in launching our new cruise product. Their connections with top-tier planners and agencies made a noticeable difference.",
    author: "Sophie Leclerc",
    designation: "VP Marketing, Voyage Bleu"
  }
];

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="testimonials">
      <div className="head">
        <div className="line"></div>
        <div className="text">TESTIMONIALS</div>
        <div className="line"></div>
      </div>
      <div className="cards-container">
        {testimonials.map((e, i) => {
          let position = i === selectedIndex ? "center" : i === selectedIndex - 1 || (selectedIndex === 0 && i === testimonials.length - 1) ? "left" :
                         i === selectedIndex + 1 || (selectedIndex === testimonials.length - 1 && i === 0) ? "right" : "hidden";

          return (
            <div
              className={`card ${position}`}
              key={i}
              onClick={() => setSelectedIndex(i)}
            >
              <div className="inner-card">
                <div className="content">{e.content}</div>
                <div className="author">{e.author}, {e.designation}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pallets">
        {
            testimonials.map((e, i) => {
                if(i%2 === 1) {
                    return selectedIndex != i ? <IoTriangleOutline style={{rotate: "180deg"}}/> : <IoTriangle style={{rotate: "180deg"}} key={i} />
                }
                return selectedIndex !== i ? <IoTriangleOutline /> : <IoTriangle key={i} />
            })
        }
      </div>
    </div>
  );
}