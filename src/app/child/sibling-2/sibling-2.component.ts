import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DummyService } from 'src/app/dummy.service'

@Component({
  selector: 'app-sibling-2',
  templateUrl: './sibling-2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sibling2Component {

  constructor(public dummyService: DummyService) {}

  logDetection() {
    console.log('sibling-2')
  }
}
