Reflection Questions:


Question 1 ) How did you ensure unique keys for your list items?
Ans: I used the id field from each task as the React key:  <TaskItem key={task.id} ... />

Why this works:
id is unique for every task
It ensures React can correctly identify which items changed, added, or removed
Prevents unnecessary re-renders or UI glitches

Key consideration:
I avoided using array index because:
It can cause bugs when list order changes
It breaks React’s reconciliation logic in dynamic lists

Question 2) What considerations did you make when implementing the filtering functionality?
Answer- 
1. Stateless in child component
TaskFilter only sends filter changes upward
It does NOT store filter state itself
 2. Controlled by parent component
Parent holds actual filter state
Ensures single source of truth
3. Flexible filter structure

Question 3) How did you handle state updates for task status changes?

Answer ) We followed the principle of Immutability. In React, you should never modify the original state array directly.In handleStatusChange, we used setTasks((prev) => ... ). This ensures we are always working with the most recent version of the list.We used .map() to create a brand-new array. Inside the map, we used the Spread Operator ({ ...task, status: newStatus }). This copies all existing properties of the task but "overwrites" the status field with the new value.

Question 4) How did you handle state updates for task status changes?
The "Empty List" Challenge: One common challenge is what to show when no tasks match the filter. In a production app, you would add logic to show a "No tasks found" message; otherwise, the screen just looks broken or empty.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

 Task Management Dashboard
 A lightweight, responsive Task Management application built with React and TypeScript. This dashboard allows users to view, filter, update, and delete tasks efficiently.

Features
Task List Rendering: Displays tasks dynamically from a centralized state.
Real-time Filtering: Filter tasks based on Status (Pending, In Progress, Completed) and Priority (High, Medium, Low).
State Management: Uses React Hooks (useState) to handle complex data updates.
Immutability: Implements safe data patterns using .map() and .filter() to ensure UI consistency.
TypeScript Support: Fully typed components and props for better developer experience and fewer bugs.

Technical Logic
1. Lifting State Up
The application's "brain" is located in App.tsx. All task data and modification functions reside here and are passed down to child components via Props.

2. Immutability & Updates
Status Changes: Uses .map() to create a new array, updating only the specific task that matches the id.

Deletion: Uses .filter() to return a new array excluding the deleted task.

Derived State: filteredTasks is calculated during every render based on the current filters state, ensuring the UI is always in sync with user selections.

Component Overview

TaskItem
Responsible for the visual representation of a single task. It receives the task object and callback functions for updating and deleting.

TaskList
A structural component that maps over the tasks array. It ensures each item is assigned a unique key for optimized React rendering.

App
The root component that manages:

tasks: The main data source.

filters: An object containing the current user-selected criteria.

