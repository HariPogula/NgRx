import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  display: boolean = false;
  @Input('course') course: Course;

  constructor() {}

  ngOnInit(): void {
    console.log('Values are ' + JSON.stringify(this.course));
  }
  editCourse(course) {
    this.display = true;
  }

  onDialogClose(event) {
    this.display = event;
  }
}
