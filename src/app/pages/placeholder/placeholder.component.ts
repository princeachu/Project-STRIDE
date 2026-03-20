import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink],
  templateUrl: './placeholder.component.html',
})
export class PlaceholderComponent {}
