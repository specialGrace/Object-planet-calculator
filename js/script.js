const planets = [
  {
    name: "Earth",
    gravity: 9.8,
  },
  {
    name: "Mercury",
    gravity: 3.61,
  },
  {
    name: "Venus",
    gravity: 8.83,
  },
  {
    name: "Mars",
    gravity: 3.75,
  },
  {
    name: "Jupiter",
    gravity: 26.0,
  },
  {
    name: "Saturn",
    gravity: 11.2,
  },
  {
    name: "Uranus",
    gravity: 10.5,
  },
  {
    name: "Neptune",
    gravity: 13.3,
  },
  {
    name: "Pluto",
    gravity: 0.61,
  },
  {
    name: "Moon",
    gravity: 1.62,
  },
];

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    let btn = document.getElementsByClassName("btn")[0];
    btn.addEventListener("click", weightValue);
}

function weightValue(e) {
    e.preventDefault();//I used preventDefault because I classified with form
    const mass = Number(document.getElementsByClassName("mass-input")[0].value);

    const planet = document.getElementsByClassName("selection-btn")[0].value;

  if (mass === "" || planet === "" || isNaN(mass)) {
    alert('input field must be filled')
  }
    let result;
    for (let i = 0; i < planets.length; i++) {
    let planetName = planets[i].name;

    let gravityName = planets[i].gravity;

    if (planetName.toLowerCase() == planet.toLowerCase()) {
      result = mass * gravityName;
    console.log(result);

      document.getElementsByClassName(
        "planet")[0].innerHTML = ` <p id="para">The weight of the object on pluto</p>
        <div class="result">
            <p>${result}N</p>
        </div>
`;
        }
    }
}
