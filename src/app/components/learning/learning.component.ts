import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../model/Course';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent implements OnInit{

  courses!: Course;

  constructor(private service: CourseService) {
    
  }
  ngOnInit(): void {
    this.courses = this.service.getCourse()
  }

}
