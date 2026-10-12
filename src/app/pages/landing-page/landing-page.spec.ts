import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LandingPage } from './landing-page';

describe('LandingPage', () => {
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate email on sign up', () => {
    component.email.set('');
    component.signUp();
    expect(component.errorMessage()).toContain('Please enter a valid business email');
    expect(component.isSignedUp()).toBe(false);

    component.email.set('invalid-email');
    component.signUp();
    expect(component.errorMessage()).toContain('Please enter a valid business email');
    expect(component.isSignedUp()).toBe(false);
  });

  it('should mark as signed up when valid email is submitted', () => {
    vi.useFakeTimers();
    try {
      component.email.set('founder@fintech.io');
      component.signUp();
      expect(component.errorMessage()).toBe('');
      expect(component.isSubmitting()).toBe(true);

      vi.advanceTimersByTime(500);

      expect(component.isSubmitting()).toBe(false);
      expect(component.isSignedUp()).toBe(true);
    } finally {
      vi.useRealTimers();
    }
  });

  it('should not throw on playClick', () => {
    expect(() => component.playClick()).not.toThrow();
  });
});
