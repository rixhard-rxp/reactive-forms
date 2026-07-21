# Formulario de Registro — Reactive Forms (Angular v19)

Taller Front  — ADSO
Formulario de registro de usuario construido con Angular Reactive Forms, validaciones integradas y un validador personalizado.

## Características

- Formulario construido con `FormBuilder` y `FormGroup` (Reactive Forms, sin `ngModel`)
- Validaciones por campo: nombre completo, correo, nombre de usuario, contraseña, edad y términos y condiciones
- Validador personalizado que compara `password` y `confirmarPassword`
- Mensajes de error específicos por campo, visibles solo tras interacción del usuario
- Botón de envío deshabilitado mientras el formulario sea inválido
- Resumen de los datos registrados al enviar (sin incluir la contraseña)
- Requerimiento opcional implementado: mostrar/ocultar contraseña

## Requisitos previos

- Node.js (v18 o superior)
- Angular CLI v19

## Instalación

```bash
git clone 
cd formulario-registro
npm install
```
## Ejecución

```bash
ng serve
```

Si no tienes Angular CLI instalado globalmente, usa:

```bash
npx ng serve
```

Abre el navegador en `http://localhost:4200/`
