// src/SubmitButton.js
import React from 'react';

export const SubmitButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#6c63ff',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                marginTop: '20px',
            }}
        >
            Submit
        </button>
    );
};

