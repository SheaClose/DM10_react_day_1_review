import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: cars
    };
  }
  render() {
    let cars_list = this.state.cars.map(car => (
      <div key={car.id} className="">
        <ul>
          <li> {car.make} </li>
          <li> {car.model} </li>
          <li> {car.year} </li>
        </ul>
        <hr />
      </div>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {cars_list}
      </div>
    );
  }
}

export default App;

const cars = [
  {
    id: 1,
    make: "Kia",
    model: "Optima",
    year: 2005
  },
  {
    id: 2,
    make: "Toyota",
    model: "Solara",
    year: 2004
  },
  {
    id: 3,
    make: "Ford",
    model: "Explorer",
    year: 2002
  },
  {
    id: 4,
    make: "Nissan",
    model: "200SX",
    year: 1996
  },
  {
    id: 5,
    make: "GMC",
    model: "Savana 2500",
    year: 2007
  },
  {
    id: 6,
    make: "Ford",
    model: "F250",
    year: 1999
  },
  {
    id: 7,
    make: "GMC",
    model: "Jimmy",
    year: 2000
  },
  {
    id: 8,
    make: "BMW",
    model: "M3",
    year: 2012
  },
  {
    id: 9,
    make: "Dodge",
    model: "Stealth",
    year: 1996
  },
  {
    id: 10,
    make: "Volvo",
    model: "C70",
    year: 2011
  },
  {
    id: 11,
    make: "Pontiac",
    model: "Solstice",
    year: 2008
  },
  {
    id: 12,
    make: "Chevrolet",
    model: "Express 2500",
    year: 2004
  },
  {
    id: 13,
    make: "Oldsmobile",
    model: "Alero",
    year: 2001
  },
  {
    id: 14,
    make: "Buick",
    model: "Regal",
    year: 1997
  },
  {
    id: 15,
    make: "Toyota",
    model: "Echo",
    year: 2003
  },
  {
    id: 16,
    make: "Chevrolet",
    model: "Corvette",
    year: 1970
  },
  {
    id: 17,
    make: "Volvo",
    model: "S80",
    year: 2001
  },
  {
    id: 18,
    make: "Aston Martin",
    model: "Rapide",
    year: 2010
  },
  {
    id: 19,
    make: "Dodge",
    model: "Stratus",
    year: 1996
  },
  {
    id: 20,
    make: "Saab",
    model: "9-3",
    year: 2006
  },
  {
    id: 21,
    make: "BMW",
    model: "X5",
    year: 2012
  },
  {
    id: 22,
    make: "Land Rover",
    model: "LR4",
    year: 2011
  },
  {
    id: 23,
    make: "Toyota",
    model: "Land Cruiser",
    year: 2008
  },
  {
    id: 24,
    make: "Chrysler",
    model: "Pacifica",
    year: 2004
  },
  {
    id: 25,
    make: "Suzuki",
    model: "SJ",
    year: 1993
  },
  {
    id: 26,
    make: "Chevrolet",
    model: "Avalanche 2500",
    year: 2005
  },
  {
    id: 27,
    make: "BMW",
    model: "745",
    year: 2002
  },
  {
    id: 28,
    make: "Audi",
    model: "A6",
    year: 2009
  },
  {
    id: 29,
    make: "Chevrolet",
    model: "Cavalier",
    year: 2000
  },
  {
    id: 30,
    make: "Chevrolet",
    model: "Tracker",
    year: 1998
  },
  {
    id: 31,
    make: "Toyota",
    model: "4Runner",
    year: 2009
  },
  {
    id: 32,
    make: "Mitsubishi",
    model: "3000GT",
    year: 1998
  },
  {
    id: 33,
    make: "Hummer",
    model: "H1",
    year: 1999
  },
  {
    id: 34,
    make: "Volvo",
    model: "740",
    year: 1992
  },
  {
    id: 35,
    make: "GMC",
    model: "Yukon",
    year: 2009
  },
  {
    id: 36,
    make: "Ford",
    model: "Expedition EL",
    year: 2007
  },
  {
    id: 37,
    make: "Suzuki",
    model: "Swift",
    year: 2000
  },
  {
    id: 38,
    make: "Volvo",
    model: "C70",
    year: 1998
  },
  {
    id: 39,
    make: "Audi",
    model: "riolet",
    year: 1996
  },
  {
    id: 40,
    make: "GMC",
    model: "Terrain",
    year: 2010
  },
  {
    id: 41,
    make: "Lexus",
    model: "GS",
    year: 2000
  },
  {
    id: 42,
    make: "Pontiac",
    model: "Sunfire",
    year: 1999
  },
  {
    id: 43,
    make: "Pontiac",
    model: "6000",
    year: 1983
  },
  {
    id: 44,
    make: "Volkswagen",
    model: "Jetta",
    year: 1984
  },
  {
    id: 45,
    make: "Subaru",
    model: "Impreza",
    year: 2005
  },
  {
    id: 46,
    make: "Infiniti",
    model: "FX",
    year: 2005
  },
  {
    id: 47,
    make: "Lamborghini",
    model: "Murciélago",
    year: 2004
  },
  {
    id: 48,
    make: "GMC",
    model: "Canyon",
    year: 2008
  },
  {
    id: 49,
    make: "Maserati",
    model: "GranTurismo",
    year: 2008
  },
  {
    id: 50,
    make: "Mercedes-Benz",
    model: "W201",
    year: 1993
  }
];
