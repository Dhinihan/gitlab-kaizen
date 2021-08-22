export default class Project {
  constructor(response) {
    this.data = response
  }
  get(key) {
    return data[key]
  }
  toJSON() {
    return this.data
  }
}
