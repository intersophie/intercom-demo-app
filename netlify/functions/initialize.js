exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

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
            style: "header"
          },
          {
            type: "list",
            items: [
              { text: "Lifetime Value: $12,450" },
              { text: "Support Tier: Premium" },
              { text: "Last Purchase: Jan 15, 2025" },
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
            style: "header"
          },
          {
            type: "list",
            items: [
              { text: "Logged into platform 3 times this week" },
              { text: "Downloaded new feature guide" },
              { text: "Opened 2 support tickets (both resolved)" }
            ]
          },
          {
            type: "spacer",
            size: "m"
          },
          {
            type: "text", 
            text: "⭐ Trustpilot Reviews",
            style: "header"
          },
          {
            type: "list",
            items: [
              { text: "Rating: 4.8/5 stars" },
              { text: "Total Reviews: 23 reviews" },
              { text: "Latest: 'Excellent support team!' - 3 days ago" }
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

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(widgetContent)
  };
};
