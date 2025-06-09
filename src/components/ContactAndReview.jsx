import React, { useState } from "react";

export default function ContactAndReview() {
  const [reviewText, setReviewText] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  return (
    <div className="bg-[#FAEFE5] min-h-screen py-10 px-4 flex flex-col items-center text-[#5E412E]">
      
      {/* SHOP NOW Button */}
      <button className="bg-[#5E412E] text-white px-6 py-2 rounded-full text-lg font-semibold mb-24">
        SHOP NOW
      </button>


      {/* Form 1 - Review */}
      <div className=" w-full max-w-xl rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold mb-2">
        • For Partnerships, Business-related queries write to us at{" "}
          <span className="font-semibold">business@amritaahaar.com</span> or call us at{" "}
          <span className="font-semibold">+91 9902779913</span> or drop a note below
        </h2>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md bg-white resize-none min-h-[120px]"
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="flex justify-end">
            <button
                disabled={reviewText.length < 50}
                className={`mt-4 px-6 py-2 rounded-full font-semibold ${
                reviewText.length >= 50
                    ? "bg-[#5E412E] text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
                Submit
            </button>
        </div>
      </div>

      {/* Form 2 - Feedback */}
      <div className=" w-full max-w-xl rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-2">
        • Already tried Amrit Ashaar-High Protein Atza? Please leave us a review below
        </h2>
        <textarea
          className="w-full p-3 border border-gray-300 bg-white rounded-md resize-none min-h-[120px]"
          placeholder="Share your feedback..."
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        />
        <div className="flex justify-end">
            <button
            disabled={feedbackText.length < 50}
            className={`mt-4 px-6 py-2 rounded-full font-semibold ${
                feedbackText.length >= 50
                ? "bg-[#5E412E] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            >
            Submit
            </button>
        </div>
      </div>
      <h2 className="text-lg max-w-xl font-bold mb-2 p-6">
        • For Other Feedbacks & Suggestions write to us at support@amritaahaar.com
        </h2>
        <div className="flex justify-center">
            <img src="/forest.png" alt="Feedback" className=" max-w-2xl h-64 mt-10 mb-4" />
        </div>
        
    </div>
  );
}
