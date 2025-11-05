import React, { useState, useEffect } from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { SearchIcon } from './icons/SearchIcon';
import { QuestionMarkIcon } from './icons/QuestionMarkIcon';
import { VolumeIcon } from './icons/VolumeIcon';
import { SendIcon } from './icons/SendIcon';
import { ThreeLinesIcon } from './icons/ThreeLinesIcon';

const ChatBot: React.FC = () => {
    const [isHintOpen, setIsHintOpen] = useState(false);
    const [isChatWindowOpen, setIsChatWindowOpen] = useState(false);
    
    // Auto-open the hint after a delay on first load
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isChatWindowOpen) {
                setIsHintOpen(true);
            }
        }, 2000); // 2 seconds delay
        return () => clearTimeout(timer);
    }, []);

    const handleIconClick = () => {
        if (isChatWindowOpen) {
            setIsChatWindowOpen(false);
        } else {
            setIsHintOpen(prev => !prev);
        }
    };

    const handleIconDoubleClick = () => {
        setIsChatWindowOpen(prev => !prev);
        setIsHintOpen(false);
    };

    const FullChatWindow = () => (
        <div className="w-96 h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out origin-bottom-right">
            {/* Header */}
            <header className="flex justify-between items-center p-4 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <img 
                        src="https://res.cloudinary.com/dehglnwgz/image/upload/v1757581557/Untitled_design_13_qg5xe7.png" 
                        alt="Chat bot mascot"
                        className="w-8 h-8 object-cover rounded-full"
                    />
                    <h2 className="font-bold text-gray-800">IxoraGroup Careers</h2>
                </div>
                <div className="flex items-center gap-2">
                    <button className="text-gray-500 hover:text-gray-800 p-1" aria-label="Toggle sound">
                        <VolumeIcon className="w-5 h-5" />
                    </button>
                    <button onClick={() => setIsChatWindowOpen(false)} className="text-gray-500 hover:text-gray-800 p-1" aria-label="Close chat window">
                        <CloseIcon className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Privacy Notice */}
            <div className="p-4 bg-gray-50 text-xs text-gray-500 border-b border-gray-200 flex-shrink-0">
                The information you provide to the chatbot will be collected to improve your experience. Please read our privacy policy to see how we are storing and protecting your data
            </div>

            {/* Chat Body */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4">
                <div className="text-center text-xs text-gray-400">Today {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</div>
                <div className="flex items-end gap-2">
                    <img 
                        src="https://res.cloudinary.com/dehglnwgz/image/upload/v1757581557/Untitled_design_13_qg5xe7.png" 
                        alt="Chat bot mascot"
                        className="w-6 h-6 object-cover rounded-full mb-2 flex-shrink-0 self-start"
                    />
                    <div className="flex flex-col items-start">
                        <div className="bg-gray-100 rounded-2xl rounded-bl-none p-3 max-w-xs text-sm text-gray-800">
                            Hi! Are you looking for a job?
                        </div>
                        <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden w-full max-w-xs">
                            <button className="w-full flex items-center gap-2 p-3 text-left bg-white hover:bg-gray-50 text-sm font-medium text-gray-700">
                                <SearchIcon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                <span>Find a job</span>
                            </button>
                            <div className="border-t border-gray-200"></div>
                            <button className="w-full flex items-center gap-2 p-3 text-left bg-white hover:bg-gray-50 text-sm font-medium text-gray-700">
                                <QuestionMarkIcon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                <span>Ask a question</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Footer */}
            <div className="p-4 border-t border-gray-200 flex-shrink-0">
                <div className="flex items-center bg-white border border-gray-300 rounded-full p-1 pl-3 focus-within:ring-2 focus-within:ring-amber-300 focus-within:border-amber-300">
                    <button className="text-gray-500 hover:text-gray-800" aria-label="Open menu">
                        <ThreeLinesIcon className="w-5 h-5" />
                    </button>
                    <input 
                        type="text"
                        placeholder="Ask anything"
                        className="flex-grow bg-transparent focus:outline-none px-3 text-sm"
                        aria-label="Chat input"
                    />
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#D4B258] text-white hover:bg-[#C3A24B] transition-colors flex-shrink-0" aria-label="Send message">
                        <SendIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2" aria-live="polite">
            {/* Full Chat Window */}
            <div 
                className={`
                    transition-all duration-300 ease-in-out origin-bottom-right
                    ${isChatWindowOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}
                `}
            >
                {isChatWindowOpen && <FullChatWindow />}
            </div>

            {/* Hint Window */}
            <div 
                className={`
                    w-64 transition-all duration-300 ease-in-out origin-bottom-right
                    ${isHintOpen && !isChatWindowOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}
                `}
            >
                <div className="bg-white rounded-xl shadow-xl p-2 flex justify-between items-start mb-2">
                    <p className="font-medium text-xs text-gray-800 pr-2 leading-tight">Hi! Are you looking for a job?</p>
                    <button 
                        onClick={() => setIsHintOpen(false)} 
                        className="text-gray-400 hover:text-gray-800 p-1 -mr-1 -mt-1 flex-shrink-0"
                        aria-label="Close chat message"
                    >
                        <CloseIcon className="w-3 h-3" />
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-white shadow-xl rounded-full text-gray-700 font-semibold text-xs hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                        <SearchIcon className="w-3 h-3 text-gray-500" />
                        <span>Find a job</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-white shadow-xl rounded-full text-gray-700 font-semibold text-xs hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                        <QuestionMarkIcon className="w-3 h-3 text-gray-500" />
                        <span>Ask a question</span>
                    </button>
                </div>
            </div>

            {/* Chat Icon */}
            <button
                onClick={handleIconClick}
                onDoubleClick={handleIconDoubleClick}
                className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-300"
                aria-label={isChatWindowOpen ? "Close chat" : "Open chat"}
                aria-expanded={isChatWindowOpen}
            >
                <img 
                    src="https://res.cloudinary.com/dehglnwgz/image/upload/v1757581557/Untitled_design_13_qg5xe7.png" 
                    alt="Chat bot mascot"
                    className="w-full h-full object-cover rounded-full"
                />
            </button>
        </div>
    );
};

export default ChatBot;
