import { City, Community, functions } from "./cities.js";
import apiFunctions from "./api.js";

let newKey = 0;
const newCity = new Community();

// apiFunctions.clearAllCities();

document.addEventListener("DOMContentLoaded", async () => {
  const errorMessage = await apiFunctions.loadData(newCity);
  if (errorMessage) {
    idError.textContent = errorMessage;
  } else {
    if (newCity.cities.length > 0) {
      for (let itm of newCity.cities) {
        functions.newCityDiv(
          itm.key,
          idWrapper,
          itm.Name,
          itm.Latitude,
          itm.Longitude,
          itm.Population
        );
      }
      functions.calculationsDiv();
      newKey = newCity.cities[newCity.cities.length - 1].key;
    } else {
      idMsg.textContent = "Server database is empty.";
    }
  }
});

idContainer.addEventListener("click", async event => {
  let cityExist;
  let arrayOfCities = [];
  switch (event.target.id) {
    case "idNewCity":
      newKey++;
      cityExist = newCity.createCity(
        newKey,
        idName.value,
        Number(idLat.value),
        Number(idLong.value),
        Number(idPop.value)
      );

      if (cityExist === "City created") {
        const errorMessage = await apiFunctions.addCity(
          newCity.cities[newCity.cities.length - 1]
        );
        if (errorMessage) {
          idMsg.textContent = errorMessage;
          newKey--;
        } else {
          functions.newCityDiv(
            newKey,
            idWrapper,
            idName.value,
            Number(idLat.value),
            Number(idLong.value),
            Number(idPop.value)
          );
          if (!rightDiv.hasChildNodes()) {
            functions.calculationsDiv();
          }
          idName.value = "";
          idLat.value = "";
          idLong.value = "";
          idPop.value = "";
        }
      } else {
        newKey--;
      }
      idMsg.textContent = cityExist;
      break;
    case "mostNorthern":
      let cityNorthern = newCity.getMostNorthern();
      resultDiv.textContent = `${cityNorthern.Name} is the most northern city at ${cityNorthern.Latitude} latitude.`;
      break;
    case "mostSouthern":
      let citySouthern = newCity.getMostSouthern();
      resultDiv.textContent = `${citySouthern.Name} is the most southern city at ${citySouthern.Latitude} latitude.`;
      break;
    case "totalPop":
      resultDiv.textContent = `Total population for all cities is ${newCity.getPopulation()}`;
      break;
  }
});

idMain.addEventListener("click", async event => {
  switch (event.target.className) {
    case "Del":
      const errorMessage = await apiFunctions.deleteCity(
        Number(
          event.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
            "cityId"
          )
        )
      );
      if (errorMessage) {
        messageDiv.textContent = errorMessage;
      } else {
        newCity.deleteCity(
          Number(
            event.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
              "cityId"
            )
          )
        );

        functions.delCityDiv(
          event.target.parentNode.parentNode.parentNode.parentNode
        );
      }
      break;

    case "moveIn":
      if (idAmount.value !== "") {
        let selectedKey = Number(
          event.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
            "cityId"
          )
        );
        let selectedCity = newCity.cities.find(
          city => city.key === selectedKey
        );
        selectedCity.movedIn(Number(event.target.parentNode.children[0].value));

        const errorMessage = await apiFunctions.updateCity(selectedCity);
        if (errorMessage) {
          messageDiv.textContent = errorMessage;
          selectedCity.movedOut(
            Number(event.target.parentNode.children[0].value)
          );
        } else {
          messageDiv.textContent = `${Number(
            event.target.parentNode.children[0].value
          )} people moved into ${selectedCity.Name}`;
          event.target.parentNode.parentNode.children[2].textContent = `Population: ${selectedCity.Population}`;
        }
      }
      event.target.parentNode.children[0].value = "";
      break;
    case "moveOut":
      if (idAmount.value !== "") {
        let selectedKey = Number(
          event.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
            "cityId"
          )
        );
        let selectedCity = newCity.cities.find(
          city => city.key === selectedKey
        );
        selectedCity.movedOut(
          Number(event.target.parentNode.children[0].value)
        );

        const errorMessage = await apiFunctions.updateCity(selectedCity);
        if (errorMessage) {
          messageDiv.textContent = errorMessage;
          selectedCity.movedIn(
            Number(event.target.parentNode.children[0].value)
          );
        } else {
          messageDiv.textContent = `${Number(
            event.target.parentNode.children[0].value
          )} people moved out of ${selectedCity.Name}`;
          event.target.parentNode.parentNode.children[2].textContent = `Population: ${selectedCity.Population}`;
        }
      }
      event.target.parentNode.children[0].value = "";
      break;
  }
});
