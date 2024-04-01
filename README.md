# Project Title

Procket (procrastinating rocket)

## Overview

<!-- What is your app? Brief description in a couple of sentences. -->

Procket is an app designed to help users overcome procrastination and improve productivity by combining a planner and mood tracker with advanced analytics on procrastination patterns.

### Problem

<!-- Why is your app needed? Background information around any pain points or other reasons. -->

Procrastination is a common challenge for many people, leading to missed deadlines, unmet goals, and increased stress. Existing planning apps often lack insights into why tasks are delayed or abandoned, making it difficult for users to improve their productivity.

Procrastination affects up to 20% of the adult population in the United States, leading to decreased productivity, missed deadlines, and increased stress levels (American Psychological Association, APA). Research conducted by Steel and Klingsieck in 2016 has shown that procrastination is associated with poorer performance and well-being outcomes, with individuals experiencing higher levels of stress and anxiety due to the uncertainty and pressure of impending deadlines. Moreover, Pychyl and Flett's study in 2012 suggests that procrastination is often linked to a fear of failure and perfectionism, leading individuals to delay tasks out of concern for not meeting their own high standards or fear of the consequences of potential failure.

Interventions targeting procrastination have been shown to be effective in improving productivity and well-being. Sirois and Pychyl's study in 2013 demonstrated that strategies such as goal setting, time management techniques, and self-monitoring can lead to a reduction in procrastination behavior and improved academic performance. Additionally, incorporating elements of gamification into productivity apps has been found to enhance user engagement and motivation. By turning task completion into a rewarding and visually appealing experience, users are more likely to stay committed to their goals and persist in their efforts to overcome procrastination.

Procket integrates these effective strategies into its design by providing users with customizable goal-setting tools, time management features, and visual progress tracking. By gamifying the task completion process with the metaphor of assembling a rocket, users are incentivized to stay on track and take consistent action towards their goals. Additionally, Procket offers insights into procrastination patterns through advanced analytics, empowering users to identify and address underlying causes of procrastination. By understanding their habits and triggers, users can develop effective strategies to overcome procrastination and maintain momentum towards their goals. Overall, Procket's comprehensive approach to addressing procrastination combines evidence-based strategies with engaging design elements to provide users with an effective solution for improving productivity and achieving their goals."

### User Profile

<!-- Who will use your app? How will they use it? Any special considerations that your app must take into account. -->

Procket is for anyone looking to enhance their productivity and better understand their procrastination habits. Users will create tasks, set goals, track their mood, and analyze procrastination patterns to optimize their planning strategies. The app must consider users' varying levels of tech-savviness and preferences for visual feedback to ensure accessibility and engagement.

### Features

<!-- List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented. -->

- Goal and Task Creation:

  - Users can create goals with start and end date and also create associated tasks with specific due dates.

- Goal and Task Managmant:

  - Users can edit and delete goals also create associated tasks with specific due dates.

- Task Completion:

  - Users can mark tasks as done with checkboxes also revert it.

- Task Postpone with reason :

  - Users can postpone a task with providing a reason and new due date.

- To-Do List:

  - Generate a list of tasks based on due date priorities.

- Remaining Uncompleted Tasks:

  - Display uncompleted tasks remaining from past days to facilitate daily planning.

- Procrastination Analysis:

  - Advanced analytics provide insights into procrastination patterns over time.

- Progress Graphs:

  - Visualize progress and procrastination trends for each goal to make informed planning decisions.

- Visual Progress Tracking and Rewards:
  - Upon completing a goal, a rocket is assembled with parts representing completed tasks and launched. Also an appealing rocket is added to the collection as a visual award, symbolizing progress and encouraging users.

## Implementation

### Tech Stack

<!-- List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations. -->

- Frontend Framework:

  - **React.js**
  - **react-router**
  - **axios**

- UI Components and Data Visualization:

  - **Input Type Date** - Utilizes HTML input types for selecting dates, offering native support and familiarity for users.
  - **React Google Charts** - Provides a library for creating interactive and visually appealing charts, enhancing data visualization capabilities

- UI/UX Design Tools:

  - Utilize design tools like **excalidraw** for creating wireframes, and UI mockups.

