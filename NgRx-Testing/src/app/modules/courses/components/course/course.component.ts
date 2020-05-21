import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  begineerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;
  isDefault: boolean = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.reloadCourses();
  }

  reloadCourses() {
    this.begineerCourses$ = this.courseService.filterCourse('BEGINNER');

    this.advancedCourses$ = this.courseService.filterCourse('ADVANCED');
  }
  showBeginerCourses() {
    this.begineerCourses$ = this.courseService.filterCourse('BEGINNER');
    this.isDefault = true;
  }

  showAdvancedCourses() {
    this.advancedCourses$ = this.courseService.filterCourse('ADVANCED');
    this.isDefault = false;
  }
}
