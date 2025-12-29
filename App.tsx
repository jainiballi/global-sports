
import React, { useState, useCallback, useEffect } from 'react';
import { Layout } from './components/Layout';
import { SearchBar } from './components/SearchBar';
import { SourceLinks } from './components/SourceLinks';
import { searchSports } from './services/geminiService';
import { SearchResult } from './types';

const App: React.FC = () => {
  const [result, setResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async (query: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await searchSports(query);
      setResult(data);
    } catch (err) {
      setError('Failed to fetch sports data. Please check your API key or try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial load with trending sports
  useEffect(() => {
    handleSearch("trending live sports today");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden pt-16 pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase italic tracking-tighter mb-4">
              Real-time <span className="text-indigo-500">Global</span> Action
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Find live scores, upcoming matches, and trending tournaments from every corner of the planet. Powered by Gemini AI.
            </p>
          </div>

          <SearchBar onSearch={handleSearch} isLoading={isLoading} />

          {error && (
            <div className="mt-8 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-center">
              {error}
            </div>
          )}

          <div className="mt-12">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-20">
                <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
                <p className="text-slate-400 font-medium animate-pulse">Scanning world sports networks...</p>
              </div>
            ) : result ? (
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-sm">
                <div className="prose prose-invert max-w-none">
                  {/* Summary Rendering - using simple formatting for AI text */}
                  <div className="text-slate-200 leading-relaxed text-lg whitespace-pre-wrap">
                    {result.summary}
                  </div>
                </div>
                
                <SourceLinks sources={result.sources} />
              </div>
            ) : (
              <div className="text-center py-20 text-slate-500">
                <p>Enter a sport, team, or athlete to get started.</p>
              </div>
            )}
          </div>

          {/* Featured Categories */}
          {!result && !isLoading && (
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Champions League', icon: '⚽' },
                { name: 'NBA Playoffs', icon: '🏀' },
                { name: 'Grand Slam', icon: '🎾' },
                { name: 'Formula 1', icon: '🏎️' },
              ].map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => handleSearch(cat.name)}
                  className="bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50 p-6 rounded-2xl transition-all text-center group"
                >
                  <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <span className="font-bold text-sm uppercase tracking-wider">{cat.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default App;
