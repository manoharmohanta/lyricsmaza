import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SongsdetailPage } from './songsdetail.page';

describe('SongsdetailPage', () => {
  let component: SongsdetailPage;
  let fixture: ComponentFixture<SongsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SongsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
