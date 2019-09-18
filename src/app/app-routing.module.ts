import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'listar-filmes', pathMatch: 'full' },
  {
    path: 'listar-filmes',
    loadChildren: './pages/listar-filmes/listar-filmes.module#ListarFilmesPageModule'
  },
  {
    path: 'cadastrar-filmes',
    loadChildren: './pages/cadastrar-filmes/cadastrar-filmes.module#CadastrarFilmesPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
