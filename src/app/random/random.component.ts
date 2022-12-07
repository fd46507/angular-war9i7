import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-random, app-random1',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  @Input() ran1: string;
  @Input() ran11: string;
  @Input() ran2: string;
  @Input() ran22: string;

  constructor() {}

  ngOnInit() {}
}