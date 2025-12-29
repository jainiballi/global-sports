
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white uppercase italic">SportPulse <span className="text-indigo-500">Global</span></h1>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider">
            <a href="#" className="text-white hover:text-indigo-400 transition-colors">Live Now</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Schedule</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Popular</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Leagues</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">© 2024 SportPulse Global. Real-time data powered by Google Gemini.</p>
        </div>
      </footer>
    </div>
  );
};
