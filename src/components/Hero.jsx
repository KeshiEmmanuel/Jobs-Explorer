import { HOME_CARDS } from "../constants";
import HomeCards from "./HomeCards";

function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-2">
        <h1 className="pt-5 relative text-orange-400 font-bold text-3xl sm:text-4xl">
          Become a React <span className="title-span">Dev</span>
        </h1>
        <p className="pt-1 text-center text-xl">
          Find the React Job that fits your skills and needs
        </p>
        <div className="pt-20 flex flex-col items-center gap-3 lg:flex-row">
          {HOME_CARDS.map((card) => (
            <HomeCards key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
