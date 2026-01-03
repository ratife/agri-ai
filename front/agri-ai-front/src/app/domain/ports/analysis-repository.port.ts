import { Observable } from 'rxjs';
import { Analysis } from '../entities/plant';

export interface AnalysisRepositoryPort {
  saveAnalysis(analysis: Omit<Analysis, 'id'>): Observable<Analysis>;
  getAnalyses(plantId?: string): Observable<Analysis[]>;
  getAnalysisById(id: string): Observable<Analysis | null>;
}
