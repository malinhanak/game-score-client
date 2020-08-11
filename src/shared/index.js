export { scoreContext } from './context/score-context';
export { default as ScoreProvider } from './context/score-context';
export { useScore } from './hooks/score-hook';
export { authContext } from './context/auth-context';
export { default as AuthProvider } from './context/auth-context';
export { useAuth } from './hooks/auth-hook';
export { useFetch } from './hooks/fetch-hook';

export { year, createSlug, getHeaders } from './helpers';
export { baseURI, baseURI_Dev, getScore, loginTeam } from './uri';
