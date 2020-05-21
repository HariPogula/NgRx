import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  showMessage = false;
  errors$: Observable<string[]>;

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.errors$ = this.messageService.errors$.pipe(
      tap(() => (this.showMessage = true))
    );
  }
}
