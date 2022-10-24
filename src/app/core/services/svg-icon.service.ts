import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const svgIconsList = {
  path: '../../../assets/svgs/icons/',
  iconsName: [
    'cabin',
    'search',
    'shopping-cart',
    'profile',
    'email',
    'password',
  ],
};

@Injectable({
  providedIn: 'root',
})
export class SvgIconService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  register() {
    const { iconsName: icons, path } = svgIconsList;

    icons.map((iconName) => {
      this.iconRegistry.addSvgIcon(
        iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(`${path}${iconName}.svg`)
      );
    });
  }
}
