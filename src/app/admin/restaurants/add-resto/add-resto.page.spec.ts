import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRestoPage } from './add-resto.page';

describe('AddRestoPage', () => {
  let component: AddRestoPage;
  let fixture: ComponentFixture<AddRestoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRestoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
