// src/nodes/BaseNode.jsx

import React from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ children, id, type }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#fff' }}>
      {children}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default BaseNode;

