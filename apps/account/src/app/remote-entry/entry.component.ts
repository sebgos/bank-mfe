import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'bank-mfe-account-entry',
  template: `<bank-mfe-nx-welcome></bank-mfe-nx-welcome>`,
})
export class RemoteEntryComponent {}
