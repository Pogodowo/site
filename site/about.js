const personal_data = document.createElement('template');
personal_data.innerHTML=`
<style>

.description-card{
                    display:grid;
                    grid-template-columns: repeat(12,1fr);
                    grid-template-rows: 20px auto 80px ;
                    grid-template-areas: 
                    "n n n n n n n n f f f f"
                    "d d d d d d d d f f f f"
                    "d d d d d d d d l l l l"
                    "d d d d d d d d l l l l"
                    "t t t t t t t t k k k k"
                    ;

                    height: 550px;
                    width: 550px;
                    background-color: #faf7f0; 
                    border-radius:25px;
                    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                    margin: 30px;
                }
#description-name{grid-area:n;                
                  font-family: 'Poppins', sans-serif;
                  display:flex;
                  justify-content:center;
                  align-items: center;
                  
                }  
#description-img{grid-area:f;
                height: 250px;
                
                border-radius: 0px 25px 0px 0px;

     }
#description{grid-area:d;
    display:flex;
    justify-content:center;
    font-family: 'Nunito', sans-serif;
   
    margin: 20px;
    width:300px;
    border-top: 1px solid #d9d3d2;} 
#description-kontakt{grid-area: k ;
   
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: #4578b0;
    border-radius: 25px 0px 25px 0px;
                       } 
#links{
    grid-area: l;
    height:170px;

}                       
#technologies{
    grid-area: t;
    display: flex;
    justify-content: space-evenly;
    padding: 12px;
}                      
#kontakt-envelope{width: 70px;
} 
#django-img {width: 40px;
} 
#links{display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-evenly;
    }
#linkedin-img {width: 50px}
#github-img {width: 50px}
#python-img{width: 40px;
} 
#js-img{width: 40px;
} 
#react-img{width: 40px;}


</style>

<div class="description-card">

<h3 id='description-name'></h3>
<p id='description'> Cześć! Nazywam się Łukasz i jestem entuzjastą programowania. Podczas rozwijania mojej pasji staram się tworzyć projekty ułątwiające
realizację różnych zadań życia codziennego, będące jednocześnie  intuicyjnym w  użytkowaniu.
Moje prace są to najczęściej aplikacje webowe oparte na języku Python z użyciem Django z frontendem napisanym w javascipt i Css.
Jestem w trakcie rozwijania umiejętności tworzenia aplikacji w Reakcie i mam nadzieję niedługo opublikować pierwsze efekty pracy.

    </p>



<img id='description-img'/>
<div id='links' ><img id='linkedin-img'/><a target="_blank" href="https://github.com/Pogodowo"><img  id='github-img'/></a></div> 
<div id='technologies' ><img id='python-img'/><img id='django-img'/><img id='js-img'/><img id='react-img'/></div> 
<a id='description-kontakt'  href = "mailto: lukabr@op.pl"> <img id="kontakt-envelope" /> </a>




</div>`

class Informacje extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode:"open"});
    this.shadowRoot.appendChild(personal_data.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerHTML=`${this.getAttribute('name')}`;
    this.shadowRoot.querySelector('#description-img').src=`${this.getAttribute('avatar')}`;
    this.shadowRoot.querySelector('#kontakt-envelope').src=`${this.getAttribute('envel')}`;
    this.shadowRoot.querySelector('#django-img').src=`${this.getAttribute('django')}`;
    this.shadowRoot.querySelector('#python-img').src=`${this.getAttribute('python')}`;
    this.shadowRoot.querySelector('#js-img').src=`${this.getAttribute('js')}`;
    this.shadowRoot.querySelector('#react-img').src=`${this.getAttribute('react')}`;
    this.shadowRoot.querySelector('#linkedin-img').src=`${this.getAttribute('linkedin')}`;
    this.shadowRoot.querySelector('#github-img').src=`${this.getAttribute('github')}`;
    }
}

window.customElements.define('moje-informacje',Informacje);

