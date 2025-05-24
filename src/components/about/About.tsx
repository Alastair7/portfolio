import { useEffect, useState } from 'react';

export const About = () => {
  const startDate = new Date(2021, 0, 11);
  const [experience, setExperience] = useState<number>(0);

  useEffect(() => {
    const currentTime = new Date();
    let currentExperience = Math.abs(startDate.getFullYear() - currentTime.getFullYear());
    const anniversary = new Date(currentTime.getFullYear(), 0, 11);

    if (currentTime < anniversary) {
      currentExperience -= 1;
    }

    setExperience(currentExperience);
  }, []);

  return (
    <>
      <p>
        Software Engineer Fullstack with {experience} years of experience. I like coding and i use
        neovim btw.
      </p>
    </>
  );
};
