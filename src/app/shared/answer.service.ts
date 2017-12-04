import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class AnswerService {

  constructor(private _tokenService: Angular2TokenService) { }

  getAnswers(form_id) {
    return this._tokenService.get('answers', {search: {form_id: form_id}}).map(res => res.json());
  }

  getAnswer(answer_id) {
    return this._tokenService.get('answers/' + answer_id).map(res => res.json());
  }

  createAnswer(answer_params) {
    return this._tokenService.post('answers', answer_params).map(res => res.json());
  }

  destroyAnswer(answer_id) {
    return this._tokenService.delete('answers/' + answer_id).map(res => res.json());
  }
}
