# Intern Interview Test

This test involves a simple to-do list application that allows you to add, delete, and complete tasks.

The candidate has 3 tasks to accomplish:

1. Understand why this code logs something to the console on every render.

```ts
const completedTasks = tasks.filter((task) => task.completed === true)

useEffect(() => {
  console.log('%cTarefa concluida', 'background: green; color: white')
}, [completedTasks, tasks, taskInput])
```

2. Solve the toggle logic to mark tasks as completed or incomplete.

```ts
const toggle = (index: number) => {
  const newTasks = [...tasks]
  newTasks[index].completed = true
  setTasks(newTasks)
}
```

3. Fix the logic for deleting a task.

```ts
const deleteTask = (index: number) => {
  setTasks(tasks.filter((_, i) => i !== index + 1))
}
```
