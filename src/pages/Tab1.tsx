import React, { useState } from 'react';
import { IonContent, IonHeader, IonFabButton, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useFirebase } from '../hooks/useFirebase';

const Tab1: React.FC = () => {
  // State variables
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { userLogin } = useFirebase();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput value={email} placeholder='Email' type='email' onIonChange={e => setEmail(e.detail.value!)} ></IonInput>
        <IonInput value={password} placeholder='Password' type='password' onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        <IonFabButton onClick={() => userLogin(email,password)}>Login</IonFabButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
