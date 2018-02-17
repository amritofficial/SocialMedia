import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-timeline-feed',
  templateUrl: './nav-timeline-feed.component.html',
  styleUrls: ['./nav-timeline-feed.component.css']
})
export class NavTimelineFeedComponent implements OnInit {

  items: string[] = ['Amrit', 'Bob', 'Steve', 'A']
  constructor() { }

  ngOnInit() {
  }

}
