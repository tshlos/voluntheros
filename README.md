# Voluntheroes
Voluntheroes is a web application that allows volunteers to help elderly people with day to day task they can not always be fullfill. The functionality of this application is a user can sign up to be a volunteer. That volunteer can then see their task that are either available, claimed by other volunteers, and their own task they have claimed.

## Getting Started
* Fork and clone this repository. </br>
* Navigate into the directory where you cloned the repository.

### Voluntheroes - Backend
Navigate into voluntheroes-server folder </br>
In the terminal write:
 ```
rails db:migrate
rails db:seed
rails s <-- to start the server
 ```
 After this you will then be directed to http://localhost:3000 where you should see the cute rails opening page!
 
 ### Voluntheroes - Frontend
 While your backebd server is running, in a serperate terminal, we can now: </br>
 Navigate into voluntheroes-client folder </br>
 In the terminal write:
 ```
 bundle install
 yarn start <-- to start that server
 ```
 You will want to hi 'y' for 'yes' when the terminal asks if you'd like the run the server on a new port, (which will be http://localhost:3001)
 
 ### Features
 * A user must login to access the web application
 * As a volunteer, they can view three columns: </br>
 **Available Task** </br>
 **Claimed Task** </br>
 **Your Task** </br></br>
 * As an elderly person, the view page will have a calender, along with a selections drop down menu with task options that yu would need done in yur day to day routine.
 
 ### Build
 ```
 Ruby on Rails
 Javascript
 React
 ```
 ### Credits
 Danira: https://github.com/cortezd334 </br>
 Taci: https://github.com/tshlos </br>
 Akiko: https://github.com/keeks5456
 
