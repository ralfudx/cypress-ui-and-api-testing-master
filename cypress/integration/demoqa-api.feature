@demoqa-api
Feature: DemoQA - API Testing

    Background: Create new user account
        Given user sends a request to create a new account with username and password

    Scenario: Verify user can create account
        And the new account is authenticated for the session
        Then user should verify that the new account has been successfully created

    Scenario: Verify user can add a list of books
        And the new account is authenticated for the session
        When user adds a list of books to the new account using a collection of ISBNs
        Then user should verify that the list of books have been successfully added

    Scenario: Verify user can remove one of the added books
        And the new account is authenticated for the session
        And user adds a list of books to the new account using a collection of ISBNs
        When user removes one of the books added to the new account
        Then user should verify that the book is no longer listed
