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

  deletePerson(ul, li) {
    ul.removeChild(li);
  }

  addPerson(newPersonn: string) {
    if (newPersonn) {
      this.people.push(newPersonn);
    }
    let ul = document.getElementById('lista');
    let li = document.createElement('li');
    li.innerHTML = this.people[this.ids] + '  ';
    let a = document.createElement('a');
    a.innerHTML = 'usuń';
    a.setAttribute('href', '#');
    a.addEventListener('click', this.deletePerson.bind(null, ul, li));
    li.appendChild(a);
    ul.appendChild(li);
    this.ids++;
    this.name = '';
  }
}