import './LinkButton.scss';

type LinkButtonProps = Omit<React.ComponentProps<'a'>, 'className'> & {
  title: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const LinkButton = ({ icon: Icon, title, ...rest }: LinkButtonProps) => {
  return (
    <a className="link-button" {...rest}>
      {Icon ? <Icon className="link-button__icon" /> : null}
      <span className="link-button__title">{title}</span>
    </a>
  );
};
