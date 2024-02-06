import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sibling-1',
  templateUrl: './sibling-1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sibling1Component {
  logDetection() {
    console.log('sibling-1')
  }
}
