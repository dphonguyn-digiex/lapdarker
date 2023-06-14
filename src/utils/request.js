import axios from 'axios';

import { Config } from '~/config/config';

const processAPI = async (method, url, body, header, option) => {
  let reqMethod = method || 'GET';

  let reqUrl = url;
  if (!reqUrl.match(/^(http[s]{0,1}[:][\\/]{2})/i)) {
    const rurl = Config.SERVER_LOCAL || Config.SERVER_LOCAL;
    reqUrl = `${rurl}/${reqUrl.startsWith('/') ? reqUrl.substr(1) : reqUrl}`;
  }

  const reqHeader = { ...(header || {}) };
  const token = localStorage['token'];

  if (token) {
    if (!option?.ignoreToken) {
      reqHeader['Authorization'] = `Bearer ${token}`;
    }
  }

  const rs = await axios({
    method: reqMethod,
    url: reqUrl,
    headers: reqHeader,
    data: body,
    ...(option || {}),
  });

  if (option?.returnRaw) return rs;
  return rs?.data;
};

const GET = async (url, header, option) => {
  return await processAPI('GET', url, false, header, option);
};

const POST = async (url, body, header, option) => {
  return await processAPI('POST', url, body, header, option);
};

const PUT = async (url, body, header, option) => {
  return await processAPI('PUT', url, body, header, option);
};

const DELETE = async (url, body, header, option) => {
  return await processAPI('DELETE', url, body, header, option);
};

const PATCH = async (url, body, header, option) => {
  return await processAPI('PATCH', url, body, header, option);
};

const PURGE = async (url, body, header, option) => {
  return await processAPI('PURGE', url, body, header, option);
};

const Req = {
  GET,
  POST,
  PUT,
  DELETE,
  PATCH,
  PURGE,
};

export default Req;
