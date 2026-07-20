import { AbstractControl, ValidationErrors } from "@angular/forms";

export function coincidenPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmarPassword = control.get('confirmarPassword')?.value;

    if (password !== confirmarPassword) {
        return {
            passwordNoCoinciden: true
        }
    }
    return null;
}