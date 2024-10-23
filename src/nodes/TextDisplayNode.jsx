// src/nodes/TextDisplayNode.jsx

import BaseNode from './BaseNode';

export const TextDisplayNode = ({ id }) => {
  return (
    <BaseNode id={id} type="Text Display">
      <div>
        <span>This node displays static text.</span>
      </div>
    </BaseNode>
  );
};
export default TextDisplayNode;