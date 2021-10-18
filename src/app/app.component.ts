import { ChangeDetectorRef, Component, Inject, VERSION } from '@angular/core';
import type { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public name = 'Angular ' + VERSION.major;
  public query = '.green';
  public size: string;

  public constructor(
    @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    // setInterval(() => {
    //   this.query = this.query ? null : '.green';
    // }, 1000);
  }

  public resize(event: HTMLElement): void {
    this.size = `${event.offsetWidth}x${event.offsetHeight}`;
    console.log('RESIZE', this.size);
    this.cdr.detectChanges();
  }
}
