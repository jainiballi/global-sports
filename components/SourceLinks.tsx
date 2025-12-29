
import React from 'react';
import { GroundingChunk } from '../types';

interface SourceLinksProps {
  sources: GroundingChunk[];
}

export const SourceLinks: React.FC<SourceLinksProps> = ({ sources }) => {
  if (sources.length === 0) return null;

  return (
    <div className="mt-8 pt-8 border-t border-slate-800">
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Verified Sources</h3>
      <div className="flex flex-wrap gap-3">
        {sources.map((source, idx) => (
          source.web && (
            <a
              key={idx}
              href={source.web.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-slate-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="truncate max-w-[200px]">{source.web.title}</span>
            </a>
          )
        ))}
      </div>
    </div>
  );
};
