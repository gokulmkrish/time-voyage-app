import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface EventItem {
  id?: number;
  title?: string;
  date?: string;
  description?: string;
  image?: string;
  video?: any;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimelineModule, CardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  events: EventItem[] = [];

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getSanitizedURL(link: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  getEvents() {
    this.events = [
      {
        id: 1,
        title: 'The Renaissance Begins',
        date: '14th Century',
        description:
          'The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.',
        image: 'renaissance.jpg',
        video: 'https://www.youtube.com/embed/Om1jvUzVAtE?si=5vIFsxYtp5IagL2u',
      },
      {
        id: 2,
        title: 'Declaration of Independence',
        date: '1776',
        description:
          'The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.',
        image: 'declaration_of_independence.jpg',
        video: 'https://www.youtube.com/embed/LKJMWHCUoiw?si=W2Egw07lEi-7bB87',
      },
      {
        id: 3,
        title: 'Fall of the Berlin Wall',
        date: '1989',
        description:
          'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
        image: 'berlin_wall.jpg',
        video: 'https://www.youtube.com/embed/A9fQPzZ1-hg?si=WXbw25XnCZrdaxgc',
      },
    ].map((event: any) => {
      event.video = this.getSanitizedURL(event.video);
      
      return event;
    });
  }
}
