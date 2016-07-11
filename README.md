# Interview Component

For this interview, you will be asked to complete a `user-schedule-comparator` component for an Angular 1.5.x application.

It is expected that no more than 3 hours be spent completing this work; We are interested in seeing both the coding style you use, as well as your knowledge of the Angular API.

If there are any ambiguities about the requirements of this interview, please speak with either (Sean Graves)[mailto:sean@rideshark.com] or (Bryan Rayner)[mailto:bryan@rideshark.com].

## User Schedule Comparator
!(user-schedule-comparator shown in its two configurations)[design/user-schedule-comparator.design.png]

The `user-schedule-comparator` is a sample component which would be used in a ride-matching application. Its 
primary purpose is to visually compare the schedules of different users to one another.

We expect to use the `user-schedule-comparator` alongside other Anuglar components in the composition of our app.

The `user-schedule-comparator` has the following functionality:

 - Shows the departure time for both the morning and evening of multiple users' schedules
 - If a user is not commuting on a given day, this is indicated.
 - Allows users to select which person's schedule they are currently viewing
 - Displays whether or not a time matches with all other schedules in the group. 
   For example, if all schedules being compared leave on Monday mornings at 6:00 AM, the Monday AM schedules would have a checkmark and blue color, indicating that they match.
 - Allows the same data set to be viewed from multiple perspectives, based on who is logged in.
   For example, a data set of Sally and Bob's schedules, would show "Me" instead of Bob's name when Bob is logged in, and "Me" instead of Sally's name when Sally is logged in.
   When no-one is logged in, Sally and Bob's names are both shown, without a "Me" substitution.

The `user-schedule-comparator` should have the final interface:

````html

    <script>
        // Data is loaded into Angular here from the provided data files.
        // For this sample file, assume that an array of user schedule data is 
        // exposed on the example $scope as 'userSchedules'

        // Also assume that the currently logged in user is exposed on the example $scope
        // as 'currentUser'. If the user is not logged in, this variable would be null.
    </script>

    <user-schedule-comparator user-schedules="userSchedules"
                              current-user="currentUser"></user-schedule-comparator>
````

## Implementation

Modify the `index.html` file provided, to demonstrate your completed component. 
You may demonstrate the comonent in any manner you choose (multiple components in 
varying configurations may be loaded at once on the same page)

#### Requirements
The following are requirements for this assignment:
 - This must work on Chrome 51. You can forget about IE and Firefox compatability for this assignment.
 - We expect that two schedules may be compared with one another.
 - We expect that the component may be able to be used with, and without, a logged in user.
 - We expect that multiple Javascript files are used, with a one-file-per-class convention.
 - We expect that the JSON data provided for user schedules, is loaded via an Angular Service.
 - We expect that the CSS is structured in an easy-to-follow manner.
 - We expect that the Angular 1.5.x `component` API is used (Ng1 docs)[https://docs.angularjs.org/guide/component].

#### Bonus points:
We'd be impressed with the following improvements:

 - Allow more than two schedules to be compared
 - Use (Angular Material)[https://material.angularjs.org/latest/]
 - Use SystemJS or another module loader, instead of importing `<script>` tags by hand.
 - Use the (Angular 2's Naming Conventions)[https://angular.io/docs/ts/latest/guide/style-guide.html] for file names
 - Use the `class` syntax.
 - Use the fat arrow (`()=>{}`) syntax instead of functions.
 - Use ES6 module syntax.