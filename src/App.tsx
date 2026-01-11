import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomCTA } from './components/MobileBottomCTA';
import { HomePage } from './components/pages/HomePage';
import { CoursesPage } from './components/pages/CoursesPage';
import { CourseDetailPage } from './components/pages/CourseDetailPage';
import { FacultyPage } from './components/pages/FacultyPage';
import { StudentsPage } from './components/pages/StudentsPage';
import { ContactPage } from './components/pages/ContactPage';
import { ChordsPage } from './components/pages/ChordsPage';
import { SongDetailPage } from './components/pages/SongDetailPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { ResourceDetailPage } from './components/pages/ResourceDetailPage';
import { CollectionsPage } from './components/pages/CollectionsPage';
import { CollectionDetailPage } from './components/pages/CollectionDetailPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourseId, setSelectedCourseId] = useState('guitar');
  const [selectedSongId, setSelectedSongId] = useState('tum-hi-ho');
  const [selectedResourceId, setSelectedResourceId] = useState('');
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  const handleNavigate = (page: string, id?: string) => {
    setCurrentPage(page);
    if (page === 'course-detail' && id) {
      setSelectedCourseId(id);
    }
    if (page === 'song-detail' && id) {
      setSelectedSongId(id);
    }
    if (page === 'resource-detail' && id) {
      setSelectedResourceId(id);
    }
    if (page === 'collection-detail' && id) {
      setSelectedCollectionId(id);
    }
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'courses':
        return <CoursesPage onNavigate={handleNavigate} />;
      case 'course-detail':
        return <CourseDetailPage courseId={selectedCourseId} onNavigate={handleNavigate} />;
      case 'faculty':
        return <FacultyPage onNavigate={handleNavigate} />;
      case 'students':
        return <StudentsPage onNavigate={handleNavigate} />;
      case 'chords':
        return <ChordsPage onNavigate={handleNavigate} />;
      case 'song-detail':
        return <SongDetailPage songId={selectedSongId} onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} />;
      case 'resource-detail':
        return <ResourceDetailPage resourceId={selectedResourceId} onNavigate={handleNavigate} />;
      case 'collections':
        return <CollectionsPage onNavigate={handleNavigate} />;
      case 'collection-detail':
        return <CollectionDetailPage collectionId={selectedCollectionId} onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-xl focus:shadow-lg focus:ring-4 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        Skip to main content
      </a>

      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
      <MobileBottomCTA onBookDemo={() => handleNavigate('contact')} />
    </div>
  );
}