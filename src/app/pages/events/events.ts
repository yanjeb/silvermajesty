import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  events = [
    {
      title: 'Sunday Service',
      date: 'April 7, 2026',
      description: 'A powerful Sunday service filled with worship, prayer, and the Word.',
      location: 'CLC Tagum Sanctuary',
      time: '9:00 AM',
      image: 'worship.jpg'
    },
    {
      title: 'Encounter',
      date: 'April 12, 2026',
      description: 'A gathering for youth filled with worship, games, and life talks.',
      location: 'CLC Tagum Sanctuary',
      time: '6:00 PM',
      image: 'encounter.jpg'
    },
    {
      title: 'Prayer & Fasting Week',
      date: 'April 15, 2026',
      description: 'A week dedicated to prayer, fasting, and spiritual renewal.',
      location: 'Prayer Room',
      time: '7:00 AM',
      image: 'prayer.jpg'
    }
  ];
}
