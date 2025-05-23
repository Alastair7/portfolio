import './SideBar.scss';
import GithubIcon from '../../assets/icons/github.svg?react';
import LinkednIcon from '../../assets/icons/linkedn.svg?react';
import { LinkButton } from '../../shared/buttons/LinkButton';

export const SideBar = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Alexandru Ban</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="header__social">
        <LinkButton
          href="https://github.com/Alastair7"
          target="_blank"
          icon={GithubIcon}
          title="Alastair7"
        />
        <LinkButton
          href="https://linkedin.com/in/alexandru-ban"
          target="_blank"
          icon={LinkednIcon}
          title="Alexandru Ban"
        />
      </div>
    </header>
  );
};
