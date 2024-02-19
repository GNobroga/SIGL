import { Component } from '@angular/core';
import { SettingsHeaderComponent } from './components/settings-header/settings-header.component';
import { SettingsAccountFormComponent } from './components/settings-account-form/settings-account-form.component';
import { SettingsUploadPictureComponent } from './components/settings-upload-picture/settings-upload-picture.component';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [SettingsHeaderComponent, SettingsAccountFormComponent, SettingsUploadPictureComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export default class SettingsPageComponent {

}
