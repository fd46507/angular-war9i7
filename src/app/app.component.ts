import { Component, Inject, OnInit, VERSION } from '@angular/core';
import { RandomService } from './random/random.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private myService: RandomService) {
  }

  text = 'Moja pierwsza appka w Angular';
  ran1 = 'Random Component max = 100';
  cos = new RandomService();
  ran11 = this.cos.getRandomInt(100);
  ran2 = 'Random Component max 10';
  ran22 = this.cos.getRandomInt(10);

  getRandom() {
    this.ran11 = this.cos.getRandomInt(100);
    let el = document.getElementById('half');
    console.log(el);
    if (this.ran11 > 50) {
      el.innerHTML = 'Górna połowa wartości';
      el.style.color = 'red';
    } else {
      el.innerHTML = 'Dolna połowa wartości';
      el.style.color = 'green';
    }
    return this.ran11;
  }

  getRandom1() {
    this.ran22 = this.cos.getRandomInt(10);
    let el = document.getElementById('half1');
    if (this.ran22 > 5) {
      el.innerHTML = 'Górna połowa wartości';
      el.style.color = 'red';
    } else {
      el.innerHTML = 'Dolna połowa wartości';
      el.style.color = 'green';
    }
  }

  ngOnInit(): void { 
    this.getRandom();
    this.getRandom1();
  }
}