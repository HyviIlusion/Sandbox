import { Component, OnInit } from '@angular/core';
import { NavSectionService } from '../nav-section.service';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.css']
})
export class PrestationsComponent implements OnInit {

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

   modal: boolean = false;
  modalBtn(){
    this.modal=!this.modal
  }
  constructor(public NavSection: NavSectionService) { }

  ngOnInit(): void {
  }

}
