import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthState } from '../../auth/auth.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {

  nombre: string;
  subscripcion: Subscription = new Subscription();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscripcion = this.store.select('auth').pipe(filter(auth => auth.user != null)).subscribe((auth2: AuthState) => {
      this.nombre = auth2.user.nombre;
    });
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

}
