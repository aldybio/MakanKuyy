import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditRestoPage } from './edit-resto.page';

describe('EditRestoPage', () => {
  let component: EditRestoPage;
  let fixture: ComponentFixture<EditRestoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRestoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditRestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
