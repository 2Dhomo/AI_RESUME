import axios from 'axios';

const AI_SERVICE_URL = 'https://api.example.com/ai'; // Replace with actual AI service URL

export const generateResumeContent = async (resumeData) => {
    try {
        const response = await axios.post(`${AI_SERVICE_URL}/generate`, resumeData);
        return response.data;
    } catch (error) {
        console.error('Error generating resume content:', error);
        throw error;
    }
};

export const fetchResumeTemplates = async () => {
    try {
        const response = await axios.get(`${AI_SERVICE_URL}/templates`);
        return response.data;
    } catch (error) {
        console.error('Error fetching resume templates:', error);
        throw error;
    }
};