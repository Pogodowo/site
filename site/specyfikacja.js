const spec = document.createElement('template');
spec.innerHTML=`
<style>

.description-card{
                    display:grid;
                    grid-template-columns: repeat(12,1fr);
                    grid-template-rows: 50px 200px  80px ;
                    grid-template-areas:
                    "n n n n n n n n n n n n" 
                    "f f f f f f f f f f t t"
                    "f f f f f f f f f f t t"
                    "d d d d d d d d d d k k"
                    "d d d d d d d d d d k k"
                    ;

                    height: 550px;
                    width: 900px;
                    background-color: #faf7f0; 
                    border-radius:25px;
                    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                    margin: 30px;
                }
#specyfikacja-name{grid-area:n;                
                  font-family: 'Poppins', sans-serif;
                  display:flex;
                  justify-content:center;
                  align-items: center;
                  
                  
                }  
#specyfikacja-img{grid-area:f;
                width: 100%;
                height: 100%;
                border-top: 1px solid #d9d3d2;

     }
#description{grid-area:d;
    display:flex;
    justify-content:center;
    font-family: 'Nunito', sans-serif;
   
    margin: 20px;
    width:700px;
    border-top: 1px solid #d9d3d2;} 

#receptura-link{grid-area: k ;
        
        width: 100%;
        display:flex;
        justify-content:center;
        align-items: center;
        background-color: #4578b0;
        border-radius: 25px 0px 25px 0px;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        color: black;
    }

        a {
            text-decoration: none;
            

      }
#technologies{
    grid-area: t;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 12px;
    border-top: 1px solid #d9d3d2;
}                      


#django-img {width: 40px;
} 
#python-img{width: 40px;
} 
#js-img{width: 40px;
} 
#react-img{width: 40px;}
</style>



<div class="description-card">

<h3 id='specyfikacja-name'>Specyfikacja nominałowa</h3>
<p id='description'>Prosta i praktyczna aplikacja służąca stworzeniu specyfikacji nominałowej.
Projekt generuje kwoty słowne i ma możliwośc zapisania specyfikacji w formacie pdf
 </p>



<img id='specyfikacja-img'/>
<div id='technologies'><img id='python-img'/><img id='django-img'/><img id='js-img'/></div> 
<a id='receptura-link' target="_blank" href="web-production-c06f.up.railway.app"> Zobacz sam</a>
</div>`

class Specyfikacja extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode:"open"});
    this.shadowRoot.appendChild(spec.content.cloneNode(true));
    this.shadowRoot.querySelector('#specyfikacja-img').src=`${this.getAttribute('avatar')}`;
    this.shadowRoot.querySelector('#django-img').src=`${this.getAttribute('django')}`;
    this.shadowRoot.querySelector('#python-img').src=`${this.getAttribute('python')}`;
    this.shadowRoot.querySelector('#js-img').src=`${this.getAttribute('js')}`;
    
    }
}

window.customElements.define('specyfikacja-nominalowa',Specyfikacja);


