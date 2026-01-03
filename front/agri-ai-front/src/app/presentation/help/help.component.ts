import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {
  currentDate: Date = new Date();
  // FAQ items
  faqItems = [
    {
      question: 'Comment analyser une plante ?',
      answer: 'Pour analyser une plante, allez dans la section "Analyse" via le menu de navigation. Cliquez sur "Choisir une image" pour sélectionner une photo de votre plante, puis cliquez sur "Analyser". Le système détectera automatiquement la plante et les maladies potentielles.',
      icon: 'search'
    },
    {
      question: 'Comment consulter l\'historique des analyses ?',
      answer: 'L\'historique est accessible via la section "Historique" dans le menu. Vous y trouverez toutes vos analyses précédentes avec les détails de chaque diagnostic.',
      icon: 'history'
    },
    {
      question: 'Comment interpréter les résultats d\'analyse ?',
      answer: 'Les résultats incluent : le nom de la plante détectée, la maladie identifiée, le niveau de confiance (de 0 à 1), la sévérité (Faible, Moyenne, Élevée) et des recommandations de traitement. Un niveau de confiance supérieur à 0.8 indique une détection fiable.',
      icon: 'info'
    },
    {
      question: 'Quels types de plantes sont supportées ?',
      answer: 'Le système reconnaît actuellement les plantes agricoles courantes comme le maïs, le riz, le blé, la tomate, la pomme de terre, et d\'autres cultures importantes. La base de données est régulièrement mise à jour.',
      icon: 'grass'
    },
    {
      question: 'Comment exporter mes données ?',
      answer: 'Dans la section "Historique", utilisez le bouton "Exporter" pour télécharger vos analyses au format CSV ou PDF. Vous pouvez également partager les rapports directement depuis l\'application.',
      icon: 'download'
    },
    {
      question: 'L\'application fonctionne-t-elle hors ligne ?',
      answer: 'L\'analyse des plantes nécessite une connexion Internet pour utiliser le modèle d\'IA. Cependant, vous pouvez consulter l\'historique des analyses précédentes sans connexion.',
      icon: 'wifi'
    }
  ];

  // Contact information
  contactInfo = [
    { icon: 'email', text: 'support@agri-ai.com', action: 'mailto:support@agri-ai.com' },
    { icon: 'phone', text: '+261 34 12 345 67', action: 'tel:+261341234567' },
    { icon: 'language', text: 'www.agri-ai.com', action: 'https://www.agri-ai.com' },
    { icon: 'location_on', text: 'Antananarivo, Madagascar', action: 'https://maps.google.com/?q=Antananarivo' }
  ];

  // Quick guides
  quickGuides = [
    {
      title: 'Guide de prise de photo',
      description: 'Apprenez à prendre des photos optimales pour une analyse précise.',
      steps: [
        'Prenez la photo en pleine lumière naturelle',
        'Cadrez uniquement la plante ou la feuille malade',
        'Évitez les arrière-plans complexes',
        'Assurez-vous que la photo est nette'
      ],
      icon: 'photo_camera'
    },
    {
      title: 'Interprétation des symptômes',
      description: 'Comment identifier les signes courants de maladies.',
      steps: [
        'Taches brunes ou jaunes sur les feuilles',
        'Moisissures ou poudre blanche',
        'Feuilles qui s\'enroulent ou se déforment',
        'Croissance ralentie ou flétrissement'
      ],
      icon: 'visibility'
    },
    {
      title: 'Traitements biologiques',
      description: 'Solutions naturelles pour traiter vos plantes.',
      steps: [
        'Utilisez du purin d\'ortie comme fongicide naturel',
        'Appliquez du bicarbonate de soude pour les moisissures',
        'Introduisez des insectes bénéfiques',
        'Pratiquez la rotation des cultures'
      ],
      icon: 'eco'
    }
  ];

  // Function to open external links
  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }

  // Search functionality
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.toLowerCase();
    
    // For now, just log the search term
    // In a real implementation, you would filter the FAQ items
    console.log('Searching for:', searchTerm);
  }
}
