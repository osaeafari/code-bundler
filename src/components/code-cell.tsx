import React, {  useState } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundler from '../bundler';
import Resizable from './resizable';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const onClick:any = async () => {
    const output = await bundler(input);
    setCode(output);
  };

  return(
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor 
            initialValue="console.log(123)"
            onChange={(value) => setInput(value)}  
          />
        </Resizable>
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
