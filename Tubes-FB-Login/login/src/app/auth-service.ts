import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Injectable } from '@angular/core';
@Injectable()

export class AuthService {

    signUp(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            error => console.log(error)
        );
    }

    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => console.log('LOGIN SUCCESS')
            )
        .catch(
            
        );
    }
}