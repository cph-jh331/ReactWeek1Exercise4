# ReactWeek1Exercise4
react exercise examprep
## How to test
* Clone the project
* npm install
* terminal1: npm run dataserver
* terminal2: npm start
* go into server/data.json and edit some values and save, while looking at the page.
## part1
### Describe the term Single Page Application and why it has become so popular for modern web-applications
Because you let the browser do most of the work and keep record of the state. Meaning that with javascript, you can make the browser render the page instead of making the server do it, making the app be more responsive and taking a load of the server.
### Explain the “recommended” React way of passing data into Components (at the top, or at the bottom or..)
From the top. You normally have a few components that delegates props out to subcomponents and keeps control of the state.
### Explain how JavaScript array methods, like filter, map and (reduce) can be used to generate dynamic HTML structures (tables, ul's etc.)
* map returns a new array of the same length, where you can edit the values.
* filter returns a new array with elements that passes your condition.
* reduce returns the values of the array to a single value.
### Explain about the Observer pattern, and where you have used it, both with Java and JavaScript.
When the data is ready you call the observer, which runs a method somewhere else.
