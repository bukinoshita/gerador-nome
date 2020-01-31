# gerador-nome [![Build Status](https://travis-ci.org/bukinoshita/gerador-nome.svg?branch=master)](https://travis-ci.org/bukinoshita/gerador-nome)

> Gerador brasileiro de Nome

## Install

```
$ yarn add gerador-nome
```

## Usage

```ts
import { geradorNome, geradorNomeFeminino, geradorNomeMasculino } from 'gerador-nome'

geradorNome()
// ~> Karina

geradorNomeFeminino()
// ~> Andressa

geradorNomeMasculino()
// ~> Mario
```

## API

### geradorNome()

Gera nome aleatório masculino ou feminino.

Returns a `string`.

### geradorNomeFeminino()

Gera nome aleatório feminino.

Returns a `string`.

### geradorNomeFeminino()

Gera nome aleatório masculino.

Returns a `string`.

## Related

- [gerador](https://github.com/bukinoshita/gerador) — Gerador de dados brasileiros
- [gerador-estado-civil](https://github.com/bukinoshita/gerador-estado-civil) — Gerador brasileiro de Estado Civil
- [gerador-sexo](https://github.com/bukinoshita/gerador-sexo) — Gerador brasileiro de Sexo da pessoa

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
