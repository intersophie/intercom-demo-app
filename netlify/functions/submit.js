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

  const response = {
    canvas: {
      content: {
        components: [
          {
            type: "text",
            text: "✅ Jira Ticket Created!",
            style: "header",
            align: "center"
          },
          {
            type: "spacer",
            size: "m"
          },
          {
            type: "text",
            text: "Ticket #DEMO-123",
            align: "center"
          },
          {
            type: "text",
            text: "Created with full customer context",
            align: "center"
          },
          {
            type: "spacer",
            size: "m"
          },
          {
            type: "text",
            text: "📋 Included Data:",
            style: "header"
          },
          {
            type: "list",
            items: [
              { text: "Customer lifetime value: $12,450" },
              { text: "Support tier: Premium" },
              { text: "Recent activity timeline" },
              { text: "Trustpilot review history" },
              { text: "Account manager information" }
            ]
          },
          {
            type: "spacer",
            size: "m"
          },
          {
            type: "text",
            text: "🔗 Integration Details:",
            style: "header"
          },
          {
            type: "list",
            items: [
              { text: "Data pulled from CRM automatically" },
              { text: "Trustpilot reviews synced in real-time" },
              { text: "Jira ticket linked to customer profile" }
            ]
          }
        ]
      }
    }
  };

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(response)
  };
};
