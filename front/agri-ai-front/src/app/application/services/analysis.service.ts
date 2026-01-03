import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AnalyzeRequestDTO, AnalyzeResponseDTO } from '../dto';
import { AnalyzePlantUseCase, GetHistoryUseCase, AnalyzePlantResponse } from '../../domain/use-cases';
import { Analysis } from '../../domain/entities/plant';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  constructor(
    private analyzePlantUseCase: AnalyzePlantUseCase,
    private getHistoryUseCase: GetHistoryUseCase
  ) {}

  analyzePlant(request: AnalyzeRequestDTO): Observable<AnalyzeResponseDTO> {
    return this.analyzePlantUseCase.execute({
      plantName: request.plant,
      image: request.image
    }).pipe(
      map((response: AnalyzePlantResponse) => ({
        disease: response.disease,
        confidence: response.confidence,
        advice: response.advice
      }))
    );
  }

  getHistory(plantName?: string): Observable<Analysis[]> {
    return this.getHistoryUseCase.getHistory(plantName);
  }
}