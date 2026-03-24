"use client";

import { useEffect, useState, useRef } from "react";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzNvFJFCqGIWlO6S1yUOwkwMEaUlPZ5SInKee3Xv4VXkQR9mMvp1ss6yOASwJM_5ONUNg/exec";

export default function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("emailPopupDismissed")) {
      setDismissed(true);
      return;
    }
    timerRef.current = setTimeout(() => setVisible(true), 16000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("emailPopupDismissed", "1");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("sending");
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      setStatus("sent");
      setTimeout(() => handleDismiss(), 2000);
    } catch {
      setStatus("error");
    }
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[9998] w-[340px] max-w-[calc(100vw-3rem)] slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 relative">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors text-lg leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Content */}
        <h3 className="text-[15px] font-semibold text-gray-900 leading-tight pr-6 mb-1">
          Want to apply but don&apos;t have a video ready?
        </h3>
        <p className="text-[13px] text-gray-500 mb-4">
          Sign up to stay updated.
        </p>

        {status === "sent" ? (
          <p className="text-[13px] text-green-600 font-medium">Thanks! We&apos;ll keep you posted.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-0 px-3 py-2 text-[13px] rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="shrink-0 px-4 py-2 text-[13px] font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors"
            >
              {status === "sending" ? "..." : "Submit"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-[12px] text-red-500 mt-2">Something went wrong. Try again.</p>
        )}
      </div>
    </div>
  );
}
