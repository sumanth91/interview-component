# Interview Component

For this interview, you will be asked to build a schedule comparison tool for an AngularJS application.

It is expected that no more than 3 hours be spent completing this work; We are interested in seeing both the coding style you use, as well as your knowledge of the Angular API.

The schedule comparison tool would be used in a ride-matching application. Its 
primary purpose is to visually compare the schedules of different users to one another.

It has the following functionality:

 - Shows the departure time for both the morning and evening of multiple users' schedules
 - If a user is not commuting on a given day, this is indicated.
 - Allows users to select which person's schedule they are currently viewing
 - Displays whether or not a time matches with all other schedules in the group. 
   For example, if all schedules being compared leave on Monday mornings at 6:00 AM, the Monday AM schedules would have a checkmark and blue color, indicating that they match.
 - The image file provided shows how the component should look.

If there are any ambiguities about the requirements of this interview, please speak with either (Sean Graves)[mailto:sean@rideshark.com] or (Bryan Rayner)[mailto:bryan@rideshark.com].

## Data schema

All user schedule data is located in JSON files in `data/user-schedules`. Treat these JSON files as a REST API end point.

The following outlines the schema used for the data:
````ts 


interface Schedule {
    /**
     * The days of the schedule
     */
    days: ScheduleDay[];

    /**
     * The user
     */
    user: User;
}

interface ScheduleDay {
    /**
     * The name of the day
     */
    day: string;

    /**
     * The time that a user is leaving their home in the AM 
     * 480 is 8:00 AM in the morning
     * 1020 is 5:00 PM in the evening
     */
    departAmTime: number;

    /**
     * The time that a user is leaving their workplace in the PM 
     * 480 is 8:00 AM in the morning
     * 1020 is 5:00 PM in the evening
     */
    departPmTime: number;

    /**
     * Whether or not the user is commuting that day
     */
    isCommuting: false;
}

interface User {
    /**
     * The name of the user
     */
    name: string;
    /**
     * The ID of the user.
     */
    id: number;
}


````

 

## Implementation

Modify the `index.html`, 'scripts/app.js', and styles/app.css files provided and add your own to implement the design provided using AngularJS. 

The details of the implementation are up to you but here are some things we would like to see:
 - Well organized javascript and css files. (split up the various components you are making so it makes sense to look at)
 - You only need to compare 2 schedules (assume the first one you load is the current user), but we have provided multiple files. If you can make it compare 2+ schedules we will be impressed.
 - Making use of the new Componenet api found in angular 1.5.x as opposed to just plain diretives.
 - Using newer js featres (ES6) is fine and we love to see that you are interested in the latest tech.
 - Creating a build process to package you scripts / styles and/or using something like SystemJS to load multiple js files.
 - Object oriented Javascript, knowlege of things like prototype and the module pattern are good to see.

