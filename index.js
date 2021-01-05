
// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw')
        }
    };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {

    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    this.getDefaultLocation = function() {
        return defaultLocation;
    }
    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', { 
        get: function(){ 
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location.');
            }
            defaultLocation = value;
        }
    });
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);
another.defaultLocation = 1;
another.draw();

for (let key in another) {
    if (typeof another[key] !=='function')
    console.log(key, another[key]);
}

const keys = Object.keys(another);
console.log(keys);

if ('radius' in circle){
    console.log('Circle has a radius.');
}

circle.location = {x: 1};
// or
// const propertyName = 'location';
// circle[propertyName] = {x: 1};

delete circle['location'];
// or
// delete circle.location;