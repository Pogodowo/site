const motto = document.createElement('template');
motto.innerHTML=`
<style>

.description-card{
                    
                    height: 550px;
                    width: 550px;
                    background-color: #faf7f0; 
                    border-radius:25px;
                    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                    margin: 30px;
                }
#motto-name{grid-area:n;                
                  font-family: 'Poppins', sans-serif;
                  display:flex;
                  justify-content:center;
                  align-items: center;
                  
                  
                }  

</style>



<div class="description-card">

<h3 id='motto-name'>Czasami trzeba się dużo narobić, aby potem nie trzeba było czegoś robić.</h3>

</div>`

class Motto extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode:"open"});
    this.shadowRoot.appendChild(motto.content.cloneNode(true));
    
    
    }
}

window.customElements.define('moje-motto',Motto);


