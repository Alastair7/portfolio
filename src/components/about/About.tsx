import { useEffect, useState } from 'react';
import './About.scss';
import { Terminal, type TerminalCommand } from '../terminal/Terminal';

export const About = () => {
  const [experience, setExperience] = useState<number>(0);
  const aboutInfo: Map<TerminalCommand, string> = new Map();

  useEffect(() => {
    const startDate = new Date(2021, 0, 11);
    const currentTime = new Date();
    let currentExperience = Math.abs(startDate.getFullYear() - currentTime.getFullYear());
    const anniversary = new Date(currentTime.getFullYear(), 0, 11);

    if (currentTime < anniversary) {
      currentExperience -= 1;
    }

    setExperience(currentExperience);
  }, []);

  aboutInfo.set(
    'info',
    `Fullstack engineer that likes (a lot) crafting software. I tend to build side-projects about things that motivates me. For example, I had this idea of making a portfolio with my own style, so... here it is :)`,
  );
  aboutInfo.set('experience', `${experience.toString()} years`);
  aboutInfo.set('editor', 'I use Neovim btw');
  return <Terminal content={aboutInfo} />;
};
