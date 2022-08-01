import { Component, OnInit } from '@angular/core';
import { NavSectionService } from '../nav-section.service';


@Component({
  selector: 'app-headeraction',
  templateUrl: './headeraction.component.html',
  styleUrls: ['./headeraction.component.css']
})
export class HeaderactionComponent implements OnInit {
  bookingvue = 'bookingvue';

  headerbutton() {
   this.NavSection.NavSectionvalue = this.bookingvue;
   console.log(this.NavSection.NavSectionvalue);
  }

  constructor(public NavSection: NavSectionService) { }

  ngOnInit(): void {
  }

}

