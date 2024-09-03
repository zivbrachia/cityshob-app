import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGeoComponent } from './search-geo.component';

describe('SearchGeoComponent', () => {
  let component: SearchGeoComponent;
  let fixture: ComponentFixture<SearchGeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchGeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
