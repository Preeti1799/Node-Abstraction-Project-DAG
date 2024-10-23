// src/App.js
import React from 'react';
import PipelineToolbar from './toolbar'; 
import { PipelineUI } from './ui'; 
import { SubmitButton } from './SubmitButton'; 
import { handleSubmit } from './submit';

const nodes = [
    { id: 'inputNode', type: 'input', data: { label: 'Input Node' } },
    { id: 'llmNode', type: 'llm', data: { label: 'LLM Node' } },
    { id: 'textNode', type: 'text', data: { label: 'Text Node' } },
    { id: 'outputNode', type: 'output', data: { label: 'Output Node' } },
];

const edges = [
    { id: 'edge1', source: 'inputNode', target: 'llmNode' },
    { id: 'edge2', source: 'llmNode', target: 'textNode' },
    { id: 'edge3', source: 'textNode', target: 'outputNode' },
];

function App() {
  const handleClick = () => handleSubmit(nodes, edges);

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton onClick={handleClick} />
    </div>
  );
}

export default App;



