import { Gitlab } from 'gitlab'

let instance = null

export function getInstance() {
  if (!instance) {
    instance = new Gitlab({
      host: process.env.GITLAB_HOST,
      token: process.env.GITLAB_TOKEN
    })
  }
  return instance
}
