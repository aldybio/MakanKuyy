import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTriviaPage } from './add-trivia.page';

describe('AddTriviaPage', () => {
  let component: AddTriviaPage;
  let fixture: ComponentFixture<AddTriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
