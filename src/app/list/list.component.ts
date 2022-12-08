import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  name = '';
  li_id = 0;
  components = [];

  constructor() {}

  ngOnInit() {}

  addComponent(newComponent: string) {
    this.components.push(newComponent);
    let ul = document.getElementById('lista');
    let li = document.createElement('li');
    li.innerHTML = this.components[this.li_id] + ' ';
    let a = document.createElement('a');
    a.innerHTML = 'usuń';
    a.setAttribute('href', '#');
    a.addEventListener('click', this.deleteComponent.bind(null, ul, li));
    li.appendChild(a);
    ul.appendChild(li);
    this.li_id++;
    this.name = '';
  }

  deleteComponent(ul, li) {
    ul.removeChild(li);
  }
}