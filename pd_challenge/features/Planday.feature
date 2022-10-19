#To run in console i.e.: npm test -- --tags "@smoke"
Feature: Login and Schedule

Background:
  Given I open 'https://test1234.planday.com/'
  And that the site loads then I accept cookies

@smoke
Scenario: User valid and password invalid
    Given user informs login with value equal 'tesASD@outlook.com'
    And user informs password with value equal '1234'
    When user clicks on login button
    Then user should see message 'El nombre de usuario o la contraseña son incorrectos.'

@smoke
Scenario: User valid and password valid
    Given user informs login with value equal 'plandayqa@outlook.com'
    And user informs password with value equal 'APItesting21'
    When user clicks on login button
    Then I navigate to 'Home' Page

@schedule
Scenario: Create a new a new shift
    Given user informs login with value equal 'plandayqa@outlook.com'
    And user informs password with value equal 'APItesting21'
    When user clicks on login button
    Then I navigate to 'Home' Page
    And user clicks Schedule on navigation bar
    Then I navigate to 'Schedule' Page
    And can see '3' Employees displayed
    Then create a shift from '9:00' to '17:00'
    # And now I can see the new Shift for 'Employee One'