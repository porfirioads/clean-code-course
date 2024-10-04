(() => {
  //  Use expressive names

  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Following names are bad because give technical information

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface UserInterface {}

  // Following names are better

  class User {}
  interface IUser {}

  // Homework

  const today = new Date();
  const elapsedTimeInDays: number = 23;
  const numberOfFilesInDirectory = 33;
  const firstName = 'Porfirio';
  const lastName = 'Díaz';
  const daysSinceModification = 12;
  const maxClassesPerStudent = 6;
})();
