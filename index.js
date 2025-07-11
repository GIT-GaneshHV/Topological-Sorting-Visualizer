const express = require('express');
const app = express();
const path = require('path');

// Serve static files from 'public' folder
app.use(express.static('public'));
app.use(express.json());

// Topological Sort API
app.post('/toposort', (req, res) => {
    const graph = req.body.graph;
    const sorted = topoSort(graph);
    res.json({ sorted });
});

// Kahn's Algorithm for Topological Sort
function topoSort(graph) {
    const inDegree = {};
    const adj = {};

    for (const [u, v] of graph) {
        adj[u] = adj[u] || [];
        adj[v] = adj[v] || [];
        adj[u].push(v);
        inDegree[v] = (inDegree[v] || 0) + 1;
        inDegree[u] = inDegree[u] || 0;
    }

    const queue = Object.keys(inDegree).filter(node => inDegree[node] === 0);
    const result = [];

    while (queue.length) {
        // Randomize choice among nodes with in-degree 0
        const randomIndex = Math.floor(Math.random() * queue.length);
        const node = queue.splice(randomIndex, 1)[0];

        result.push(node);
        for (const neighbor of adj[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    if (result.length !== Object.keys(inDegree).length) {
        return { error: "Cycle detected – topological sort not possible." };
    }

    return { order: result };
}


// Start Server
app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
