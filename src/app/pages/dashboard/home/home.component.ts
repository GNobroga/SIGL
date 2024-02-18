import { Component, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ChartBasicBarComponent } from '../../../components/charts/chart-basic-bar/chart-basic-bar.component';
import { ChartPieComponent } from '../../../components/charts/chart-pie/chart-pie.component';
import { ChartVerticalBarComponent } from '../../../components/charts/chart-vertical-bar/chart-vertical-bar.component';
import { ChartLineStylesComponent } from '../../../components/charts/chart-line-styles/chart-line-styles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, ChartBasicBarComponent, ChartPieComponent, ChartVerticalBarComponent, ChartLineStylesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {

  public isLoading = signal(false);

  public ngOnInit(): void {
    this.isLoading.set(true);
    setTimeout(() => this.isLoading.set(false), 200);
  }
}
