import { Injectable } from '@angular/core';
import { interval } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  repeat$ = interval(3000)

  constructor() { }
}
