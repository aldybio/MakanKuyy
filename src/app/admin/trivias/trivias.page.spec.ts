import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TriviasPage } from './trivias.page';

describe('TriviasPage', () => {
  let component: TriviasPage;
  let fixture: ComponentFixture<TriviasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TriviasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
