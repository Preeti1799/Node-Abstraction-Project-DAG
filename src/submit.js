export const submitPipeline = async (nodes, edges) => {
    const payload = { nodes, edges };
    console.log('Submitting payload:', payload);

    const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
};

export const handleSubmit = async (nodes, edges) => {
    try {
        const result = await submitPipeline(nodes, edges);
        alert(`Number of Nodes: ${result.num_nodes}\nNumber of Edges: ${result.num_edges}\nIs DAG: ${result.is_dag}`);
    } catch (error) {
        console.error('Error submitting pipeline:', error);
        alert('There was an error submitting the pipeline. Please check the console for more details.');
    }
};
