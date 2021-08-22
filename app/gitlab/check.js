import express from 'express'
import ProjectRepository from '../../model/project/ProjectRepository.js'
const router = express.Router()

router.get('', async (req, res, next) => {
  const repository = new ProjectRepository()
  let project
  try {
    project = await repository.get(process.env.GITLAB_PROJECT_ID)
  } catch (error) {
    return next(error)
  }
  res.send(project)
})

export default router