- Backend Framework:

  - **Express.js** (**Node.js**) with **knex** for database operations.

- Database:

  - Use a relational database **MySQL** for goals and tasks information, procrastinations logs.

- Project Managment:
  - **Jira**: Tracks task progress and manages branch names with Kanban.

### APIs

<!-- List any external sources of data that will be used in your app. -->

- No external APIs will be used for the first sprint

### Sitemap

<!-- List the pages of your app with brief descriptions. You can show this visually, or write it out. -->

- Header

  - Procket Logo
  - Navbar: Home, Goals, tasks, Statistics

- Home Page

  - Daily Mood Tracker (Future Future)
  - Create New Goal, New Task
  - Ongoing Tasks
  - Past Tasks

- Goals Page

  - List of Created Goal
    - Navigation to Goal Details page (Forward Arrow)
    - Goal Description
    - Start and End Dates
    - Progress %
    - Delete Action
  - Create New Goal
  - Rocket Collection

- Goal Details page

  - Navigation to Goals Pages (Back Arrow)
  - Edit Goal Description, Start and End Dates, Progress
  - Create New Task
  - List of Associated Tasks
    - Task Description
    - Due Dates
    - Done, Postpone, Delete Action

- Tasks Page
  - Create New Task
  - List of Created Goal
    - Navigation to Task Details page (Forward Arrow)
    - Task Description
    - Related Goals
      - Navigation to Related Goal Detail page (Clickable Link)
    - Due Date
    - Done/Postpone Action
    - Delete Action
- Task Details Page

  - Navigation to Tasks Pages (Back Arrow)
  - Edit Task Description, Due Dates
  - Done Action
  - Postpone Action and Create New Procrastination with new due date
  - List of Associated Procrastinations
    - Procrastination reason
    - Created at Date
    - Delete Action

- Statistics Page
  - Procrastination Distribution
    - Pie Chart displaying total count of each procrastination reasons
  - Goals Procrastination Analysis
    - Line Chart displaying patterns of procrastination reasons
  - Per Goal Procrastination Analysis
    - Column Chart displaying count of procrastination reasons of each goal
  - Goals Progress Analysis
    - Bar Chart displaying patterns of progress

### Mockups

#### Home Page

![](./src/assets/images/home-page.png)

#### Create Goal Page

![](./src/assets/images/create-your-goal.png)

#### Goals Page

![](./src/assets/images/goals-page.png)

#### Task Details Page

![](./src/assets/images/a-task.png)

#### Stats Page

![](./src/assets/images/stats-page.png)

#### Delete Goal Popup Modal

![](./src/assets/images/delete-goal.png)

### Data

<!-- Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.  -->

![](./src/assets/images/sql-diagram.png)

### Endpoints

<!-- List endpoints that your server will implement, including HTTP methods, parameters, and example responses. -->

**Base URL**

- http://localhost:5001/api

**GET /goals**

- Retrieve all goals sorted by ascending progress percentage, starting with lower progress goals followed by higher progress goals.
- Response:
  - Status Code: 200 OK
  - Body:
    ```
    [
        {
            "id": 3,
            "description": "Learn French",
            "start_date": "2024-03-01",
            "end_date": "2024-03-31",
            "progress": 0,
            "procastinations": 2
        },
        {
            "id": 2,
            "description": "Read 5 books",
            "start_date": "2024-03-01",
            "end_date": "2024-03-31",
            "progress": 40,
            "procastinations": 5
        }
    ]
    ```

<!-- **POST /goals**

- Create a new goal with following parameters:
  - description (string): Description of the goal.
  - frequency (string): Frequency of working on the goal (e.g., daily, weekly, monthly).
  - startDate (date): Start date of the goal.
  - endDate (date, optional): End date of the goal (nullable for ongoing goals).
  - plannedCommitment (string): Planned commitment level towards the goal.
- Request Body:
  {
  "description": "Read 10 books by the end of the year",
  "frequency": "Yearly",
  "startDate": "2024-01-01",
  "endDate": "2024-12-31",
  "plannedCommitment": "Medium"
  }
- Response:
  - Status Code: 201 OK
  - Body:
    ```
    {
        "goalId": 3,
        "description": "Read 10 books by the end of the year",
        "frequency": "Yearly",
        "startDate": "2024-01-01",
        "endDate": "2024-12-31",
        "completionStatus": false,
        "plannedCommitment": "Medium"
    }
    ``` -->

