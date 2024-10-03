import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { courses } from '../data/course.data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course = courses;
  constructor() { }

  getCourse(): Course {
    return this.courses
  }
}
