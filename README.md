# Clean code course

This project contains the exercises from the clean code course.

## Instructions

Install dependencies:

```bash
npm install
```

Execute project:

```bash
npm run start <FILE_PATH>
```

## S.T.U.P.I.D. code smells

- `S` - Singleton
- `T` - Tight coupling
- `U` - Untestability
- `P` - Premature optimization
- `I` - Indescriptive naming
- `D` - Duplication

## S.O.L.I.D. principles

### `S` – Single Responsibility Principle (SRP)

- Nunca debería haber más de un motivo por el cual cambiar una clase o módulo.
- Tener una única responsabilidad !== hacer una única cosa.
- Detectar violaciones:
  - Nombres de clases y módulos demasiados genéricos.
  - Cambios en el código suelen afectar la clase o módulo.
  - La clase involucra múltiples capas.
  - Número elevado de importaciones.
  - Cantidad elevada de métodos públicos.
  - Excesivo número de líneas de código.

### `O` – Open/Closed Principle (OCP)

- Las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.
- También se puede lograr con herencia, con patrones de diseño de composición, o con strategies.
- Detectar violaciones:
  - Los nuevos requerimientos normalmente afectan a clases o módulos.
  - Una clase o módulo afecta muchas capas (presentación, almacenamiento, etc.).

### `L` – Liskov Substitution Principle (LSP)

### `I` – Interface Segregation Principle (ISP)

### `D` – Dependency Inversion Principle (DIP)
