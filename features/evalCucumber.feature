Feature: To login as different users

@CucumberScenario
Scenario Outline: Login as a standard user
When I type user name "<userName>" and password "<password>" and click on signin button
Then I am navigated to the User home page

Examples:
|userName|                  |password|
|krishnansiva07@gmail.com|  |Siva1234%|

