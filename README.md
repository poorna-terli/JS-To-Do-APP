Problem, fix, and sample output

Problem
- The original `todo.js` used `createElement(...)` instead of `document.createElement(...)`.
- In a browser this causes a runtime error: `ReferenceError: createElement is not defined` and the script stops running.
- Also many checkboxes used the same id `checkbox`, and the `ul` had an invalid `for` attribute.

What I changed
- Replaced all calls to `createElement(...)` with `document.createElement(...)`.
- Gave each checkbox a unique id (`checkbox-0`, `checkbox-1`, ...), and updated its corresponding label `for` attribute.
- Removed the incorrect `for` attribute on the `ul`.

Fixed file
- `todo.js` (already updated in this repo)

Why this fixes it
- `createElement` is not a global browser API; it must be called from `document` (or another DOM node). Using `document.createElement` creates the DOM nodes as intended.
- Unique IDs prevent label targeting collisions.

Expected output (rendered HTML produced by the script)

<div id="todo-list">
  <h1>My To-Do List</h1>
  <ul class="todo-order">
    <li><input type="checkbox" id="checkbox-0"><label for="checkbox-0">Learn React</label></li>
    <li><input type="checkbox" id="checkbox-1"><label for="checkbox-1">Build a To-Do App</label></li>
    <li><input type="checkbox" id="checkbox-2"><label for="checkbox-2">Master JavaScript</label></li>
  </ul>
</div>

How to verify locally
1. Open `todo.html` in a browser (double-click file or use a local static server).
2. Open DevTools (F12) and reload. If `todo.js` still has `createElement` you will see `ReferenceError: createElement is not defined` in console.
3. After the fix you should see the to-do list rendered on the page and no errors in the console.

Optional improvements
- Add styling in `todo.style` and include it via a `<link>` or `<style>` in `todo.html`.
- Add an input field + button to add new to-do items dynamically.

If you'd like, I can also:
- Add a simple CSS file and include it in `todo.html`.
- Create a small HTML test harness to show the fixed output in the repo.
