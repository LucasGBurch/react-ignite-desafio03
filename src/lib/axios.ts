import axios from 'axios';

export const apiGitHubUser = axios.create({
  baseURL: 'https://api.github.com'
});

export const apiGitHubIssueSearch = axios.create({
  baseURL: 'https://api.github.com/search'
});
