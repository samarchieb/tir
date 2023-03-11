import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  selected!: Date | null;
  
  toggletraduction = new BehaviorSubject(false);
  constructor(
    private translateService: TranslateService,
    public api: ServiceService 
    
  ) { }

  public selectLanguage(lang: string) {
    this.translateService.use(lang);

    if (lang == 'AR') {
      this.api.setLangue(true);

      this.toggletraduction.next(true);
    } else if (lang == 'FR') {
      this.api.setLangue(false);
      this.toggletraduction.next(false);
    } else if (lang== 'EN') {
      this.api.setLangue(false);
      this.toggletraduction.next(false);
    }
  }
  ngOnInit(): void {
  }

}


