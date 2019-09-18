import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-filmes',
  templateUrl: './cadastrar-filmes.page.html',
  styleUrls: ['./cadastrar-filmes.page.scss']
})
export class CadastrarFilmesPage implements OnInit {
  private inputTitulo: string;
  private inputGenero: string;

  constructor(private fb: AngularFireDatabase, private rota: Router) {}

  gravar() {
    const dados = {
      titulo: this.inputTitulo,
      genero: this.inputGenero
    };
    this.fb.list('/filmes').push(dados);
    this.rota.navigate(['/listar-filmes']);
  }

  ngOnInit() {}
}
