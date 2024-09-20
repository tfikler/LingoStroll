import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chatStyle.css';

interface Message {
    sender: 'user' | 'system';
    text: string;
}

interface PracticeResponse {
    language: string;
    rank: string;
    landmark: string;
    conversation: string;
}

interface ChatInterfaceProps {
    language: string;
    rank: number;
}

const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

const ChatInterface: React.FC<ChatInterfaceProps> = ({ language, rank }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [conversationStarted, setConversationStarted] = useState(false);

    useEffect(() => {
        // Optionally, you can start the conversation when the component mounts
        // startConversation();
    }, []);

    const startConversation = async () => {
        try {
            const response = await axios.post<PracticeResponse>(`${API_BASE_URL}/api/openai/practice`, {
                language,
                rank,
            });

            const initialMessage: Message = {
                sender: 'system',
                text: `You are at ${response.data.landmark}. ${response.data.conversation}`,
            };

            setMessages([initialMessage]);
            setConversationStarted(true);
        } catch (error) {
            console.error('Error starting conversation:', error);
            alert('Failed to start the conversation.');
        }
    };

    const handleSendMessage = async () => {
        if (inputText.trim() === '') return;

        const userMessage: Message = {
            sender: 'user',
            text: inputText,
        };

        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInputText('');

        try {
            const response = await axios.post(`${API_BASE_URL}/api/openai/chat`, {
                messages: newMessages.map(msg => ({
                    role: msg.sender === 'user' ? 'user' : 'assistant',
                    content: msg.text,
                })),
                language,
            });

            const assistantReply: Message = {
                sender: 'system',
                text: response.data.reply,
            };

            setMessages(prevMessages => [...prevMessages, assistantReply]);
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to get response from the system.');
        }
    };

    return (
        <div className="chat-container">
            {!conversationStarted ? (
                <div className="start-conversation">
                    <button onClick={startConversation}>Start Conversation</button>
                </div>
            ) : (
                <div className="chat-interface">
                    <div className="messages">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender === 'user' ? 'user-message' : 'system-message'}`}
                            >
                                <div className="message-content">
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="input-area">
                        <input
                            type="text"
                            value={inputText}
                            onChange={e => setInputText(e.target.value)}
                            placeholder="Type your message..."
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                    handleSendMessage();
                                }
                            }}
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatInterface;
