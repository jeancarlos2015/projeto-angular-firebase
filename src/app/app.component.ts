import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: DocumentData[] = [];
  constructor(private firestore: Firestore) {
    const teste = collection(firestore, 'items');
    collectionData(teste).subscribe(data => {
      this.items = data;
      console.log(this.items);
    })

  }

  ngOnInit() {

  }
}

