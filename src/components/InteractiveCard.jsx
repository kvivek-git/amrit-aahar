import React, { useState, useRef, useEffect } from 'react';

export default function InteractiveCard() {
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [flashcardType, setFlashcardType] = useState(null); // New
  const intervalRef = useRef(null);
  const overlayRef = useRef(null);

  const flashcardsMap = {
    protein: [
      {
        title: '',
        content: (
          <>
            <p className="mb-2 text-[#5E412E]">
              At its core, a protein is a molecule made up of amino acids. There are 20 standard amino acids, and the way they are arranged determines the protein's function.
            </p>
            <br />
            <p className="mb-2 text-[#5E412E]">
              <strong>Essential Amino Acids:</strong> - Cannot be produced by the body and must come from diet (e.g., leucine, isoleucine, valine etc).
            </p>
            <br />
            <p className="mb-2 text-[#5E412E]">
              <strong>Non-Essential Amino Acids:</strong> - Can be synthesized by the body (e.g., alanine, asparagine etc). Remember Pre-workout?.
            </p>
            <br />
            <p className="text-[#5E412E]">
              <strong>Conditionally Essential Amino Acids:</strong> - Usually produced by the body but may be required in higher amounts during stress or illness (e.g., arginine Remember Pre-workout?).
            </p>
          </>
        ),
      },
      {
        title: '',
        content: (
          <>
            <ol className="list-decimal list-inside mb-4">
              <li className='font-bold text-[#5E412E]'>
                Structural Proteins
                <ul className="list-disc font-normal list-inside ml-4 text-sm text-[#5E412E]">
                  <br />
                  <li><strong>Collagen - </strong> Found in skin, tendons, and bones; gives strength and elasticity</li>
                  <li><strong>Keratin - </strong> Found in hair and nails; makes them tough and waterproof</li>
                  <li><strong>Elastin - </strong> Elastin-Helps tissues like skin ond lungs stretch and return to shape</li>
                </ul>
              </li>
              <br />
              <li className='font-bold text-[#5E412E]'>
                Transport Proteins
                <ul className="list-disc font-normal list-inside ml-4 text-sm text-[#5E412E]">
                  <br />
                  <li><strong>Haemoglobin - </strong> Transports oxygen in the blood.</li>
                  <li><strong>Albumin - </strong> Carries hormones and nutrients in the bloodstream</li>
                  <li><strong>Myoglobin - </strong> Stores oxygen in muscles for endurance</li>
                </ul>
              </li>
            </ol>
          </>
        ),
      },
      {
        title: 'Is Roti Enough?',
        content: 'Regular roti lacks essential amino acids. Our blend makes it a complete protein source.',
      },
    ],
    flour: [
      {
        title: 'Convenience',
        content: (
          <>
            <p className="mb-2 text-[#5E412E]">
              Most diets fail because they ask for too much change
            </p>
            <br />
            <p className="mb-2 text-[#5E412E]">
              Rotis/ Paranthas/ Chapatis/ Theplas are already part of the Indian plate. Amrit Aahaar - High Protein Atta simply upgrades it with purpose within the same caloric intake
            </p>
            <br />
            <p className="mb-2 text-[#5E412E]">
              It fits right into your life effortlessly. No new recipes, no complicated meal planning, no pills, no drama
            </p>
            <br />
            <p className="text-[#5E412E]">
              Just pair with your favorite dal, sabzi, or curry and that's 42gm of High Quality Protein from just 6 rotis daily right there.
            </p>
            <br />
            <p className="text-[#5E412E]">
            Want to upgrade it to {">"} 100gm daily?, We've took care of that too. Save our simple meals suggestions,
            </p>
          </>
        ),
      },
      {
        title: 'Plant Protein vs Animal?',
        content: 'When combined well, plant proteins can be just as effective as animal protein.',
      },
      {
        title: 'How Is This Different?',
        content: 'It’s designed for digestibility and includes all 9 essential amino acids.',
      },
    ],
  };

  const flashcards = flashcardsMap[flashcardType] || [];

  // Auto-scroll logic
  useEffect(() => {
    if (showFlashcards && flashcards.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentCard((prev) => (prev + 1) % flashcards.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [showFlashcards, flashcards.length]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setShowFlashcards(false);
        clearInterval(intervalRef.current);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAEFE5] flex flex-col items-center justify-center p-6">
      {/* Main Card */}
      <div className={`p-6 mx-6 rounded-xl bg-[#5E412E] shadow-lg transition duration-300 max-w-4xl w-full ${showFlashcards ? 'blur-sm pointer-events-none' : ''}`}>
        <h2 className="text-2xl text-white font-bold mb-2 text-center">THE BASICS, FIRST.</h2>
        <h1 className="text-2xl text-white mb-6 text-center">Protein from rotis? ..........sounds impossible, right?</h1>

        <div className="flex flex-col md:flex-row md:items-start gap-6 w-full">
          {/* Text Section */}
          <div className="flex-1 min-w-0">
            <p className="mb-4 text-white">
              But your body doesn't think in terms of whey or eggs or shakes. Once your food is digested, it breaks down into amino acids — and that's what your muscles are really waiting for.
            </p>
            <p className="mb-4 text-white">
              So we built Amrit Aahaar, a High-Quality Protein Flour backed by science — a blend of carefully chosen ingredients designed to feed your muscles straight from your plate.
            </p>
            <p className="mb-4 text-white">
              Also, protein isn't just for bodybuilders — it's the foundation of life. From building muscle and supporting digestion to keeping your skin, hair, and immune system healthy, protein is involved in almost everything your body does.
            </p>
            <p className="mb-4 text-white">
              Our high-protein flour is thoughtfully blended to give you a complete protein with all 9 essential amino acids in the proportions your body actually needs — EVERYDAY.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-auto flex justify-center md:block">
            <img
              src="/chapati.png"
              alt="Half Roti"
              className="w-40 md:w-48 lg:w-56 object-contain rounded-2xl"
            />
          </div>
        </div>

      </div>

      {/* Trigger Buttons */}
      <div className="m-6 flex flex-wrap gap-4 w-full max-w-md px-4 z-10">
        <button
          onClick={() => {
            setFlashcardType('protein');
            setCurrentCard(0);
            setShowFlashcards(true);
          }}
          className="cursor-pointer flex-1 py-2 bg-[#5E412E] text-white rounded-full text-sm sm:text-base"
        >
          How Protein Works?
        </button>
        <button
          onClick={() => {
            setFlashcardType('flour');
            setCurrentCard(0);
            setShowFlashcards(true);
          }}
          className="cursor-pointer flex-1 py-2 bg-[#5E412E] text-white rounded-full text-sm sm:text-base"
        >
          Why Flour?
        </button>
      </div>

      {/* Flashcards Overlay */}
      {showFlashcards && (
        <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            ref={overlayRef}
            className="bg-white p-6 rounded-xl w-[90%] max-w-2xl shadow-xl flex flex-col items-center"
          >
            <h3 className="font-bold text-[#5E412E] text-xl mb-4">{flashcards[currentCard].title}</h3>
            <div className="text-gray-800 mb-6 text-base">{flashcards[currentCard].content}</div>

            {/* Dot Indicators */}
            <div className="flex gap-2 mt-4">
              {flashcards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    clearInterval(intervalRef.current);
                    setCurrentCard(index);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    index === currentCard ? 'bg-[#5E412E]' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
