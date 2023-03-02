@demoqa-ui
Feature: DemoQA - UI Testing

    Background: User is on DemoQA Webpage
        Given user is on the homepage

    Scenario: Verify user can enter new data into the table
        And user navigates to "Elements"
        And taps on Web Tables from the side menu
        And user taps on Add button
        When user enters registration data into the input field
        And user taps on Submit button
        Then a new row should be created in the table with all the provided data

    Scenario Outline: Verify user can edit the row in a table
        And user navigates to "Elements"
        And taps on Web Tables from the side menu
        And user taps on the edit icon in the second row of the table
        When user edits the field First_Name to <first_name>
        And user edits the field Last_Name to <last_name>
        And user taps on Submit button
        Then the edited <first_name> and <last_name> should be displayed on the second row

        Examples:
        | first_name | last_name |
        | Gerimedica | BV        |

    Scenario: Verify broken image
        And user navigates to "Elements"
        And taps on Broken Links-Images from the side menu
        Then user should verify that the first image is broken

    Scenario: Verify user can submit the form.
        And user navigates to "Forms"
        And taps on Practice Form from the side menu
        When user enters all details into the input fields
        And user taps on Submit button
        Then user should verify that the form is submitted successfully with the provided data
        And user closes the window

    Scenario: Verify the progress bar
        And user navigates to "Widgets"
        And taps on Progress Bar from the side menu
        When user taps on Start button
        Then user should verify that the progress bar is 100 percent
        And user should verify that the progress bar is Green

    Scenario: Verify the tooltip
        And user navigates to "Widgets"
        And taps on Tool Tips from the side menu
        When user hovers over the 'Hover me to see' button
        Then user should verify that 'You hovered over the Button' text is displayed

    Scenario: Verify user can drag and drop
        And user navigates to "Interactions"
        And taps on Droppable from the side menu
        When user drags the 'Drag me' box to the 'Drop Here' area
        Then user should verify that the 'Drag me' box is successfully dropped in the 'Drop Here' area
