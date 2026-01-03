import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalyzePlantUseCase, AnalyzePlantRequest, AnalyzePlantResponse } from '../../domain/use-cases';
import { GetHistoryUseCase } from '../../domain/use-cases';
import { Analysis, PaginatedResult } from '../../domain/entities/plant';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalysisApiService implements AnalyzePlantUseCase, GetHistoryUseCase {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  execute(request: AnalyzePlantRequest): Observable<AnalyzePlantResponse> {
    const formData = new FormData();
    formData.append('file', request.image);
    formData.append('plant', request.plantName);
    return this.http.post<AnalyzePlantResponse>(`${this.apiUrl}/analyze`, formData);
  }

  getHistory(plantName?: string): Observable<PaginatedResult<Analysis>> {
    let params = new HttpParams();
    if (plantName) {
      params = params.set('plant', plantName);
    }
    return this.http.get<PaginatedResult<Analysis>>(`${this.apiUrl}/history`, { params });
  }
}
