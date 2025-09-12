import type { Character } from "../types";

export const CharacterCard = ({ name, image, status, species }: Character) => {
  return (
    <article
      className="flex p-4 gap-4 bg-black rounded-2xl 
                 shadow-[0_0_15px_rgba(34,197,94,0.6)]
                 hover:shadow-[0_0_25px_rgba(34,197,94,0.9)]
                 transition transform hover:scale-105"
    >
      <div className=" overflow-hidden w-32 flex-shrink-0 border-2 border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.6)]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col justify-center text-green-400">
        <p className="font-semibold">
          Full name:{" "}
          <span className="font-mono font-normal text-green-300">{name}</span>
        </p>
        <p className="font-semibold">
          Status:{" "}
          <span className="font-mono font-normal text-green-300">{status}</span>
        </p>
        <p className="font-semibold">
          Species:{" "}
          <span className="font-mono font-normal text-green-300">
            {species}
          </span>
        </p>
      </div>
    </article>
  );
};
