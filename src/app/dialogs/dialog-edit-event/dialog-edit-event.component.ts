import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-edit-event',
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatProgressBarModule, MatDatepickerModule ,CommonModule],
  templateUrl: './dialog-edit-event.component.html',
  styleUrl: './dialog-edit-event.component.scss'
})
export class DialogEditEventComponent {
  @Input() event: any = {}
  loading = false;

  constructor() {
    
  }

  updateEvent() {}
}
