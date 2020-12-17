import { Component, OnInit } from '@angular/core';
import { Aboutus } from './about-us.model';
import { AboutUsService } from './about-us.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  about:Aboutus[];

  constructor(private aboutusService: AboutUsService) { }

  ngOnInit() {
    this.about= this.aboutusService.getAllAboutus();
  }

}
