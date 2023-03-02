import { And, Then, When, Given } from "cypress-cucumber-preprocessor/steps";
import { generateToken, createNewAccount, checkAccountCreation, addListOfBooks, deleteBook } from "../helpers/util.helper";

const password = "Connect@123"

Given(/^user sends a request to create a new account with username and password$/, () => {
  var userName = "rafa" + Date.now();
  createNewAccount(userName, password);
  cy.get("@createStatus").then($status => {
    cy.get("@newUserID").then($userid=> {
      expect($status).to.eq(201);
      expect($userid).to.not.be.empty;
    });
  });
});

And(/^the new account is authenticated for the session$/, () => {
  cy.get("@newUserName").then($username => {
    generateToken($username, password);
  });
});

Then(/^user should verify that the new account has been successfully created$/, () => {
  checkAccountCreation();
  cy.get("@checkStatus").then($status=> {
    cy.get("@checkUserId").then($checkid=> {
      cy.get("@newUserID").then($userid=> {
        expect($status).to.eq(200);
			  expect($checkid).to.eq($userid);
      });
    });
  });
});

When(/^user adds a list of books to the new account using a collection of ISBNs$/, () => {
  addListOfBooks();
  cy.get("@addStatus").then($status=> {
    cy.get("@addBooksLength").then($books=> {
      expect($status).to.eq(201);
      expect($books).to.be.an("array");
    });
  });
});

Then(/^user should verify that the list of books have been successfully added$/, () => {
  cy.get("@addBooksLength").then($books=> {
    expect(Number($books.length)).to.be.eq(5);
  });
});

When(/^user removes one of the books added to the new account$/, () => {
  deleteBook();
  cy.get("@delStatus").then($status=> {
    expect($status).to.eq(204);
  });
});

Then(/^user should verify that the book is no longer listed$/, () => {
  deleteBook();
  cy.get("@delStatus").then($status=> {
    cy.get("@delBody").then($body=> {
      expect($status).to.eq(400);
      expect(JSON.stringify($body)).to.contain("ISBN supplied is not available in User's Collection!");
    });
  });
});