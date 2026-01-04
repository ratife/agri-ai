import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AnalysisApiService } from '../../infrastructure/api/analysis-api.service';
import { Analysis } from '../../domain/entities/plant';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {
  isLoading: boolean = false;
  history: Analysis[] = [];
  filteredHistory: Analysis[] = [];
  
  // Filtres
  plantFilter: string = '';
  dateFilter: Date | null = null;
  severityFilter: 'low' | 'medium' | 'high' | '' = '';
  
  // Suggestions de plantes
  plantSuggestions: string[] = [
    'Tomate',
    'Pomme de terre',
    'Blé',
    'Maïs',
    'Riz',
    'Vigne',
    'Pomme',
    'Orange',
    'Banane',
    'Café'
  ];

  // Colonnes pour le tableau
  displayedColumns: string[] = ['date', 'plant', 'disease', 'confidence', 'severity', 'actions'];

  constructor(
    private analysisService: AnalysisApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    this.isLoading = true;
    this.analysisService.getHistory().subscribe({
      next: (history) => {
        this.history = history.items;
        this.filteredHistory = [...this.history];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement de l\'historique:', error);
        this.snackBar.open('Erreur lors du chargement de l\'historique', 'Fermer', { duration: 5000 });
        this.isLoading = false;
      }
    });
  }

  applyFilters(): void {
    this.isLoading = true;
    this.analysisService.getHistory(this.plantFilter).subscribe({
      next: (history) => {
        this.history = history.items;
        this.filteredHistory = [...this.history];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement de l\'historique:', error);
        this.snackBar.open('Erreur lors du chargement de l\'historique', 'Fermer', { duration: 5000 });
        this.isLoading = false;
      }
    });
  }

  clearFilters(): void {
    this.plantFilter = '';
    this.dateFilter = null;
    this.severityFilter = '';
    this.filteredHistory = [...this.history];
  }

  getSeverityColor(severity: string): string {
    switch (severity) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getConfidenceColor(confidence: number): string {
    if (confidence >= 0.8) return 'text-green-600';
    if (confidence >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  viewDetails(analysis: Analysis): void {
    // À implémenter: ouvrir un modal avec les détails
    this.snackBar.open(`Détails de l'analyse ${analysis.id}`, 'Fermer', { duration: 3000 });
  }

  deleteAnalysis(analysis: Analysis): void {
    // À implémenter: supprimer l'analyse
    this.snackBar.open(`Suppression de l'analyse ${analysis.id}`, 'Fermer', { duration: 3000 });
  }

  exportHistory(): void {
    // À implémenter: exporter l'historique
    this.snackBar.open('Export de l\'historique démarré', 'Fermer', { duration: 3000 });
  }

  getUniquePlantsCount(): number {
    const uniquePlants = new Set(this.history.map(analysis => analysis.plant.id));
    return uniquePlants.size;
  }

  getUniqueDiseasesCount(): number {
    const uniqueDiseases = new Set(this.history.map(analysis => analysis.disease.id));
    return uniqueDiseases.size;
  }
}
