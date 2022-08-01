import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headeraction',
  templateUrl: './headeraction.component.html',
  styleUrls: ['./headeraction.component.css']
})
export class HeaderactionComponent implements OnInit {
  headerbuttonvalue = 'inactive';

  headerbutton() {
    if (this.headerbuttonvalue == 'inactive'){
    return (this.headerbuttonvalue = 'active');
   }else {
   return (this.headerbuttonvalue = 'inactive');
  }
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

  constructor() { }

  ngOnInit(): void {
  }

}

