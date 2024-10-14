"use client";

import { useState } from "react";

const NewsletterForm = ({ apiKey }) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const subscribe = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, apiKey }),
            });

            const data = await res.json();
            if (data.success) {
                setMessage("Successfully subscribed!");
                setEmail("");
            } else {
                setMessage("Failed to subscribe. Please try again.");
            }
        } catch (error) {
            setMessage("Error occurred while subscribing.");
        }
    };

    return (
        <div>
            <h2>Subscribe to our Newsletter</h2>
            <form onSubmit={subscribe}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default NewsletterForm;
