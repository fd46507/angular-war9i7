import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  constructor() {}

  getRandomInt(temp) {
    return Math.floor(Math.random() * temp) + 1;
  }
}