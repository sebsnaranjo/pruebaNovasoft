import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private taskService: TasksService) {
    this.form = this.fb.group({
      codCli: ['', Validators.required],
      tipIde: ['06', Validators.required],
      nitCli: ['789456', Validators.required],
      nomCli: ['Prueba tecnica', Validators.required],
      nom1Cli: ['Prueba tecnica', Validators.required],
      ap1Cli: ['Endereco', Validators.required],
      eMail: ['teste@gmail.com', Validators.required],
      tipPer: [2, Validators.required],
      tipCli: [2, Validators.required],
      codCiu: ['11001', Validators.required],
      codDep: ['11', Validators.required],
      codPai: ['057', Validators.required],
      di2Cli: ['Barrio', Validators.required],
      te1Cli: ['123456789', Validators.required],
      pagWeb: ['https://youtube.com', Validators.required],
      fecIng: ['2022-06-14', Validators.required],
      estCli: ['1', Validators.required],
      codCliExtr: ['14', Validators.required],
    })
  }

  addAccount(){
    this.taskService.createAccount(this.form.value).subscribe();
  }

}
