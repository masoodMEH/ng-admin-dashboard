import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matExpandMoreOutline } from '@ng-icons/material-icons/outline';
import { SidebarItem } from '../../types/sidebar-items';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIcon],
  templateUrl: './sidebar.html',
  // برای اطمینان از آیکن فلش داخل خود سایدبار
  viewProviders: [provideIcons({ matExpandMoreOutline })],
})
export class Sidebar implements OnInit {
  @Input() items: SidebarItem[] = [];
  @Input() variant: 'side' | 'drawer' = 'side';
  @Input() open = true;
  @Output() openChange = new EventEmitter<boolean>();

  activeUrl = '';
  openSubmenus = new Set<string>();

  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.activeUrl = ev.urlAfterRedirects || this.router.url;
        this.syncSubmenusWithActive();
        // اگر دراور باشیم، روی ناوبری می‌بندیم
        if (this.variant === 'drawer') this.close();
      }
    });
  }

  ngOnInit() {
    this.activeUrl = this.router.url;
    this.syncSubmenusWithActive();
  }

  private syncSubmenusWithActive() {
    this.items.forEach((i) => {
      if (i.children?.length) {
        const active = i.children.some((c) => this.isActive(c));
        if (active) this.openSubmenus.add(i.label);
      }
    });
  }

  toggleSubmenu(item: SidebarItem) {
    if (!item.children?.length) return;
    this.openSubmenus.has(item.label)
      ? this.openSubmenus.delete(item.label)
      : this.openSubmenus.add(item.label);
  }

  isSubmenuOpen(item: SidebarItem) {
    return this.openSubmenus.has(item.label);
  }

  isActive(item: SidebarItem): boolean {
    if (item.routerLink) {
      return this.activeUrl === item.routerLink || this.activeUrl.startsWith(item.routerLink + '/');
    }
    if (item.children?.length) {
      return item.children.some((c) => this.isActive(c));
    }
    return false;
  }

  close() {
    this.open = false;
    this.openChange.emit(this.open);
  }

  onItemClickCloseIfDrawer() {
    if (this.variant === 'drawer') this.close();
  }
}
