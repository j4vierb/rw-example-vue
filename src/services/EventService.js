const URL = 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router'

export default {
  getEvents(perPage, page) {
    return fetch(URL + `/events?_limit=${perPage}&_page=${page}`);
  },
  getEvent(id) {
    return fetch(URL + '/events/' + id);
  }
};
