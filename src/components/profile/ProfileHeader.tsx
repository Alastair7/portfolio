import Avatar from "../../assets/images/avatar.png";

export const ProfileHeader = () => {
  return (
    <>
      <div className="flex items-center justify-end flex-col gap-2">
        <img src={Avatar} className="size-24 mt-2" />
        <h1 className="text-lg text-white">Alexandru Ban</h1>
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
