import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcomponentComponent } from './clientcomponent.component';

describe('ClientcomponentComponent', () => {
  let component: ClientcomponentComponent;
  let fixture: ComponentFixture<ClientcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
