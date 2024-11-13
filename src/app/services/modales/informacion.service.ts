import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Pokemon} from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  toggleInfo: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  modal$: Observable<boolean> = this.toggleInfo.asObservable()

  constructor() { }

  updateToggleStatus (mostrar: boolean) {
    this.toggleInfo.next(mostrar)
  }
}
