const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        if(!oldest.yearOfDeath) {
            oldest.yearOfDeath = new Date().getFullYear()
        }

        if(!currentPerson.yearOfDeath) {
            currentPerson.yearOfDeath = new Date().getFullYear()
        }

        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        console.log("oldest" + oldest.name)
        return oldestAge > currentAge ? oldest : currentPerson;
    });
}

// Do not edit below this line
module.exports = findTheOldest;
