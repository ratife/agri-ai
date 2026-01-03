import { Observable } from 'rxjs';
import { Analysis } from '../entities/plant';

export interface AnalyzePlantRequest {
  plantName: string;
  image: File;
}

export interface AnalyzePlantResponse {
  disease: string;
  confidence: number;
  advice: string
}

export abstract class AnalyzePlantUseCase {
  abstract execute(request: AnalyzePlantRequest): Observable<AnalyzePlantResponse>;
}
