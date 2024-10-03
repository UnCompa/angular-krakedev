import { Component, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-header-course',
  standalone: true,
  imports: [],
  templateUrl: './header-course.component.html',
})
export class HeaderCourseComponent {
  @Input() courses!: Course
}
