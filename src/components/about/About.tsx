import './About.scss';
import { Terminal, type TerminalCommand } from '../terminal/Terminal';
import { getProfessionalExperience } from './utils';

const workingStartDate = new Date(2021, 0, 11);

export const About = () => {
  const aboutInfo: Map<TerminalCommand, string> = new Map();
  const experience = getProfessionalExperience(workingStartDate);

  aboutInfo.set(
    'info',
    `Fullstack engineer that likes (a lot) crafting software. I tend to build side-projects about things that motivates me. For example, I had this idea of making a portfolio with my own style, so... here it is :)`,
  );
  aboutInfo.set('experience', experience);
  aboutInfo.set('editor', 'I use Neovim btw');

  return <Terminal content={aboutInfo} />;
};
