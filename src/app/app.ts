import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
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

import { ButtonModule } from 'primeng/button';
import { Drawer, DrawerModule } from 'primeng/drawer';

import { Header } from './components/header/header';
import { SIDEBAR_ITEMS, SidebarItem } from './types/sidebar-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [CommonModule, DrawerModule, ButtonModule, NgIcon, RouterOutlet, RouterLink, Header],
  animations: [
    trigger('submenu', [
      state('closed', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      state('open', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('closed <=> open', [animate('250ms ease-in-out')]),
    ]),
  ],
  viewProviders: [
    provideIcons({
      matHomeOutline,
      matAddOutline,
      matSettingsOutline,
      matExpandMoreOutline,
      matAdminPanelSettingsOutline,
      matCategoryOutline
    }),
  ],
})
export class App {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  sidebarItems = SIDEBAR_ITEMS;
  isSidebarOpen: boolean = true;

  private openSubmenus = new Set<string>();

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(event?: Event) {
    if (this.drawerRef) {
      this.drawerRef.close(event || new MouseEvent('click'));
    }
    this.isSidebarOpen = false;
  }

  toggleSubmenu(item: SidebarItem) {
    if (!item.label) return;
    if (this.openSubmenus.has(item.label)) {
      this.openSubmenus.delete(item.label);
    } else {
      this.openSubmenus.add(item.label);
    }
  }

  isSubmenuOpen(item: SidebarItem): boolean {
    return this.openSubmenus.has(item.label);
  }
}
