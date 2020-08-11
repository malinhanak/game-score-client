import moment from 'moment';

export const year = moment(new Date()).format('YYYY');

export const createSlug = (name) => {
  return name
    ? name
        .trim()
        .replace(/[äåáà]/gim, 'a')
        .replace(/[ööôóò]/gim, 'o')
        .replace(/[èé]/gim, 'e')
        .replace(/\s/g, '-')
        .toLowerCase()
    : null;
};

export const getHeaders = (cookies) => {
  const headers = { 'content-type': 'application/json' };
  if ((cookies && cookies.sid) || (cookies && cookies.token)) {
    headers.Authorization = `Bearer ${cookies.sid.token}`;
  }

  return headers;
};
