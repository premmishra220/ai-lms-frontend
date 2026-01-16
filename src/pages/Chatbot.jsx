import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="bg-black min-h-screen py-20 flex justify-center text-white">

      <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-3xl shadow-xl p-6">

        <h2 className="text-2xl font-bold text-indigo-400 mb-4">
          AI Chatbot Support
        </h2>

        {/* Chat box */}
        <div className="h-80 overflow-y-auto space-y-3 mb-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-indigo-600 ml-auto"
                  : "bg-white/10"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={sendMessage}
            className="bg-indigo-600 px-6 py-2 rounded-xl font-bold hover:bg-indigo-700"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}
