import { Component, OnInit } from '@angular/core';
import { NavSectionService } from '../nav-section.service';

@Component({
  selector: 'app-booking-test',
  templateUrl: './booking-test.component.html',
  styleUrls: ['./booking-test.component.css']
})
export class BookingTestComponent implements OnInit {

  defaultvue = '';

  closebutton() {
   this.NavSection.NavSectionvalue = this.defaultvue;
   console.log(this.NavSection.NavSectionvalue);
  }

 Movies: any[] = [
    {
      "name": "Avengers: Endgame"
    },
    {
      "name": "Good Boys"
    },
    {
      "name": "Playmobil: The Movie"
    },
    {
      "name": "Aquarela"
    },
    {
      "name": "Aladdin"
    },
    {
      "name": "Downton Abbey"
    }
  ];


  constructor(public NavSection: NavSectionService) { }

  ngOnInit(): void {
  }

}
