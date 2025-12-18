import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // importar o RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [RouterModule, CommonModule], // adicionar aqui retornar a pagina inicial 
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class Biblioteca {

  /*ARRAYS:: */
images = [ 
  { 
    src: 'assets/ALICE_MACIEL.webp',
     description: 'ALICE MACIEL', 
     scssClass: 'alice',
     fullDescription:'Alice maciel, inspirando adoradores com o seu mais novo album sua presença, o todo poderoso.',
     }, 
  { 
    src: 'assets/DAMARES.JPG',
     description: 'DAMARES',
      scssClass: 'damares', 
      fullDescription: 'vai derramar a sheikna, sabor de mel, um novo vencedor, a batalha do arcanjo, apocalipse, maior trofeu.',
    }, 
  {
     src: 'assets/LAZARO.jpeg', 
     description: 'LAZARO', 
     scssClass: 'lazaro',
     fullDescription: 'quem era eu, a minha vida é do mestre, filho eu quero tanto, Deus é contigo, gloria, vou passando pela prova dando gloria Deus , gravação com taik.',
  },

  { 
    src: 'assets/POR_TODA_MINHA_VIDA.jpeg',
     description: 'POR TODA MINHA VIDA',
      scssClass: 'voz', 
      fullDescription:'Um dos mais classicos, por toda minha vida, ao senhor te louvarei, o meu folego é sua vida, e nunca me cansarei, posso ouvir a sua voz, é mais doce do que o mel.',
    },

  ];
  onClick(): void {
    console.log('Botão da biblioteca foi clicado!');
    // exemplo de link externo
    window.open('https://www.youtube.com/channel/UC-QigKPt9spkfwAQXxhQSRw', '_blank');
  }
}
