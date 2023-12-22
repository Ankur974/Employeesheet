function createtable() {
    const employeeIdInput = document.getElementById("employeeId").getElementsByTagName("textarea")[0];
    const selectedOption = document.getElementById("selectedOption");
    const fromDateInput = document.getElementById("fromDate");
    const toDateInput = document.getElementById("toDate");

    const employeeId = employeeIdInput.value;
    const leaveType = selectedOption.innerText;
    const fromDate = fromDateInput.value;
    const toDate = toDateInput.value;

    if (!employeeId || !leaveType || !fromDate || !toDate) {
        alert("Please fill in all fields.");
        return;
    }

    const fromDateObj = new Date(fromDate);
    const toDateObj = new Date(toDate);
    const timeDifference = toDateObj.getTime() - fromDateObj.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    const table = document.getElementById("leaveTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);
    for (let i = 0; i < 5; i++) {
        newRow.insertCell(i);
    }

    newRow.cells[0].innerHTML = employeeId;
    newRow.cells[1].innerHTML = leaveType;
    newRow.cells[2].innerHTML = fromDate;
    newRow.cells[3].innerHTML = toDate;
    newRow.cells[4].innerHTML = daysDifference;

    // Reset input values
    employeeIdInput.value = "";
    selectedOption.innerText = "Select Leave type";
    fromDateInput.value = "";
    toDateInput.value = "";

    document.getElementById("result").innerHTML = "<p>No of days:</p>";
}

function populateTable(dummyEmployeeId, dummyLeaveType, dummyFromDate, dummyToDate) {
    const fromDateObj = new Date(dummyFromDate);
    const toDateObj = new Date(dummyToDate);
    const timeDifference = toDateObj.getTime() - fromDateObj.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    const table = document.getElementById("leaveTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);
    for (let i = 0; i < 5; i++) {
        newRow.insertCell(i);
    }

    newRow.cells[0].innerHTML = dummyEmployeeId;
    newRow.cells[1].innerHTML = dummyLeaveType;
    newRow.cells[2].innerHTML = dummyFromDate;
    newRow.cells[3].innerHTML = dummyToDate;
    newRow.cells[4].innerHTML = daysDifference;
}

function fetchDataAndPopulateTable() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            const dummyEmployeeId = data.id;
            const dummyLeaveType = 'Vacation';
            const dummyFromDate = '2023-01-01';
            const dummyToDate = '2023-01-05';

            populateTable(dummyEmployeeId, dummyLeaveType, dummyFromDate, dummyToDate);
        })
        .catch(error => console.error('Error fetching data:', error));
}

