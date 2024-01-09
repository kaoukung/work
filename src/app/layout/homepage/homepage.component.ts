import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from 'express';
import { ApiService } from '../shared/service/api.service';


interface Task {
  id: number;
  name: string;
  date: string;
  description: string;
}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  avatar: any;
  tasks: Task[] = [];

  private http = inject(HttpClient);
  private router = inject (Router);
  private apiservice = inject (ApiService);
  ngOnInit(): void {

    this.getProFile()
    this.getTasks()

  }

  getProFile(){
    this.apiservice.getProfile().subscribe((data:any) => {
      this.avatar = data;
    })
    }
  getTasks(){
    this.apiservice.getTasks().subscribe((data:any) => {
      this.tasks = data;
    })
  }
 
  detail(task: Task) {
    this.router.navigate(['/taskdetail', task], {
      queryParams: {
        id_task: task.id
      }
    });
  }

}


