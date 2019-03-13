import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    foo = {
        "firstname":"Jayce",
        "Lastname":"Hauck",
        "username":"Domenic_Kuhm81",
        "email":"123"
    };
    
    
    render() {
        return html`
        <style>
        .s1{color:blue;}
        .s2{color:red;}
        .s3{color:green;}
        </style>
        <h1 class="s1">${this.foo.firstname}</h1>
        <h2 class="s2">${this.foo.Lastname}</h2>
        <h3 class="s3">${this.foo.email}</h3>
        `;
    }

    firstUpdated(changedProperties:any) {
        changedProperties.forEach((oldValue:any , propName:any) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('api/user')
            .then((response) => response.json())
            .then((bodyRes) => this.foo = bodyRes);

    }
}
