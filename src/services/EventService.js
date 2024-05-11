export default {
  getEvents() {
    return fetch('https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events');
  },
  getEvent(id) {
    return fetch(`https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events/${id}/`);
  }
}