import { useEffect, useState } from "react";

const startWorkingDate = new Date(1641805200000);

export const useWorkExperience = () => {
  const [workExperience, setWorkExperience] = useState<string>("");

  useEffect(() => {
    const currentDate = new Date();

    let diffYears = currentDate.getFullYear() - startWorkingDate.getFullYear();
    let diffMonths = currentDate.getMonth() - startWorkingDate.getMonth();

    if (diffMonths < 0) {
      diffYears -= 1;
      diffMonths += 12;
    }

    setWorkExperience(`${diffYears} years ${diffMonths} months`);
  }, []);

  return workExperience;
};
