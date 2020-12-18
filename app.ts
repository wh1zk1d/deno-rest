import { Application, Router } from 'https://deno.land/x/oak@v6.1.0/mod.ts'
import { RouterContext } from 'https://deno.land/x/oak@v6.1.0/mod.ts'

import { getAllEmployees, getEmployee, createEmployee } from './employeeController.ts'

const PORT = 1337

const app = new Application()
const router = new Router()

router.get('/', (context: RouterContext) => {
  context.response.body = 'hello world!'
})

router.get('/employees', getAllEmployees)
router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployee)

app.use(router.routes())

console.log(`🚀 HTTP server started on http://localhost:${PORT}`)
await app.listen(`localhost:${PORT}`)
