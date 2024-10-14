import axios from "axios";

export async function POST(req) {
    try {
        const { email, apiKey } = await req.json();

        if (!email || !apiKey) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Email and API key are required",
                }),
                {
                    status: 400,
                }
            );
        }

        // Send the request to Resend API
        const response = await axios.post(
            "https://api.resend.com/v1/subscriptions",
            {
                email, // email to subscribe
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return new Response(
            JSON.stringify({ success: true, data: response.data }),
            {
                status: 200,
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, message: error.message }),
            {
                status: 500,
            }
        );
    }
}
