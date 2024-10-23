// src/nodes/SelectNode.jsx

import { useState } from 'react';
import BaseNode from './BaseNode';

export const SelectNode = ({ id }) => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  return (
    <BaseNode id={id} type="Select" hasInput>
      <div>
        <label>
          Select Option:
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
export default SelectNode;