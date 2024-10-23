// src/nodes/ToggleNode.jsx

import { useState } from 'react';
import BaseNode from './BaseNode';

export const ToggleNode = ({ id }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <BaseNode id={id} type="Toggle" hasInput>
      <div>
        <label>
          Active:
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
          />
        </label>
      </div>
    </BaseNode>
  );
};
export default ToggleNode;