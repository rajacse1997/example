import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  
  testMessage$: Observable<string>; 

  constructor(private testService:JobsService){}
  ngOnInit(){
    this.getTestMessage(); 

  }

  getTestMessage () {  
    this.testService.getTestMessage().subscribe(data => console.log(data));  
} 
}
