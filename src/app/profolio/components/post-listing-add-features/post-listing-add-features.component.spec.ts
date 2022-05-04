import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListingAddFeaturesComponent } from './post-listing-add-features.component';

describe('PostListingAddFeaturesComponent', () => {
  let component: PostListingAddFeaturesComponent;
  let fixture: ComponentFixture<PostListingAddFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListingAddFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListingAddFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
