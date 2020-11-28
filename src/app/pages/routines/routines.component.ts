import { Component, OnInit } from '@angular/core';

import { Routine } from './../../models/routine';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {

  routines: Routine[] = [
    {
      id: '1',
      title: 'Rutina en casa',
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      title: 'Rutina de pesas',
      description: 'bla bla bla bla bla'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

  clickRoutine(id: number) {
    console.log('routine');
    console.log(id);
  }

}

