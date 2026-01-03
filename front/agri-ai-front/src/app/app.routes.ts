import { Routes } from '@angular/router';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { AnalyzeComponent } from './presentation/analyze/analyze.component';
import { HistoryComponent } from './presentation/history/history.component';
import { SettingsComponent } from './presentation/settings/settings.component';
import { HelpComponent } from './presentation/help/help.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'analyze', component: AnalyzeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', redirectTo: '' }
];
