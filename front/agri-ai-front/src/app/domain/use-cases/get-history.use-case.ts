import { Observable } from 'rxjs';
import { Analysis, PaginatedResult } from '../entities/plant';

export abstract class GetHistoryUseCase {
  abstract getHistory(plantName?: string): Observable<PaginatedResult<Analysis>>;
}
