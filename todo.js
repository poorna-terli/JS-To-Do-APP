
// Create a container <div> to hold the entire to-do list UI
let element = document.createElement('div');
element.id = 'todo-list';

// Apply basic visual styles to the container so it looks nicer
element.style.fontFamily = 'Arial, sans-serif';
element.style.margin = '20px';
element.style.padding = '10px'; 
element.style.backgroundColor = '#b9a1a182';
// Additional visual tweaks: rounded corners, set a fixed width,
// align text to the left, and add a subtle shadow for depth
element.style.borderRadius = '8px';
element.style.width = '300px';
element.style.textAlign = 'left';
element.style.boxShadow = '0 4px 8px rgba(109, 102, 102, 0.77)';
// Insert the container into the document body so it becomes visible
document.body.appendChild(element);
// Get references to the input field and "Add" button in the HTML.
// These elements are expected to exist in the page with the
// corresponding IDs: `todo-input` (text field) and `add-todo-btn` (button).
let inputtodo = document.getElementById('todo-input');
let addbtn = document.getElementById('add-todo-btn');

// Attach a click handler to the Add button to create a new todo item
addbtn.onclick = function() {
    // Read the current value from the input field
    let todoText = inputtodo.value;

    // Only add a new item when the input is not empty
    if (todoText !== '') {
        // Create the list item, checkbox and label just like the initial loop
        let todoitem = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        // Note: this code uses a static id string for the checkbox
        // which means multiple checkboxes will share the same id.
        checkbox.id = "checkbox";
        checkbox.style.borderRadius = '4px black';

        // Label tied to the checkbox so clicking the text toggles it
        let label = document.createElement('label');
        label.setAttribute('for', "checkbox");
        label.textContent = todoText;

        // Assemble and append the new item to the existing list
        todoitem.appendChild(checkbox);
        todoitem.appendChild(label);
        todoorder.appendChild(todoitem);
    }
}
// Create a header for the to-do list and add it to the container
let todoheader = document.createElement('h1');
todoheader.textContent = 'My To-Do List';
element.appendChild(todoheader);

// Create an ordered (actually an unordered) list element to hold items
let todoorder = document.createElement('ul');
// Add a CSS class so styles can target the list if needed
todoorder.classList.add('todo-order');
element.appendChild(todoorder);

// An array of initial to-do item strings that will populate the list
let todos = ['Learn React', 'Build a To-Do App', 'Master JavaScript'];

// Loop over the `todos` array and create a list item for each entry
for (let i = 0; i < todos.length; i++) {
    // Current todo text
    let todo = todos[i];

    // Create the list item element that will contain checkbox + label
    let todoitem = document.createElement('li');

    // Create a checkbox input so user can mark the item complete
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // Give each checkbox a unique id so its label can reference it
    checkbox.id = "checkbox";

    // Create a label tied to the checkbox for accessible clicking
    let label = document.createElement('label');
    label.setAttribute('for', "checkbox");
    label.textContent = todo; // show the todo text inside the label

    // Assemble: put checkbox and label into the list item
    todoitem.appendChild(checkbox);
    todoitem.appendChild(label);

    // Add the completed list item to the visible list in the DOM
    todoorder.appendChild(todoitem);
}
