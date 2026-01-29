// Create SingleItem Element
export function createSingleItem(item) {
  const div = document.createElement("div");
  div.className = "single-item";

  div.innerHTML = `
    <input type="checkbox" ${item.completed ? "checked" : ""} />
    <p style="text-decoration: ${item.completed ? "line-through" : "none"}">
      ${item.name}
    </p>
    <button class="btn icon-btn edit-btn" type="button">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="btn icon-btn remove-btn" type="button">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  `;

  return div;
}

function createSingleItem(item) {
  // ....

  // Add event listener for checkbox
  $div.find('input[type="checkbox"]').on("change", function () {
    editCompleted(item.id);
  });

  return $div;
}

function createSingleItem(item) {
  // ....

  // Add event listener for remove button
  $div.find(".remove-btn").on("click", function () {
    removeItem(item.id);
  });

  return $div;
}

// Create SingleItem Element
function createSingleItem(item) {
  // ....

  // Add event listener for edit button
  $div.find(".edit-btn").on("click", function () {
    setEditId(item.id);
  });

  return $div;
}