exports.handler = async (event, context) => {
  // Log everything so we can see what's happening
  console.log('=== FUNCTION CALLED ===');
  console.log('Method:', event.httpMethod);
  console.log('Headers:', event.headers);
  console.log('Body:', event.body);
  console.log('========================');
  
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
      console.log('Returning OPTIONS response');
      return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
      console.log('Wrong method, returning 405');
      return { statusCode: 405, headers, body: 'Method Not Allowed' };
    }

    console.log('Creating widget response...');
    
    const widgetContent = {
      canvas: {
        content: {
          components: [
            {
              type: "text",
              text: "Debug: Widget loaded successfully!"
            }
          ]
        }
      }
    };

    const response = {
      statusCode: 200,
      headers,
      body: JSON.stringify(widgetContent)
    };

    console.log('Response being sent:', JSON.stringify(response, null, 2));
    return response;

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message })
    };
  }
};
