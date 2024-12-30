import CsharpIcon from "./../../assets/icons/csharp.svg";
import GolangIcon from "./../../assets/icons/golang.svg";
import PythonIcon from "./../../assets/icons/python.svg";
import TypescriptIcon from "./../../assets/icons/typescript.svg";

export const ProfileSkills = () => {
  return (
    <div className="flex justify-around w-full size-10 mt-5">
      <CsharpIcon />
      <TypescriptIcon />
      <GolangIcon />
      <PythonIcon />
    </div>
  );
};
