import './Terminal.scss';
import type { TerminalCommand } from './Terminal';

export const addTerminalLine = (command?: TerminalCommand) => {
  const host = 'alastair@dev:';
  const directory = '~';
  const symbol = '$';

  return (
    <p>
      <span className="terminal-content__host">{host}</span>
      <span className="terminal-content__dir">{directory}</span>
      <span> {symbol + ' '}</span>
      {command ? <span className="terminal-content__command">{command}</span> : null}
      {command ? null : <span className="terminal-content__cursor">|</span>}
    </p>
  );
};
