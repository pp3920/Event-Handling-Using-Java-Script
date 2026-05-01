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

Answer ) I used call back function for this
