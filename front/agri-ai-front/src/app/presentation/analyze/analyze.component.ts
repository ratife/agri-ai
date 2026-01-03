import { Component } from '@angular/core';
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
import { AnalysisApiService } from '../../infrastructure/api/analysis-api.service';
import { AnalyzePlantRequest, AnalyzePlantResponse } from '../../domain/use-cases/analyze-plant.use-case';

@Component({
  selector: 'app-analyze',
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
    MatAutocompleteModule
  ],
  templateUrl: './analyze.component.html',
  styleUrl: './analyze.component.scss'
})
export class AnalyzeComponent {
  plantName: string = '';
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  isLoading: boolean = false;
  result: AnalyzePlantResponse | null = null;

  // Suggestions de plantes courantes
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

  constructor(
    private analysisService: AnalysisApiService,
    private snackBar: MatSnackBar
  ) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      
      // Créer un aperçu de l'image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(): void {
    this.selectedFile = null;
    this.imagePreview = null;
  }

  analyze(): void {
    if (!this.plantName.trim()) {
      this.snackBar.open('Veuillez saisir le nom de la plante', 'Fermer', { duration: 3000 });
      return;
    }

    if (!this.selectedFile) {
      this.snackBar.open('Veuillez sélectionner une image', 'Fermer', { duration: 3000 });
      return;
    }

    this.isLoading = true;
    this.result = null;

    const request: AnalyzePlantRequest = {
      plantName: this.plantName,
      image: this.selectedFile
    };

    this.analysisService.execute(request).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.result = response;
        this.snackBar.open('Analyse terminée avec succès', 'Fermer', { duration: 3000 });
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Erreur lors de l\'analyse:', error);
        this.snackBar.open('Erreur lors de l\'analyse. Veuillez réessayer.', 'Fermer', { duration: 5000 });
      }
    });
  }

  reset(): void {
    this.plantName = '';
    this.selectedFile = null;
    this.imagePreview = null;
    this.result = null;
  }
}
