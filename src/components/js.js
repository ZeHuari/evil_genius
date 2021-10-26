
async function obtenderDatos(){
    const response = await fetch ("./campeones.json")
    const json = await response.json();
    console.log(json[0]);
}

obtenderDatos();