'use client';

import React from 'react';

interface FinalScoreProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export default function FinalScore({ score, total, onRestart }: FinalScoreProps) {
  const percentage = (score / total) * 100;
  
  const getGrade = () => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-400', message: 'Outstanding!' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-400', message: 'Excellent!' };
    if (percentage >= 70) return { grade: 'B', color: 'text-cyan-400', message: 'Great job!' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-400', message: 'Good effort!' };
    if (percentage >= 50) return { grade: 'D', color: 'text-orange-400', message: 'Keep practicing!' };
    return { grade: 'F', color: 'text-red-400', message: 'Need more study!' };
  };

  const gradeInfo = getGrade();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="card p-10 text-center animate-fadeInUp">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold gradient-text mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quiz Complete!
            </h1>
            <p className="text-gray-400 text-lg">
              {gradeInfo.message}
            </p>
          </div>

          <div className="mb-8 p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
            <div className="mb-6">
              <div className={`text-8xl font-bold ${gradeInfo.color} mb-2`} style={{ fontFamily: 'Playfair Display, serif' }}>
                {gradeInfo.grade}
              </div>
              <div className="text-gray-400 text-sm">Your Grade</div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-4xl font-bold text-white mb-1">
                  {score}
                </div>
                <div className="text-sm text-gray-400">Correct Answers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">
                  {percentage.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
            </div>

            <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={onRestart}
              className="w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Take Quiz Again
            </button>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-green-400">{score}</div>
                <div className="text-xs text-gray-400">Correct</div>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-red-400">{total - score}</div>
                <div className="text-xs text-gray-400">Wrong</div>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">{total}</div>
                <div className="text-xs text-gray-400">Total</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>Study hard and try again to improve your score!</p>
        </div>
      </div>
    </div>
  );
}
