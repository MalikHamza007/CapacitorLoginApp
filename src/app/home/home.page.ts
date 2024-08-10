import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { GoogleAuth, User } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonLabel, IonAvatar, IonItem, IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  user: User | null = null;

  constructor() {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize()
    }
  }
  async signIn() {
    this.user = await GoogleAuth.signIn() as User;
    console.log(this.user);
    
  }
  async refresh() {
    const authCode = await GoogleAuth.refresh();
    console.log('refresh', authCode);
  }
  async signOut() {
    await GoogleAuth.signOut()
    this.user = null;
  }
}
