updateView();
displayRandomEncounter()
function updateView()
{
   model.app.appDex.innerHTML = /*HTML*/
   ` 
      <div class="MainButtonsBox">
      <button class="MainButtons" onclick ="capturePokemon()">Capture</button>
      <button class="MainButtons" onclick ="displayRandomEncounter()">Find Another</button>
      <button class="MainButtons" onclick="yourPokemon()">Your Pokemon</button>
      </div>
      <br/>
      <div class ="PokemonDis">${model.app.html}</div>
   `
   
}

function displayRandomEncounter()
{
   let pokemon = createRandomPokemon();
   model.app.html = /*HTML*/
      ` 
      <div>
      <h2>A wild ${pokemon.name} apeared!</h2>
      <img src="${pokemon.img}">
      <p><b>Level: ${pokemon.level}</b></p>
      <p><b>Health: ${pokemon.health}</b></p>
      </div>
      `
   updateView();
}

function yourPokemon()
{
   let html = ""
   for(let i = 0; i < model.data.capturedCreatures.length; i++)
   {
      html += /*HTML*/
      `
      <div>
      <h2>${model.data.capturedCreatures[i].name}</h2>
      <img src="${model.data.capturedCreatures[i].img}">
      <p>Level: <b>${model.data.capturedCreatures[i].level}</b></p>
      <p>Health: <b>${model.data.capturedCreatures[i].health}</b> </p>
      </div>
      `
   }
    model.app.html = html;
    updateView();
}
//I know that TRADITIONALY, different screens should be different views with their own files...but...i'm tired right now, bite me.
//Oh and i'm trying to style this to look SOMEWHAT presentable, and it just DOESN'T. DO. WHAT. I. WANT!!!...CSS robs me of the will to live c:
//But HEY! Atleast it works!!! :D
function captureScreen()
{  
   for(let i = 0; i < model.data.capturedCreatures.length; i++)
   {
      model.app.appDex.innerHTML = /*HTML*/
      `
      <div class="CaptureScrDiv">
      <p> <b>You've caught: ${model.data.capturedCreatures[i].name}!</b> </p>
      <p> <b>Level: ${model.data.capturedCreatures[i].level}</b> </p>
      <br>
      <button class="capturedButtons" onclick="displayRandomEncounter()">Find Another</button> 
      <button class="capturedButtons" onclick="yourPokemon()">Your Pokemon</button>
      </div>
      `
   }
}

//This one i began on, but kinda fell out of focus with the whole CSS fiasco, might try to get it working in the weekend
function caughtPokemonScreen()
{
   model.app.appDex = /*HTML*/
   `

   `
}


