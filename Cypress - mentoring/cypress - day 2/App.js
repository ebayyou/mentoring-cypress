const hello = false;

// example for condition in cypress
const run = (service) => {
  cy.get('[data-cy"service"]').each((element) => {
    const textService = cy.wrap(element).invoke("text");

    if (service === textService) {
      console.log(service);
    } else {
      console.log("not run");
    }
  });
};

run("programmer");
