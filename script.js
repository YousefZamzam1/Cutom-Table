// Function to add a new item to the table
function addItem() {
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const year = document.getElementById('year').value;

    if (name === '' || category === '' || year === '') {
        alert('Please fill out all fields');
        return;
    }

    const table = document.getElementById('customTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = name;
    cell3.innerHTML = category;
    cell4.innerHTML = year;
    cell5.innerHTML = `<button onclick="editEntry(this)">✍️</button>`;
    cell6.innerHTML = `<button onclick="deleteEntry(this)">☒</button>`;
    
    document.getElementById('name').value = '';
    document.getElementById('category').value = '';
    document.getElementById('year').value = '';
}

// Function to filter the table based on search input
function filterTable() {
    const search = document.getElementById('search').value.toLowerCase();
    const table = document.getElementById('customTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(search) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Function to sort the table by column
function sortTable(n) {
    const table = document.getElementById('customTable');
    const rows = Array.from(table.rows).slice(1);

    const asc = table.querySelectorAll('th')[n].classList.toggle('sorted-asc');
    const desc = table.querySelectorAll('th')[n].classList.toggle('sorted-desc');

    rows.sort((a, b) => {
        const cellA = a.getElementsByTagName('td')[n].innerText.toLowerCase();
        const cellB = b.getElementsByTagName('td')[n].innerText.toLowerCase();

        if (cellA < cellB) return asc ? -1 : 1;
        if (cellA > cellB) return asc ? 1 : -1;
        return 0;
    });

    rows.forEach(row => table.getElementsByTagName('tbody')[0].appendChild(row));
}

// Function to delete an entry from the table
function deleteEntry(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    const table = document.getElementById('customTable');
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerText = i;
    }
}

// Function to edit an entry in the table
function editEntry(button) {
    const row = button.parentNode.parentNode;
    const name = prompt("Edit Name", row.cells[1].innerText);
    const category = prompt("Edit Category", row.cells[2].innerText);
    const year = prompt("Edit Year", row.cells[3].innerText);

    if (name && category && year) {
        row.cells[1].innerText = name;
        row.cells[2].innerText = category;
        row.cells[3].innerText = year;
    }
}
