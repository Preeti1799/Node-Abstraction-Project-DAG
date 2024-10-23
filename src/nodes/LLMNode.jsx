// LLMNode.jsx

import BaseNode from './BaseNode'; 
import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode id={id} type="LLM">
      <div>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </BaseNode>
  );
};

export default LLMNode;
