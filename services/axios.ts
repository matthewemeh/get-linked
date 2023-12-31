import axios from 'axios';

import Endpoints from './endpoints';

export default axios.create({
  baseURL: Endpoints.BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
