import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forms-inpput',
  templateUrl: './forms-inpput.component.html',
  styleUrls: ['./forms-inpput.component.scss']
})
export class FormsInpputComponent implements OnInit {

  @Input() placeholder!: string;
  @Input() forms!: any;
  @Input() id: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
