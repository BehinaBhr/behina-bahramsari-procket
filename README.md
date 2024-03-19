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
- Task Creation:
    - Users can create tasks with customizable goals, durations, and reminders.

- Mood Tracking:
    - Users can log their mood daily to correlate emotional states with productivity levels.

- Procrastination Analysis:
    - Advanced analytics provide insights into procrastination patterns over time.

- Progress Graphs:
    - Visualize progress and procrastination trends to make informed planning decisions.

- Daily To-Do List:
    - Generate a daily list of tasks based on predefined goals and priorities.

- Time Management:
    - Set timeframes for tasks and customize Pomodoro sessions for efficient work periods.

- Task Completion:
    - Users can mark tasks as done with checkboxes and provide reasons for any incomplete tasks.

- Prioritize Remaining Tasks:
    vDisplay tasks remaining from previous days to facilitate daily planning.

- Visual Progress Tracking:
    - Rocket assembly metaphor for task completion, visually symbolizing progress towards goals.<br />
    *Procket's visual design aims to reinforce its mission of overcoming procrastination and achieving goals by incorporating imagery of assembling a rocket. Users will encounter a visually engaging interface where completing tasks is represented as assembling small parts of a rocket. Each task completed represents fitting another piece into the rocket body, visually symbolizing progress towards the user's goal. Additionally, upcoming tasks will be visualized as small steps leading to the rocket's launch, reinforcing the idea that commitment to completing these tasks propels the user closer to their target. This visual metaphor serves as a constant reminder of the journey towards productivity and goal achievement, inspiring users to stay committed and focused on their tasks.*


## Implementation
### Tech Stack
<!-- List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations. -->
- Frontend Framework:
    - **React.js**
    - **react-router**
    - **axios**

- Data Visualization:
    - **Chart.js** - A versatile charting library for creating interactive and customizable charts to visualize progress, procrastination patterns, and mood trends.
    - **React Charts** - Provides React components for integrating Chart.js with React applications, offering seamless integration and enhanced flexibility.
    - **React Circular Progressbar** - Offers customizable circular progress bars for visualizing task completion and goal progress.

- UI Components:
    - **React Slider** - Allows users to set custom timeframes for tasks or adjust settings with intuitive slider components.
    - **React Calendar** - Provides a calendar component for scheduling tasks, setting deadlines, and planning events.
    - **Input Type Date** - Utilizes HTML input types for selecting dates, offering native support and familiarity for users.
    - **Date Range Picker** - Enables users to select date ranges for planning tasks and analyzing productivity over specific time periods.
    - **React Date Picker** - Offers a user-friendly date picker component with customizable options for selecting dates and timeframes.

- UI/UX Design Tools: 
    - Utilize design tools like **Figma** or **excalidraw** for creating wireframes, and UI mockups.

- Backend Framework:
    - **Express.js** (**Node.js**) with **knex**

- Database:
    - Use a relational database like **PostgreSQL** or **MySQL** for storing user data, task information, mood logs, and analytics.

- Authentication:
    - **JSON Web Tokens (JWT)**: A compact, URL-safe means of representing claims to be transferred between two parties, commonly used for secure authentication and authorization.

- Testing:
    **Jest**: A JavaScript testing framework developed by Facebook for unit testing React applications, providing a simple and intuitive testing experience.
    **React Testing Library**: A testing utility for React that encourages best practices for testing user interfaces, focusing on testing components in a way that simulates user behavior.
### APIs
<!-- List any external sources of data that will be used in your app. -->
- No external APIs will be used for the first sprint
