import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Course } from '../models/course';
import { map, shareReplay, catchError, tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private _url = 'http://localhost:3000/';
  private subject = new BehaviorSubject<Course[]>([]);
  courses$: Observable<Course[]> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private messageService: MessageService
  ) {
    this.getCourses();
  }

  getCourses() {
    const loadCourses$ = this.http.get<Course[]>(this._url + 'courses').pipe(
      shareReplay(),
      catchError((err) => {
        console.log('Error is ' + err);
        const message = 'Could not load the Courses..';
        this.messageService.showErrors(message);
        return throwError(err);
      }),
      tap((courses) => {
        console.log('Courses are ' + courses);
        this.subject.next(courses);
      })
    );
    this.loadingService.showUntilDataLoad(loadCourses$).subscribe();
  }

  filterCourse(category: string): Observable<Course[]> {
    console.log('Category is ' + category);
    // const loadCourses$ =

    return this.courses$.pipe(
      map((courses) => courses.filter((c) => c.category == category))
    );
    // loadCourses$.subscribe();
  }
}
