"use client";

import { useState } from "react";
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm.jsx";

export default function NewsletterPage() {
    const [apiKey, setApiKey] = useState("");

    return (
        <div>
            <h1>Newsletter Subscription</h1>
            <div>
                <label htmlFor="apiKey">Resend API Key:</label>
                <input
                    id="apiKey"
                    type="text"
                    placeholder="Enter your Resend API Key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    required
                />
            </div>
            <NewsletterForm apiKey={apiKey} />
        </div>
    );
}
