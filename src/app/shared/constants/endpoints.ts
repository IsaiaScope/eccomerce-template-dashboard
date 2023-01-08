const ENDPOINTS = {
  auth: {
    collection: 'dashboardUsers',
    login: 'login',
    logout: 'logout',
    refresh: 'refresh',
    register: 'register',
    loginPath: function () {
      return `${this.collection}/${this.login}`;
    },
    logoutPath: function () {
      return `${this.collection}/${this.logout}`;
    },
    refreshPath: function () {
      return `${this.collection}/${this.refresh}`;
    },
    registerPath: function () {
      return `${this.collection}/${this.register}`;
    },
  },

  db: {
    baseEndpoint: 'db/',
    clusterInfo: function () {
      return `${this.baseEndpoint}clusterInfo`;
    },
  },
};

export default ENDPOINTS;
