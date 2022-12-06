import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {
  public async listAll({}: HttpContextContract) {
    const tasks = await Task.all()

    return tasks
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only(['name', 'description', 'done'])
    const task = await Task.create(data)

    return task
  }

  public async show({ params }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)

    return task
  }

  public async update({ params, request }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)
    const data = request.only(['name', 'description', 'done'])
    task.merge(data)

    task.save()

    return task
  }

  public async destroy({ params }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)

    await task.delete()

    return { id: params.id }
  }
}
