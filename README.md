<div align="center">
  <img alt="Logo" src="./src/assets/images/logo.png" width="100" />
</div>
<h1 align="center">
  Procket: Procrastinating Rocket
</h1>

<p align="center">
Welcome to my capstone project, a productivity planning app with advanced procrastination analytics!<br> Developed in just 3 weeks with DRY code, this app empowers users to overcome procrastination and boost productivity. Easily create, delete, and postpone tasks with built-in validation. Enjoy fun visual rewards like rocket launches and collections. Dive into detailed progress and procrastination analysis for valuable productivity insights.

<p align="center">
  Visit Procket at
  <a href="https://procket.vercel.app/" target="_blank">procket.vercel.app</a>
<br><br>
  <a href="https://youtu.be/qGcFhspL_vE?si=mNbLBiWgb5z53L7y" target="_blank"><strong>➥ Live Demo</strong></a> 
  <a href="https://youtu.be/Dn2GVzKBy1E?si=qXXZ-lpGtDYLc8IY" target="_blank"><strong>➥ Presentation</strong></a>
</p>
<p align="center">
  Built as a fully-responsive React-based SPA and hosted with Vercel.<br><br>
  <a href="https://reactjs.org/" target="_blank">
    <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white" alt="React Badge" />
  </a>
   <a href="https://nodejs.org/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-%23339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge" />
  </a>
  <a href="https://vercel.com/" target="_blank">
    <img src="https://img.shields.io/badge/Vercel-%23000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Badge" />
</a>
</p>

## Table of Contents

