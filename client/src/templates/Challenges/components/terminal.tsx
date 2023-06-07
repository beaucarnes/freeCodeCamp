import React, { useRef, useState, useEffect } from 'react';
import { XTerm } from 'xterm-for-react';
import i18next from 'i18next';

import './output.css';

interface OutputProps {
  defaultOutput: string;
  output: string[];
}

const Output: React.FC<OutputProps> = ({ defaultOutput, output }: OutputProps) => {
  const xtermRef = useRef<XTerm | null>(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (xtermRef.current !== null) {
      xtermRef.current.terminal.writeln(
        "Please enter any string then press enter:"
      );
      xtermRef.current.terminal.write("echo> ");
    }
  }, []);

  return (
    <XTerm
      ref={xtermRef}
      onData={(data) => {
        if (xtermRef.current !== null) {
          const code = data.charCodeAt(0);
          if (code === 13 && input.length > 0) {
            xtermRef.current.terminal.write("\r\nYou typed: '" + input + "'\r\n");
            xtermRef.current.terminal.write("echo> ");
            setInput("");
          } else if (code < 32 || code === 127) {
            return;
          } else {
            xtermRef.current.terminal.write(data);
            setInput(input + data);
          }
        }
      }}
      className='output-text'
      data-cy='output-text'
      role='region'
      aria-label={i18next.t('learn.editor-tabs.console')}
      tabIndex={0}
    />
  );
}

export default Output;






// import { isEmpty } from 'lodash-es';
// import React from 'react';
// import sanitizeHtml from 'sanitize-html';
// import i18next from 'i18next';

// import './output.css';

// interface OutputProps {
//   defaultOutput: string;
//   output: string[];
// }

// function Output({ defaultOutput, output }: OutputProps): JSX.Element {
//   const message = sanitizeHtml(
//     !isEmpty(output) ? output.join('\n') : defaultOutput,
//     {
//       allowedTags: ['b', 'i', 'em', 'strong', 'code', 'wbr']
//     }
//   );
//   return (
//     <pre
//       className='output-text'
//       data-cy='output-text'
//       dangerouslySetInnerHTML={{ __html: "message" }}
//       role='region'
//       aria-label={i18next.t('learn.editor-tabs.console')}
//       // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
//       tabIndex={0}
//     />
//   );
// }

// export default Output;
