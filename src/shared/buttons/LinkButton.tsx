type LinkButtonProps = Omit<React.ComponentProps<'button'>, 'className'> & {
  title: string;
};

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <button className="button" {...props}>
      {props.title}
    </button>
  );
};
