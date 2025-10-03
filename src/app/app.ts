import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  matAddOutline,
  matAdminPanelSettingsOutline,
  matCategoryOutline,
  matExpandMoreOutline,
  matHomeOutline,
  matSettingsOutline,
} from '@ng-icons/material-icons/outline';
import { BreakpointObserver } from '@angular/cdk/layout';

import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { SIDEBAR_ITEMS } from './types/sidebar-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [CommonModule, RouterOutlet, RouterLink, NgIcon, Header, Sidebar],
  viewProviders: [
    provideIcons({
      matHomeOutline,
      matAddOutline,
      matSettingsOutline,
      matExpandMoreOutline,
      matAdminPanelSettingsOutline,
      matCategoryOutline,
    }),
  ],
})
export class App {
  sidebarItems = SIDEBAR_ITEMS;

  isSideExpanded = true;
  isDrawerOpen = false;
  isDesktop = true;

  constructor(private bo: BreakpointObserver, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.bo.observe(['(min-width: 768px)']).subscribe(({ matches }) => {
        this.isDesktop = matches;

        if (matches) {
          this.isSideExpanded = true;
        } else {
          this.isDrawerOpen = false;
        }
      });
    }
  }

  onHeaderToggle() {
    if (this.isDesktop) {
      this.isSideExpanded = !this.isSideExpanded;
    } else {
      this.isDrawerOpen = !this.isDrawerOpen;
    }
  }
}
