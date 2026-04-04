import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ministries',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './ministries.html',
  styleUrl: './ministries.css'
})
export class Ministries {
  ministries = [
    {
      name: 'Praise & Worship',
      description: 'Leading the church into God’s presence through music and worship.',
      image: 'PAW.jpg'
    },
    {
      name: 'Media Ministry',
      description: 'Capturing and sharing the Word through media and digital creativity.',
      image: 'media.jpg'
    },
    {
      name: 'Production Team',
      description: 'Managing lights, sounds, and technical excellence in every service.',
      image: 'prod.jpg'
    },
    {
      name: 'Ushers',
      description: 'Welcoming and assisting everyone with love and hospitality.',
      image: 'usher.jpg'
    },
    {
      name: 'Arete Youth',
      description: 'Empowering the next generation to grow in faith and leadership.',
      image: 'arete.jpg'
    },
    {
      name: 'Kids Ministry',
      description: 'Teaching children biblical values in a fun and loving environment.',
      image: 'kids.jpg'
    }
  ];
}