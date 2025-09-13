import type { Character } from "../types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import quotes from "../assets/data/rickAndMortyQuotes.json";

export const CharacterCard = ({
  name,
  image,
  status,
  species,
  gender,
  type,
  origin,
}: Character) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState<{
    id: number;
    quote: string;
    character: string;
  } | null>(null);

  return (
    <>
      <motion.article
        layoutId={name}
        onClick={() => {
          setCurrentQuote(quotes[Math.floor(Math.random() * 50)]);
          setIsOpen(true);
        }}
        className="container flex p-4 gap-4 bg-black rounded-2xl 
                   shadow-[0_0_15px_rgba(34,197,94,0.6)]
                   hover:shadow-[0_0_25px_rgba(34,197,94,0.9)]
                   transition transform hover:scale-105 cursor-pointer"
      >
        <div className="overflow-hidden w-32 flex-shrink-0 border-2 border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.6)]">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-center text-green-400">
          <p className="font-semibold">
            Full name:{" "}
            <span className="font-mono font-normal text-green-300">{name}</span>
          </p>
          <p className="font-semibold">
            Status:{" "}
            <span className="font-mono font-normal text-green-300">
              {status}
            </span>
          </p>
          <p className="font-semibold">
            Species:{" "}
            <span className="font-mono font-normal text-green-300">
              {species}
            </span>
          </p>
        </div>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              layoutId={name}
              className="mx-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         bg-black rounded-2xl max-w-md w-3/4 md:w-full md:mx-4 p-6 z-50
                         text-green-400 border-2 border-green-400
                         shadow-[0_0_30px_rgba(34,197,94,0.9)]"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-green-400 hover:text-green-300"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>

              <div className="flex flex-col items-center gap-4">
                <motion.img
                  src={image}
                  alt={name}
                  className="w-40 h-40 border-2 border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.7)]"
                  layoutId={`img-${name}`}
                />
                <h2 className="text-2xl font-bold text-green-300">{name}</h2>
                <p className="font-semibold">
                  Status:{" "}
                  <span className="font-mono font-normal text-green-300">
                    {status}
                  </span>
                </p>
                <p className="font-semibold">
                  Species:{" "}
                  <span className="font-mono font-normal text-green-300">
                    {species}
                  </span>
                </p>
                <p className="font-semibold">
                  Origin:{" "}
                  <span className="font-mono font-normal text-green-300">
                    {origin.name || "unknown"}
                  </span>
                </p>
                <p className="font-semibold">
                  Gender:{" "}
                  <span className="font-mono font-normal text-green-300">
                    {gender || "unknown"}
                  </span>
                </p>
                <p className="font-semibold">
                  Type:{" "}
                  <span className="font-mono font-normal text-green-300">
                    {type || "unknown"}
                  </span>
                </p>

                <p className="glitch italic text-green-200 text-center">
                  "{currentQuote!.quote}"{" "}
                  <span className="font-schwifty font-semibold">
                    - {currentQuote!.character}
                  </span>
                </p>
                <p className="font-schwifty italic text-green-200 text-center"></p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
