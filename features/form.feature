Feature: Testing mindthread
  As a user 
	I should be able to fill suscription form 
	so that
	I have a new subscription is created

  Scenario: Mindthread subscription test
    Given I open url "http://naveen.org.in/demo/form.html"
    And I choose "Silver" from "Susbscription" dropdown
    And I should input "Naveen Alok" into "Your Full Name" textfield
    And I should input "Somewhere in the world" into "Address" textfield
    And I should input "naveenalok@gmail.com" into "Email Address" textfield
    And I should input "+4591400652" into "Phone Number" textfield
    And I choose radio following name "Female"
    And I should input "mindthread" into "Password" textfield
    And I should input "mindthread" into "Confirm Password" textfield    
    And I choose checkbox following name "You agree to our Terms and Policy."