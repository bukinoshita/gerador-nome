import { geradorNome, geradorNomeFeminino, geradorNomeMasculino } from '../source'

test('random nomes', () => {
  const random = geradorNome

  let current: string
  let previous: string | undefined
  let i = 100

  while (i--) {
    current = random()
    expect(current).not.toBe(previous)
    previous = current
  }
})

test('random nomes feminino', () => {
  const random = geradorNomeFeminino

  let current: string
  let previous: string | undefined
  let i = 100

  while (i--) {
    current = random()
    expect(current).not.toBe(previous)
    previous = current
  }
})

test('random nomes masculino', () => {
  const random = geradorNomeMasculino

  let current: string
  let previous: string | undefined
  let i = 100

  while (i--) {
    current = random()
    expect(current).not.toBe(previous)
    previous = current
  }
})
