import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoviesongsPage } from './moviesongs.page';

describe('MoviesongsPage', () => {
  let component: MoviesongsPage;
  let fixture: ComponentFixture<MoviesongsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesongsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
