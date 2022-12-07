import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  name = '';
  ids = 0;
  constructor() {}

  people = [];

  ngOnInit() {}

  deletePerson(el, li) {
    el.removeChild(li);
  }

  addPerson(newPersonn: string) {
    if (newPersonn) {
      this.people.push(newPersonn);
    }
    let el = document.getElementById('lista');
    let li = document.createElement('li');
    li.innerHTML = this.people[this.ids] + '  ';
    let a = document.createElement('a');
    a.innerHTML = 'delete';
    a.setAttribute('href', '#');
    a.addEventListener('click', this.deletePerson.bind(null, el, li));
    li.appendChild(a);
    el.appendChild(li);
    this.ids++;
    let n = document.getElementById('nowy');
    console.log(n);
    this.name = '';
  }
}