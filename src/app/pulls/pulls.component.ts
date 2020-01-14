import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pulls',
  templateUrl: './pulls.component.html',
  styleUrls: [ './pulls.component.scss' ]
})
export class PullsComponent implements OnInit {

  form: FormGroup;
  allRep = [
    { name: 'VIP', id: 1 },
    { name: 'Regular', id: 2 },
    { name: 'Crap', id: 3 },
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      rep: [ '' ]
    });
    this.setDefault();
  }

  setDefault() {
    let employee = {
      rep: [ this.allRep[ 0 ].id, this.allRep[ 1 ].id ]
    };
    this.form.setValue(employee);
  }

  onSubmit() {
    console.log(this.form.value);
  }


}
