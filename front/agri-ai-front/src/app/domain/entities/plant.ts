export interface Plant {
  id: string;
  name: string;
  scientificName?: string;
  description?: string;
}

export interface Disease {
  id: string;
  name: string;
  description?: string;
  severity: 'low' | 'medium' | 'high';
}

export interface Analysis {
  id: string;
  plantId: string;
  diseaseId: string;
  imageUrl?: string;
  confidence: number;
  date: Date;
  advice: string;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  total_pages: number;
  has_next: boolean;
  has_prev: boolean
}


export interface Recommendation {
  id: string;
  diseaseId: string;
  treatment: string;
  prevention: string;
  products?: string[];
}
