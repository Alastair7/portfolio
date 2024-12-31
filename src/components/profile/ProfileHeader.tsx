import GithubIcon from "../../assets/icons/github.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import Avatar from "../../assets/images/avatar.png";
import { useWorkExperience } from "../../shared/hooks/useWorkExperience";

export const ProfileHeader = () => {
  const workExperience = useWorkExperience();

  return (
    <>
      <div className="flex justify-center items-center gap-5">
        <LinkedinIcon className="size-10 animate-floating" />
        <img src={Avatar} className="size-24 mt-2" />
        <GithubIcon className="size-10 animate-floating" />
      </div>

      <div className="flex flex-col items-center -space-y-1">
        <h1 className="text-lg text-white">Alexandru Ban</h1>
        <span className="text-zinc-400 text-xs tracking-tighter ">
          {workExperience}
        </span>
      </div>

      <div className="p-3 text-center text-orange-300">
        <p>
          I'm a Software Engineer in love with the process of learning and
          crafting software.
        </p>
      </div>
    </>
  );
};
