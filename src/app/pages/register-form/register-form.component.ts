import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coincidenPasswordValidator } from '../../validators/coinciden-password.validator';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      nombreUsuario: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmarPassword: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(15), Validators.max(90)]],
      terminosYCondiciones: [false, [Validators.requiredTrue]]
    }, {
      validators: coincidenPasswordValidator
    });
  }

  resumen: any | null;
  mostrarPassword: boolean = false;
  mostrarConfirmarPassword: boolean = false;

  enviar(): void {
    if (this.formulario.invalid) {
      return;
    }

    const { password, confirmarPassword, ...datosSinPassword } = this.formulario.value;
    this.resumen = datosSinPassword;
  }

  toggleMostrarPassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  toggleMostrarConfirmarPassword(): void {
    this.mostrarConfirmarPassword = !this.mostrarConfirmarPassword;
  }

}
