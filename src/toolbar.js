// src/toolbar.js
import React from 'react';
import { DraggableNode } from './draggableNode'; 

const PipelineToolbar = () => {
    return (
        <div style={{
            padding: '10px',
            backgroundColor: '#333', 
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        }}>
            <h3 style={{ color: '#fff' }}>Node Types</h3> 
            <div style={{
                marginTop: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='numberInput' label='Number Input' />
                <DraggableNode type='toggle' label='Toggle' />
                <DraggableNode type='textDisplay' label='Text Display' />
                <DraggableNode type='imageUpload' label='Image Upload' />
                <DraggableNode type='select' label='Select' />
            </div>
        </div>
    );
};


export default PipelineToolbar;

