# js-todo-app
The Git repository contains a project that implements a to-do list application using HTML, CSS, and JavaScript. The application allows users to add, view, and manage their tasks dynamically.
The user interface consists of a navigation bar with three tabs: "All", "Active", and "Completed". The "All" tab displays all tasks, the "Active" tab shows only active tasks (unchecked), and the "Completed" tab displays only completed tasks (checked).

Users can add new tasks by entering a description in the input field and clicking the "Add" button. The tasks are displayed as list items with checkboxes and labels. Checked tasks have a line-through text decoration, indicating completion. The tasks can be marked as complete or active by toggling the checkboxes.

The application includes functionality for filtering tasks based on their status. Clicking the "Active" tab shows only active tasks, and clicking the "Completed" tab displays only completed tasks. The "All" tab shows all tasks.

Users can delete individual tasks by clicking the trash icon next to each task. The application also provides an option to delete all completed tasks at once by clicking the "Delete All" button, which appears when one or more completed tasks are present.

The application utilizes the localStorage API to store tasks locally, ensuring persistence across page reloads. The tasks are stored as an array of objects, where each object represents a task with properties such as the task description and completion status.

The repository provides a functional and intuitive to-do list application that can be easily customized or integrated into other projects. Developers can refer to the code and styles in the repository to understand how to build similar task management functionality in their own web applications.

Overall, the repository offers a comprehensive solution for managing tasks in a to-do list application, providing users with the ability to add, view, and manipulate tasks with ease.
feat:update css and add responsive
