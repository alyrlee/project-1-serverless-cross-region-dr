const apiUrl = 'https://0undacxz6e.execute-api.us-east-2.amazonaws.com/Dev';

fetch(`${apiUrl}/submit`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: '123', data: 'Sample data' }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
