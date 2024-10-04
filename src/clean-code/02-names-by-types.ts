(() => {
  // Array names are in plural and describes what they contain

  const temperaturesCelsius = [33.6, 12.34];

  const users = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ];

  const userEmails = users.map((user) => user.email);

  // It is good use verbs like can or is for boolean variables

  const canJump = false;
  const canRun = true;
  const hasItems = false;
  const isLoading = true;

  // Specify that variables are storing times

  const startTime = new Date().getTime();

  const endTime = new Date().getTime() - startTime;

  // Functions names describe exactly what they do

  function getBooks() {
    throw new Error('Function not implemented.');
  }

  function getBooksByUrl(url: string) {
    throw new Error('Function not implemented.');
  }

  function getSquareArea(side: number) {
    throw new Error('Function not implemented.');
  }

  function printJob() {
    throw new Error('Function not implemented.');
  }
})();