**GET /goals/{goalId}**

- Retrieve a specific goal with given goalId like 1.
- Response:
    - Status Code: 200 Created
     - Body:
        ```
        {
            "id": 1,
            "description": "Finish Procket project",
            "start_date": "2024-03-18",
            "end_date": "2024-04-06",
            "progress": 66.67
        }
        ```

<!-- **PUT /goals/{goalId}**

- Update an existing goal with following parameters:
  - goalId (integer): Identifier of the goal to update.
  - Any goal attributes to update.
- Request Body: (Attributes to update)
  ```
  {
      "description": "Read 15 books by the end of the year",
      "plannedCommitment": "High"
  }
  ```
- Response:
  - Status Code: 200 OK
  - Body:
    ```
    {
        "goalId": 3,
        "description": "Read 10 books by the end of the year",
        "frequency": "Yearly",
        "startDate": "2024-01-01",
        "endDate": "2024-12-31",
        "completionStatus": false,
        "plannedCommitment": "Medium"
    }
    ``` -->

**DELETE /goals/{goalId}**

- Delete a goal with following parameters:
  - goalId (integer): Identifier of the goal to delete.
- Response:
    - Status Code: 204 No Content

**GET /goals/{goalId}/tasks**

- Retrieve all procrastinations coont associated with a specific goal (goalId: 1).
- Response:
  - Status Code: 200 OK
  - Body:
    ```
    [
        {
            "id": 7,
            "goal_id": 1,
            "description": "Implement authentication feature",
            "is_completed": 0,
            "due_date": "2024-04-01",
            "procastinations": 3
        },
        {
            "id": 1,
            "goal_id": 1,
            "description": "Complete frontend development",
            "is_completed": 1,
            "due_date": "2024-04-06",
            "procastinations": 3
        }
    ]
    ```

**GET /goals/{goalId}/procrastinations**

- Retrieve all procrastinations associated with a specific goal (goalId: 1), sorted by ascending due date. Upcoming due dates are displayed first, followed by past ones.
- Response:
  - Status Code: 200 OK
  - Body:
    ```
    {
        "No rush, plenty of time": 1,
        "Forgetting": 3,
        "Not being in the mood": 1,
        "Delaying one task to perfect another": 1,
        "Sickness or poor health": 1
    }
    ```


**GET /tasks**

- Retrieve all tasks sorted by ascending due date, starting with upcoming tasks followed by past ones.
- Response:
  - Status Code: 200 OK
  - Body:
    ```
    [
        {
            "id": 11,
            "goal_id": 3,
            "goal_description": "Learn French",
            "description": "Watch French movies with subtitles",
            "is_completed": 0,
            "due_date": "2024-03-20"
        },
        {
            "id": 8,
            "goal_id": 2,
            "goal_description": "Read 5 books",
            "description": "Read 'The Great Gatsby' by F. Scott Fitzgerald",
            "is_completed": 0,
            "due_date": "2024-03-25"
        },
    ]
    ```
<!-- **POST /tasks**

- Create a new goal with following parameters:
  - description (string): Description of the goal.
  - frequency (string): Frequency of working on the goal (e.g., daily, weekly, monthly).
  - startDate (date): Start date of the goal.
  - endDate (date, optional): End date of the goal (nullable for ongoing goals).
  - plannedCommitment (string): Planned commitment level towards the goal.
- Request Body:
  {
  "description": "Read 10 books by the end of the year",
  "frequency": "Yearly",
  "startDate": "2024-01-01",
  "endDate": "2024-12-31",
  "plannedCommitment": "Medium"
  }
- Response:
  - Status Code: 201 OK
  - Body:
    ```
    {
        "goalId": 3,
        "description": "Read 10 books by the end of the year",
        "frequency": "Yearly",
        "startDate": "2024-01-01",
        "endDate": "2024-12-31",
        "completionStatus": false,
        "plannedCommitment": "Medium"
    }
    ``` -->

**GET /tasks/past**

