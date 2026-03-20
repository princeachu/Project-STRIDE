import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

interface OnboardingState {
  step: number;
  zipCode: string;
  selectedIssues: string[];
  name: string;
  email: string;
}

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './onboarding.component.html',
})
export class OnboardingComponent {
  state = signal<OnboardingState>({
    step: 1,
    zipCode: '',
    selectedIssues: [],
    name: '',
    email: '',
  });

  issues = [
    'Climate Change',
    'Healthcare Access',
    'Education Reform',
    'Criminal Justice',
    'Immigration',
    'Gun Safety',
    'Abortion Rights',
    'LGBTQ+ Rights',
    'Affordable Housing',
    'Income Inequality',
    'Voting Rights',
    'Environmental Protection',
  ];

  constructor(private router: Router) {}

  nextStep() {
    const s = this.state();
    if (s.step < 4) {
      this.state.set({ ...s, step: s.step + 1 });
    }
  }

  prevStep() {
    const s = this.state();
    if (s.step > 1) {
      this.state.set({ ...s, step: s.step - 1 });
    }
  }

  isValidZipCode(): boolean {
    return /^\d{5}$/.test(this.state().zipCode);
  }

  toggleIssue(issue: string) {
    const s = this.state();
    const isSelected = s.selectedIssues.includes(issue);
    const newIssues = isSelected
      ? s.selectedIssues.filter(i => i !== issue)
      : [...s.selectedIssues, issue];
    this.state.set({ ...s, selectedIssues: newIssues });
  }

  completeOnboarding() {
    // Save preferences to localStorage or service
    localStorage.setItem('civicHubProfile', JSON.stringify(this.state()));
    this.router.navigate(['/dashboard']);
  }
}
