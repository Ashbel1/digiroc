import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! Welcome to Digiroc Technologies 👋", sender: "bot", timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const botResponses = {
        'hello': 'Hello! How can I help you today?',
        'hi': 'Hi there! What can I do for you?',
        'help': 'I can help you with information about our services, solutions, deployments, and team. What would you like to know?',
        'services': 'We offer enterprise IT distribution, cloud enablement, infrastructure services, and more across Africa. Visit our Solutions page for details!',
        'solutions': 'Our solutions include IT Distribution, Cloud Services, Infrastructure Management, Networking, Storage Solutions, and Security. Which one interests you?',
        'contact': 'You can reach us through our Contact page, or email us directly. We\'d love to hear from you!',
        'team': 'Our team consists of experienced IT professionals specializing in distribution, deployment, and support. Check out our Team page to meet them!',
        'deployments': 'We handle enterprise deployments across Africa, including infrastructure setup, cloud migration, and system integration. Want to learn more?',
        'price': 'Our pricing varies based on your specific needs. Please contact our team for a customized quote tailored to your requirements.',
        'pricing': 'For pricing information, please reach out to our sales team through the Contact page. We offer flexible solutions to fit your budget.',
        'location': 'We operate across Africa, delivering enterprise IT solutions. Visit our About page to learn more about our reach and operations.',
        'about': 'Digiroc Technologies is a leading IT distribution company providing cloud enablement and infrastructure services across Africa. We help businesses scale with reliable technology.',
        'default': 'That\'s a great question! Our team would be happy to help you with that. Please visit our Contact page or explore our site for more information.'
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getBotResponse = (userMessage) => {
        const message = userMessage.toLowerCase().trim();
        
        // Check for keywords in the message
        for (const [key, response] of Object.entries(botResponses)) {
            if (message.includes(key)) {
                return response;
            }
        }
        
        return botResponses.default;
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        
        if (inputValue.trim() === '') return;

        // Add user message
        const userMessage = {
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };
        
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        
        // Show typing indicator
        setIsTyping(true);
        
        // Simulate bot typing delay
        setTimeout(() => {
            setIsTyping(false);
            const botMessage = {
                text: getBotResponse(inputValue),
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
        }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5s
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            // Greet user when opening chat
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    text: "How can I assist you today? Feel free to ask about our services, solutions, or team!",
                    sender: 'bot',
                    timestamp: new Date()
                }]);
            }, 500);
        }
    };

    const quickActions = [
        { label: '💼 Services', message: 'Tell me about your services' },
        { label: '🚀 Deployments', message: 'What deployments do you offer?' },
        { label: '👥 Team', message: 'Who is on your team?' },
        { label: '📞 Contact', message: 'How can I contact you?' }
    ];

    const handleQuickAction = (message) => {
        setInputValue(message);
        // Auto-submit after a brief delay
        setTimeout(() => {
            handleSendMessage({ preventDefault: () => {} });
        }, 100);
    };

    return (
        <>
            {/* Chat Button */}
            <div 
                className={`chatbot-button ${isOpen ? 'active' : ''}`}
                onClick={toggleChat}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
                {!isOpen && <span className="chat-notification">1</span>}
            </div>

            {/* Chat Window */}
            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                {/* Header */}
                <div className="chatbot-header">
                    <div className="header-info">
                        <div className="bot-avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <div>
                            <h4>Digiroc Assistant</h4>
                            <span className="status">
                                <span className="status-dot"></span> Online
                            </span>
                        </div>
                    </div>
                    <button className="close-btn" onClick={toggleChat}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.sender === 'bot' && (
                                <div className="message-avatar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                </div>
                            )}
                            <div className="message-content">
                                <div className="message-bubble">{msg.text}</div>
                                <span className="message-time">
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))}
                    
                    {isTyping && (
                        <div className="message bot">
                            <div className="message-avatar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                            <div className="message-content">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                {messages.length <= 2 && (
                    <div className="quick-actions">
                        {quickActions.map((action, index) => (
                            <button 
                                key={index}
                                className="quick-action-btn"
                                onClick={() => handleQuickAction(action.message)}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input */}
                <form className="chatbot-input" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button type="submit" disabled={inputValue.trim() === ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>
            </div>
        </>
    );
};

export default Chatbot;
