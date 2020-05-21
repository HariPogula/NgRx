import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  @Input() display: boolean;
  @Input() course: Course;
  @Output() displayChange = new EventEmitter();
  displayMaximizable: boolean;
  courseTypes = [
    { name: 'BEGINNER', code: 'BG' },
    { name: 'INTERMEDIATE', code: 'IN' },
    { name: 'ADVANCED', code: 'AD' },
  ];
  selectedCourse: string;
  constructor() {}

  ngOnInit(): void {}
  onClose() {
    this.displayChange.emit(false);
  }
}
