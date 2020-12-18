import { RouterContext } from 'https://deno.land/x/oak@v6.1.0/mod.ts'

import { allEmployees, Employee } from './employeeModel.ts'

const INVALID_JSON_ERROR = 'Please provide a valid JSON body'

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

export const createEmployee = async (context: RouterContext) => {
  if (!context.request.hasBody) {
    context.response.status = 400
    context.response.body = INVALID_JSON_ERROR
    return
  }

  let requestBody: Employee

  try {
    requestBody = await context.request.body().value
  } catch (error) {
    context.response.status = 400
    context.response.body = INVALID_JSON_ERROR
    return
  }

  allEmployees.push(requestBody)
  context.response.status = 200
  context.response.body = requestBody
}
