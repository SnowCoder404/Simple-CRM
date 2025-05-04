import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideNativeDateAdapter(),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "simple-crm-b157f", appId: "1:614621376920:web:04f45ceca2f2a365a9fbed", storageBucket: "simple-crm-b157f.firebasestorage.app", apiKey: "AIzaSyDT74STVh447Cy7KiFceQGMZf67sqr7OGQ", authDomain: "simple-crm-b157f.firebaseapp.com", messagingSenderId: "614621376920" })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()),
  ]
};
