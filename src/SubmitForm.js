// src/SubmitForm.js
import React, { useState, useEffect } from 'react';
import ReactFlow, { Controls, Background, MiniMap, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import { SubmitButton } from './SubmitButton';

const initialNodes = [
    { id: '1', type: 'inputNode', position: { x: 100, y: 200 }, data: { label: 'Input Node' }},
    { id: '2', type: 'llmNode', position: { x: 300, y: 200 }, data: { label: 'LLM Node' }},
    { id: '3', type: 'outputNode', position: { x: 500, y: 200 }, data: { label: 'Output Node' }},
    { id: '4', type: 'textNode', position: { x: 700, y: 200 }, data: { label: 'Text Node' }},
    { id: '5', type: 'customNode1', position: { x: 100, y: 400 }, data: { label: 'Custom Node 1' }},
    { id: '6', type: 'customNode2', position: { x: 300, y: 400 }, data: { label: 'Custom Node 2' }},
    { id: '7', type: 'customNode3', position: { x: 500, y: 400 }, data: { label: 'Custom Node 3' }},
    { id: '8', type: 'customNode4', position: { x: 700, y: 400 }, data: { label: 'Custom Node 4' }},
    { id: '9', type: 'customNode5', position: { x: 900, y: 400 }, data: { label: 'Custom Node 5' }},
];

const SubmitForm = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);

    const onNodesChange = (changes) => {
        setNodes((prev) => applyNodeChanges(changes, prev));
    };

    const onEdgesChange = (changes) => {
        setEdges((prev) => applyEdgeChanges(changes, prev));
    };

    const submitPipeline = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            alert(`Number of Nodes: ${data.num_nodes}, Number of Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to submit the pipeline. Please try again.');
        }
    };

    return (
        <div style={{ height: '500px' }}>
            <ReactFlow 
                nodes={nodes} 
                edges={edges} 
                onNodesChange={onNodesChange} 
                onEdgesChange={onEdgesChange}
                style={{ border: '1px solid #ccc' }} 
            >
                <Controls />
                <Background />
                <MiniMap />
            </ReactFlow>

            <SubmitButton onClick={submitPipeline} />
        </div>
    );
};

export default SubmitForm;



