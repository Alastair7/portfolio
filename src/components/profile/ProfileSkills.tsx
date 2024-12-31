import CsharpIcon from "./../../assets/icons/csharp.svg";
import CssIcon from "./../../assets/icons/css3.svg";
import GolangIcon from "./../../assets/icons/golang.svg";
import HtmlIcon from "./../../assets/icons/html5.svg";
import PythonIcon from "./../../assets/icons/python.svg";
import TypescriptIcon from "./../../assets/icons/typescript.svg";

export const ProfileSkills = () => {
  return (
    <div className="flex justify-center gap-3 overflow-x-scroll w-auto size-10 mt-5">
      <CsharpIcon />
      <TypescriptIcon />
      <GolangIcon />
      <PythonIcon />
      <HtmlIcon />
      <CssIcon />
    </div>
  );
};
