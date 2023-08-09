export const get = <T>(key: string, fallback: T): T => {
  const json = window.localStorage.getItem(key);
  if (!json) return fallback;
  return JSON.parse(json) as T;
}

export const set = <T>(key: string, value: T): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const remove = (key: string): void => {
  window.localStorage.removeItem(key);
}

export default { get, set, remove };

