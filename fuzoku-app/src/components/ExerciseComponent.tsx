import React, { useState } from 'react';
import { Exercise } from '../data';
import { 
  MultilingualText
} from './LanguageComponents';

interface ExerciseComponentProps {
  exercise: Exercise;
  currentLanguage: 'japanese' | 'chinese' | 'romaji';
  onComplete: (isCorrect: boolean) => void;
}

export const ExerciseComponent: React.FC<ExerciseComponentProps> = ({ 
  exercise, 
  currentLanguage,
  onComplete 
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [inputAnswer, setInputAnswer] = useState('');
  
  const handleSubmit = () => {
    let isCorrect = false;
    
    if (exercise.type === 'multiple-choice' || exercise.type === 'listening') {
      isCorrect = selectedOption === exercise.correctAnswer;
    } else if (exercise.type === 'translation') {
      isCorrect = inputAnswer.trim().toLowerCase() === (exercise.correctAnswer as string).toLowerCase();
    } else if (exercise.type === 'matching') {
      // Matching logic would be more complex in a real implementation
      isCorrect = selectedOption === 0; // Simplified for this example
    }
    
    setShowFeedback(true);
    setTimeout(() => {
      onComplete(isCorrect);
      setShowFeedback(false);
      setSelectedOption(null);
      setInputAnswer('');
    }, 1500);
  };
  
  const renderExerciseContent = () => {
    switch (exercise.type) {
      case 'multiple-choice':
      case 'listening':
        return (
          <div className="space-y-4">
            <div className="text-xl font-semibold">
              <MultilingualText
                japanese={exercise.question.japanese}
                chinese={exercise.question.chinese}
                romaji={exercise.question.romaji}
                currentLanguage={currentLanguage}
              />
            </div>
            
            {exercise.options?.map((option, index) => (
              <div 
                key={index}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedOption === index 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedOption(index)}
              >
                <MultilingualText
                  japanese={option.japanese}
                  chinese={option.chinese}
                  romaji={option.romaji || ''}
                  currentLanguage={currentLanguage}
                />
              </div>
            ))}
          </div>
        );
        
      case 'translation':
        return (
          <div className="space-y-4">
            <div className="text-xl font-semibold">
              <MultilingualText
                japanese={exercise.question.japanese}
                chinese={exercise.question.chinese}
                romaji={exercise.question.romaji}
                currentLanguage={currentLanguage}
              />
            </div>
            
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="输入你的答案..."
              value={inputAnswer}
              onChange={(e) => setInputAnswer(e.target.value)}
            />
          </div>
        );
        
      case 'matching':
        return (
          <div className="space-y-4">
            <div className="text-xl font-semibold">
              <MultilingualText
                japanese={exercise.question.japanese}
                chinese={exercise.question.chinese}
                romaji={exercise.question.romaji}
                currentLanguage={currentLanguage}
              />
            </div>
            
            {/* Simplified matching UI for this example */}
            <div className="grid grid-cols-2 gap-4">
              {exercise.options?.map((option, index) => (
                <div 
                  key={index}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedOption === index 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedOption(index)}
                >
                  <div className="font-medium">{option.japanese}</div>
                  <div className="text-sm text-gray-600">{option.chinese}</div>
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return <div>Unsupported exercise type</div>;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {renderExerciseContent()}
      
      <div className="mt-6">
        <button
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={
            (exercise.type === 'multiple-choice' || exercise.type === 'listening' || exercise.type === 'matching') 
              ? selectedOption === null 
              : !inputAnswer.trim()
          }
        >
          提交答案
        </button>
      </div>
      
      {showFeedback && (
        <div className={`mt-4 p-3 rounded-lg ${
          (exercise.type === 'multiple-choice' || exercise.type === 'listening') 
            ? selectedOption === exercise.correctAnswer
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
            : exercise.type === 'translation'
              ? inputAnswer.trim().toLowerCase() === (exercise.correctAnswer as string).toLowerCase()
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
              : 'bg-gray-100'
        }`}>
          {(exercise.type === 'multiple-choice' || exercise.type === 'listening') && (
            selectedOption === exercise.correctAnswer
              ? '正确！'
              : `错误！正确答案是: ${exercise.options?.[exercise.correctAnswer as number]?.[currentLanguage]}`
          )}
          
          {exercise.type === 'translation' && (
            inputAnswer.trim().toLowerCase() === (exercise.correctAnswer as string).toLowerCase()
              ? '正确！'
              : `错误！正确答案是: ${exercise.correctAnswer}`
          )}
          
          {exercise.type === 'matching' && (
            selectedOption === 0 ? '正确！' : '错误！请重试。'
          )}
        </div>
      )}
    </div>
  );
};
