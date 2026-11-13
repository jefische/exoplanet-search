import { Component, inject, output } from '@angular/core';
import { rangeValidator } from '../../../shared/validators/range.validator';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchCriteria } from '../../../core/models/planet.model';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-search-form',
  styleUrl: './search-form.scss',
  templateUrl: './search-form.html',
})
export class SearchForm {
  private fb = inject(FormBuilder);
  submitted = output<SearchCriteria>();

  searchForm = this.fb.group(
    {
      name: [''],
      minYear: [null as number | null, [Validators.min(1989)]],
      maxYear: [null as number | null],
      method: [''],
    },
    { validators: rangeValidator('minYear', 'maxYear') },
  );

  search() {
    if (this.searchForm.valid) {
      this.submitted.emit(this.searchForm.getRawValue());
    }
  }
}
