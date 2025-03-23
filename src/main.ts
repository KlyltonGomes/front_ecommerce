import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component'; // Ajuste o caminho conforme necessário
import { routes } from './app/app.routes'; // Certifique-se de importar o arquivo de rotas corretamente

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)) // Configurando as rotas
  ]
}).catch(err => console.error(err));
