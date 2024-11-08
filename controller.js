function makeRandNum()
{
   return Math.floor(Math.random() * model.data.wildCreatures.length)
}


function createRandomPokemon()
{
    model.input.randomEncounter = model.data.wildCreatures[makeRandNum()];
    return model.input.randomEncounter;
}


function capturePokemon()
{
    model.data.capturedCreatures.push(model.input.randomEncounter)
    captureScreen();

}


