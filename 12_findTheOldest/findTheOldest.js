const findTheOldest = function(people) {
    return people.reduce((prevPerson, currPerson) => {
        return ((age(prevPerson) > age(currPerson))?prevPerson: currPerson);
    });
};

let age = (person) => {
    if (person.yearOfDeath === undefined) {
        let d = new Date();
        person.yearOfDeath = d.getFullYear();
    }
    return (person.yearOfDeath - person.yearOfBirth)
}

// Do not edit below this line
module.exports = findTheOldest;
