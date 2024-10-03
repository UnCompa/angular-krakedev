import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'tr[student-item]',
  standalone: true,
  imports: [],
  templateUrl: './student-item.component.html',
})
export class StudentItemComponent {
  @Input() item!: Student;
}
