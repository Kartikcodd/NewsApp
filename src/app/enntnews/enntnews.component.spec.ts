import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnntnewsComponent } from './enntnews.component';

describe('EnntnewsComponent', () => {
  let component: EnntnewsComponent;
  let fixture: ComponentFixture<EnntnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnntnewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnntnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
