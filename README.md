# mindthread - Simplified automation with selenium-webdriver & cucumber

An example of selenium-webdriver with cucumber automation with no locators or complex xpaths. Mindthread uses text or labels of an element
to perform a defined action.

Please note this is not a framework, its just a methodology which can yeild great results if you witsh to implement this.

This is the Git(Hub) repository of a basic example of automating your code with 30% to 70% less code based on your application and business flows. 
In this example, I describe why and how sometimes less automation can be more automation. Its never about choosing right tool or framework but 
using it in right way.
This repository is the example and approach and should be viewed as one of the implementation out of many possibilities. 

Quick start guide
``` node
# npm install
# npm test
```

-----

# Motivation

Lack of reusability and high maintainance has been identified as a key limiting factor to test automation. Mindthread is based on principles
that user should be able to write automated tests by just looking at a mock up ot just by going through a requirement. Objective is to reduce
feedback time between product owner or user.

>  “Also common is the test automation group zombie. This zombie is the 
>  practice of assigning test automation to a dedicated team of test automators. 
>  The appeal is that we can keep developers focused on writing new code instead
>  of writing and maintaining automated tests. The danger is that test automation
>  inevitably lags development, so feedback from testing is delayed in a way that 
>  significantly reduces its value.”— Dale Emery


## Why Mindthread?

  - Selenium tests without locators: Change is a constant in today's
    product delivery. Change is normally not in behaviour of product 
	or application however these changes normally mess automated tests
	due to change in DOM.
     With mindthread you work with:
      - No Xpath or CSS
      - Simple english easier and less ambiguous
      - Reusable code.
  - Error reduction: Change in DOM easily identified and mindthread algorithm handles this correctly without any code change.
  - 100% reusability: You write much less code. 


## Everything looks better with an example!

Lets start with a simple requirement starting with a simple wireframe created:

``` bash
Requirement : 
	As a user 
	I should be able to fill suscription form 
	so that
	a new subscription is created
```

![The frame](http://naveen.org.in/demo/images/wireframe.png "Basic Form Design")

Above is a basic mock which is added as idicative design. 

### Question : When we start automation?
Best guess is once DOM is ready and we can identify individual elements, right?
This is not the case with Mindthread, here you can just start writing your tests. Since it uses cucumber you just need to write name of lable and action in 
plain english and it does the rest. 

Lets try to create a scenario in Mindthread even before we have start actual development.

``` bash
Feature: Testing mindthread
  As a user 
	I should be able to fill suscription form 
	so that
	I have a new subscription is created

  Scenario: Mindthread subscription test
    Given I open url "MISSING_URL"
    And I choose "Silver" from "Susbscription" dropdown
    And I should input "Naveen Alok" into "Your Full Name" textfield
    And I should input "Somewhere in the world" into "Address" textfield
	And I should input "naveenalok@gmail.com" into "Email Address" textfield
	And I should input "+45914*****" into "Phone Number" textfield
	And I choose radio following name "Female"    
    And I should input "mindthread" into "Password" textfield
```

>  “Please note a basic logic is already written in mindthread to handle this 
>  scenario. So if you have an existing application which looks similar to this
>  you can just try it, should work out of the box.
>  However you need to extend in other cases."


As we know course to a true product is never as we planned. So after lot of changes we end up with a form looking like :

![alt tag](http://naveen.org.in/demo/images/form.png "Actual form developed")

We few changes in end product like "Confirm Password" text and somepne realized we  missed "You agree to our Terms and Policy." for users. So these are added in final product.

So what is change in final automated test, well nothing much jsut add 2 lines without writing any code.

``` bash
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
    And I should input "+45914*****" into "Phone Number" textfield
    And I choose radio following name "Female"
    And I should input "mindthread" into "Password" textfield
    And I should input "mindthread" into "Confirm Password" textfield    
    And I choose checkbox following name "You agree to our Terms and Policy."
```

![alt tag](http://naveen.org.in/demo/images/mindthread.gif "Test Run")

All looks good? Yes, it should be everytime :), its a gif file. Try it and let me know if this does not work!


# Logic, is this AI?

Not really it work on a very premetive logic.
It looks for for all elements on the page once it finds text or label with matching description then it tries to find matching element from remaining list.

## Notes
- This example in node but this can be implemented in any programming language
- Should work with any browser
- Best for CI/CD projects where development time for quality automation is less, can attain higher automation with less effort

## Caution 
This may be not quickest during execution specially if you have page with 1000s of elements, but you can always save time spent in finding script issues and fixing them.
More importantly you have less time to automate which can be used any number of times in your application.

Overall performance can be improved based on individual application any suggestions in this regard are welcome.

This is my first github repo :), please provide your feedback if you find this interesting.

