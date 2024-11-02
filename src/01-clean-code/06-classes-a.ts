(() => {
  // Sin aplicar principio de responsabilidad única
  
  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const person = new Person('Porfirio', 'M', new Date('1996-07-20'));
  console.log(person);

  const user = new User(
    'porfirioads@gmail.com',
    'admin',
    'Porfirio',
    'M',
    new Date('1996-07-20'),
  );
  console.log(user);

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'porfirioads@gmail.com',
    'Admin',
    'Porfirio',
    'M',
    new Date('1996-07-20'),
  );
  console.log(userSettings);
})();
