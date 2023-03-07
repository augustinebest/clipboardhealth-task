# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Ticket Breakdown

### **Update the Agents table to include a new column for custom ids, and update the application code to allow Facilities to save and update custom ids for each Agent.**

### Description
The Agents table would need to be modified to include custom ids that a facility can use to identify each Agent. A new column `agent_id` which has to be unique would added to the table. The application code would also need to be modified to allow facilities save and update custom ids for their agents

### Acceptance Criteria
- Facilities should be able to save and update custom ids for their agents
- Each agent should have a custom id

### **Modify the `getShiftsByFacility` function to include the custom id for each Agent in the Shifts data returned to the Facility.**

### Description
Currently the `getShiftsByFacility` returns all shifts in a quarter, with some metadata about the agent assigned to each. We would need to update this function to include custom id for the agent metadata returned for each shift. This can be done by modifying the database query used by getShiftsByFacility to include the custom id for each Agent. Also tests should be carried out to ensure that it returns the expected data

### Acceptance Criteria
- The metadata returned should include custom id for each Agent


### **Update the `generateReport` function to use the custom id instead of the internal id when generating the PDF report.**

### Description
Currently the `generateReport` uses the internal database id when generating PDF report. We would need to update function to use the custom id instead of the internal id when generating the report. We also need to ensure that custom id is displayed correctly in the report. Tests should be carried out generates reports with the correct custom ids

### Acceptance Criteria
- PDF reports are generated with custom ids for each agent


### **Implement a data migration script to update existing Shifts data with the custom ids, so that Facilities can see the custom ids for past Shifts in their reports.**

### Description
Currently, existing shifts in the database contain some metadata about the agents. These metadata does not contain the custom id for the agents. we would need to implement a data migration script to ensure data consistency.  

### Acceptance Criteria
- Script should update agents metadata in shift table