import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent {
  constructor(route: ActivatedRoute) {
    const cleanRoute = route.snapshot.url.toString()
      .replace(/docs/, '');
    window.location.href = `${environment.docsURL}/${cleanRoute}`;
  }
}
