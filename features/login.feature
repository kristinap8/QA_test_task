Feature: Login Functionality Of Saucedemo Website

  Scenario Outline: Check login with empty login and password
    Given User is located on the main page of saucedemo website
    When User click login button
    Then User should see <message>

    Examples: 
      | message                              |
      | "Epic sadface: Username is required" |
