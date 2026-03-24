"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://odomuvbvmhitwxmyjfcn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kb211dmJ2bWhpdHd4bXlqZmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTUwNTUsImV4cCI6MjA4OTkzMTA1NX0.zhWhPosr177zdfpDpFX1JTXDbgc-yGa3GyFrbED1ztM"
);

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

  useEffect(() => {
    if (visible && !dismissed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [visible, dismissed]);

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
      const { error } = await supabase
        .from("emails")
        .insert({ email: email.trim() });

      if (error) throw error;

      setStatus("sent");
      setTimeout(() => handleDismiss(), 2000);
    } catch {
      setStatus("error");
    }
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center px-4" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 relative w-full max-w-[340px] slide-up">
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
