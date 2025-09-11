import { CharacterI } from "../types";

export const CharacterCard = ({ name, image, status, species }: CharacterI) => {
  return (
    <article className="flex p-2 gap-2 bg-sky-50/40">
      <div className="rounded-xs overflow-hidden w-32">
        <img src={image} alt={name} />
      </div>
      <div>
        <p className="font-semibold">
          Full name: <span className="font-mono font-normal">{name}</span>
        </p>
        <p className="font-semibold">
          Status: <span className="font-mono font-normal">{status}</span>
        </p>
        <p className="font-semibold">
          Species: <span className="font-mono font-normal">{species}</span>
        </p>
      </div>
    </article>
  );
};
