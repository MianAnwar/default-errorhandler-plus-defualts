// import { decodeParam, encodeParam } from './paramEncoder';
const encodeParam = (param: string): string => {
  return encodeURIComponent(btoa(param));
};

const decodeParam = (param: string): string => {
  return atob(decodeURIComponent(param));
};






export const getItem = (itemName: string) => {
  const item = localStorage.getItem(encodeParam(itemName));
  return item ? JSON.parse(decodeParam(item)) : null;
};

export const setItem = (itemName: string, value: unknown): void => {
  localStorage.setItem(
    encodeParam(itemName),
    encodeParam(JSON.stringify(value))
  );
};

export const removeItem = (itemName: string): void => {
  localStorage.removeItem(encodeParam(itemName));
};
