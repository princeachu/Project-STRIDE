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
  template: `
    <app-header></app-header>

    <div style="min-height: 100vh; background-color: var(--color-gray-50);">
      <div class="container">
        <div style="padding: 2rem 0;">
          <!-- Header -->
          <div style="margin-bottom: 2rem;">
            <h1 style="margin-bottom: 0.5rem;">Your Civic Dashboard</h1>
            <p style="color: var(--color-gray-600);">Stay informed and take action on issues that matter to you</p>
          </div>

          <!-- Quick Stats -->
          <div class="stats-grid">
            <div class="stat-card">
              <p class="stat-label">Messages Sent</p>
              <p class="stat-value" style="color: var(--color-blue-600);">12</p>
            </div>
            <div class="stat-card">
              <p class="stat-label">Calls Made</p>
              <p class="stat-value" style="color: #16a34a;">5</p>
            </div>
            <div class="stat-card">
              <p class="stat-label">Articles Reviewed</p>
              <p class="stat-value" style="color: var(--color-purple-600);">28</p>
            </div>
            <div class="stat-card">
              <p class="stat-label">Impact Score</p>
              <p class="stat-value" style="color: var(--color-orange-600);">85</p>
            </div>
          </div>

          <div class="dashboard-container">
            <!-- Main Feed -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div class="feed-header">
                <h2 style="margin: 0;">News Feed</h2>
                <select class="feed-select">
                  <option>All Issues</option>
                  <option>Climate Change</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                </select>
              </div>

              <!-- News Cards -->
              <div *ngFor="let article of articles()">
                <div class="news-card">
                  <!-- Image -->
                  <div class="news-card-image">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm4 2v4h8V8H6z"/>
                    </svg>
                  </div>

                  <!-- Content -->
                  <div class="news-card-content">
                    <div>
                      <div class="news-card-header">
                        <span class="news-card-issue">{{ article.issue }}</span>
                        <div class="credibility-score">
                          <span style="font-size: 0.875rem; color: var(--color-gray-600); font-weight: 500;">Credibility</span>
                          <div class="credibility-badge"
                               [ngClass]="{
                                 'credibility-high': article.credibilityScore >= 80,
                                 'credibility-medium': article.credibilityScore >= 60 && article.credibilityScore < 80,
                                 'credibility-low': article.credibilityScore < 60
                               }">
                            {{ article.credibilityScore }}
                          </div>
                        </div>
                      </div>

                      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-gray-900); margin-bottom: 0.75rem;">{{ article.title }}</h3>
                      <p style="font-size: 0.875rem; color: var(--color-gray-600); margin-bottom: 0.75rem;">{{ article.source }}</p>

                      <div class="summary-box">
                        <p><strong>Summary:</strong> {{ article.summary }}</p>
                      </div>

                      <div class="action-box">
                        <p><strong>Suggested Action:</strong> {{ article.suggestedAction }}</p>
                      </div>
                    </div>

                    <!-- Actions -->
                    <div class="news-card-actions">
                      <button class="btn btn-primary">Edit & Send Message</button>
                      <button class="btn btn-secondary">Learn More</button>
                      <button class="btn btn-secondary" (click)="dismissArticle(article.id)">Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Load More -->
              <button class="btn btn-secondary" style="width: 100%;">Load More Articles</button>
            </div>

            <!-- Sidebar -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              <!-- Preferences Card -->
              <div class="sidebar-section">
                <h3>Your Issues</h3>
                <div class="issue-tags" style="margin-bottom: 1rem;">
                  <span class="issue-tag">Climate Change</span>
                  <span class="issue-tag">Healthcare</span>
                  <span class="issue-tag">Education</span>
                </div>
                <button class="btn btn-tertiary" style="width: 100%; padding: 0.5rem 1rem; font-size: 0.875rem;">
                  Update Preferences
                </button>
              </div>

              <!-- Quick Links -->
              <div class="sidebar-section">
                <h3>Quick Actions</h3>
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                  <button class="quick-action-btn">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.058.3.102.605.102.924v1.902c0 .319-.044.624-.102.924l1.548.773a1 1 0 01.54 1.06l-.74 4.435a1 1 0 01-.986.836H3a1 1 0 01-1-1V3z"/>
                    </svg>
                    Call a Representative
                  </button>
                  <button class="quick-action-btn">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm0 8a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"/>
                    </svg>
                    Find Representatives
                  </button>
                  <button class="quick-action-btn">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z"/>
                    </svg>
                    Discover Organizations
                  </button>
                  <button class="quick-action-btn">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                    View My Impact
                  </button>
                </div>
              </div>

              <!-- Featured Organization -->
              <div class="sidebar-section">
                <h3>Featured Organization</h3>
                <div class="featured-box">
                  <h4>Climate Action Coalition</h4>
                  <p>Working to accelerate clean energy adoption across America.</p>
                  <button class="btn btn-primary" style="width: 100%; padding: 0.5rem 1rem; font-size: 0.875rem;">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
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
