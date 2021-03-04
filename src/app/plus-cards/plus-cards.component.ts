import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';
import { PayService } from '../services/pay.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'plus-cards',
  templateUrl: './plus-cards.component.html',
  styleUrls: ['./plus-cards.component.css']
})
export class PlusCardsComponent {
  checkoutEndpoint = `${environment.endpoint}/pay`;

  constructor(
    private route: ActivatedRoute,
    private pay: PayService,
    public userService: UserService
  ) {}
  
  async ngOnInit() {
    await this.userService.init();

    const status = this.route.snapshot.queryParamMap.get('payment_status');
    if (status === 'failed')
      alert('Payment Failed');
  }

  async checkout(plan: number) {
    window.location.href = this.pay.payURL(plan);
  }
}
