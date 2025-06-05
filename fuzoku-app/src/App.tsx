import React, { useState } from 'react';
import { courses, Phrase, Course, Lesson } from './data';
import { 
  LanguageToggle, 
  MultilingualText, 
  PhraseCard, 
  PerspectiveBadge, 
  LevelBadge 
} from './components/LanguageComponents';
import { ExerciseComponent } from './components/ExerciseComponent';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'japanese' | 'chinese' | 'romaji'>('chinese');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [showTranslation, setShowTranslation] = useState(true);
  const [currentView, setCurrentView] = useState<'phrases' | 'exercises'>('phrases');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [exerciseResults, setExerciseResults] = useState<boolean[]>([]);
  
  const handleLanguageChange = (language: 'japanese' | 'chinese' | 'romaji') => {
    setCurrentLanguage(language);
  };
  
  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
    setSelectedLesson(null);
  };
  
  const handleLessonSelect = (lessonId: string) => {
    setSelectedLesson(lessonId);
    setCurrentView('phrases');
    setCurrentExerciseIndex(0);
    setExerciseResults([]);
  };
  
  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setSelectedLesson(null);
  };
  
  const handleBackToLessons = () => {
    setSelectedLesson(null);
  };
  
  const handleExerciseComplete = (isCorrect: boolean) => {
    setExerciseResults([...exerciseResults, isCorrect]);
    
    const currentLesson = courses
      .find((course: Course) => course.id === selectedCourse)
      ?.lessons.find((lesson: Lesson) => lesson.id === selectedLesson);
      
    if (currentLesson && currentExerciseIndex < currentLesson.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      // All exercises completed
      setTimeout(() => {
        alert('恭喜！你已完成所有练习！');
        setCurrentView('phrases');
      }, 500);
    }
  };
  
  const renderCourseList = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course: Course) => (
          <div 
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleCourseSelect(course.id)}
          >
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">
                {course.image ? '图片' : '课程图片'}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                <MultilingualText
                  japanese={course.title.japanese}
                  chinese={course.title.chinese}
                  currentLanguage={currentLanguage}
                />
              </h3>
              <p className="text-gray-600">
                <MultilingualText
                  japanese={course.description.japanese}
                  chinese={course.description.chinese}
                  currentLanguage={currentLanguage}
                />
              </p>
              <div className="mt-3 text-sm text-blue-500">
                {course.lessons.length} 课时
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  const renderLessonList = () => {
    const selectedCourseData = courses.find((course: Course) => course.id === selectedCourse);
    
    if (!selectedCourseData) return null;
    
    return (
      <div>
        <div className="mb-6">
          <button 
            className="flex items-center text-blue-500 hover:text-blue-700"
            onClick={handleBackToCourses}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            返回课程列表
          </button>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">
          <MultilingualText
            japanese={selectedCourseData.title.japanese}
            chinese={selectedCourseData.title.chinese}
            currentLanguage={currentLanguage}
          />
        </h2>
        
        <div className="space-y-4">
          {selectedCourseData.lessons.map((lesson: Lesson) => (
            <div 
              key={lesson.id}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => handleLessonSelect(lesson.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <MultilingualText
                      japanese={lesson.title.japanese}
                      chinese={lesson.title.chinese}
                      currentLanguage={currentLanguage}
                    />
                  </h3>
                  <p className="text-gray-600 mb-3">
                    <MultilingualText
                      japanese={lesson.description.japanese}
                      chinese={lesson.description.chinese}
                      currentLanguage={currentLanguage}
                    />
                  </p>
                  <div className="flex space-x-2">
                    <PerspectiveBadge perspective={lesson.perspective} />
                    <LevelBadge level={lesson.level} />
                  </div>
                </div>
                <div className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const renderLessonContent = () => {
    const selectedCourseData = courses.find((course: Course) => course.id === selectedCourse);
    const selectedLessonData = selectedCourseData?.lessons.find((lesson: Lesson) => lesson.id === selectedLesson);
    
    if (!selectedCourseData || !selectedLessonData) return null;
    
    return (
      <div>
        <div className="mb-6">
          <button 
            className="flex items-center text-blue-500 hover:text-blue-700"
            onClick={handleBackToLessons}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            返回课程
          </button>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            <MultilingualText
              japanese={selectedLessonData.title.japanese}
              chinese={selectedLessonData.title.chinese}
              currentLanguage={currentLanguage}
            />
          </h2>
          <p className="text-gray-600 mb-4">
            <MultilingualText
              japanese={selectedLessonData.description.japanese}
              chinese={selectedLessonData.description.chinese}
              currentLanguage={currentLanguage}
            />
          </p>
          <div className="flex space-x-2 mb-4">
            <PerspectiveBadge perspective={selectedLessonData.perspective} />
            <LevelBadge level={selectedLessonData.level} />
          </div>
        </div>
        
        <div className="flex border-b mb-6">
          <button
            className={`py-2 px-4 font-medium ${
              currentView === 'phrases' 
                ? 'text-blue-500 border-b-2 border-blue-500' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setCurrentView('phrases')}
          >
            学习短语
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              currentView === 'exercises' 
                ? 'text-blue-500 border-b-2 border-blue-500' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setCurrentView('exercises')}
          >
            练习
          </button>
        </div>
        
        {currentView === 'phrases' ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">短语列表</h3>
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                    checked={showTranslation}
                    onChange={() => setShowTranslation(!showTranslation)}
                  />
                  <span className="ml-2 text-gray-700">显示翻译</span>
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedLessonData.phrases.map((phrase: Phrase, index: number) => (
                <PhraseCard
                  key={index}
                  phrase={phrase}
                  currentLanguage={currentLanguage}
                  showTranslation={showTranslation}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">练习 {currentExerciseIndex + 1}/{selectedLessonData.exercises.length}</h3>
                <div className="flex space-x-1">
                  {exerciseResults.map((result, index) => (
                    <div 
                      key={index}
                      className={`w-3 h-3 rounded-full ${result ? 'bg-green-500' : 'bg-red-500'}`}
                    />
                  ))}
                  {Array(selectedLessonData.exercises.length - exerciseResults.length).fill(0).map((_, index) => (
                    <div 
                      key={`empty-${index}`}
                      className="w-3 h-3 rounded-full bg-gray-300"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <ExerciseComponent
              exercise={selectedLessonData.exercises[currentExerciseIndex]}
              currentLanguage={currentLanguage}
              onComplete={handleExerciseComplete}
            />
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">日语学习</h1>
            <LanguageToggle
              onChange={handleLanguageChange}
              currentLanguage={currentLanguage}
            />
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedCourse && renderCourseList()}
        {selectedCourse && !selectedLesson && renderLessonList()}
        {selectedCourse && selectedLesson && renderLessonContent()}
      </main>
      
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500">
            日本风俗店日语学习应用 © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
