const AUTH_TOKEN = 'piuma_token';

export const setTokenWithExpiry = (value, remember) => {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value,
    expiry: now.getTime() + (remember ? (3600 * 1000 * 24 * 365 * 10) : (12 * 60 * 60 * 1000)),
  };
  localStorage.setItem(AUTH_TOKEN, JSON.stringify(item));
};

export const getTokenWithExpiry = () => {
  const itemStr = localStorage.getItem(AUTH_TOKEN);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(AUTH_TOKEN);
    return null;
  }
  return item.value;
};

export const clearToken = () => {
  localStorage.clear(AUTH_TOKEN);
};
