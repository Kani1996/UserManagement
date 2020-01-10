import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }
// retrieving contacts
getContacts() {
    return this.http.get('http://localhost:3000/api/persons').pipe(
      map(res => res.json())
  );
}

// add contact

addContacts(newContact) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/person', newContact,{headers :headers }).pipe(map(res => res.json()));
}

// deleteMethod

deleteContact(id) {
    return this.http.delete('http://localhost:3000/api/person/' + id).pipe(map(res => res.json()));
}
}
