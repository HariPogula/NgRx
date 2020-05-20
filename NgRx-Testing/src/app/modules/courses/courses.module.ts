import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [CourseComponent, CourseCardComponent, EditCourseComponent],
  imports: [CommonModule, CoursesRoutingModule],
})
export class CoursesModule {}
