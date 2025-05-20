import { SideBar } from '../components/sidebar/SideBar';
import { LinkButton } from '../shared/buttons/LinkButton';

export const HomePage = () => {
  return (
    <div>
      <SideBar />
      <LinkButton title="Test" />
    </div>
  );
};
