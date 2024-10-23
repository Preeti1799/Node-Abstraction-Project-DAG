// src/nodes/ImageUploadNode.jsx

import { useState } from 'react';
import BaseNode from './BaseNode';

export const ImageUploadNode = ({ id }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <BaseNode id={id} type="Image Upload" hasInput>
      <div>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {image && <img src={image} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
      </div>
    </BaseNode>
  );
};
export default ImageUploadNode;