- [Setup and Running](#setup-and-running)
- [Problem](#problem)
- [User Profile](#user-profile)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Sitemap](#sitemap)
- [Mockups](#mockups)
- [Roadmap](#roadmap)
- [Takeaways and Improvements](#takeaways-and-improvements)
- [Resources](#resources)
- [Feedback and Support](#takeaways-and-improvements)

## Setup and Running

- Clone the frontend repository, behina-bahramsari-procket:
- 
   ```bash
   git clone https://github.com/BehinaBhr/behina-bahramsari-procket-api.git
   ``` 
- Install dependencies:
  
   ```bash
   npm install
   ```
- Start the frontend of application:
 
   ```bash
   npm start
   ```

## Problem

Procrastination is a common challenge for many people, leading to missed deadlines, unmet goals, and increased stress. Existing planning apps often lack insights into why tasks are delayed or abandoned, making it difficult for users to improve their productivity.

Procrastination affects up to 20% of the adult population in the United States, leading to decreased productivity, missed deadlines, and increased stress levels (American Psychological Association, APA). Research conducted by Steel and Klingsieck in 2016 has shown that procrastination is associated with poorer performance and well-being outcomes, with individuals experiencing higher levels of stress and anxiety due to the uncertainty and pressure of impending deadlines. Moreover, Pychyl and Flett's study in 2012 suggests that procrastination is often linked to a fear of failure and perfectionism, leading individuals to delay tasks out of concern for not meeting their own high standards or fear of the consequences of potential failure.

Interventions targeting procrastination have been shown to be effective in improving productivity and well-being. Sirois and Pychyl's study in 2013 demonstrated that strategies such as goal setting, time management techniques, and self-monitoring can lead to a reduction in procrastination behavior and improved academic performance. Additionally, incorporating elements of gamification into productivity apps has been found to enhance user engagement and motivation. By turning task completion into a rewarding and visually appealing experience, users are more likely to stay committed to their goals and persist in their efforts to overcome procrastination.

Procket integrates these effective strategies into its design by providing users with customizable goal-setting tools, time management features, and visual progress tracking. By gamifying the task completion process with the metaphor of assembling a rocket, users are incentivized to stay on track and take consistent action towards their goals. Additionally, Procket offers insights into procrastination patterns through advanced analytics, empowering users to identify and address underlying causes of procrastination. By understanding their habits and triggers, users can develop effective strategies to overcome procrastination and maintain momentum towards their goals. Overall, Procket's comprehensive approach to addressing procrastination combines evidence-based strategies with engaging design elements to provide users with an effective solution for improving productivity and achieving their goals."

## User Profile

Procket is for anyone looking to enhance their productivity and better understand their procrastination habits. Users will create tasks, set goals, track their moods, and analyze procrastination patterns to optimize their planning strategies. The app must consider users' varying levels of tech-savviness and preferences for visual feedback to ensure accessibility and engagement.

## Features

- Goal and Task Creation:

  - Users can create goals with start and end dates and also create associated tasks with specific due dates.

- Goal and Task Management:

  - Users can edit and delete goals also create associated tasks with specific due dates.

- Task Completion:

  - Users can mark tasks as done with checkboxes also revert them.

- Task Postpone with reason :

  - Users can postpone a task by providing a reason and a new due date.

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

## Tech Stack

- Frontend Framework:

  - **React.js**
  - **react-router**
  - **axios**

- UI Components and Data Visualization:

  - **Input Type Date** - Utilizes HTML input types for selecting dates, offering native support and familiarity for users.
  - **React Google Charts** - Provides a library for creating interactive and visually appealing charts, enhancing data visualization capabilities

- UI/UX Design Tools:
  - Utilize design tools like **excalidraw** for creating wireframes, and UI mockups.

- Project Management:
  - **Jira**: Tracks task progress and manages branch names with Kanban.

- APIs:
  - No external APIs will be used for the first sprint.
    
- Auth
  - the project does not include any login or user profile functionality. Authentication and authorization features are not implemented in the first sprint.

## Sitemap

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
  - Postpone Action and Create New Procrastination with a new due date
  - List of Associated Procrastinations
    - Procrastination reason
    - Created at Date
    - Delete Action

- Statistics Page

  - Procrastination Distribution
    - Pie Chart displaying the total count of each procrastination reasons
  - Goals Procrastination Analysis
    - Line Chart displaying patterns of procrastination reasons
  - Per Goal Procrastination Analysis
    - Column Chart displaying the count of procrastination reasons for each goal
  - Goals Progress Analysis
    - Bar Chart displaying patterns of progress

- Footer

  - copyright message
  - about us (Future Future)

## Mockups

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


## Roadmap

- Jira for this project explains the roadmap with more details:

  - [Jira Procket](https://procket.atlassian.net/jira/software/projects/PRO/boards/1/backlog?atlOrigin=eyJpIjoiZjJkNWRiYzdmOTg1NDRkM2IxZGYwMDViZjE2NDVjNDYiLCJwIjoiaiJ9)

- Setup frontend

  - Initialize the React project with the necessary dependencies and folder structure
  - Set up routing and basic boilerplate for different pages

- Setup backend server

  - Initialize Express.js project with routing and middleware setup
  - Create placeholder routes with mock responses for tasks and goals endpoints

- Setup Database

  - Design the database schema for tasks, goals, procrastinations
  - Set up MySQL database with necessary tables and relationships
  - Set up migrations with Knex
  - Generate seeds with sample data
  - Implement CRUD operations = Create endpoints for retrieving, creating, updating, and deleting in each controller and route

- Setup Backend Endpoints

  - GET /goals
    - Retrieve all goals sorted by ascending progress percentage used in the Goals page.
  - POST /goals
    - Create a new goal used in the New Goal page.
  - GET /goals/{goalId}
    - Retrieve a specific goal used in the Goal Details page.
  - PUT /goals/{goalId}
    - Update an existing goal used in the Edit Goal page.
  - DELETE /goals/{goalId}
    - Delete a goal.
  - GET /goals/{goalId}/tasks
    - Retrieve all tasks associated with a specific goal used in the Goal Details page.
  - GET /goals/{goalId}/procrastinations
    - Retrieve all procrastinations associated with a specific goal used in the Stats page.
  - GET /tasks
    - Retrieve all tasks sorted by ascending due date used in Tasks.
  - POST /tasks
    - Create a new task used in the New Task page.
  - GET /tasks/{taskId}
    - Retrieve a specific task used in the Task Details page.
  - PUT /tasks/{taskId}
    - Update an existing task used in the Edit Task page.
  - DELETE /tasks/{taskId}
    - Delete a task.
  - GET /tasks/{taskId}/procrastinations
    - Retrieve all procrastinations associated with a specific task used in the Stats page.
  - POST /procrastinations
    - Create a new procrastination used in the Task Details page.
  - GET /procrastinations/grouped
    - Retrieve all procrastination reason counts used on the Stats page.
  - DELETE /procrastinations/{procrastinationId}
    - Delete a procrastination.

- Setup Backend Validators

  - Goals validator
    - Validate Required Fields
      - Ensure the presence of required fields (description, start_date, and end_date) in the request body.
      - If any of these fields are missing or empty, it returns a 400 status code with a corresponding error message.
    - Prevents Duplicate Goals:
      - if a goal with the same description, start date, and end date already exists in the database:
        - If it does and the validation is for an update operation, it allows the update.
        - For creating a new goal, return a 409 status code indicating a conflict.
  - Tasks validator
    - Validate Required Fields
      - Ensure the presence of required fields (description and due date) in the request body.
      - If any of these fields are missing or empty, return a 400 status code with a corresponding error message.
    - Check Goal Existence:
      - Verify if the specified goal_id exists in the database.
      - If the goal does not exist, return a 404 status code with an error message.
    - Prevent Duplicate Tasks:
      - Check if a task with the same description and due date already exists for the specified goal_id.
      - If it exists:
        - For update operations, allow the update.
        - For creating a new task, return a 409 status code indicating a conflict.
    - Validate Due Date:
      - Ensure that the due date of the task falls within the start and end dates of the associated goal.
      - If the due date is outside the goal's timeframe, return a 400 status code with an error message.

- Feature: Header

  - Implement header component with Procket logo and navigation bar
  - Link navigation bar items to corresponding pages

- Feature: Footer

  - Implement copyright message
  - Implement a link to the About Us page (Future Feature)

- Feature: Task Details Page

  - Implement navigation back to the Tasks Page
  - Enable editing of task description and due dates:
    - Implement forms and UI elements for editing task details
    - Implement API calls to update task details in the backend
  - Implement actions for marking tasks as done, postponing which follow by creating new procrastination with new due date:
    - Add UI elements/buttons for marking tasks as done, postponing
    - Implement corresponding API calls to update task status and create new procrastinations in the backend
  - Display a list of associated procrastinations with action for deletion:
    - Fetch and display procrastinations associated with the current task
    - Provide options for deleting procrastinations from the UI

- Feature: Tasks Page

  - Implement the creation of new tasks:
    - Create a form for adding new tasks
    - Implement API calls to create new tasks in the backend
  - Display list of created tasks:
    - Implement API call to fetch tasks data from the backend
    - Display tasks in a list/grid format
  - Implement navigation to task details page:
    - Add a clickable forward arrow to each task item that leads to the task details page
  - Display associated goals with navigation links:
    - Display goals associated with each task as clickable links that lead to the goal details page
  - Implement actions for marking tasks as done, postponing, and deleting:
    - Add UI buttons for marking tasks as done, postponing, deleting
    - Implement corresponding API calls to update task status and delete tasks in the backend

- Feature: Goal Details Page

  - Implement navigation back to the Goals Page
  - Enable editing of goal description, start and end dates:
    - Implement forms and UI elements for editing goal details
    - Implement API calls to update goal details in the backend
  - Implement the creation of new tasks associated with the goal:
    - Create a form for adding new tasks associated with the current goal
    - Implement API calls to create new tasks associated with the goal in the backend
  - Display a list of associated tasks with actions for marking tasks as done, postponing, and deletion:
    - Fetch and display tasks associated with the current goal
    - Provide action buttons from the UI
  - Display visual goal completion to award 100% progress:
    - Develop UI animation to enhance user experience with smooth transitions and responsive on all devices
    - Implement visual elements to symbolize task completion rocket assembly
    - Award goals completion as successfully launching the rocket

- Feature: Goals page

  - Display list of created goals:
    - Implement API call to fetch goals data from the backend
    - Display all created goals in a table sorted by their progress with delete action functionality.
  - Implement navigation to the goal details page:
    - Add a clickable forward arrow to each goal item that leads to the goal details page
  - Design and implement the creation of new goals:
    - Create a form for adding new goals with validation
    - Implement API calls to create new goals in the backend
  - Implement rocket collection:
    - Display collected rocket images based on the user's completed goals

- Feature: Stats page

  - Implement Procrastination Distribution with a pie chart displaying the total count of each procrastination reason:
    - Integrate data visualization Google React chart library to render the pie chart
    - Fetch data from the backend and format it for the pie chart
  - Implement Goals Procrastination Analysis with a line chart displaying patterns of procrastination reasons:
    - Integrate data visualization Google React chart library to render the line chart
    - Fetch data from the backend and format it for the line chart
  - Implement Goal Procrastination Analysis with a column chart displaying the count of procrastination reasons for each goal:
    - Integrate data visualization Google React chart library to render the column chart
    - Fetch data from the backend and format it for the column chart
  - Implement Goals Progress Analysis with a bar chart displaying patterns of progress:
    - Integrate data visualization Google React chart library to render the bar chart
    - Fetch data from the backend and format it for the bar chart

- Feature: Home Page

  - Design UI for Daily Mood Tracker (Future Feature)
  - Implement functionality to create new goals and tasks:
    - Implement forms for adding new goals and tasks
    - by using POST /goals and POST /tasks
  - Fetch and display ongoing and past tasks:

    - Implement API calls to fetch ongoing and past tasks data from the backend
    - Display ongoing and past tasks sorted by their due date without showing the completed ones

  - tasks-endpoints:

    - Implement CRUD operations for tasks endpoints (/tasks).
    - Develop controllers and services for retrieving, creating, updating, and deleting tasks.

  - goals-endpoints:

    - Implement CRUD operations for goals endpoints (/goals).
    - Create controllers and services for managing goals data.

  - data-visualization:

    - Set up routes and controllers for retrieving data for visualization.
    - Ensure data retrieval endpoints are optimized for efficient visualization rendering.

  - error-handling:

    - Implement error-handling middleware to handle invalid requests and internal server errors.
    - Ensure consistent error responses are returned for different scenarios.

  - Implement validation for each endpoint to handle valid response and request
  - Implement error handling and status codes for each endpoint to handle invalid requests or missing parameters

- Bug fixes

- DEMO DAY

- Deployment
  
- Enhance User Experience
  - Make the application a real product with user integration
  - Expand Features to engage users

- Launch with Real User Engagement


## Takeaways and Improvements

From this project, I have learned about effectively managing state in React and integrating various libraries for data visualization and routing. Moving forward, I plan to enhance the app's user experience and design.

- About Us Page:

  - Create an About Us page providing a clear and concise description of the insight behind the app. Explain the facts about procrastination and how the app approaches solving it, helping users understand the purpose and mission of the app.

- Mood Tracking:

  - Users can log their mood daily to correlate emotional states with productivity levels.

- Time Management:

  - Set timeframes for tasks in addition to date and display tasks in a timeline frame.

- Prioritize Tasks and goals with flag:

  - Display tasks and goals based on the priority to facilitate planning.

- Sort functionality :

  - Sort goals and tasks in tables.

- Search functionality :

  - Find specific keywords or dates on all pages.

- Reminder :

  - Based on due dates send notifications to users to remind them of their tasks.

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

- Goal Planning and Realistic Expectations:

  - Provide guidance on setting realistic goals and managing expectations based on the user's history of procrastination and productivity. Utilize insights from the app's analytics to offer personalized recommendations, helping users overcome perfectionism and stress.

- Testing:

  - Write integration tests for endpoints to ensure proper functionality and data integrity.
  - Test CRUD operations and error-handling scenarios.

## Resources

- [Backend Repository](<https://github.com/BehinaBhr/behina-bahramsari-procket-api>)

## Feedback and Support

Whether you have ideas to share, suggestions for improvement, or questions about the project, I'd love to hear from you! Your feedback is incredibly valuable to me.

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jayraj-roshan/)](https://www.linkedin.com/in/behinabahramsari/) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mail@jayrajroshan1@gmail.com)](mailto:mail@behinabahramsari@gmail.com) 
[![Instagram Badge](https://img.shields.io/badge/-Instagram-e4405f?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/roshanjayraj/)](https://www.instagram.com/be_bhr/) 
![Portfolio Icon](https://img.icons8.com/ios/20/portfolio.png)[![Portfolio Badge](https://img.shields.io/badge/Portfolio-%23ffffff?style=flat-square)](https://behinabhr.github.io/)
