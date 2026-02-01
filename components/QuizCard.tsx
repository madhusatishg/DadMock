'use client';

import React from 'react';
import { Question } from '@/data/quizData';

interface QuizCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
  isAnswered: boolean;
}

export default function QuizCard({ 
  question, 
  selectedAnswer, 
  onSelectAnswer,
  isAnswered 
}: QuizCardProps) {
  
  const getOptionClassName = (option: string) => {
    const baseClasses = "w-full text-left p-4 rounded-xl transition-all duration-300 border-2 cursor-pointer mb-3";
    
    if (!isAnswered) {
      return `${baseClasses} border-gray-700 bg-gray-800/50 hover:border-cyan-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20`;
    }
    
    const isCorrect = option === question.correctAnswer;
    const isSelected = option === selectedAnswer;
    
    if (isCorrect) {
      return `${baseClasses} border-green-500 bg-green-500/20 shadow-lg shadow-green-500/30`;
    }
    
    if (isSelected && !isCorrect) {
      return `${baseClasses} border-red-500 bg-red-500/20 shadow-lg shadow-red-500/30`;
    }
    
    return `${baseClasses} border-gray-700 bg-gray-800/30 opacity-50`;
  };

  const getOptionIcon = (option: string) => {
    if (!isAnswered) return null;
    
    const isCorrect = option === question.correctAnswer;
    const isSelected = option === selectedAnswer;
    
    if (isCorrect) {
      return (
        <span className="text-green-500 text-xl font-bold">✓</span>
      );
    }
    
    if (isSelected && !isCorrect) {
      return (
        <span className="text-red-500 text-xl font-bold">✗</span>
      );
    }
    
    return null;
  };

  return (
    <div className="card p-8 animate-fadeInUp">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-sm font-semibold">
            Question {question.id}
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-white leading-relaxed">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isAnswered && onSelectAnswer(option)}
            disabled={isAnswered}
            className={getOptionClassName(option)}
          >
            <div className="flex items-center justify-between">
              <span className="text-base">{option}</span>
              {getOptionIcon(option)}
            </div>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700 animate-slideIn">
          <h3 className="text-cyan-400 font-semibold text-lg mb-3 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Explanation
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
