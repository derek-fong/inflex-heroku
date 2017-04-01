import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const authServiceStub = { getToken: () => 'SAMPLE_TOKEN' };

    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [{ provide: AuthService, useValue: authServiceStub }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
