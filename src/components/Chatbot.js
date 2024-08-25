import React, { useState } from 'react';
import './Chatbot.css';
import chatbotLogo from './chatbotLogo.png'; // Ensure you have a logo image in your project

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);
        setInput('');

        // Send message to backend and get the response
        const response = await fetch('http://localhost:8000/api/chatbot/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: input }),
        });
        const data = await response.json();
        const botMessage = { sender: 'bot', text: data.response };
        setMessages([...messages, userMessage, botMessage]);
    };

    return (
        <div className="chatbot-container">
            <div className={`chatbot ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <img src={chatbotLogo} alt="Chatbot Logo" onClick={toggleChat} />
                    <h2 onClick={toggleChat}>Chat with Us</h2>
                </div>
                {isOpen && (
                    <div className="chatbot-body">
                        <div className="chatbot-messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="chatbot-input">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chatbot;
