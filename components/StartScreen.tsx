'use client';

import React from 'react';

interface StartScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

export default function StartScreen({ onStart, totalQuestions }: StartScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="card p-10 text-center animate-fadeInUp">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            
            <h1 className="text-6xl font-black gradient-text mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Insurance Quiz
            </h1>
            <h2 className="text-3xl font-bold text-white mb-3">
              Master
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Test your knowledge of insurance concepts, principles, and regulations. 
              Answer all questions and see how well you understand the insurance industry.
            </p>
          </div>

          <div className="mb-8 p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {totalQuestions}
                </div>
                <div className="text-sm text-gray-400">Total Questions</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold gradient-text mb-2">
                  5
                </div>
                <div className="text-sm text-gray-400">Options Each</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold gradient-text mb-2">
                  ∞
                </div>
                <div className="text-sm text-gray-400">No Time Limit</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 text-left p-4 bg-gray-800/30 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-cyan-400 text-lg">✓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Instant Feedback</h3>
                <p className="text-gray-400 text-sm">Get immediate results after each answer with detailed explanations</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 text-left p-4 bg-gray-800/30 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-400 text-lg">📊</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Track Progress</h3>
                <p className="text-gray-400 text-sm">Monitor your performance with real-time statistics</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-left p-4 bg-gray-800/30 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-400 text-lg">🎯</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Learn & Improve</h3>
                <p className="text-gray-400 text-sm">Detailed explanations help you understand concepts better</p>
              </div>
            </div>
          </div>

          <button
            onClick={onStart}
            className="w-full py-5 px-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xl font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Start Quiz
          </button>

          <p className="mt-6 text-gray-500 text-sm">
            Take your time and read each question carefully
          </p>
        </div>
      </div>
    </div>
  );
}
