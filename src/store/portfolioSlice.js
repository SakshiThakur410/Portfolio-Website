import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [
    { name: 'Java', level: 85, icon: '☕' },
    { name: 'C', level: 80, icon: '🔤' },
    { name: 'JavaScript', level: 90, icon: '⚡' },
    { name: 'React', level: 88, icon: '⚛️' },
    { name: 'Node.js', level: 82, icon: '🟢' },
    { name: 'MySQL', level: 78, icon: '🗄️' },
    { name: 'Git/GitHub', level: 85, icon: '🐙' },
    { name: 'VS Code', level: 92, icon: '💻' },
  ],
  projects: [
    {
      id: 1,
      title: 'Upliftify',
      description: 'A mental health support chatbot using OpenAI API to provide empathetic conversations and wellness resources.',
      technologies: ['Python', 'Streamlit', 'OpenAI API'],
      liveLink: '#',
      githubLink: 'https://github.com/SakshiThakur410/Upliftify-',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Recipe-Find',
      description: 'Smart recipe finder application that helps users discover recipes based on available ingredients using Spoonacular API.',
      technologies: ['Python', 'Streamlit', 'Spoonacular API'],
      liveLink: '#',
      githubLink: 'https://github.com/SakshiThakur410/Recipe-find',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Medico',
      description: 'A comprehensive medical website built with HTML, CSS, and JavaScript featuring patient management, appointment booking, and health resources.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: '#',
      githubLink: 'https://github.com/SakshiThakur410/Medico',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop',
    },
  ],
  certificates: [
    {
      id: 1,
      title: 'Google IT Support Professional Certificate',
      issuer: 'Coursera',
      date: '2024',
      credentialLink: '#',
    },
    {
      id: 2,
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      credentialLink: '#',
    },
    {
      id: 3,
      title: 'React - The Complete Guide',
      issuer: 'Coursera',
      date: '2023',
      credentialLink: '#',
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: '2023',
      credentialLink: '#',
    },
  ],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;
