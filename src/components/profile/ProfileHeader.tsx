import Avatar from "../../assets/images/avatar.png";

export const ProfileHeader = () => {
  return (
    <>
      <div className="flex justify-center">
        <img src={Avatar} className="size-24 mt-2" />
      </div>

      <div className="flex flex-col items-center -space-y-1">
        <h1 className="text-lg text-white">Alexandru Ban</h1>
        <span className="text-zinc-400 text-xs tracking-tighter ">
          3 years of experience
        </span>
      </div>

      <div className="p-3 text-center text-orange-300">
        <p>
          I'm a Software Engineer in love with the process of learning and
          crafting software..
        </p>
      </div>
    </>
  );
};
