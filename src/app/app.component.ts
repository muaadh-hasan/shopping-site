import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageSelected = 'recipe';


  onNavigate(page:string){
    this.pageSelected = page;
  }

}
