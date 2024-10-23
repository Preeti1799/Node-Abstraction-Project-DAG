// draggableNode.js

import React from 'react';

export const DraggableNode = ({ type, label }) => {
    const handleDragStart = (event) => {
        event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType: type }));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div
            onDragStart={handleDragStart}
            draggable
            style={{
                padding: '10px 15px',
                borderRadius: '5px',
                backgroundColor: '#5a5a9a', 
                color: '#fff',
                cursor: 'grab',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                userSelect: 'none',
                transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4a4a8a')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#5a5a9a')}
        >
            {label}
        </div>
    );
};
