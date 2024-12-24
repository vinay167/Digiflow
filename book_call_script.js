document.getElementById('call-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
        u_name: document.getElementById('name').value,
        u_email: document.getElementById('email').value,
        u_number1: document.getElementById('number').value,
        u_time: document.getElementById('time').value,
        u_service: document.getElementById('service').value
    };

    // API URL and credentials
    const apiUrl = 'https://dev256986.service-now.com/api/now/table/u_digiflow';
    const username = 'admin'; // Replace with your ServiceNow username
    const password = 'Eg!FFb7uR0q%'; // Replace with your ServiceNow password

    try {
        // Send the API request using Basic Authentication
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // On success, display success message and redirect
            alert('Data submitted successfully!');
            window.location.href = 'index.html'; // Redirect to the main page
        } else {
            // Handle API errors
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert(`Error: ${errorData.error.message}`);
        }
    } catch (error) {
        // Handle network or other errors
        console.error('Error:', error);
        alert('An error occurred while submitting the data.');
    }
});
