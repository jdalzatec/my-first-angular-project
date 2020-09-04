import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  achievements: Achievements[];
  title: string = 'Welcome ...';

  constructor() {}

  ngOnInit() {
    this.achievements = this.getAchievements();
  }

  getAchievements(): Achievements[] {
    return [
      {
        id: 1,
        title: 'I achieve something very interesting',
        description: 'This is just a description.',
      },
      {
        id: 2,
        title: 'I achieve another interesting thing',
        description: 'This is just a description.',
      },
      {
        id: 3,
        title: 'I like achieving things !',
        description: 'This is just a description.',
      },
    ];
  }
}

interface Achievements {
  id: number;
  title: string;
  description?: string;
}
