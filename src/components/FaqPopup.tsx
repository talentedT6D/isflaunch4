"use client";

import { useEffect } from "react";

const faqs = [
  {
    q: "Who can submit?",
    a: "Anyone and from anywhere. Whether you're already a creator or someone who is just starting out, we love 9:16 video and want everyone to see it. Come on, submit, don't be shy.",
  },
  {
    q: "Does my film need to be unpublished?",
    a: "Yes. Content submitted to ISF must not have been posted on any public platform before — no Instagram, no YouTube, nothing. If it's already out there, it's not eligible.",
  },
  {
    q: "How much does it cost to submit?",
    a: "There's a submission fee per entry. You'll see the exact amount when you hit the submission portal.",
  },
  {
    q: "Can I submit to more than one category?",
    a: "Yes. Each category is a separate submission with a separate fee.",
  },
  {
    q: "What are the categories?",
    a: "Comedy, AI, Edits, Emotional, Food. Pick the one that fits your film best.",
  },
  {
    q: "What's the format?",
    a: "9:16 vertical video. Max 2 minutes. Max 200MB. That's it.",
  },
  {
    q: "When's the deadline?",
    a: "16 April 2026, 11:59 PM IST. Not 11:59:01. Not the next morning.",
  },
  {
    q: "What happens after I submit?",
    a: "Our jury reviews all entries. The shortlist drops on 1 May. If you're on it, you'll hear from us directly and get an invite to the Awards Night on 16 May.",
  },
  {
    q: "Who are the judges?",
    a: "A panel of creators and creatives who actually live on the scroll. More judges are being announced. Keep an eye on our Instagram and X.",
  },
  {
    q: "Can I get a refund?",
    a: "Generally, no — the submission fee is non-refundable. If you have a specific situation, reach out before the deadline and we'll look at it.",
  },
  {
    q: "What happens to my film after submission?",
    a: "You keep all rights to your work. ISF gets a licence to screen it at the festival, post it on our channels, and collaborate with you on social for promotional use. We'll tag you, we'll collab with you, we love collaboration, it's not a one-way street.",
  },
  {
    q: "Are there prizes?",
    a: "Yes. There's a prize pool. The breakdown across categories and how it gets paid out will be announced at the Awards Night.",
  },
  {
    q: "What kind of content will get rejected?",
    a: "Anything with hate speech, nudity, sexual content, or political propaganda. Also anything that's been published before, is plagiarised, or doesn't meet the format specs.",
  },
  {
    q: "I'm under 18. Can I still submit?",
    a: "Yes, but you'll need a parent or guardian's consent before submitting.",
  },
  {
    q: "Where is the Awards Night?",
    a: "Bengaluru. Venue details on the website.",
  },
  {
    q: "How do I get in touch?",
    a: "DM us on Instagram @indianscrollfestival",
  },
];

export default function FaqPopup({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-[720px] mx-4 my-8 md:my-16 p-6 md:p-10"
        style={{
          background: "#000",
          border: "2px solid #ff0000",
          borderRadius: 16,
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl leading-none transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Title */}
        <h2
          className="text-[20px] md:text-[32px] uppercase text-white mb-6 md:mb-10 pr-8"
          style={{ fontFamily: "obviously-extended", fontWeight: 700 }}
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ items */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i}>
              <p
                className="text-[14px] md:text-[18px] text-white mb-1"
                style={{ fontFamily: "obviously", fontWeight: 600 }}
              >
                {faq.q}
              </p>
              <p
                className="text-[13px] md:text-[16px] text-white/70 leading-relaxed"
                style={{ fontFamily: "obviously", fontWeight: 300 }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
