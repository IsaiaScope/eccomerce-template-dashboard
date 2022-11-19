const ENDPOINTS = {
  login: 'login',
  logout: 'logout',
  refresh: 'refresh',
  cacca: 'db',
  db: {
    baseEndpoint: 'db/',
    clusterInfo: function () {
      return `${this.baseEndpoint}clusterInfo`;
    },
  },
};

export default ENDPOINTS;
