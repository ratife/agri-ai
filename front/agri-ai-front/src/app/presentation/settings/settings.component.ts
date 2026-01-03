import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  // Préférences générales
  language: string = 'fr';
  theme: string = 'light';
  notificationsEnabled: boolean = true;
  autoSave: boolean = true;
  
  // Préférences d'analyse
  confidenceThreshold: number = 0.7;
  defaultPlantType: string = 'tomato';
  autoUpload: boolean = false;
  
  // Notifications
  emailNotifications: boolean = true;
  pushNotifications: boolean = true;
  weeklyReports: boolean = true;
  criticalAlerts: boolean = true;
  
  // Paramètres avancés
  apiEndpoint: string = 'https://api.agri-ai.example.com';
  cacheSize: number = 100;
  debugMode: boolean = false;
  
  languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' }
  ];
  
  themes = [
    { id: 'light', name: 'Clair' },
    { id: 'dark', name: 'Sombre' },
    { id: 'auto', name: 'Automatique' }
  ];
  
  plantTypes = [
    { id: 'tomato', name: 'Tomate' },
    { id: 'potato', name: 'Pomme de terre' },
    { id: 'corn', name: 'Maïs' },
    { id: 'wheat', name: 'Blé' },
    { id: 'grape', name: 'Vigne' }
  ];

  constructor(private snackBar: MatSnackBar) {}

  saveSettings(): void {
    // Ici, on enverrait les paramètres au backend
    console.log('Paramètres sauvegardés:', {
      language: this.language,
      theme: this.theme,
      confidenceThreshold: this.confidenceThreshold,
      // etc.
    });
    
    this.snackBar.open('Paramètres sauvegardés avec succès', 'Fermer', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  resetToDefaults(): void {
    this.language = 'fr';
    this.theme = 'light';
    this.notificationsEnabled = true;
    this.autoSave = true;
    this.confidenceThreshold = 0.7;
    this.defaultPlantType = 'tomato';
    this.autoUpload = false;
    this.emailNotifications = true;
    this.pushNotifications = true;
    this.weeklyReports = true;
    this.criticalAlerts = true;
    this.apiEndpoint = 'https://api.agri-ai.example.com';
    this.cacheSize = 100;
    this.debugMode = false;
    
    this.snackBar.open('Paramètres réinitialisés aux valeurs par défaut', 'Fermer', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  exportSettings(): void {
    const settings = {
      language: this.language,
      theme: this.theme,
      notificationsEnabled: this.notificationsEnabled,
      autoSave: this.autoSave,
      confidenceThreshold: this.confidenceThreshold,
      defaultPlantType: this.defaultPlantType,
      autoUpload: this.autoUpload,
      emailNotifications: this.emailNotifications,
      pushNotifications: this.pushNotifications,
      weeklyReports: this.weeklyReports,
      criticalAlerts: this.criticalAlerts,
      apiEndpoint: this.apiEndpoint,
      cacheSize: this.cacheSize,
      debugMode: this.debugMode
    };
    
    const dataStr = JSON.stringify(settings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'agri-ai-settings.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    this.snackBar.open('Paramètres exportés avec succès', 'Fermer', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
