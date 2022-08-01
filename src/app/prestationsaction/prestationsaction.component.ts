import { Component, OnInit } from '@angular/core';
import { NavSectionService } from '../nav-section.service';

@Component({
  selector: 'app-prestationsaction',
  templateUrl: './prestationsaction.component.html',
  styleUrls: ['./prestationsaction.component.css']
})
export class PrestationsactionComponent implements OnInit {

  prestationsvue = 'prestationsvue';

  prestationsbutton() {
   this.NavSection.NavSectionvalue = this.prestationsvue;
   console.log(this.NavSection.NavSectionvalue);
  }

  constructor(public NavSection: NavSectionService) { }

  ngOnInit(): void {

  }

}
