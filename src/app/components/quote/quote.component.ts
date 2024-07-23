import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { QuoteServiceService } from 'src/app/services/quote-service.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: any = null;


  constructor(private quoteService: QuoteServiceService) { }

  ngOnInit(): void {
    this.loadQuote(1); // Exemplo: Carregar a citação com ID 1 inicialmente
    this.startQuoteRotation(); // Iniciar a rotação de citações
  }

  loadQuote(id: number): void {
    this.quoteService.getQuoteById(id).subscribe(data => {
      this.quote = data;
    })
  }

  startQuoteRotation(): void {
    let currentQuoteId = 1;
    setInterval(() => {
      this.loadQuote(currentQuoteId);
      // Verifique uma possível forma de fazer com que a quantidade de quotes disponiveis sejam atualizadas automaticamente.
      currentQuoteId = (currentQuoteId % 6) + 1; // Supondo que você tenha 3 citações
    }, 5000); // Mudar a cada 5 segundos
  }

}
