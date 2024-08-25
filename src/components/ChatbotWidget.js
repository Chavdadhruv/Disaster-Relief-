import React, { useEffect, useRef, useState } from 'react';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://127.0.0.1:65432');

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: message }]);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== '') {
      ws.current.send(JSON.stringify(input));
      setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: input }]);
      setInput('');
    }
  };

  return (
    <div className="chatbot-widget">
      <div className={`chatbot-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZGIZ6VbQsyeDARZ6EG3BXs6K8YVlDJ0PgA&s" alt="Chatbot Logo" />
      </div>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Chat with Us!</h3>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
