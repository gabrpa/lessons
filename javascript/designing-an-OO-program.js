/*
In this reading, I will show you how to create classes in JavaScript, using all the concepts you've learned so far.

Specifically, I'm preparing to build the following inheritance hierarchy:

                  Animal
                   /          \
               Cat          Bird
          /               \          \
    HouseCat   Tiger      Parrot

There are two keywords that are essential for OOP with classes in JavaScript.

These keywords are extends and super.

The extends keyword allows me to inherit from an existing class.

Based on the above hierarchy, I can code the Animal class like this:


class Animal {
    ...class code here...
}

Then I can code, for example, the Cat sub-class, like this:

class Cat extends Animal {
    ...class code here...
}

This is how the extends keyword is used to setup inheritance relationships.

The super keyword allows me to "borrow" functionality from a super-class, in a sub-class. The exact dynamics of how this works will be covered later on in this lesson.

Now I can start thinking about how to implement my OOP class hierarchy.

Before I even begin, I need to think about things like: * What should go into the base class of Animal? In other words, what will all the sub-classes inherit from the base class? * What are the specific properties and methods that separate each class from others? * Generally, how will my classes relate to one another?

Once I've thought it through, I can build my classes.
*/

// So, my plan is as follows:

class Animal {
    constructor(color = "yellow", energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log("Energy is decreasing, currently at:", this.energy)
        }
        else if (this.energy == 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20; 
            console.log("Energy is increasing, currently at:", this.energy);
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = "purr", canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = "chirp", canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.makeSound)
    }
}

class HouseCat extends Cat {
    constructor (houseCatSound = "miau", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        } 
        console.log(this.houseCatSound);
        
        
    }
}
class Tiger extends Cat {
    constructor (tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound;
        }
        console.log(this.tigerSound)
        
    }
}
class Parrot extends Bird {
    constructor (canTalk = "lalala", sound, canFly, color, energy) {
        super(sound, canFly, color, energy)
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if(option) {
            super.makeSound;
        }
        if(this.canTalk) {
            console.log("I'm a talking parrot!")
        }
        }
    }

    var jeredy = new Cat("papai", true, true, "black", 200);
    // jeredy.makeSound();

    var jeje = new HouseCat("papaizinho", "auuu", true, true, "black and white", 222);
    // jeje.makeSound(true);
    jeje.makeSound(false);

    console.log(Parrot);