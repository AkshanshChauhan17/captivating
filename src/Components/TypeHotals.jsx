import { useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

let hotels = [
    {
        name: "HOTELS",
        title: "Comfort",
        paragraph: "Discover a curated selection of top-rated hotels offering world-class hospitality, luxurious amenities, and prime locations to make your stay unforgettable.",
        bg_img: "/Hotels/Hotels2.png"
    },
    {
        name: "DMC",
        title: "Expertise",
        paragraph: "Partner with experienced DMCs that provide end-to-end travel solutions, from itinerary planning to ground logistics, smooth and memorable journeys.",
        bg_img: "/DMC/DMC2.png"
    },
    {
        name: "CRUISE",
        title: "Voyage",
        paragraph: "Embark on extraordinary cruise experiences with elegant cabins, gourmet dining, and breathtaking ocean views, all while exploring exotic destinations.",
        bg_img: "/cruise/cruise2.png"
    },
    {
        name: "TRAVELS",
        title: "Exploration",
        paragraph: "Explore custom travel services designed to suit your unique preferences. From solo adventures to group tours, every journey is personalized to perfection.",
        bg_img: "/Travel/travel2.png"
    },
    {
        name: "CULINARY",
        title: "Flavors",
        paragraph: "Savor global cuisines and gourmet experiences curated by top chefs and food experts, blending local flavors with international flair for true culinary delight.",
        bg_img: "/CULINARY/CULINARY2.png"
    },
    {
        name: "LUXURY",
        title: "Elegance",
        paragraph: "Indulge in opulence with luxury services and destinations that offer bespoke experiences, from private villas to premium concierge care.",
        bg_img: "/luxury/luxury2.png"
    },
    {
        name: "WELLNESS",
        title: "Rejuvenation",
        paragraph: "Immerse yourself in wellness retreats focused on holistic healing, spa therapies, and serene environments to restore inner balance and peace.",
        bg_img: "/wellness/wellness2.png"
    },
    {
        name: "ATTRACTIONS",
        title: "Discovery",
        paragraph: "Experience the best your destination has to offer—from iconic landmarks to hidden cultural treasures, every attraction promises a new discovery.",
        bg_img: "/attractions/attractions2.png"
    }
];

export default function TypeHotels() {
    const [selected, setSelected] = useState(0);

    function handleSelectedMin() {
        if(selected < 1) {
            setSelected(0);
        } else {
            setSelected(selected - 1);
        }
    };

    function handleSelectedPlu() {
        if(selected >= hotels.length - 1) {
            setSelected(hotels.length - 1);
        } else {
            setSelected(selected + 1);
        }
    };

    return <div className="type-hotels" style={{backgroundImage: `url(${hotels[selected].bg_img})`}}>
        <div className="heads">
            {
                hotels.map((e, i)=>{
                    return <div className={selected === i ? "selected head" : "head"} key={i}>{e.name}</div>
                })
            }
        </div>
        <div className="main-content">
            <AiOutlineLeftCircle className="content-controls" onClick={()=>handleSelectedMin()} />
            {
                hotels.map((e, i)=>{
                    if(selected != i) {
                        return null;
                    }
                    return <div className="content" key={i}>
                        <div className="title font-x fade-up">{e.title}</div>
                    </div>
                })
            }
            <AiOutlineRightCircle className="content-controls" onClick={()=>handleSelectedPlu()} />
        </div>
        {
            hotels.map((e, i)=>{
                if(selected != i) {
                    return null;
                }
                return <div className="content-two" key={i}>
                    <div className="paragraph">{e.paragraph}</div>
                </div>
            })
        }
    </div>
}