import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">{{ title }}</mat-toolbar>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`.container { width: 960px; margin: 20px auto; }`]
})
export class AppComponent {
  title = 'My Products';
}
