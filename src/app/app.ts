import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  matAddOutline,
  matHomeOutline,
  matSettingsOutline,
} from '@ng-icons/material-icons/outline';
import { ButtonModule } from 'primeng/button';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [DrawerModule, ButtonModule, NgIcon, RouterOutlet, RouterLink, Header],
  viewProviders: [provideIcons({ matHomeOutline, matAddOutline, matSettingsOutline })],
})
export class App {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  isSidebarOpen: boolean = true;
  closeSidebar(event?: Event) {
    if (this.drawerRef) {
      this.drawerRef.close(event || new MouseEvent('click'));
    }
    this.isSidebarOpen = false;
  }
}
