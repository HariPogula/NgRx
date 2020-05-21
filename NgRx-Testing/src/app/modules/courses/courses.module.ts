import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { LoadingComponent } from './components/loading/loading.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    CourseComponent,
    CourseCardComponent,
    EditCourseComponent,
    LoadingComponent,
    MessageComponent,
  ],
  imports: [CommonModule, CoursesRoutingModule, PrimengModule],
})
export class CoursesModule {}
