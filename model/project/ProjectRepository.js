import { getInstance } from '../../infrastructure/gitlabApi.js'
import Project from './Project.js'

export default class ProjectRepository {
  constructor() {
    const gitlabApi = getInstance()
    this.api = gitlabApi.Projects
  }
  async get(id) {
    const response = await this.api.show(id)
    return new Project(response)
  }
}
