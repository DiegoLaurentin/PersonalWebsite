import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeComponent(codeString) {
  return (
    <div>
      <SyntaxHighlighter language="python" style={atomDark} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeComponent;
