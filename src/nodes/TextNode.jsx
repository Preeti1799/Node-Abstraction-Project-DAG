// src/nodes/TextNode.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';

const TextNode = ({ id, data }) => {
  const [textContent, setTextContent] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textAreaRef = useRef(null);

  const handleTextChange = (e) => {
    setTextContent(e.target.value);
  };

  
  useEffect(() => {
    const variableRegex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;
    const newHandles = [];
    let match;

    while ((match = variableRegex.exec(textContent)) !== null) {
      const variableName = match[1];
      newHandles.push(variableName);
    }

    setHandles(newHandles);
  }, [textContent]);

  const handleClick = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  return (
    <BaseNode id={id} type="Text" data={{ text: textContent }} onClick={handleClick}>
      <div>
        <label>
          Text:
          <textarea
            ref={textAreaRef}
            value={textContent}
            onChange={handleTextChange}
            style={{ width: '100%', height: 'auto', minHeight: '50px' }}
            rows={1}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />
        </label>
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type="source"
          position={Position.Left}
          id={`${id}-${handle}`}
          style={{ top: `${(index + 1) * (100 / (handles.length + 1))}%` }}
        />
      ))}
    </BaseNode>
  );
};

export default TextNode;

