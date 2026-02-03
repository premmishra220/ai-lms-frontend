import { useState, useEffect } from "react";

const QUESTIONS_TIME = 30; 
const questions = [
  
  { q: "JavaScript is a ___ language?", options: ["Compiled", "Interpreted", "Assembly", "Low level"], answer: "Interpreted" },
  { q: "Which keyword is block scoped?", options: ["var", "let", "function", "this"], answer: "let" },
  { q: "const variable can be?", options: ["Reassigned", "Redeclared", "Updated internally", "Not reassigned"], answer: "Not reassigned" },
  { q: "typeof null returns?", options: ["null", "object", "undefined", "number"], answer: "object" },
  { q: "Which value is falsy?", options: ["1", "{}", "[]", "0"], answer: "0" },
  { q: "== vs === difference?", options: ["Value", "Type", "Both", "None"], answer: "Both" },
  { q: "Arrow function introduced in?", options: ["ES5", "ES6", "ES7", "ES8"], answer: "ES6" },
  { q: "Spread operator symbol?", options: ["...", "***", "=>", "::"], answer: "..." },
  { q: "Array method that returns new array?", options: ["forEach", "map", "push", "pop"], answer: "map" },
  { q: "filter() returns?", options: ["Boolean", "Object", "New array", "Index"], answer: "New array" },
  { q: "Promise has how many states?", options: ["2", "3", "4", "5"], answer: "3" },
  { q: "Promise states are?", options: ["start/end", "pending/fulfilled/rejected", "run/stop", "none"], answer: "pending/fulfilled/rejected" },
  { q: "async/await works on?", options: ["Callbacks", "Promises", "Loops", "DOM"], answer: "Promises" },
  { q: "setTimeout is ___?", options: ["Sync", "Async", "Blocking", "None"], answer: "Async" },
  { q: "Closure means?", options: ["Function inside function", "Access outer scope", "Callback", "Loop"], answer: "Access outer scope" },
  { q: "Hoisting applies to?", options: ["Variables", "Functions", "Both", "None"], answer: "Both" },
  { q: "JSON stands for?", options: ["Java Syntax", "JavaScript Object Notation", "JS Object Node", "None"], answer: "JavaScript Object Notation" },
  { q: "parseInt('10px') returns?", options: ["NaN", "10", "px", "undefined"], answer: "10" },
  { q: "call/apply/bind used for?", options: ["Array ops", "this binding", "Loops", "Promises"], answer: "this binding" },
  { q: "LocalStorage stores data?", options: ["Session only", "Permanent", "Temporary", "Cookies"], answer: "Permanent" },
  { q: "SessionStorage clears on?", options: ["Refresh", "Tab close", "Restart", "Logout"], answer: "Tab close" },
  { q: "NaN === NaN is?", options: ["true", "false", "error", "undefined"], answer: "false" },
  { q: "Which creates shallow copy?", options: ["Object.assign", "JSON.parse", "structuredClone", "deep copy"], answer: "Object.assign" },
  { q: "Event loop handles?", options: ["DOM", "Async callbacks", "CSS", "HTML"], answer: "Async callbacks" },
  { q: "Which is NOT primitive?", options: ["string", "number", "object", "boolean"], answer: "object" },
  { q: "Array destructuring returns?", options: ["Value", "Array", "Object", "Function"], answer: "Value" },
  { q: "Default parameter introduced in?", options: ["ES5", "ES6", "ES7", "ES8"], answer: "ES6" },
  { q: "Which converts JSON string to object?", options: ["JSON.stringify", "JSON.parse", "toString", "parseInt"], answer: "JSON.parse" },
  { q: "Which is synchronous?", options: ["setTimeout", "Promise", "console.log", "fetch"], answer: "console.log" },
  { q: "this in arrow function refers to?", options: ["own scope", "parent scope", "window", "undefined"], answer: "parent scope" },

  
  { q: "React is a?", options: ["Framework", "Library", "Language", "DB"], answer: "Library" },
  { q: "JSX stands for?", options: ["Java XML", "JavaScript XML", "JSON XML", "None"], answer: "JavaScript XML" },
  { q: "Hook for state?", options: ["useEffect", "useState", "useRef", "useMemo"], answer: "useState" },
  { q: "Hook for side effects?", options: ["useState", "useEffect", "useContext", "useRef"], answer: "useEffect" },
  { q: "React data flow?", options: ["Two-way", "One-way", "Multi-way", "None"], answer: "One-way" },
  { q: "Virtual DOM is?", options: ["Real DOM", "DOM copy", "Database", "API"], answer: "DOM copy" },
  { q: "Props are?", options: ["Mutable", "Immutable", "Global", "Private"], answer: "Immutable" },
  { q: "Key prop improves?", options: ["Styling", "Performance", "Routing", "State"], answer: "Performance" },
  { q: "Routing library?", options: ["Redux", "Axios", "React Router", "Express"], answer: "React Router" },
  { q: "useContext is used for?", options: ["API", "Global state", "Loop", "DOM"], answer: "Global state" },
  { q: "Controlled component means?", options: ["Ref controlled", "State controlled", "DOM", "None"], answer: "State controlled" },
  { q: "useRef is used for?", options: ["State", "DOM access", "API", "Loop"], answer: "DOM access" },
  { q: "Fragment avoids?", options: ["CSS", "Extra DOM", "JS", "API"], answer: "Extra DOM" },
  { q: "SPA means?", options: ["Single Page App", "Static Page App", "Server Page App", "None"], answer: "Single Page App" },
  { q: "useMemo is used for?", options: ["Routing", "Memoization", "State", "API"], answer: "Memoization" },
  { q: "React StrictMode is for?", options: ["Production", "Debugging", "Security", "Routing"], answer: "Debugging" },
  { q: "React maintained by?", options: ["Google", "Facebook", "Amazon", "Microsoft"], answer: "Facebook" },
  { q: "Vite is?", options: ["Bundler", "Framework", "DB", "Library"], answer: "Bundler" },
  { q: "Component must return?", options: ["HTML", "JSX", "CSS", "JSON"], answer: "JSX" },
  { q: "Lifting state up means?", options: ["Sharing state", "Deleting", "Global", "None"], answer: "Sharing state" },
  { q: "React re-render happens when?", options: ["State changes", "CSS changes", "HTML", "None"], answer: "State changes" },
  { q: "useEffect dependency array controls?", options: ["Execution", "Loop", "State", "None"], answer: "Execution" },
  { q: "React.memo prevents?", options: ["Re-render", "Routing", "API", "State"], answer: "Re-render" },
  { q: "JSX compiles to?", options: ["HTML", "JS", "React.createElement", "CSS"], answer: "React.createElement" },
  { q: "Default export allowed?", options: ["One", "Two", "Many", "None"], answer: "One" },

  // ---------- NODE + EXPRESS (56–80) ----------
  { q: "Node.js is?", options: ["Language", "Runtime", "Framework", "Library"], answer: "Runtime" },
  { q: "Node built on?", options: ["V8", "Chakra", "SpiderMonkey", "Java VM"], answer: "V8" },
  { q: "Non-blocking I/O means?", options: ["Async", "Sync", "Slow", "None"], answer: "Async" },
  { q: "Express is?", options: ["Frontend", "Backend framework", "DB", "CSS"], answer: "Backend framework" },
  { q: "Middleware runs between?", options: ["Req & Res", "DB & Server", "Client & DB", "None"], answer: "Req & Res" },
  { q: "GET method used for?", options: ["Fetch", "Send", "Delete", "Update"], answer: "Fetch" },
  { q: "POST method used for?", options: ["Fetch", "Send", "Delete", "Update"], answer: "Send" },
  { q: "Status code 200 means?", options: ["Error", "Success", "Not found", "Auth"], answer: "Success" },
  { q: "Status code 404 means?", options: ["Success", "Not found", "Server error", "Forbidden"], answer: "Not found" },
  { q: "CORS stands for?", options: ["Cross Origin Resource Sharing", "Core Origin", "None", "Routing"], answer: "Cross Origin Resource Sharing" },
  { q: "JWT is used for?", options: ["Auth", "CSS", "DB", "Routing"], answer: "Auth" },
  { q: "req.body contains?", options: ["Params", "Payload", "Headers", "Query"], answer: "Payload" },
  { q: "req.params contains?", options: ["URL params", "Body", "Headers", "None"], answer: "URL params" },
  { q: "res.send is used for?", options: ["Send response", "Fetch", "DB", "Loop"], answer: "Send response" },
  { q: "nodemon does?", options: ["Restart server", "Deploy", "Test", "Debug"], answer: "Restart server" },
  { q: "dotenv is used for?", options: ["Env variables", "Routing", "DB", "CSS"], answer: "Env variables" },
  { q: "REST API uses?", options: ["CRUD", "HTML", "CSS", "XML"], answer: "CRUD" },
  { q: "PUT method used for?", options: ["Create", "Update", "Delete", "Fetch"], answer: "Update" },
  { q: "DELETE method used for?", options: ["Fetch", "Delete", "Create", "Update"], answer: "Delete" },
  { q: "Which tool tests APIs?", options: ["Postman", "Git", "Chrome", "VS Code"], answer: "Postman" },
  { q: "fs module handles?", options: ["Files", "HTTP", "Routes", "DB"], answer: "Files" },
  { q: "Event loop handles?", options: ["Async ops", "CSS", "HTML", "DB"], answer: "Async ops" },
  { q: "async/await is built on?", options: ["Promise", "Callback", "Loop", "None"], answer: "Promise" },
  { q: "Authorization header is for?", options: ["Auth", "CSS", "DB", "Routing"], answer: "Auth" },
  { q: "express.json() does?", options: ["Parse JSON", "Route", "Auth", "DB"], answer: "Parse JSON" },

  
  { q: "MongoDB is?", options: ["SQL", "NoSQL", "Graph", "Relational"], answer: "NoSQL" },
  { q: "MongoDB stores data as?", options: ["Rows", "Tables", "Documents", "Columns"], answer: "Documents" },
  { q: "Primary key in MongoDB?", options: ["id", "_id", "pk", "mongoId"], answer: "_id" },
  { q: "Mongoose is?", options: ["ODM", "ORM", "Framework", "DB"], answer: "ODM" },
  { q: "Schema defines?", options: ["Structure", "UI", "Routing", "Auth"], answer: "Structure" },
  { q: "Model is?", options: ["Schema wrapper", "Controller", "Route", "UI"], answer: "Schema wrapper" },
  { q: "find() returns?", options: ["Array", "Object", "Boolean", "Count"], answer: "Array" },
  { q: "findOne() returns?", options: ["Single doc", "Array", "Count", "None"], answer: "Single doc" },
  { q: "populate() is used for?", options: ["Join data", "Insert", "Delete", "Index"], answer: "Join data" },
  { q: "Aggregation is used for?", options: ["Data processing", "CSS", "Routing", "Auth"], answer: "Data processing" },
  { q: "Index improves?", options: ["Query speed", "UI", "Security", "Routing"], answer: "Query speed" },
  { q: "Unique index prevents?", options: ["Duplicate data", "Delete", "Join", "Read"], answer: "Duplicate data" },
  { q: "updateOne() does?", options: ["Update one", "Insert", "Delete", "Read"], answer: "Update one" },
  { q: "deleteOne() does?", options: ["Delete one", "Delete all", "Read", "Update"], answer: "Delete one" },
  { q: "MongoDB is schema-less?", options: ["Yes", "No", "Sometimes", "Never"], answer: "Yes" },
  { q: "ObjectId is?", options: ["Primary key", "Foreign key", "Index", "None"], answer: "Primary key" },
  { q: "Embedding means?", options: ["Nested docs", "Reference", "Join", "Index"], answer: "Nested docs" },
  { q: "Referencing means?", options: ["ObjectId link", "Embed", "Copy", "None"], answer: "ObjectId link" },
  { q: "deleteMany() does?", options: ["Delete multiple", "Delete one", "Read", "Update"], answer: "Delete multiple" },
  { q: "countDocuments() returns?", options: ["Number", "Array", "Object", "Boolean"], answer: "Number" },
];

