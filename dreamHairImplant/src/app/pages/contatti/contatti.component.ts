import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {
  @ViewChild('f') form!: NgForm

  constructor(){}

  async inviaEmail(){
    try {
      emailjs.init('_Q9eaohY2Gdo52NiF');

      let response = await emailjs.send("service_wv47o5q", "template_kh7xbnj", {
        from_name: this.form.value.from_name,
        to_name: "Vincenzo",
        from_email: this.form.value.from_email,
        message: this.form.value.message,
      });

      if (response.status === 200) {
        // L'email è stata inviata con successo
        alert('Email inviata!!');
        this.form.reset();
      } else {
        // si è verificato un errore
        alert('Si è verificato un problema durante l\'invio dell\'email. Riprova.');
      }
    } catch (error) {
      // si è verificato un errore
      alert('Si è verificato un errore durante l\'invio dell\'email. Riprova.');
      console.error(error);
    }
  }
}
