import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      console.log('collapseNav in NavigationComponent clicking navbarToggler');
      this.navbarToggler.nativeElement.click();
    }
  }

  private navBarTogglerIsVisible() {
    const isVisible: boolean = (this.navbarToggler.nativeElement.offsetParent !== null);
    return isVisible;
  }
}
