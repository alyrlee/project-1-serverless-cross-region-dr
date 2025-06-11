const AWS = require('aws-sdk');

// Lambda function handler
exports.handler = async (event) => {
    try {
        // Parse the incoming request body
        const { id, data } = JSON.parse(event.body);

        // Log the received data 
        console.log(`Received ID: ${id}, Data: ${data}`);

        // Return a success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data processed successfully!', receivedId: id, receivedData: data }),
        };
    } catch (error) {
        console.error('Error:', error);
        // Return an error response
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
        };
    }
};
