exports.handler = async (event, context) => {
  console.log('=== FUNCTION CALLED ===');
  console.log('Method:', event.httpMethod);
  
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, headers, body: 'Method Not Allowed' };
    }

    // Canvas Kit requires very specific format
    const widgetContent = {
      canvas: {
        content: {
          components: [
            {
              type: "text",
              text: "🎯 Customer Data Dashboard",
              style: "header",
              align: "center"
            },
            {
              type: "spacer",
              size: "m"
            },
            {
              type: "text",
              text: "💰 Account Information",
              style: "header",
              align: "left"
            },
            {
              type: "list",
              items: [
                { text: "Lifetime Value: $12,450" },
                { text: "Support Tier: Premium" },
                { text: "Account Manager: Sarah Johnson" }
              ]
            },
            {
              type: "spacer",
              size: "m"
            },
            {
              type: "text",
              text: "📊 Recent Activity",
              style: "header",
              align: "left"
            },
            {
              type: "list", 
              items: [
                { text: "Logged in 3 times this week" },
                { text: "Downloaded feature guide" },
                { text: "2 support tickets (resolved)" }
              ]
            },
            {
              type: "spacer",
              size: "m"
            },
            {
              type: "text",
              text: "⭐ Trustpilot Reviews",
              style: "header",
              align: "left"
            },
            {
              type: "list",
              items: [
                { text: "Rating: 4.8/5 stars" },
                { text: "Total: 23 reviews" },
                { text: "Latest: 'Excellent support!' - 3 days ago" }
              ]
            },
            {
              type: "spacer",
              size: "m"
            },
            {
              type: "button",
              label: "Create Jira Ticket",
              style: "primary",
              id: "create_ticket",
              action: {
                type: "submit"
              }
            }
          ]
        }
      }
    };

    console.
