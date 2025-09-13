import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import Header from "../components/Header";

export const NotFound = () => {
  return (
    <Layout>
      <Header />
      <div className="relative min-h-full flex flex-col items-center pt-40 text-center px-6">
        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6">
          <span className="relative glitch" data-text={`Wubba Lubba Dub-Dub!`}>
            Wubba Lubba Dub-Dub!
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-100 drop-shadow-md max-w-2xl mb-10">
          You wandered into a dead dimension, Morty. This page doesn’t exist,
          and neither will you if you hang around here too long. Hit the button,
          go back to the main page, and try not to break the multiverse again.
        </p>

        <Link to="/">
          <button
            className="font-schwifty relative px-8 py-3 rounded-full font-bold text-black bg-green-400 
                       shadow-[0_0_15px_5px_rgba(34,197,94,0.6)]
                       hover:bg-green-500 hover:shadow-[0_0_25px_8px_rgba(34,197,94,0.8)]
                       transition transform hover:scale-105"
          >
            This Button, Morty!
          </button>
        </Link>
      </div>
    </Layout>
  );
};
