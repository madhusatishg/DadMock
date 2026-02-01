'use client';

import React, { useState } from 'react';
import { quizData } from '@/data/quizData';
import QuizCard from './QuizCard';
import ProgressBar from './ProgressBar';
import FinalScore from './FinalScore';
import StartScreen from './StartScreen';

export default function Quiz() {
  const [quizState, setQuizState] = useState<'start' | 'quiz' | 'finished'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleStart = () => {
    setQuizState('quiz');
  };

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    setAnsweredCount(prev => prev + 1);
    
    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizState('finished');
    }
  };

  const handleRestart = () => {
    setQuizState('start');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setAnsweredCount(0);
  };

  if (quizState === 'start') {
    return <StartScreen onStart={handleStart} totalQuestions={quizData.length} />;
  }

  if (quizState === 'finished') {
    return <FinalScore score={score} total={quizData.length} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen p-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black gradient-text mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Insurance Quiz Master
          </h1>
          <p className="text-gray-400">
            Test your knowledge of insurance concepts
          </p>
        </div>

        <ProgressBar 
          current={answeredCount} 
          total={quizData.length} 
          correct={score}
        />

        <QuizCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          isAnswered={isAnswered}
        />

        {isAnswered && (
          <div className="mt-6 flex justify-end animate-fadeInUp">
            <button
              onClick={handleNext}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              {currentQuestionIndex < quizData.length - 1 ? (
                <>
                  Next Question
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              ) : (
                <>
                  View Results
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
