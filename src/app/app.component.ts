import { ChangeDetectorRef, Component, Inject, VERSION } from '@angular/core';
import type { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public name = 'Angular ' + VERSION.major;
  public wrapperSize: string = '?';
  public ta1Size: string = '?';
  public ta2Size: string = '?';

  public query = ['', '#ta1', '.aaa', '#bbb'];

  public constructor(
    @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {}

  public resize(event: ResizeObserverEntry): void {
    this[
      `${event.target.id}Size`
    ] = `${event.target.id}: ${event.contentRect.width} x ${event.contentRect.height}`;
    console.log('RESIZE', event);
    this.cdr.detectChanges();
  }

  public changeQuery(): void {
    if(this.query.some(q => q === '#ta2')) {
      this.query = ['', '#ta1', '.aaa', '#bbb'];
      this.ta2Size = '?';
    } else {
      this.query = ['', '#ta1', '#ta2'];
    }
  }
}
