function createTable() {
  // Prompt the user for the number of rows and columns
  const rn = prompt('Input number of rows');
  const cn = prompt('Input number of columns');

  // Get the table element
  const table = document.getElementById('myTable');

  // Clear any existing rows from the table
  table.innerHTML = '';

  // Create the table rows and columns
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell(j);
      cell.textContent = `Row-${i } Column-${j }`;
    }
  }
}
