import { AiOutlineDollarCircle, AiOutlineGlobal, AiOutlineCrown } from "react-icons/ai";

let cards = [
    {
        icon: "/bar-chart.png",
        title: "MOST COST EFFECTIVE SALES SUPPORT",
        content: "We deliver scalable sales solutions that maximize ROI and reduce operational costs, tailored to suit your business goals without compromising on quality or performance."
    },
    {
        icon: "/networking.png",
        title: "PERFECTLY CONNECTED ACROSS EUROPE AND AUSTRALASIA",
        content: "Our strong presence and reliable partner networks across Europe and Australasia ensure seamless communication, fast logistics, and consistent brand support in every market."
    },
    {
        icon: "/rating.png",
        title: "EXPERIENCED EXPERTS IN THE LUXURY MARKET",
        content: "With years of experience in the premium and luxury sectors, our team brings deep insight, refined strategy, and unmatched attention to detail tailored for high-end brands."
    }
];

export default function HowWorkContent() {
    return <div className="how-work-content">
        <div className="content-text">
            At Captivating our USP is providing extensive sales representation coverage of our clients to tour operators PAN India.<br />
            With a verified network of 100+ travel professionals, including tour operators, travel agencies, OTAs,<br />
            and planners in database, we ensure our client gets direct access to the most relevant markets and players in<br />
            the Indian travel fraternity; from top-tier tour operators to niche travel designers.<br />
            <br />
            Our B2B expertise spans across economic development, MICE & Wedding market capture<br />
            cruise market, product launch, distribution and development
        </div>
        <div className="cards">
            {
                cards.map((card, i)=>{
                    return <div className="card" key={i}>
                        <div className="inner-card">
                        <div className="icon" style={{backgroundImage: `url(${card.icon})`}}></div>
                        <div className="title">{card.title}</div>
                        <div className="divider"></div>
                        <div className="content">{card.content}</div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}