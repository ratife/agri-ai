import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
//import { AnalysisService } from '../../application/services/analysis.service';
import { Analysis } from '../../domain/entities/plant';
import { AnalysisApiService } from '../../infrastructure/api/analysis-api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTooltipModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = true;
  history: Analysis[] = [];
  
  // Statistiques
  totalAnalyses: number = 0;
  uniquePlants: number = 0;
  uniqueDiseases: number = 0;
  highSeverityCount: number = 0;
  
  // Données pour les graphiques
  recentAnalyses: Analysis[] = [];
  severityDistribution: { severity: string; count: number; color: string }[] = [];
  weeklyAnalytics: { day: string; count: number }[] = [];
  
  // Suggestions d'actions
  quickActions = [
    { 
      title: 'Nouvelle analyse', 
      description: 'Analyser une nouvelle plante',
      icon: 'search',
      route: '/analyze',
      color: 'bg-blue-500'
    },
    { 
      title: 'Voir l\'historique', 
      description: 'Consulter toutes les analyses',
      icon: 'history',
      route: '/history',
      color: 'bg-green-500'
    },
    { 
      title: 'Exporter les données', 
      description: 'Télécharger les rapports',
      icon: 'download',
      route: '/history',
      color: 'bg-purple-500'
    },
    { 
      title: 'Paramètres', 
      description: 'Configurer l\'application',
      icon: 'settings',
      route: '/settings',
      color: 'bg-gray-500'
    }
  ];

  constructor(private analysisService: AnalysisApiService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.isLoading = true;
    this.analysisService.getHistory().subscribe({
      next: (result) => {
        this.history = result.items;
        this.calculateStatistics();
        this.prepareChartData();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des données du tableau de bord:', error);
        this.isLoading = false;
      }
    });
  }

  calculateStatistics(): void {
    this.totalAnalyses = this.history.length;
    
    const uniquePlantsSet = new Set(this.history.map(analysis => analysis.plant.id));
    this.uniquePlants = uniquePlantsSet.size;
    
    const uniqueDiseasesSet = new Set(this.history.map(analysis => analysis.disease.id));
    this.uniqueDiseases = uniqueDiseasesSet.size;
    
    // Pour l'exemple, on considère que les maladies avec confidence > 0.8 sont de haute sévérité
    this.highSeverityCount = this.history.filter(analysis => analysis.confidence > 0.8).length;
  }

  prepareChartData(): void {
    // Analyses récentes (5 dernières)
    this.recentAnalyses = [...this.history]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);

    // Distribution de sévérité (exemple)
    this.severityDistribution = [
      { severity: 'Faible', count: Math.floor(this.history.length * 0.4), color: '#10B981' },
      { severity: 'Moyenne', count: Math.floor(this.history.length * 0.35), color: '#F59E0B' },
      { severity: 'Élevée', count: Math.floor(this.history.length * 0.25), color: '#EF4444' }
    ];

    // Analytics hebdomadaires (exemple)
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    this.weeklyAnalytics = days.map(day => ({
      day,
      count: Math.floor(Math.random() * 10) + 1
    }));
  }

  getSeverityColor(severity: string): string {
    switch (severity.toLowerCase()) {
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
      year: 'numeric'
    });
  }

  refreshDashboard(): void {
    this.loadDashboardData();
  }
}