- Retrieve all tasks which is later than todaypast ones..
- Response:
    - Status Code: 200 OK
     - Body:
        ```
        {
            "id": 11,
            "goal_id": 3,
            "goal_description": "Learn French",
            "description": "Watch French movies with subtitles",
            "is_completed": 0,
            "due_date": "2024-03-20"
        },
        {
            "id": 8,
            "goal_id": 2,
            "goal_description": "Read 5 books",
            "description": "Read 'The Great Gatsby' by F. Scott Fitzgerald",
            "is_completed": 0,
            "due_date": "2024-03-25"
        },
        ```

**GET /tasks/ongoing**

- Retrieve a specific goal with given goalId like 1.
- Response:
    - Status Code: 200 Created
     - Body:
        ```
        {
            "id": 1,
            "description": "Finish Procket project",
            "start_date": "2024-03-18",
            "end_date": "2024-04-06",
            "progress": 66.67
        }
        ```


**GET /tasks/{taskId}**

- Retrieve a specific goal with given goalId like 1.
- Response:
    - Status Code: 200 Created
     - Body:
        ```
        {
            "id": 1,
            "description": "Finish Procket project",
            "start_date": "2024-03-18",
            "end_date": "2024-04-06",
            "progress": 66.67
        }
        ```

<!-- **PUT /tasks/{taskId}**

- Update an existing task with following parameters:
  - taskId (integer): Identifier of the task to update.
  - Any task attributes to update except for _created_at_ and _updated_at_.
- Request Body: (Attributes to update)
  ```
  {
      "description": "Research market trends",
      "goalId": 2,
      "date": "2024-03-23",
      "completionStatus": false,
      "procrastinationReason": null,
      "mood": null
  }
  ```
- Response:
  - Status Code: 200 OK
  - Body:
    ```
    {
        "taskId": 3,
        "description": "Research market trends",
        "goalId": 2,
        "date": "2024-03-23",
        "completionStatus": false,
        "procrastinationReason": null,
        "mood": null
    }
    ``` -->

**DELETE /tasks/{taskId}**

- Delete a task with following parameters: - taskId (integer): Identifier of the task to delete.
  -Response: - Status Code: 204 No Content

**GET /moods**

- Retrieve all daily moods.
- Response:
  - Status Code: 200 OK
  - Body:
    ```
    [
        {
            "moodId": 1,
            "mood": "Happy"
            "created_at": "2024-03-01"
        },
        {
            "moodId": 2,
            "mood": "Sad",
            "created_at": "2024-03-02"
        }
    ]
    ```

**POST /goals**

- Create a new daily mood with following parameters:
  - mood (string): Title of the mood.
- Request Body:
  ```
  {
      "mood": "Happy"
  }
  ```
- Response:
  - Status Code: 201 Created
  - Body:
    ```
    {
        "moodId": 3,
        "mood": "Happy",
        created_at: "2024-03-03"
    }
    ```

### Error Handling:

The API should provide thorough error handling to guide developers in correcting issues encountered during requests.
For invalid requests or missing parameters, the API will respond with a status code of 400 Bad Request, accompanied by detailed error messages explaining the reason for the failure.
In cases where the requested resource cannot be found, such as attempting to update or delete a nonexistent task or goal, the API will return a status code of 404 Not Found.
Error responses will be designed to be informative, aiding developers in understanding and rectifying the encountered issues effectively.

### Auth

<!-- Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented. -->

No, the project does not include any login or user profile functionality. Authentication and authorization features are not implemented in this version of the app.

## Roadmap

<!-- Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build. -->

- Setup Development Environment

  - Initialize React project with necessary dependencies and folder structure
  - Set up routing for different pages
  - Create basic boilerplate pages for Home, Task Creation, Mood Tracking Procrastination Analysis, Progress Graphs, and Daily To-Do List

- Set up backend server

  - Initialize Express.js project with routing and middleware setup
    Create placeholder routes with mock responses for tasks and goals endpoints

- Database setup
  - Design the database schema for storing tasks, goals, and user data
  - Set up PostgreSQL or MySQL database with necessary tables and relationships
  - Set up migrations for database changes.
  - Generate seeds with sample data.
- Implement CRUD operations for tasks and goals

  - Create endpoints for retrieving, creating, updating, and deleting goals and tasks
  - Implement error handling and status codes for each endpoint to handle invalid requests or missing parameters

