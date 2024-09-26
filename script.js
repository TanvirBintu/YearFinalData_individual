let studentsData = [];

// Fetch the JSON data from the students.json file
fetch('students.json')
    .then(response => response.json())
    .then(data => {
        studentsData = data.students;
        showRecords(studentsData, 10); // Show 10 records by default
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to show records based on input count
function showRecords(data, count) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Clear the table body

    // Display only the number of records specified
    data.slice(0, count).forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <strong>ID:</strong> ${student.id}<br>
                <strong>Roll:</strong> ${student.classRoll}<br>
                <strong>Name:</strong> ${student.name}
            </td>
            <td>${student.group}</td>
            <td>${student.optionalCourse}</td>
            <td>${student.finalGrade}</td>
            <td>${student.avgMark}</td>
            <td>${student.totalMark}</td>
            <td>${student.totalGP}</td>
            
            <td>${student.subjects.Ban.mark}</td>
            <td>${student.subjects.Ban.grade}</td>
            <td>${student.subjects.Ban.point}</td>
            
            <td>${student.subjects.Eng.mark}</td>
            <td>${student.subjects.Eng.grade}</td>
            <td>${student.subjects.Eng.point}</td>
            
            <td>${student.subjects.Phy.mark}</td>
            <td>${student.subjects.Phy.grade}</td>
            <td>${student.subjects.Phy.point}</td>
            
            <td>${student.subjects.Che.mark}</td>
            <td>${student.subjects.Che.grade}</td>
            <td>${student.subjects.Che.point}</td>
            
            <td>${student.subjects.Bio.mark}</td>
            <td>${student.subjects.Bio.grade}</td>
            <td>${student.subjects.Bio.point}</td>
            
            <td>${student.subjects.HMM.mark}</td>
            <td>${student.subjects.HMM.grade}</td>
            <td>${student.subjects.HMM.point}</td>
        `;
        tbody.appendChild(row);
    });
}

// Show records button handler
document.getElementById('showRecordsBtn').addEventListener('click', () => {
    const count = document.getElementById('recordCount').value;
    showRecords(studentsData, count || 10); // Default to 10 if input is empty
});

// Print button handler
document.getElementById('printBtn').addEventListener('click', () => {
    window.print(); // Trigger the print dialog
});
