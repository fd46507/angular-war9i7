import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  constructor() {}

  getRandomInt(num) {
    return Math.floor(Math.random() * num) + 1;
  }
}