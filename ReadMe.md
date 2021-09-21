# Project Brief

Create a simple time tracking app using react JS and a GraphQL endpoint. The application will present the user with the ability to 
1)	Select a task (select box)
1)	Click a button to start and stop the timer.
1)	List the details of previously tracked time entries.

### Before you Start

1)	Visit www.proworkflow.com and sign up for a free trial using the company name 
    “DEVTESTyourfirstname”.
1)	Familiarize yourself with how to track time within the current tool.
1)	Reach out to our support team, explain you are completing the development test and ask them for the API Key of the trial you have just created.

### GraphQL Endpoint
The public graphql endpoint is https://graph.proworkflow.com/ 

-	Add the header below to authenticate
```
{ "Authorization":"YOUR-API-KEY"}
``` 
-	You can explore or write test queries at https://graph.proworkflow.com/explorer/  
-	add the Authorization in the HTTP Headers section of the explorer Graphql tool


## Select Task
1)	The user can search then select a task using a key word search using GET_TASKS graphql query.
1)	User selects a task they wish to track time against from the result set.
1)	The application should display the currently selected task.
1)	Once a task has been selected, the user should be presented with a “Start Timer Button” and a list of previously recorded time entries. (explained below)

## Start Timer (Button)
-	The user should be presented with a button to “Start Timer”, this will fire the START_TIMERECORD mutation.  
-	A timer should be shown showing how long the current timer has been running (format HH:mm)

## Stop Timer (Button)
-	The stop timer button will fire the STOP_TIMERECORD mutation. 
-	An option to add ‘notes’ should be given when the user clicks ‘stop timer’ button
-	If no notes are added, the app should supply the project name and task name as notes to the mutation.

## Time Entries List:
-	Below the Start/Stop timer button, a list of previous time records that have been tracked against the task should be displayed, this data can be found from the GET_TASK query.
-	This list should be updated once a new time record has been stopped.

### Timer List Details to Display
-   Notes
-	Start date
-	Start time
-	Stop time
-	Time tracked (HH:mm)
-   Tracked by (contact full name)

## Additional Instructions 
- The graphql Query and Mutations are supplied in queries.gql file in this repo
- You are welcome to make use of any component libraries such as Material UI
- You are free to make any design or UX decisions which may aid in the usability of this time tracking application

## Additional Tasks (OPTIONAL) - see extended_queries.gql
1	Give user the ability to filter/search for specific tasks by providing a search parameter to FILTER_TASKS query
1	Allow user to edit time entry notes in Time Entries list
