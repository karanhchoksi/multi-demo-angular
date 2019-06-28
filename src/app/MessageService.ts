/**
 * TODO:
 *  * Created by WebStorm.
 * User: Karan Chokshi ( @kc )
 * Date: 17/5/19
 * Time: 5:56 PM
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessages() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
