import { motion } from "framer-motion";
import { Download, Award, Star, CheckCircle } from "lucide-react";

export default function Certificate() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const shimmer = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 4, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        padding: "40px 20px",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.4,
          }}
          style={{
            position: "fixed",
            width: i % 3 === 0 ? 8 : 5,
            height: i % 3 === 0 ? 8 : 5,
            borderRadius: "50%",
            background: i % 2 === 0 ? "#FFD700" : "#C084FC",
            left: `${8 + i * 7.5}%`,
            top: `${10 + (i % 5) * 18}%`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          background: "linear-gradient(145deg, #1a1a2e, #16213e, #0f3460)",
          maxWidth: "1000px",
          width: "100%",
          borderRadius: "24px",
          padding: "0",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,215,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Gold border overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "24px",
            background: "transparent",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />

        {/* Decorative corner ornaments */}
        {["top-left", "top-right", "bottom-left", "bottom-right"].map(
          (pos, idx) => (
            <div
              key={pos}
              style={{
                position: "absolute",
                [pos.includes("top") ? "top" : "bottom"]: 16,
                [pos.includes("left") ? "left" : "right"]: 16,
                width: 60,
                height: 60,
                borderTop: pos.includes("top")
                  ? "3px solid #FFD700"
                  : "none",
                borderBottom: pos.includes("bottom")
                  ? "3px solid #FFD700"
                  : "none",
                borderLeft: pos.includes("left")
                  ? "3px solid #FFD700"
                  : "none",
                borderRight: pos.includes("right")
                  ? "3px solid #FFD700"
                  : "none",
                borderRadius:
                  idx === 0
                    ? "8px 0 0 0"
                    : idx === 1
                    ? "0 8px 0 0"
                    : idx === 2
                    ? "0 0 0 8px"
                    : "0 0 8px 0",
                zIndex: 5,
                opacity: 0.8,
              }}
            />
          )
        )}

        {/* Top gradient strip */}
        <div
          style={{
            height: 6,
            background:
              "linear-gradient(90deg, #FFD700, #FFA500, #FF6B6B, #C084FC, #60A5FA, #FFD700)",
            backgroundSize: "200% 100%",
          }}
        />

        <div style={{ padding: "48px 56px 40px" }}>
          {/* Header */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #FFD700, #FFA500)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(255,215,0,0.4)",
                }}
              >
                <Award size={28} color="#1a1a2e" />
              </motion.div>
              <div>
                <h1
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#FFD700",
                    margin: 0,
                    letterSpacing: 1,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  AI LMS Academy
                </h1>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontFamily: "sans-serif",
                  }}
                >
                  Excellence in Education
                </p>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  background: "rgba(255,215,0,0.1)",
                  border: "1px solid rgba(255,215,0,0.3)",
                  borderRadius: 8,
                  padding: "8px 16px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontFamily: "sans-serif",
                  }}
                >
                  Certificate ID
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "#FFD700",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  AI-LMS-2026-001
                </p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={item}
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)",
              marginBottom: 48,
            }}
          />

          {/* Body */}
          <motion.div variants={item} style={{ textAlign: "center" }}>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 13,
                letterSpacing: 5,
                textTransform: "uppercase",
                margin: "0 0 16px",
                fontFamily: "sans-serif",
              }}
            >
              This is to proudly certify that
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{ marginBottom: 20 }}
            >
              <h3
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  margin: 0,
                  background:
                    "linear-gradient(135deg, #FFD700 0%, #FFA500 40%, #FF6B6B 70%, #C084FC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.15,
                  fontFamily: "'Georgia', serif",
                  letterSpacing: -1,
                }}
              >
                Prem Mishra
              </h3>
            </motion.div>

            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                margin: "0 0 12px",
                fontSize: 16,
                fontFamily: "sans-serif",
              }}
            >
              has successfully completed the course
            </p>

            <motion.div
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(135deg, rgba(255,215,0,0.08), rgba(192,132,252,0.08))",
                border: "1px solid rgba(255,215,0,0.25)",
                borderRadius: 16,
                padding: "14px 40px",
                marginBottom: 40,
              }}
            >
              <h4
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  margin: 0,
                  color: "#fff",
                  letterSpacing: 0.5,
                  fontFamily: "'Georgia', serif",
                }}
              >
                MERN Stack Mastery 💻
              </h4>
            </motion.div>

            {/* Skills badges */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 40,
              }}
            >
              {["MongoDB", "Express.js", "React", "Node.js", "REST APIs"].map(
                (skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(96,165,250,0.15), rgba(192,132,252,0.15))",
                      border: "1px solid rgba(96,165,250,0.3)",
                      color: "#93C5FD",
                      padding: "5px 14px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontFamily: "sans-serif",
                      letterSpacing: 0.5,
                      cursor: "default",
                    }}
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={item}
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)",
              marginBottom: 36,
            }}
          />

          {/* Footer */}
          <motion.div
            variants={item}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                }}
              >
                Issued On
              </p>
              <p
                style={{
                  margin: 0,
                  color: "#FFD700",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                January 2026
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              {/* Seal */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{
                  width: 80,
                  height: 80,
                  margin: "0 auto 8px",
                  borderRadius: "50%",
                  background:
                    "conic-gradient(#FFD700 0deg, #FFA500 40deg, #FFD700 80deg, #FFA500 120deg, #FFD700 160deg, #FFA500 200deg, #FFD700 240deg, #FFA500 280deg, #FFD700 320deg, #FFA500 360deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 0 30px rgba(255,215,0,0.3), 0 0 60px rgba(255,165,0,0.1)",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #1a1a2e, #0f3460)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle size={30} color="#FFD700" />
                </div>
              </motion.div>
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                }}
              >
                Official Seal
              </p>
            </div>

            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                }}
              >
                Certificate No
              </p>
              <p
                style={{
                  margin: 0,
                  color: "#FFD700",
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: "monospace",
                }}
              >
                #AI2026
              </p>
            </div>
          </motion.div>

          {/* Signature area */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 28,
              paddingRight: 20,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: 28,
                  color: "rgba(255,215,0,0.7)",
                  marginBottom: 4,
                  letterSpacing: 2,
                  fontStyle: "italic",
                }}
              >
                AI LMS Academy
              </div>
              <div
                style={{
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)",
                  marginBottom: 6,
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                }}
              >
                Authorized Signature
              </p>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            variants={item}
            style={{ display: "flex", justifyContent: "center", marginTop: 44 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255,215,0,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background:
                  "linear-gradient(135deg, #FFD700, #FFA500)",
                color: "#1a1a2e",
                border: "none",
                padding: "16px 40px",
                borderRadius: 50,
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: 0.5,
                fontFamily: "sans-serif",
                boxShadow:
                  "0 8px 32px rgba(255,165,0,0.35), 0 0 0 1px rgba(255,215,0,0.3)",
              }}
            >
              <Download size={20} />
              Download Certificate
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom gradient strip */}
        <div
          style={{
            height: 4,
            background:
              "linear-gradient(90deg, #FFD700, #FFA500, #FF6B6B, #C084FC, #60A5FA, #FFD700)",
          }}
        />
      </motion.div>
    </div>
  );
}