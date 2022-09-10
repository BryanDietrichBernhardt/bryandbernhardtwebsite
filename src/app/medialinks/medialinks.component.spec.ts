import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedialinksComponent } from './medialinks.component';

describe('MedialinksComponent', () => {
  let component: MedialinksComponent;
  let fixture: ComponentFixture<MedialinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedialinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedialinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
