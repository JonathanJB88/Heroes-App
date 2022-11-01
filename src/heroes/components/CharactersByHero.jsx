export const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego !== characters ? (
    <p className="card-text">{characters}</p>
  ) : (
    <></>
  );
};
