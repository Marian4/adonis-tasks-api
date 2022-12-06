import Route from '@ioc:Adonis/Core/Route'
import TasksController from 'App/Controllers/Http/TasksController'

const taskController = new TasksController()

Route.get('/tasks', taskController.listAll)
Route.post('/tasks/create', taskController.create)
Route.get('/tasks/:id', taskController.show)
Route.put('/tasks/:id', taskController.update)
Route.delete('/tasks/:id', taskController.destroy)
