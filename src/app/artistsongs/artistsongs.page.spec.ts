import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtistsongsPage } from './artistsongs.page';

describe('ArtistsongsPage', () => {
  let component: ArtistsongsPage;
  let fixture: ComponentFixture<ArtistsongsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsongsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistsongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
