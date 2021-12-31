import "./styles.css";
import image from "./img/dp.JPG";
import React, { useEffect } from "react";

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} is Barking!!!`);
  }
}

export default function App() {
  useEffect(() => {
    const d1 = new Dog("Timmy");
    const d2 = new Dog("Tabby");

    d1.bark();
    d2.bark();

    Dog.prototype.run = function () {
      console.log(`${this.name} is Running!!! and color is ${this.color}`);
    };

    Dog.prototype.color = "BLACK";

    d1.color = "BROWN";
    d2.run();
    d1.run();
  }, []);

  return (
    <div className="App">
      <h1>Prototype Design Pattern - Demo</h1>
      <h2>
        The prototype pattern is a useful way to share properties among many
        objects of the same type. The prototype is an object that's native to
        JavaScript, and can be accessed by objects through the prototype chain.
      </h2>
      <img src={image} />

      <hr />
    </div>
  );
}
