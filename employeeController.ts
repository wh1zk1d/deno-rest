import { RouterContext } from 'https://deno.land/x/oak@v6.1.0/mod.ts'

import { allEmployees } from './employeeModel.ts'

export const getAllEmployees = ({ response }: RouterContext) => {
  response.body = allEmployees
}

export const getEmployee = (context: RouterContext) => {
  const employee = allEmployees.find(employee => employee.id === context.params.id)

  if (!employee) {
    context.response.status = 404
    return
  }

  context.response.status = 200
  context.response.body = employee
}
