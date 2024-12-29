import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export default api

// API service for making HTTP requests
// Centralizes API logic and promotes the DRY principle
