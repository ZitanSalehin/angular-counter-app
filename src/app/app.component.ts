import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-app';

  countNumber=0;

  resetBtn(){
    this.countNumber=0;
    
  }
  increaseBtn(){
    this.countNumber=this.countNumber+1;

  }
  decreaseBtn(){
    this.countNumber=this.countNumber-1;

  }
}



