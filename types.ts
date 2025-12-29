
export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface SportsEvent {
  title: string;
  sport: string;
  time: string;
  status: 'Live' | 'Upcoming' | 'Recent';
  location: string;
  description: string;
}

export interface SearchResult {
  summary: string;
  sources: GroundingChunk[];
}
