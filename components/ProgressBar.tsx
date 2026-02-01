'use client';

import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  correct: number;
}

export default function ProgressBar({ current, total, correct }: ProgressBarProps) {
  const percentage = (current / total) * 100;
  const accuracy = current > 0 ? (correct / current) * 100 : 0;

  return (
    <div className="card p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Progress
          </h3>
          <p className="text-sm text-gray-400">
            Question {current} of {total}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold gradient-text">
            {correct}/{current}
          </div>
          <p className="text-sm text-gray-400">
            {accuracy.toFixed(0)}% Correct
          </p>
        </div>
      </div>

      <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center p-3 bg-gray-800/50 rounded-lg">
          <div className="text-cyan-400 text-xl font-bold">{correct}</div>
          <div className="text-xs text-gray-400">Correct</div>
        </div>
        <div className="text-center p-3 bg-gray-800/50 rounded-lg">
          <div className="text-red-400 text-xl font-bold">{current - correct}</div>
          <div className="text-xs text-gray-400">Wrong</div>
        </div>
        <div className="text-center p-3 bg-gray-800/50 rounded-lg">
          <div className="text-purple-400 text-xl font-bold">{total - current}</div>
          <div className="text-xs text-gray-400">Remaining</div>
        </div>
      </div>
    </div>
  );
}
