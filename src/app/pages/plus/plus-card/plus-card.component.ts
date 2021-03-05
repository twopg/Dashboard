import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-plus-card',
  templateUrl: './plus-card.component.html',
  styleUrls: ['./plus-card.component.css']
})
export class PlusCardComponent {
  @Input() duration: string;
  @Input() price: number;
  @Output() checkout = new EventEmitter();

  constructor(
    public userService: UserService
  ) {}
}
