import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
  hackathon: {
    name: string;
    date: string;
    position: string;
    teamSize: number;
  };
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  demoVideo: string;
  images: string[];
  status: 'In Progress' | 'Completed' | 'Won Prize' | 'Ongoing';
  teamMembers: {
    name: string;
    role: string;
    github: string;
  }[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectFormData {
  title: string;
  description: string;
  category: string;
  hackathon: {
    name: string;
    date: string;
    position: string;
    teamSize: number;
  };
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  demoVideo: string;
  images: string[];
  status: 'In Progress' | 'Completed' | 'Won Prize' | 'Ongoing';
  teamMembers: {
    name: string;
    role: string;
    github: string;
  }[];
  tags: string[];
}

export interface ProjectsResponse {
  projects: Project[];
  pagination: {
    current: number;
    pages: number;
    total: number;
  };
}

export interface StatsResponse {
  totalProjects: number;
  completedProjects: number;
  wonPrizes: number;
  categories: number;
}

// Project API calls
export const projectApi = {
  getAll: (params?: {
    category?: string;
    status?: string;
    search?: string;
    page?: number;
    limit?: number;
  }): Promise<ProjectsResponse> => 
    api.get('/projects', { params }).then(res => res.data),

  getById: (id: string): Promise<Project> => 
    api.get(`/projects/${id}`).then(res => res.data),

  create: (data: ProjectFormData): Promise<Project> => 
    api.post('/projects', data).then(res => res.data),

  update: (id: string, data: Partial<ProjectFormData>): Promise<Project> => 
    api.put(`/projects/${id}`, data).then(res => res.data),

  delete: (id: string): Promise<void> => 
    api.delete(`/projects/${id}`).then(res => res.data),

  getCategories: (): Promise<string[]> => 
    api.get('/categories').then(res => res.data),

  getStats: (): Promise<StatsResponse> => 
    api.get('/stats').then(res => res.data),
};

export default api;
