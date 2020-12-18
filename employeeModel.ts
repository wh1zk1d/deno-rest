export interface Employee {
  id: string
  age: number
  name: string
  profession: string
}

export const allEmployees: Employee[] = [
  {
    id: 'c-137',
    age: 70,
    name: 'Rick Sanchez',
    profession: 'Scientist & Interdimensional Traveller',
  },
  {
    id: 'm-11',
    age: 14,
    name: 'Morty Smith',
    profession: 'Assistant',
  },
  {
    id: 'm-e2',
    age: 1,
    name: 'Mr. Meeseeks',
    profession: 'Servant',
  },
]
