import './Terminal.scss';
import { addTerminalLine } from './utils';

export type TerminalCommand = 'experience' | 'editor' | 'info';

type Props = {
  content: Map<TerminalCommand, string>;
};
export const TerminalContent = ({ content }: Props) => {
  const commandLines = Array.from(content).map(([command, value]) => {
    // addTerminalLine contains the classnames for the terminal lines
    return (
      <div key={command.toString()}>
        {addTerminalLine(command)}
        <p>{value}</p>
      </div>
    );
  });

  return <div className="terminal-content">{commandLines}</div>;
};
export const Terminal = ({ content }: Props) => {
  return (
    <div className="terminal">
      <div className="terminal__header">~:info -- Terminal</div>
      <TerminalContent content={content} />
      <div className="terminal__empty-line">{addTerminalLine()}</div>
    </div>
  );
};
