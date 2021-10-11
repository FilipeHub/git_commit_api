# Solution details

## Backend

Runs in http://localhost:3333/ and uses express to return a REST API

### Choices and Trade offs

I chose the MongoDB database because the system will not need advanced analytics and joins to be done, otherwise a SQL database would be a better choice.

I chose to use the Mongodb Atlas Connection because of its simplicity, but in a real case a docker would be a better choice, and save the database locally (for tests) and in the cloud for production.



### Intentional Deviations

I made changes in the API removing Owne, Repository and DiffHunk entities, because I didn't need them to get to the solution. (I let then in the code, but I didn't use)

I made changes in the /repositories/:owner/:repository/commit/:commitSHA/diff result because of the removal of DiffHunk.


## Frontend

Runs in http://localhost:1234/ and uses ReactJS functional components to returns the page to view the commit information

### Choices

I chose to split the page in other react components and stylizing the CSS of each one.

I chose use axios to call the requests to the backend of this system (http://localhost:3333/)

## Problems

I had a problem making the frontend because the quantity of requests that I've made to the github api, what I couldn't be able to finish it
