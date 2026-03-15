const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Sample data
let projects = [
    {
        id: 1,
        title: "AI-Powered Health Monitor",
        description: "A comprehensive health monitoring system that uses machine learning to predict potential health issues based on user data and wearable device inputs.",
        category: "AI/ML",
        status: "Won Prize",
        hackathon: {
            name: "HealthTech Hackathon 2024",
            date: "2024-03-15",
            position: "1st Place",
            teamSize: 4
        },
        technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
        features: ["Real-time health monitoring", "ML predictions", "Dashboard analytics", "Mobile app"],
        githubUrl: "https://github.com/ritammondal/health-monitor",
        liveUrl: "https://health-monitor-demo.com",
        tags: ["healthcare", "AI", "machine learning", "innovation"],
        createdAt: "2024-03-15T10:00:00Z"
    }
];

const server = http.createServer((req, res) => {
    // Set CORS headers manually
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const url = req.url.split('?')[0];
    const method = req.method;

    // API Routes
    if (url === '/api/projects' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ projects }));
    } else if (url === '/api/projects' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const newProject = JSON.parse(body);
                newProject.id = Date.now();
                projects.unshift(newProject);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newProject));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid project data' }));
            }
        });
    } else if (url.match(/^\/api\/projects\/\d+$/) && method === 'PUT') {
        const id = parseInt(url.split('/')[3]);
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const updatedProject = JSON.parse(body);
                const index = projects.findIndex(p => p.id === id);
                if (index !== -1) {
                    projects[index] = { ...projects[index], ...updatedProject };
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(projects[index]));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Project not found' }));
                }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid project data' }));
            }
        });
    } else if (url.match(/^\/api\/projects\/\d+$/) && method === 'DELETE') {
        const id = parseInt(url.split('/')[3]);
        const index = projects.findIndex(p => p.id === id);
        if (index !== -1) {
            projects.splice(index, 1);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Project deleted successfully' }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Project not found' }));
        }
    } else if (url === '/api/categories' && method === 'GET') {
        const categories = [...new Set(projects.map(p => p.category))];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ categories }));
    } else if (url === '/api/stats' && method === 'GET') {
        const stats = {
            totalProjects: projects.length,
            completedProjects: projects.filter(p => p.status === 'Completed').length,
            wonPrizes: projects.filter(p => p.status === 'Won Prize').length,
            categories: [...new Set(projects.map(p => p.category))].length
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(stats));
    } else if (url === '/health' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            status: 'ok', 
            message: 'Backend server is running',
            port: PORT,
            timestamp: new Date().toISOString()
        }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
    console.log(`📱 Health check: http://localhost:${PORT}/health`);
    console.log(`🔗 API endpoints available at: http://localhost:${PORT}/api`);
});
