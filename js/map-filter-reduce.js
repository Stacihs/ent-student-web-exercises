(() => {
    "use strict";


    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    // FILTER
    const userLanguages = users.filter(user => {
        return user.languages.length >= 3;
    });

    console.log(userLanguages);

     // MAP
     const usersEmails = users.map(user => {
         return user.email;
    });

    console.log(usersEmails);

    // REDUCE
    const sumUsersExperience = users.reduce((totalYears, user) => {
        return totalYears + user.yearsOfExperience;
    }, 0);

    console.log(sumUsersExperience);
    const avgAllUsersExperience = () => sumUsersExperience / users.length;

    console.log(avgAllUsersExperience(sumUsersExperience));

    const longestUserEmail = users.reduce((emailLength, user) => {
       if(user.email.length > emailLength) {
           emailLength = user.email.length
       }
        return emailLength;
    }, 0)

    console.log(longestUserEmail);


    const usersNames = users.reduce((acc, user) => {
           return  acc + ',' + user.name;


    }, 'Hi');

    console.log(usersNames);


})();