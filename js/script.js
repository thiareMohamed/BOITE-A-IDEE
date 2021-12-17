const api_url = "https://dvovvuuahlnufggghdnb.supabase.co/rest/v1/idees";
const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4ODAzNSwiZXhwIjoxOTU1MTY0MDM1fQ.HwTW2GcvE3GapFOkxiqPXp3BlRqnF-ZVDpLjoWVZ_P4";

// Affichage des donnnes (Chargement de la page)
(function()
{
    fetch(api_url,{
        method:"GET",
        headers:{
            apikey: api_key,
        },
    })
    .then((idees) => idees.json())
    .then((idees) => {
        // Afficher les donnees
        for (let idee of idees)
        {
            afficheIdee (idee)
        }
    })
})()

// Evennement du formulaire
document.querySelector( '.form').addEventListener('submit',infoForm)
function infoForm(e)
{
    e.preventDefault();
    let titreIdee = document.querySelector('.titre-form').value
    let msgIdee = document.querySelector('.msg-form').value

    let nouvelleIdee =
    {
        titre:titreIdee,
        idee:msgIdee,
        statu:"null",
    }
    
  let reponse =  fetch(api_url,{ 
        method:"POST",
        headers:{
            apikey: api_key,
            "Content-Type" : "application/json",
            Prefer: "return=representation",
        },
             body: JSON.stringify(nouvelleIdee)
            
        })
        .then((response) => response.json())
        .then((data) => {
          ideeCreeAuNiveauAPI = data[0]
          //AJOUT DE LA NOUVELLE IDEE AU NIVEAU DE LA PAGE
          afficheIdee(ideeCreeAuNiveauAPI)
        })

    document.querySelector('.form').reset()
}

// Creation des elements HTML
function afficheIdee (idee)
{
    idee = {
        id : idee.id,
        titre : idee.titre,
        idee : idee.idee,
        statu : idee.statu
    }
    var main = document.querySelector('.main-idee')
    var card = document.createElement("div");
    main.appendChild(card);
    card.classList.add('card')
    card.classList.add('m-auto')
    card.classList.add('mb-3')
    card.classList.add('animate__animated')
    card.classList.add('animate__zoomInDown')
    card.setAttribute('id', idee.id)
    card.style.width = "18rem";
    card.style.height = "230px";

     
    var header = document.createElement("h5");
    card.appendChild(header);
    header.classList.add('card-header')
    header.classList.add('text-primary')
    header.classList.add('border-primary')
    header.innerHTML = idee.titre
    

    var body = document.createElement("div");
    card.appendChild(body);
    body.classList.add('card-body')
    body.innerHTML = idee.idee


    var footer = document.createElement("div");
    card.appendChild(footer);
    footer.classList.add('card-footer')
    footer.classList.add('card-footer')
    footer.classList.add('d-flex')
    footer.classList.add('justify-content-between')

    var accepter = document.createElement("button");
    footer.appendChild(accepter);
    accepter.classList.add('btn-primary')
    accepter.classList.add('btn')
    accepter.innerHTML = "Accepter"
    accepter.setAttribute('id', idee.id)
    accepter.addEventListener('click', ()=>{
        document.querySelector('div[id="'+idee.id+'"]').style.borderColor = "green"
        let miseAjour =
        {
            statu: "true"
        }
        fetch(`https://dvovvuuahlnufggghdnb.supabase.co/rest/v1/idees?id=eq.${idee.id}`,{
            method:"PATCH",
            headers:{
                apikey: api_key,
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(miseAjour),
        })
    })

    var refuser = document.createElement("button");
    footer.appendChild(refuser);
    refuser.classList.add('btn-danger')
    refuser.classList.add('btn')
    refuser.innerHTML = "Refuser"
    refuser.setAttribute('id', idee.id)
    refuser.addEventListener('click', ()=>{
        document.querySelector('div[id="'+idee.id+'"]').style.borderColor = "red"
        let miseAjour =
        {
            statu: "false"
        }
        fetch(`https://dvovvuuahlnufggghdnb.supabase.co/rest/v1/idees?id=eq.${idee.id}`,{
            method:"PATCH",
            headers:{
                apikey: api_key,
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(miseAjour),
        })
    })

    if(idee.statu == "false")
    {
            document.querySelector('div[id="'+idee.id+'"]').style.borderColor = "red"
    }
    else if(idee.statu == "true")
    {
            document.querySelector('div[id="'+idee.id+'"]').style.borderColor = "green"
    }
    else
    {
            document.querySelector('div[id="'+idee.id+'"]').style.borderColor = "black"
    }
    
}

// Evennement de textArea
var textArea = document.querySelector('.msg-form');
var nbrRestant = document.querySelector('.nbr-restant');
var contenuRestant = document.querySelector('.contenu-restant');
textArea.addEventListener('input',saisiInput)
function saisiInput(e)
{
    e.preventDefault();
    const longueurMax = 120
    let longueurSaisi = textArea.value
    nbrRestant.innerHTML = longueurMax - longueurSaisi.length

    if(nbrRestant.innerHTML > 16)
    {
        contenuRestant.style.color = "black"
        document.querySelector('.btnEvoyer').disabled = false
    }
    
    if(nbrRestant.innerHTML <= 16)
    {
        contenuRestant.style.color = "yellow"
        document.querySelector('.btnEvoyer').disabled = false

        if(nbrRestant.innerHTML <= 0)
        {
        contenuRestant.style.color = "red"
        document.querySelector('.btnEvoyer').disabled = true
        }
    }
}