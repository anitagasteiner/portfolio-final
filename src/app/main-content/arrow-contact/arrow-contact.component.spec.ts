import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowContactComponent } from './arrow-contact.component';

describe('ArrowContactComponent', () => {
  let component: ArrowContactComponent;
  let fixture: ComponentFixture<ArrowContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
