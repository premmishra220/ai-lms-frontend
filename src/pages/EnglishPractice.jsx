import { useState, useEffect ,useRef} from "react";

const QUESTIONS_TIME = 45;


const speakingQuestions = [
  
  { q: "Tell me about yourself.", hint: "Name, background, skills", sample: "My name is Prem. I am a MERN stack developer with a strong interest in building real-world applications." },
  { q: "How would you describe yourself?", hint: "Personality + skills", sample: "I am a self-motivated and disciplined person who enjoys learning new technologies." },
  { q: "What is your educational background?", hint: "Degree, college", sample: "I have completed my graduation in Information Technology." },
  { q: "Are you a fresher or experienced?", hint: "Be honest", sample: "I am a fresher, but I have worked on multiple practical projects." },
  { q: "What are your career goals?", hint: "Short + long term", sample: "My goal is to become a skilled full stack developer and grow with the company." },
  { q: "Why did you choose the IT field?", hint: "Interest + logic", sample: "I enjoy problem-solving and building applications, which attracted me to IT." },
  { q: "What motivates you?", hint: "Learning, growth", sample: "Learning new skills and improving myself motivates me." },
  { q: "What are your hobbies?", hint: "Simple English", sample: "My hobbies include coding, learning new technologies, and listening to music." },
  { q: "How do you handle pressure?", hint: "Positive answer", sample: "I stay calm, break the problem into steps, and focus on solutions." },
  { q: "Can you work in a team?", hint: "Yes + example", sample: "Yes, I enjoy working in a team and sharing ideas." },

  
  { q: "How was your day?", hint: "Casual response", sample: "It was good. I learned something new today." },
  { q: "Can you explain this again?", hint: "Polite tone", sample: "Could you please explain it once more?" },
  { q: "I did not understand this part.", hint: "Clear communication", sample: "I am a bit confused about this part. Could you clarify?" },
  { q: "What are you working on currently?", hint: "Office style", sample: "I am currently working on a MERN stack project." },
  { q: "Can we discuss this later?", hint: "Professional English", sample: "Can we discuss this later when you are free?" },
  { q: "I will get back to you.", hint: "Office phrase", sample: "Sure, I will get back to you soon." },
  { q: "Thank you for your help.", hint: "Gratitude", sample: "Thank you for your help. I really appreciate it." },
  { q: "Sorry for the delay.", hint: "Apology", sample: "Sorry for the delay. I was working on another task." },
  { q: "Can you help me with this?", hint: "Request", sample: "Could you please help me with this task?" },
  { q: "Let's start the meeting.", hint: "Professional tone", sample: "Let's start the meeting on time." },

  
  { q: "Explain your project in English.", hint: "Problem + solution", sample: "I built a MERN stack LMS where users can buy courses and track progress." },
  { q: "What technologies did you use?", hint: "Tech stack", sample: "I used React for frontend and Node.js with MongoDB for backend." },
  { q: "What was your role in the project?", hint: "Your contribution", sample: "I worked on both frontend and backend development." },
  { q: "What challenges did you face?", hint: "Problem solving", sample: "I faced authentication issues and solved them using JWT." },
  { q: "How did you solve bugs?", hint: "Debugging", sample: "I debugged step by step and checked logs carefully." },
  { q: "What did you learn from this project?", hint: "Learning", sample: "I learned how to build scalable applications." },
  { q: "Explain MERN stack simply.", hint: "Simple English", sample: "MERN stack is used to build full stack web applications using JavaScript." },
  { q: "How do you handle errors?", hint: "Backend logic", sample: "I use try-catch blocks and proper error messages." },
  { q: "What is REST API?", hint: "Simple explanation", sample: "REST API allows communication between frontend and backend." },
  { q: "Why do you like development?", hint: "Interest", sample: "I enjoy creating useful applications that solve problems." },

  
  { q: "How do you handle failure?", hint: "Positive answer", sample: "I learn from my mistakes and try to improve." },
  { q: "How do you manage time?", hint: "Planning", sample: "I plan my tasks and set priorities." },
  { q: "Are you willing to learn new skills?", hint: "Yes + attitude", sample: "Yes, I am always ready to learn new technologies." },
  { q: "How do you handle feedback?", hint: "Professional", sample: "I take feedback positively and work on improvements." },
  { q: "What makes you confident?", hint: "Practice", sample: "Practice and preparation make me confident." },
  { q: "Talk about your strengths.", hint: "Positive", sample: "My strengths are consistency and problem-solving." },
  { q: "Talk about your weaknesses.", hint: "Honest + positive", sample: "I sometimes overthink, but I am learning to manage it." },
  { q: "Why should we hire you?", hint: "Confidence", sample: "I am dedicated, hardworking, and ready to learn." },
  { q: "How do you prepare for interviews?", hint: "Practice", sample: "I practice coding, revise concepts, and speak English daily." },
  { q: "Give a closing statement.", hint: "Thank interviewer", sample: "Thank you for giving me this opportunity." },
];

