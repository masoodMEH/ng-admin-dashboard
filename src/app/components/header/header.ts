import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matLogOutOutline, matMenuOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MenubarModule,
    MenuModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule,
    NgIcon,
    RouterLink,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  viewProviders: [provideIcons({ matMenuOutline, matLogOutOutline })],
})
export class Header {
  @Output() sidebarToggle = new EventEmitter<void>();
  isMenuOpen = false;

  sidebarButtonClick() {
    this.sidebarToggle.emit();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
