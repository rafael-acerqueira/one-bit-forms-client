import { Component, OnInit } from '@angular/core';
import { Form } from '../../shared/form.model';
import { FormService } from '../../shared/form.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-complete',
  templateUrl: './answer-complete.component.html',
  styleUrls: ['./answer-complete.component.css']
})
export class AnswerCompleteComponent implements OnInit {

  public form: Form = new Form({});

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.formService.getForm(params['id']).subscribe(data => {
          this.form = new Form(data);
        });
      }
    });
  }

}
