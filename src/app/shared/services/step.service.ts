import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  private _step$ = new Subject<any>();

  constructor() { }


  get step() {
    return this._step$.asObservable();
  }

  public setStep(value: any) {
    this._step$.next(value);
  }

}
