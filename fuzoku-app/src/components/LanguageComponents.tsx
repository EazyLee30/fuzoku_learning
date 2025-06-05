import React from 'react';
import { Phrase } from '../data';

interface LanguageToggleProps {
  onChange: (language: 'japanese' | 'chinese' | 'romaji') => void;
  currentLanguage: 'japanese' | 'chinese' | 'romaji';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ onChange, currentLanguage }) => {
  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg">
      <button
        className={`px-3 py-1 rounded-md ${
          currentLanguage === 'japanese' ? 'bg-blue-500 text-white' : 'bg-white'
        }`}
        onClick={() => onChange('japanese')}
      >
        日本語
      </button>
      <button
        className={`px-3 py-1 rounded-md ${
          currentLanguage === 'chinese' ? 'bg-blue-500 text-white' : 'bg-white'
        }`}
        onClick={() => onChange('chinese')}
      >
        中文
      </button>
      <button
        className={`px-3 py-1 rounded-md ${
          currentLanguage === 'romaji' ? 'bg-blue-500 text-white' : 'bg-white'
        }`}
        onClick={() => onChange('romaji')}
      >
        Romaji
      </button>
    </div>
  );
};

interface MultilingualTextProps {
  japanese: string;
  chinese: string;
  romaji?: string;
  currentLanguage: 'japanese' | 'chinese' | 'romaji';
  showAll?: boolean;
  className?: string;
}

export const MultilingualText: React.FC<MultilingualTextProps> = ({
  japanese,
  chinese,
  romaji = '',
  currentLanguage,
  showAll = false,
  className = '',
}) => {
  if (showAll) {
    return (
      <div className={`space-y-1 ${className}`}>
        <div className="text-lg font-medium">{japanese}</div>
        <div className="text-md">{chinese}</div>
        {romaji && <div className="text-sm text-gray-500 italic">{romaji}</div>}
      </div>
    );
  }

  return (
    <div className={className}>
      {currentLanguage === 'japanese' && japanese}
      {currentLanguage === 'chinese' && chinese}
      {currentLanguage === 'romaji' && romaji}
    </div>
  );
};

interface PhraseCardProps {
  phrase: Phrase;
  currentLanguage: 'japanese' | 'chinese' | 'romaji';
  showTranslation: boolean;
}

export const PhraseCard: React.FC<PhraseCardProps> = ({ phrase, currentLanguage, showTranslation }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="text-xl font-bold mb-2">
        {currentLanguage === 'japanese' ? phrase.japanese : 
         currentLanguage === 'chinese' ? phrase.chinese : phrase.romaji}
      </div>
      
      {showTranslation && (
        <div className="space-y-2">
          {currentLanguage !== 'japanese' && (
            <div className="text-md">
              <span className="text-gray-500">日本語: </span>
              {phrase.japanese}
            </div>
          )}
          
          {currentLanguage !== 'chinese' && (
            <div className="text-md">
              <span className="text-gray-500">中文: </span>
              {phrase.chinese}
            </div>
          )}
          
          {currentLanguage !== 'romaji' && (
            <div className="text-md italic">
              <span className="text-gray-500">Romaji: </span>
              {phrase.romaji}
            </div>
          )}
        </div>
      )}
      
      {phrase.audio && (
        <button className="mt-2 text-blue-500 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          播放
        </button>
      )}
    </div>
  );
};

interface PerspectiveBadgeProps {
  perspective: 'consumer' | 'provider' | 'both';
}

export const PerspectiveBadge: React.FC<PerspectiveBadgeProps> = ({ perspective }) => {
  let bgColor = '';
  let text = '';
  
  switch (perspective) {
    case 'consumer':
      bgColor = 'bg-green-100 text-green-800';
      text = '消费者视角';
      break;
    case 'provider':
      bgColor = 'bg-purple-100 text-purple-800';
      text = '服务者视角';
      break;
    case 'both':
      bgColor = 'bg-blue-100 text-blue-800';
      text = '双向视角';
      break;
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
      {text}
    </span>
  );
};

interface LevelBadgeProps {
  level: 'beginner' | 'intermediate' | 'advanced';
}

export const LevelBadge: React.FC<LevelBadgeProps> = ({ level }) => {
  let bgColor = '';
  let text = '';
  
  switch (level) {
    case 'beginner':
      bgColor = 'bg-green-100 text-green-800';
      text = '入门级';
      break;
    case 'intermediate':
      bgColor = 'bg-yellow-100 text-yellow-800';
      text = '中级';
      break;
    case 'advanced':
      bgColor = 'bg-red-100 text-red-800';
      text = '高级';
      break;
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
      {text}
    </span>
  );
};
