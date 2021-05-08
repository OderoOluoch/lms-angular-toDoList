import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[]=[
    {id:1, title:"Ya asubuhi sana", description:"Amka asubuhi Kijanaaa"},
    {id:2,title:"Ya asubuhi kidogo", description:"Nunua Maziwa ya chaiii"},
    {id:3,title:"Ya asubuhi mid", description:"Pika Chai ukule na mkateee"},
    {id:4, title:"Ya asubuhi karibu jioni",description:"Anza KUsoma Angula uive uungue"},
    {id:5,title:"Ya asubuhi jioni", description:"Soma sana mpaka JS na css"},
    {id:6, title:"Ya jioni",description:"Akili ikichoka lala, na ulale uamke uendelee"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
