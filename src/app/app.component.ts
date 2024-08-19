import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todolist';
  list:any[]=[];

  addTask(data:string){

   this.list.push({id:this.list.length, name:data})
   console.warn(this.list);
   

  }

  removeTask(id:any) {
this.list=this.list.filter(item => item.id!==id);
  }
}