export default function EnglishPractice() {
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTIONS_TIME);
  const [showSample, setShowSample] = useState(false);

  // 🎙️ Recording
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);

  // 📝 Speech to Text
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);

  // ⏱️ Timer
  useEffect(() => {
    if (timeLeft === 0) return;
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  // 🎙️ Start Recording + Speech Recognition
  const startRecording = async () => {
    setAudioURL(null);
    setTranscript("");
    setFeedback(null);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (e) => {
      audioChunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      setAudioURL(URL.createObjectURL(blob));
    };

    // 🎧 Speech Recognition
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        let text = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          text += event.results[i][0].transcript + " ";
        }
        setTranscript((prev) => prev + text);
      };

      recognitionRef.current = recognition;
      recognition.start();
    }

    mediaRecorder.start();
    setRecording(true);
  };

  // ⏹️ Stop Recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    recognitionRef.current?.stop();
    setRecording(false);

    setTimeout(() => analyzeSpeech(), 500);
  };

  // 🤖 AI-LIKE ANALYSIS (Heuristic)
  const analyzeSpeech = () => {
    const words = transcript.trim().split(/\s+/);
    const fillers = ["um", "uh", "like", "you know"];
    const fillerCount = words.filter((w) =>
      fillers.includes(w.toLowerCase())
    ).length;

    const wordCount = words.length;
    const speedScore = Math.min(100, Math.round((wordCount / 45) * 100));
    const grammarScore = Math.max(100 - fillerCount * 10, 50);

    const fluencyScore = Math.round(
      (speedScore * 0.5 + grammarScore * 0.5)
    );

    setFeedback({
      words: wordCount,
      fillers: fillerCount,
      speedScore,
      grammarScore,
      fluencyScore,
    });
  };

  const next = () => {
    setShowSample(false);
    setTimeLeft(QUESTIONS_TIME);
    setAudioURL(null);
    setTranscript("");
    setFeedback(null);
    if (current + 1 < speakingQuestions.length) setCurrent((c) => c + 1);
  };

  const prev = () => {
    if (current > 0) {
      setShowSample(false);
      setTimeLeft(QUESTIONS_TIME);
      setAudioURL(null);
      setTranscript("");
      setFeedback(null);
      setCurrent((c) => c - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center p-6">
      <div className="max-w-3xl w-full bg-white/10 p-8 rounded-xl">

        <h1 className="text-3xl font-bold text-indigo-400 mb-4">
           English Speaking + AI Feedback
        </h1>

        <div className="flex justify-between mb-4">
          <span>Question {current + 1} / {speakingQuestions.length}</span>
          <span className="font-bold">⏱️ {timeLeft}s</span>
        </div>

        <p className="text-xl font-semibold mb-2">
          {speakingQuestions[current].q}
        </p>
        <p className="text-gray-400 mb-4">
           Hint: {speakingQuestions[current].hint}
        </p>

        {/* 🎙️ Recording */}
        <div className="bg-white/10 p-4 rounded mb-4 text-center">
          {!recording ? (
            <button onClick={startRecording} className="bg-green-600 px-6 py-2 rounded">
              🎙️ Start Recording
            </button>
          ) : (
            <button onClick={stopRecording} className="bg-red-600 px-6 py-2 rounded">
              ⏹️ Stop Recording
            </button>
          )}

          {audioURL && (
            <audio controls src={audioURL} className="w-full mt-3" />
          )}
        </div>

        {/* 📝 Transcript */}
        {transcript && (
          <div className="bg-white/10 p-4 rounded mb-4">
            <p className="font-semibold mb-1">📝 Transcript</p>
            <p className="text-sm text-gray-300">{transcript}</p>
          </div>
        )}

        {/* 🤖 AI Feedback */}
        {feedback && (
          <div className="bg-green-600/20 p-4 rounded mb-4">
            <p className="font-bold mb-2">🤖 AI Feedback</p>
            <p>Words spoken: {feedback.words}</p>
            <p>Filler words: {feedback.fillers}</p>
            <p>Grammar score: {feedback.grammarScore}/100</p>
            <p>Fluency score: <b>{feedback.fluencyScore}/100</b></p>
          </div>
        )}

        {/* Sample */}
        {!showSample ? (
          <button onClick={() => setShowSample(true)} className="bg-indigo-600 px-4 py-2 rounded mb-4">
            Show Sample Answer
          </button>
        ) : (
          <div className="bg-white/10 p-4 rounded mb-4">
            {speakingQuestions[current].sample}
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-4">
          <button onClick={prev} disabled={current === 0} className="bg-gray-600 px-6 py-2 rounded disabled:opacity-50">
            ⬅️ Previous
          </button>
          <button onClick={next} disabled={current === speakingQuestions.length - 1} className="bg-green-600 px-6 py-2 rounded disabled:opacity-50">
            Next ➡️
          </button>
        </div>

      </div>
    </div>
  );
}