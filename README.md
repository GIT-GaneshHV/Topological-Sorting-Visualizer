# Topological-Sorting-Visualizer

This is a web-based visualization tool for performing **Topological Sorting** on Directed Acyclic Graphs (DAGs). It uses **Kahn's algorithm** to calculate the topological order and visually represents each step of the process. The tool is built with **Node.js** and **Express** for the backend and **vis-network.js** for frontend graph visualization.

## What is Topological Sort?
Topological Sort is a linear ordering of a directed graph's nodes such that for every directed edge `u → v`, node `u` comes before `v` in the ordering. It's applicable only to Directed Acyclic Graphs (DAGs).

### Example:
Given edges:
```
A → B
A → C
B → D
C → D
```
Valid topological orders:
- A, B, C, D
- A, C, B, D

## Features
- Add directed edges between nodes interactively.
- Visualize topological sort steps one-by-one or automatically.
- Detect cycles and highlight errors.
- Reset, play, pause, and step through the sorting.

## Folder Structure
```
public/
├── index.html      # Frontend interface and visualization
index.js            # Express server handling API requests
package.json        # Node.js project configuration
```

## How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/Topological-Sorting-Visualizer.git
cd Topological-Sorting-Visualizer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
node index.js
```

The application will run at:
```
http://localhost:3000
```

## Requirements
- Node.js (v18 or above)
- Modern web browser (Chrome/Firefox/Edge)

##  Learn More
> A scrollable panel on the right-hand side of the web interface explains the concept of Topological Sort with definitions, examples, and use-cases.

## Tech Stack
- Node.js + Express
- HTML, CSS, JavaScript
- vis-network.js for visualization

## Contact 
If you have suggestions or feedback, feel free to open an issue or submit a pull request.

---

© 2025 Topological Sort Visualizer
