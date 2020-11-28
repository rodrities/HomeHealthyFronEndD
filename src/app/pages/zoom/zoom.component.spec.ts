import { TestBed } from '@angular/core/testing';
import { ZoomComponent } from './zoom.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ZoomComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ZoomComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /*it(`should have as title 'websdk-sample-angular'`, () => {
    const fixture = TestBed.createComponent(ZoomComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('websdk-sample-angular');
  });*/

  it('should render title', () => {
    const fixture = TestBed.createComponent(ZoomComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('websdk-sample-angular app is running!');
  });
});
