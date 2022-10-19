import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  messages: any[] = ['aaa','aaa','aaa'];

  messageMapping: {[k: string]: string} = {
    '=0': "No message.",
    '=1': "One message",
    'other': "# messages"
  }

  message_with_id: string = $localize`:@@messageAwesomeNg:`;
}
