import { Component, HostListener, Input, OnInit } from '@angular/core';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'app-step-progress',
  templateUrl: './step-progress.component.html',
  styleUrls: ['./step-progress.component.scss']
})
export class StepProgressComponent implements OnInit {

  @Input() active!: any;

  constructor(private stepService: StepService) {}


  ngOnInit(): void {

    // document.querySelectorAll('.stepper-item').forEach((element: any, index) => {
    //   // element.classList.contains('')

    //   if (index + 1 == this.active) {
    //     element.setAttribute('class', 'active');

    //     if (index + 1 < this.active)
    //     element.setAttribute('class', 'completed')
    //   }
    // })

    this.stepService.step.subscribe(res => {
      this.active = res;
      console.log(this.active, 'ibg active')

      // document.querySelectorAll('.stepper-item').forEach((element: any, index) => {
      //       // element.classList.contains('')
      
      //       if (index + 1 == this.active) {
      //         element.setAttribute('class', 'active');
      
      //         if (index + 1 < this.active)
      //         element.setAttribute('class', 'completed')
      //       }
      //     })
    })

  }

  // @HostListener('click', ['$event']) 
  // public test() {
  //   document.querySelectorAll('.stepper-item').forEach((element: any, index) => {
  //     // element.classList.contains('')

  //     if (index + 1 == this.active) {
  //       element.setAttribute('class', 'active');

  //       if (index + 1 < this.active)
  //       element.setAttribute('class', 'completed')
  //     }
  //   })
  // }

}
