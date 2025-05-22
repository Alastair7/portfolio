import './SideBar.scss';
import GithubIcon from '../../assets/icons/github.svg?react';
import { LinkButton } from '../../shared/buttons/LinkButton';

export const SideBar = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Alexandru Ban</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="header__social">
        <LinkButton href="https://github.com/Alastair7" icon={GithubIcon} title="@Alastair7" />
        <LinkButton icon={GithubIcon} title="Alexandru Ban" />
      </div>
    </header>
  );
};
