import cookie from 'js-cookie';


export const setCoolie = (key, value) => {
  if (window !== 'undefined') {
    cookie.set(key, value, {
      expires: 183
    })
  }
}

export const removeCookie = key => {
  if (window !== 'undefined') {
    cookie.remove(key, {
      expires: 183
    })
  }
}

export const getCookie = key => {
  if (window !== 'undefined') {
    return cookie.get(key);
  }
}

export const setLocalStorage = (key, value) => {
  if (window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const removeLocalStorage = key => {
  if (window !== 'undefined') {
    localStorage.removeItem(key);
  }
}

export const getLocalStorage = key => {
  if (window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key));
  }
}

// auth user after login
export const authenticate = (response, cb) => {
  window.axios.defaults.headers.common['token'] = response.data.token;
  setCoolie('token', response.data.token);
  setLocalStorage('user', response.data.user);
  if (cb) cb();
}

export const logout = () => {
  removeCookie('token');
  removeLocalStorage('user');
}

export const updateUser = (response, next) => {
  if (window !== 'undefined') {
    let auth = JSON.parse(localStorage.getItem('user'));
    auth = response.data;
    setLocalStorage('user', auth);
  }
  next();
}