import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

interface NewsArticle {
  id: string;
  title: string;
  source: string;
  imageUrl: string;
  summary: string;
  credibilityScore: number;
  suggestedAction: string;
  issue: string;
  publishedAt: string;
  actionMessage?: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  articles = signal<NewsArticle[]>([
    {
      id: '1',
      title: 'Senate Committee Advances Climate Action Bill',
      source: 'NPR',
      imageUrl: '',
      summary: 'The Senate Environment and Public Works Committee voted 11-10 to advance a comprehensive climate bill that includes $150 billion in clean energy investments. The bill aims to reduce emissions by 50% over the next decade.',
      credibilityScore: 92,
      suggestedAction: 'Call your senators to voice support for climate action legislation. Share your personal story about climate impacts.',
      issue: 'Climate Change',
      publishedAt: '2 hours ago',
      actionMessage: '',
    },
    {
      id: '2',
      title: 'Healthcare Access Expands in Rural Communities',
      source: 'Health Affairs',
      imageUrl: '',
      summary: 'New federal grant program launches to expand telehealth services to underserved rural areas. $2 billion allocated to rural hospital infrastructure improvements.',
      credibilityScore: 88,
      suggestedAction: 'Thank your representative for supporting healthcare access. Consider donating to local health nonprofits.',
      issue: 'Healthcare',
      publishedAt: '4 hours ago',
    },
    {
      id: '3',
      title: 'Education Department Announces Student Debt Relief Program',
      source: 'Department of Education',
      imageUrl: '',
      summary: 'New program provides relief for borrowers with $10,000-$20,000 in federal student debt. Applications open next month.',
      credibilityScore: 95,
      suggestedAction: 'Share the news with peers who may qualify. Contact representatives to expand debt relief programs.',
      issue: 'Education',
      publishedAt: '6 hours ago',
    },
    {
      id: '4',
      title: 'Criminal Justice Reform Bill Introduced',
      source: 'The Marshall Project',
      imageUrl: '',
      summary: 'Bipartisan group introduces bill to reform sentencing guidelines and expand rehabilitation programs in prisons.',
      credibilityScore: 85,
      suggestedAction: 'Send an email to your representative expressing support for criminal justice reform.',
      issue: 'Criminal Justice',
      publishedAt: '8 hours ago',
    },
  ]);

  dismissArticle(id: string) {
    const currentArticles = this.articles();
    this.articles.set(currentArticles.filter(article => article.id !== id));
  }
}
