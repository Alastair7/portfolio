import './SideBar.scss';
import GithubIcon from '../../assets/icons/github.svg?react';
import { LinkButton } from '../../shared/buttons/LinkButton';

export const SideBar = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Alexandru Ban</h1>
        <h2>@Alastair7</h2>
      </div>
      <div className="header__social">
        <LinkButton icon={GithubIcon} title="Twitch" />
        <LinkButton icon={GithubIcon} title="Github" />
        <LinkButton icon={GithubIcon} title="Linkedn" />
      </div>
    </header>
  );
};
