import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import {DataService} from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {

  ninjas = [];
  bool = null;

  constructor(private logger: LoggingService, private dataService: DataService) {}

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
    /*this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data
    );*/

    this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.ninjas.push(snapshot.val())
    })
  }

  fbPostData(name, belt){
    firebase.database().ref('/').push({name:name, belt:belt})
  }

}
