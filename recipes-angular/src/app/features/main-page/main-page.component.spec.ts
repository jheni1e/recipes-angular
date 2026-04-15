import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load kaomojis on init', () => {
    component.ngOnInit();
    expect(component.kaomojis.length).toBeGreaterThan(0);
  });

  it('should have filteredList initialized', () => {
    expect(component.filteredList).toBeDefined();
    expect(component.filteredList.length).toBeGreaterThan(0);
  });

  it('should render title "My Recipes"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('My Recipes');
  });

  it('should render kaomojis in DOM', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const kaomojis = compiled.querySelectorAll('.kaomoji');

    expect(kaomojis.length).toBeGreaterThan(0);
  });
});
