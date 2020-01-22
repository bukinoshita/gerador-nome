import uniqueRandomArray from 'unique-random-array'

import { nomeFeminino } from './utils/nomes/feminino'
import { nomeLista } from './utils/nomes'
import { nomeMasculino } from './utils/nomes/masculino'

export const geradorNome: () => string = uniqueRandomArray(nomeLista)
export const geradorNomeFeminino: () => string = uniqueRandomArray(nomeFeminino)
export const geradorNomeMasculino: () => string = uniqueRandomArray(nomeMasculino)
