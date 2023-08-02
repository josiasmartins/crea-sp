import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      persona: ['', Validators.required],
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Implemente aqui a lógica de login ou envio do formulário
      console.log(this.loginForm.value);
    } else {
      // Exibir mensagens de erro nos campos inválidos (touched)
      this.loginForm.markAllAsTouched();
    }
  }

}
