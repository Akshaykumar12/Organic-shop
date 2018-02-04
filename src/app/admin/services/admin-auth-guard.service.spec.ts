import { AdminAuthGuardService } from './admin-auth-guard.service';
import { inject, TestBed } from '@angular/core/testing';


describe('AdminAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuardService]
    });
  });

  it('should be created', inject([AdminAuthGuardService], (service: AdminAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
