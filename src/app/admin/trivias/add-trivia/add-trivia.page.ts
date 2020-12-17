import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TriviaService } from 'src/app/services/trivia.service';
import { Trivia } from 'src/app/trivia';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-trivia',
  templateUrl: './add-trivia.page.html',
  styleUrls: ['./add-trivia.page.scss'],
})
export class AddTriviaPage implements OnInit {

  constructor(
    private router: Router,
    private triviaService: TriviaService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log('Form: ', form);

    this.triviaService.addTrivia(form.value).then(res => {
      console.log('Result: ', res);
      this.router.navigateByUrl('/admin/trivias');
    }).catch(error => console.log('Error: ', error));

    form.reset();
    this.router.navigateByUrl('/admin/trivias');
  }

}
