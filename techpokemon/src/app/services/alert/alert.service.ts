import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  alertaSucesso(message: string): void {
    this.showAlert(message, 'success-toast');
  }

  alertaInfo(message: string): void {
    this.showAlert(message, 'info-toast');
  }

  alertaWarning(message: string): void {
    this.showAlert(message, 'warning-toast');
  }

  alertaError(message: string): void {
    this.showAlert(message, 'error-toast');
  }

  private showAlert(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 5000,
      panelClass: [panelClass],
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
