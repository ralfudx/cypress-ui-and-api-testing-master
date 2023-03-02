const apiUrl = Cypress.env("apiUrl");

export function generateToken(userName: JQuery<HTMLElement>, password: string) {
	cy.request({
		method: "POST",
		url: `${apiUrl}/Account/v1/GenerateToken`,
		body: {
			"userName": userName,
			"password": password
		},
	}).then((response) => {
		expect(response.status).to.eq(200);
		cy.wrap(response.body.token).as("token");
	});
}

export function createNewAccount(userName: string, password: string) {
	cy.request({
		method: "POST",
		url: `${apiUrl}/Account/v1/User`,
    body: {
      "userName": userName,
      "password": password
    }
	}).then((response) => {
		cy.wrap(response.status).as("createStatus");
		cy.wrap(response.body.username).as("newUserName");
    	cy.wrap(response.body.userID).as("newUserID");
	});
}

export function checkAccountCreation() {
	cy.get("@newUserID").then($userid=> {
		cy.get("@token").then($token => {
		  cy.request({
			method: "GET",
			url: `${apiUrl}/Account/v1/User/${$userid}`,
			headers: {
			  Authorization: `Bearer ${$token}`
			}
		  }).then((response) => {
			cy.wrap(response.status).as("checkStatus");
			cy.wrap(response.body.userId).as("checkUserId");
		  });
		});
	});
}

export function addListOfBooks() {
	cy.get("@newUserID").then($userid=> {
		cy.get("@token").then($token => {
		  cy.request({
			method: "POST",
			url: `${apiUrl}/BookStore/v1/Books`,
			headers: {
			  Authorization: `Bearer ${$token}`
			},
			body: {
			  "userId": $userid,
			  "collectionOfIsbns": [
				{
				  "isbn": "978-3-16-148410-1"
				},
				{
				  "isbn": "978-1-4028-9462-2"
				},
				{
				  "isbn": "978-0-14-026690-3"
				},
				{
				  "isbn": "978-3-16-148410-4"
				},
				{
				  "isbn": "978-3-16-148410-5"
				}
			  ]
			},
		  }).then((response) => {
			cy.wrap(response.status).as("addStatus");
			cy.wrap(response.body.books).as("addBooksLength");
			cy.wrap(response.body.books[0].isbn).as("firstBook");
		  });
		});
	});
}

export function deleteBook() {
	cy.get("@newUserID").then($userid=> {
		cy.get("@token").then($token => {
		  cy.get("@firstBook").then($isbn => {
			cy.request({
			  method: "DELETE",
			  url: `${apiUrl}/BookStore/v1/Book`,
			  failOnStatusCode: false,
			  headers: {
				Authorization: `Bearer ${$token}`
			  },
			  body: {
				"isbn": $isbn,
				"userId": $userid
			  },
			}).then((response) => {
			cy.wrap(response.status).as("delStatus");
			cy.wrap(response.body).as("delBody");
			});
		  });
		});
	});
}