export default function PracticeQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [answers, setAnswers] = useState({}); // 👈 answers store
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTIONS_TIME);
  const [paused, setPaused] = useState(false);

  // ⏱️ TIMER
  useEffect(() => {
    if (finished || paused) return;

    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, paused, finished]);

  // 👉 NEXT
  const handleNext = () => {
    if (selected) {
      setAnswers((prev) => ({ ...prev, [current]: selected }));
    }

    setSelected(answers[current + 1] || "");
    setTimeLeft(QUESTIONS_TIME);

    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
    } else {
      calculateScore();
      setFinished(true);
    }
  };

  // 👈 PREVIOUS
  const handlePrev = () => {
    if (current > 0) {
      setAnswers((prev) => ({ ...prev, [current]: selected }));
      setCurrent((c) => c - 1);
      setSelected(answers[current - 1] || "");
      setTimeLeft(QUESTIONS_TIME);
    }
  };

  // 🧮 SCORE CALCULATION
  const calculateScore = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) s++;
    });
    setScore(s);
  };

  const progress = Math.round(((current + 1) / questions.length) * 100);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white/10 p-8 rounded-xl">

        {!finished ? (
          <>
            {/* HEADER */}
            <div className="flex justify-between mb-3">
              <span>Question {current + 1} / {questions.length}</span>
              <span className={`font-bold ${timeLeft <= 5 ? "text-red-400" : ""}`}>
                ⏱️ {timeLeft}s
              </span>
            </div>

            {/* PROGRESS */}
            <div className="w-full bg-gray-700 h-2 rounded mb-4">
              <div
                className="bg-indigo-500 h-2 rounded"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* QUESTION */}
            <p className="mb-4 font-semibold">{questions[current].q}</p>

            {/* OPTIONS */}
            {questions[current].options.map((opt) => (
              <div
                key={opt}
                onClick={() => setSelected(opt)}
                className={`p-2 border rounded mb-2 cursor-pointer ${
                  selected === opt ? "bg-indigo-600" : ""
                }`}
              >
                {opt}
              </div>
            ))}

            {/* CONTROLS */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={handlePrev}
                disabled={current === 0}
                className="bg-gray-600 px-4 py-2 rounded disabled:opacity-50"
              >
                ⬅️ Previous
              </button>

              <button
                onClick={() => setPaused((p) => !p)}
                className="bg-yellow-600 px-4 py-2 rounded"
              >
                {paused ? "▶️ Resume" : "⏸️ Pause"}
              </button>

              <button
                disabled={!selected}
                onClick={handleNext}
                className="bg-green-600 px-4 py-2 rounded disabled:opacity-50"
              >
                {current + 1 === questions.length ? "Finish" : "Next ➡️"}
              </button>
            </div>
          </>
        ) : (
          <>
            {/* RESULT */}
            <h2 className="text-2xl font-bold text-green-400 mb-2">
              🎉 Quiz Completed
            </h2>
            <p>Correct: {score}</p>
            <p> Wrong: {questions.length - score}</p>
            <p className="font-bold mt-2">
              Score: {score} / {questions.length}
            </p>
          </>
        )}

      </div>
    </div>
  );
}