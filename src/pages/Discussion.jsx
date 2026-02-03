import { useState, useEffect } from "react";

export default function Discussion() {
  const [question, setQuestion] = useState("");
  const [discussions, setDiscussions] = useState([]);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  // Load saved discussions
  useEffect(() => {
    const saved = localStorage.getItem("discussions");
    if (saved) {
      setDiscussions(JSON.parse(saved));
    }
  }, []);

  // Save discussions
  useEffect(() => {
    localStorage.setItem(
      "discussions",
      JSON.stringify(discussions)
    );
  }, [discussions]);

  const handlePost = () => {
    if (!question.trim()) return;

    const newPost = {
      id: Date.now(),
      text: question,
      author: user?.name || "Student",
      replies: [],
    };

    setDiscussions([newPost, ...discussions]);
    setQuestion("");
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-extrabold text-indigo-400 mb-8">
          💬 Course Discussion
        </h1>

        {/* Ask Doubt */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-10">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask your doubt here..."
            className="w-full min-h-[100px] bg-black/40 border border-white/20 rounded-lg p-4 text-white"
          />
          <button
            onClick={handlePost}
            className="mt-4 bg-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Post Question
          </button>
        </div>

        {/* Discussions */}
        <div className="space-y-6">
          {discussions.length === 0 && (
            <p className="text-gray-400">
              No discussions yet. Be the first to ask 🚀
            </p>
          )}

          {discussions.map((d) => (
            <div
              key={d.id}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl"
            >
              <p className="text-lg mb-2">{d.text}</p>
              <p className="text-sm text-gray-400">
                — {d.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
