export const getDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const setDataToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeDataFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
