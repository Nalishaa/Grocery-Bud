// Create Form Element
function createForm() {
  var $form = $("<form></form>");

  $form.html(`
    <h2>Grocery Bud</h2>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="Eg: Milk"
      />
      <button type="submit" class="btn">
        add item
      </button>
    </div>
  `);

  $form.on("submit", function (e) {
    e.preventDefault();
    var $input = $form.find(".form-input");
    var value = $.trim($input.val());

    if (!value) {
      alert("Please provide value");
      return;
    }

    addItem(value);
    $input.val("");
  });

  return $form;
}

// Create Form Element
function createForm(editId, itemToEdit) {
  var $form = $("<form></form>");

  // added value and dynamic button name
  $form.html(`
    <h2>Grocery Bud</h2>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="Eg: Milk"
        value="${itemToEdit ? itemToEdit.name : ""}"
      />
      <button type="submit" class="btn">
        ${editId ? "edit item" : "add item"}
      </button>
    </div>
  `);

  $form.on("submit", function (e) {
    e.preventDefault();
    var $input = $form.find(".form-input");
    var value = $.trim($input.val());

    if (!value) {
      alert("Please provide value");
      return;
    }

    // added conditions
    if (editId) {
      updateItemName(value);
    } else {
      addItem(value);
    }

    $input.val("");
  });

  return $form;
}