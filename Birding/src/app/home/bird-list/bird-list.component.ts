import { Component, OnInit } from '@angular/core';
import { IBird } from 'src/models/bird.model';
import { title } from 'process';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { BirdService } from 'src/app/bird.sevice';

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.scss']
})
export class BirdListComponent implements OnInit {
  title = {
    title: "הציפורים שלנו"
  }
   _birdslist$ = new ReplaySubject<IBird[]>(1);
  // public get _birdslist$(): Observable<IBird[]> {
  //   // return this._employees$;
  //   return this._birdslist$.asObservable();
  // }
  items: IBird[] = [];


  constructor(private birds: BirdService) {
    // this.items = this.http.get(url:'http://localhost:54867/api/bird')
  }

  ngOnInit() {
    // Create Http Request To Server
    const requestToServer = this.birds.getAllUsers();

    // Call the Http Request
    requestToServer.subscribe(res => {
      console.log('Birds from server', res);
      this._birdslist$.next(res);

    });
  }
}
