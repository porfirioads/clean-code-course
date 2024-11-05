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

- Las entidades de software (clases, módulos, métodos, etc.) deben estar 
  abiertas para la extensión, pero cerradas para la modificación.
- También se puede lograr con herencia, con patrones de diseño de composición, 
  o con strategies.
- Detectar violaciones:
  - Los nuevos requerimientos normalmente afectan a clases o módulos.
  - Una clase o módulo afecta muchas capas (presentación, almacenamiento, etc.).

### `L` – Liskov Substitution Principle (LSP)

- Las funciones que utilicen punteros o referencias a clases base deben ser 
  capaces de usar objetos de clases derivadas sin saberlo.
- Se nombró en honor a Barbara Liskov, que recibió el Turing Award.
- Siendo U un subtipo de T, cualquier instancia de T debería poder ser
  sustituída por cualquier instancia de U sin alterar las propiedades del 
  sistema.

### `I` – Interface Segregation Principle (ISP)

- Los clientes no deberían estar obligados a depender de interfaces que no 
  utilicen.
- Detectar violaciones:
  - Las interfaces nos obligan a violar los principios de responsabilidad única 
    y sustitución de Liskov.

### `D` – Dependency Inversion Principle (DIP)

- Los módulos de alto nivel no deben depender de módulos de bajo nivel.
- Ambos deben depender de abstracciones.
  - Se refiere a clases abstractas o interfaces
  - El principal motivo por el cual las reglas de negocio o capa de dominio
    deben depender de abstracciones y no de concreciones es que aumenta su
    tolerancia al cambio.
  - Cada cambio en un componente abstracto implica un cambio en su 
    implementación.
  - Los cambios en implementaciones concretas, no requieren cambios en las
    interfaces que implementa.
  - Inyección de dependencias.
- Las abstracciones no deben depender de detalles.
- Los detalles deben depender de abstracciones.
- Los componentes más importantes son aquellos centrados en resolver el problema
  subyacente al negocio, es decir, la capa de dominio.
- Los menos importantes son los que están próximos a la infraestructura, es
  decir, aquellos relacionados con la UI, la persistencia, la comunicación con
  APIs externas, etc.
