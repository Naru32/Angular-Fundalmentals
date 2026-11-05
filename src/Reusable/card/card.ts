import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnChanges,OnInit {

  @Input() header = '';

  ngOnInit(): void {
    console.log('Init runs');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('Runs',changes);
  }
  
 
} 