- Data visualization

  - Integrate data visualization libraries such as Chart.js to create interactive graphs and charts for visualizing progress, procrastination patterns, and mood trends
  - Design and implement UI components for displaying visualizations

- Frontend Feature Branches:

  - task-creation-page:

    - Implement UI components and functionality for creating tasks.
    - Includes form inputs for task description, goals, start/end dates, and reminders.

  - mood-tracking-page:

    - Develop UI components and logic for logging daily mood.
    - Implement mood selection options and store mood data.

  - procrastination-analysis-page:

    - Integrate data visualization libraries to display procrastination patterns.
    - Create UI components to visualize procrastination trends over time.

  - progress-graphs-page:

    - Implement UI components for displaying progress graphs.
    - Utilize Chart.js or similar libraries to visualize task completion and goal progress.

  - daily-to-do-list-page:

    - Develop UI components for generating daily to-do lists.
    - Display tasks based on predefined goals and priorities.

  - time-management

    - Implement time management features such as setting task timeframes and customizing Pomodoro sessions.
    - Integrate React components for managing countdowns and Pomodoro sessions effectively.

  - visual-progress-tracking:
    - Develop UI components for visual progress tracking using a rocket assembly metaphor.
    - Implement visual elements to symbolize task completion and progress towards goals.

- Backend Feature Branches:

  - task-endpoints:

    - Implement CRUD operations for tasks endpoints (/tasks).
    - Develop controllers and services for retrieving, creating, updating, and deleting tasks.

  - goal-endpoints:

    - Implement CRUD operations for goals endpoints (/goals).
    - Create controllers and services for managing goals data.

  - data-visualization:

    - Set up routes and controllers for retrieving data for visualization.
    - Ensure data retrieval endpoints are optimized for efficient visualization rendering.

  - error-handling:

    - Implement error handling middleware to handle invalid requests and internal server errors.
    - Ensure consistent error responses are returned for different scenarios.

  - database-setup:

    - Set up database connections and migrations for creating tables and relationships.
    - Ensure database schema aligns with application requirements.

  - integration-testing:

    - Write integration tests for endpoints to ensure proper functionality and data integrity.
    - Test CRUD operations and error handling scenarios.

  - deployment-setup:
    - Configure deployment settings for deploying the backend server.
    - Choose a suitable hosting platform and set up deployment pipelines if applicable.

- Bug fixes

- DEMO DAY

## Nice-to-haves

<!-- Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing. -->

- About Us Page:

  - Create an About Us page providing a clear and concise description of the insight behind the app. Explain the facts about procrastination and how the app approaches solving it, helping users understand the purpose and mission of the app.

- Mood Tracking:

  - Users can log their mood daily to correlate emotional states with productivity levels.

- Time Management:

  - Set timeframes for tasks inaddition to date and display tasks in a timeline frame.

- Prioritize Tasks and goals with flag:

  - Display tasks and goals based on the priority to facilitate planning.

- Sort functionality :

  - Sort goals and task in tables.

- Search functionality :

  - Find spesific keyword or date in all pages.

- Reminder :

  - .

- Color Theme:

  - Implement a customizable theme option for the app's interface, providing users with a visually appealing alternative.

- Authentication and User Profile:

  - Integrate authentication functionality to allow users to create accounts, log in securely, and manage their profiles. This feature enhances security and personalization within the app.

- Pomodoro Technique Page:

  - Create a dedicated Pomodoro page where users can utilize the Pomodoro technique to enhance their productivity. This feature includes timers for work periods and breaks, helping users stay focused and manage their time effectively.

- Independent Tasks:

  - Enable users to add independent tasks that are not related to specific goals. Upon completing these tasks, visualize their achievement with a dart icon 🎯, providing a sense of accomplishment and progress.

- Calendar View:

  - Implement a calendar view displaying scheduled tasks, deadlines, and events.
    This feature allows users to visualize their plans and manage their schedules effectively, enhancing organization and productivity.

- Goal Planning and Realistic Expectations:
  - Provide guidance on setting realistic goals and managing expectations based on the user's history of procrastination and productivity. Utilize insights from the app's analytics to offer personalized recommendations, helping users overcome perfectionism and stress.
