<h1>Ticket Tracker</h1>

<h2>Task :1234:</h2>
<ul>
    <li>I was set a challenge to create a ticket tracking system, where each employee is displayed and can increment/decrement their ticket count. The extention was to create a working search bar to be able to filter by name, and a dropdown menu to filter by job.</li>
</ul>

<h2>Challanges :ant:</h2>
<ul>
    <li>The main challenge I faced was with the filtering. I managed to get both working independently but stuggled to get them both working at the same time. To overcome this I created a function (findSearchTerm) which takes the results of both the dropdown and the searchbar and creates a new array based on these results. I then added this function into the HTML for the result to show.</li>
    <li> Another issue I faced was with the dropdown options. I wanted to make it an array, incase in the future another job role is added, so we do not have to change the code for the display. However when I filtered the array on job role, it was showing every instance of each job role, i.e. there was repetition. To get around this I created another variable with [...new Set..] which takes the array entered and removes any duplicates.</li>
</ul>

<h2>Functionality :computer: </h2>
<ul>
    <li> Each employee has a counter, which they are able to press the + to add a ticket, or press - to minus one. If the ticket count is 0 it will not reduce if you press -.</li>
    <li> You are able to filter by name by typing in the search box, and by job by selecting the role in the drop down menu. These work both individually and together.
</ul>
