export const checkEnvironment = () => {
  let base_url = import.meta.env.DEV
    ? "http://localhost:5000/api"
    : import.meta.env.VITE_API_URL;

  return base_url;
};

export const urlApi = (path: string) => (id?: number) => {
  if (!id) return `${checkEnvironment()}${path}`;
  return `${checkEnvironment()}${path}${id}`;
};
