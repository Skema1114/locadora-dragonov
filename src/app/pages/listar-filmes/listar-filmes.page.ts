import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.page.html',
  styleUrls: ['./listar-filmes.page.scss']
})
export class ListarFilmesPage implements OnInit {
  retorno: any;

  constructor(private fb: AngularFireDatabase, private rota: Router) {
    this.retorno = fb.list('/filmes').valueChanges();
    console.log(this.retorno);
  }

  proximaTela() {
    this.rota.navigate(['/cadastrar-filmes']);
  }

  ngOnInit() {}
}
