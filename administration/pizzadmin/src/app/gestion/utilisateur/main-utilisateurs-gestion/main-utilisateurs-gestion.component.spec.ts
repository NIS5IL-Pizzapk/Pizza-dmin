import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUtilisateursGestionComponent } from './main-utilisateurs-gestion.component';

describe('MainUtilisateursGestionComponent', () => {
  let component: MainUtilisateursGestionComponent;
  let fixture: ComponentFixture<MainUtilisateursGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainUtilisateursGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainUtilisateursGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
