import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'representatives', component: PlaceholderComponent },
  { path: 'nonprofits', component: PlaceholderComponent },
  { path: 'my-actions', component: PlaceholderComponent },
  { path: '**', component: PlaceholderComponent },
];
