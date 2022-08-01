import { Component } from '@angular/core';
import { NavSectionService } from './nav-section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hyvi-app';

  constructor(public NavSection: NavSectionService) { }

  ngOnInit(): void {
  }

}

