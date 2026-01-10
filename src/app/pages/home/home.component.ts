import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  template: `
    <app-header></app-header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <!-- Content -->
          <div class="space-y-8">
            <h1>
              Your Voice Matters.
              <span class="highlight"> Make It Count.</span>
            </h1>
            <p>
              Stay informed about civic issues that matter to you. Discover how to take action with personalized news, representative contacts, and advocacy templates—all powered by AI.
            </p>
            <div class="hero-buttons">
              <button routerLink="/onboarding" class="btn btn-primary">
                Start Your Journey
              </button>
              <button class="btn btn-secondary">
                Learn More
              </button>
            </div>
          </div>

          <!-- Illustration -->
          <div class="hero-illustration">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section style="padding: 5rem 0; background-color: #ffffff;">
      <div class="container">
        <div style="text-align: center; margin-bottom: 4rem;">
          <h2 style="margin-bottom: 1rem;">How It Works</h2>
          <p style="font-size: 1.25rem; color: var(--color-gray-600);">Everything you need to engage with civic issues in one place</p>
        </div>

        <div class="features-grid">
          <!-- Feature 1 -->
          <div class="feature-card">
            <div class="feature-card-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v13C5 17.88 6.12 19 7.5 19h8c1.38 0 2.5-1.12 2.5-2.5v-13C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>
              </svg>
            </div>
            <h3>Personalized Profile</h3>
            <p>Tell us your location and social issues you care about. We'll tailor everything to your interests.</p>
          </div>

          <!-- Feature 2 -->
          <div class="feature-card">
            <div class="feature-card-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v2h4a1 1 0 110 2h-.5l1.27 6.05A2 2 0 0116.5 13H3.5a2 2 0 01-1.97-1.95L1.5 7H1a1 1 0 110-2h4V3zm3 4H7v8h1V7zm3 0h-1v8h1V7z"/>
              </svg>
            </div>
            <h3>Smart News Feed</h3>
            <p>Get curated news relevant to your issues with AI summaries, credibility scores, and suggested actions.</p>
          </div>

          <!-- Feature 3 -->
          <div class="feature-card">
            <div class="feature-card-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.058.3.102.605.102.924v1.902c0 .319-.044.624-.102.924l1.548.773a1 1 0 01.54 1.06l-.74 4.435a1 1 0 01-.986.836H3a1 1 0 01-1-1V3z"/>
              </svg>
            </div>
            <h3>Take Action</h3>
            <p>Send messages to representatives, call with AI-generated scripts, discover nonprofits, and track your impact.</p>
          </div>

          <!-- Feature 4 -->
          <div class="feature-card">
            <div class="feature-card-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
              </svg>
            </div>
            <h3>Find Representatives</h3>
            <p>Automatically discover your local, state, and federal representatives with direct contact information.</p>
          </div>

          <!-- Feature 5 -->
          <div class="feature-card">
            <div class="feature-card-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z"/>
                <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2V2a1 1 0 112 0v1h1a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v1a2 2 0 01-2 2h-1v1a1 1 0 11-2 0v-1h-2v1a1 1 0 11-2 0v-1H7a2 2 0 01-2-2v-1H4a1 1 0 110-2h1v-2H4a1 1 0 110-2h1V9H4a1 1 0 110-2h1V7H4a1 1 0 110-2h1V4a2 2 0 012-2h1V2a1 1 0 010-2z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3>Discover Nonprofits</h3>
            <p>Connect with verified nonprofit organizations aligned with your causes and values.</p>
          </div>

          <!-- Feature 6 -->
          <div class="feature-card">
            <div class="feature-card-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
              </svg>
            </div>
            <h3>Track Your Impact</h3>
            <p>View detailed metrics of your actions: messages sent, calls made, donations, and more.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container" style="max-width: 56rem;">
        <h2>Ready to Make a Difference?</h2>
        <p>
          Join thousands of engaged citizens making their voice heard where it matters most.
        </p>
        <button routerLink="/onboarding" class="btn btn-primary" style="background-color: #ffffff; color: var(--color-blue-600); box-shadow: var(--shadow-lg);">
          Get Started Today
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3>Product</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="flex" style="gap: 0.5rem; align-items: center;">
            <div class="logo-icon" style="width: 1.5rem; height: 1.5rem; font-size: 0.875rem;">
              <svg style="width: 1rem; height: 1rem;" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3.5-9c.83 0 1.5-.67 1.5-1.5S14.33 4 13.5 4 12 4.67 12 5.5s.67 1.5 1.5 1.5z"/>
              </svg>
            </div>
            <span style="color: #ffffff; font-weight: 600;">CivicHub</span>
          </div>
          <p style="font-size: 0.875rem;">&copy; 2024 CivicHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
})
export class HomeComponent {}
