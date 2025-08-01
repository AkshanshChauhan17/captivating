import Footer from "../Components/Footer";
import HomeHero from "../Components/HomeHero";
import HowWork from "../Components/HowWork";
import HowWorkContent from "../Components/HowWorkContent";
import NewsLetter from "../Components/NewsLetter";
import SMPR from "../Components/SMPR";
import Testimonials from "../Components/Testimonials";
import TypeHotels from "../Components/TypeHotals";

export default function Home() {
    return <div className="home">
        <HomeHero />
        <SMPR />
        <TypeHotels />
        <HowWork />
        <HowWorkContent />
        <Testimonials />
        <NewsLetter />
        <Footer />
    </div>
}