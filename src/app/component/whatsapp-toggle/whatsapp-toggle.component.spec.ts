import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappToggleComponent } from './whatsapp-toggle.component';

describe('WhatsappToggleComponent', () => {
  let component: WhatsappToggleComponent;
  let fixture: ComponentFixture<WhatsappToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
