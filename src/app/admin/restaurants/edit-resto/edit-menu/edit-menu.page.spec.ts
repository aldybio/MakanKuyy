import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMenuPage } from './edit-menu.page';

describe('EditMenuPage', () => {
  let component: EditMenuPage;
  let fixture: ComponentFixture<EditMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
