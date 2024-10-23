from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from collections import defaultdict, deque
from fastapi.responses import JSONResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: list
    edges: list

def is_dag(edges):
    graph = defaultdict(list)
    in_degree = defaultdict(int)

    for edge in edges:
        source = edge['source']
        target = edge['target']
        graph[source].append(target)
        in_degree[target] += 1
        in_degree[source]

    zero_in_degree = deque([node for node in in_degree if in_degree[node] == 0])
    visited_nodes = 0

    while zero_in_degree:
        node = zero_in_degree.popleft()
        visited_nodes += 1
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                zero_in_degree.append(neighbor)

    return visited_nodes == len(in_degree)

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline_data: PipelineData):
    nodes = pipeline_data.nodes
    edges = pipeline_data.edges

    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag_result = is_dag(edges)

    return JSONResponse(content={
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag_result,
    })

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}
