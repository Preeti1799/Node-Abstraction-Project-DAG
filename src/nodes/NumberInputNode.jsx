// src/nodes/NumberInputNode.jsx

import { useState } from 'react';
import BaseNode from './BaseNode';

export const NumberInputNode = ({ id }) => {
  const [currNumber, setCurrNumber] = useState(0);

  return (
    <BaseNode id={id} type="Number Input" hasInput>
      <div>
        <label>
          Number:
          <input
            type="number"
            value={currNumber}
            onChange={(e) => setCurrNumber(Number(e.target.value))}
          />
        </label>
      </div>
    </BaseNode>
  );
};
export default NumberInputNode;
