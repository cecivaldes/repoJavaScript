const users = [

    {username: 'ppc90', age: 30, premium: false},
  
    {username: 'lu65', age: 24, premium: true},
    
    {username: 'maria3', age: 36, premium: false},
    
    {username: 'abc123', age: 30, premium: false},
    
    {username: 'sergio58', age: 30, premium: true},
    
    ];

const nonPremium = users.filter(function(user) {
    return user.premium == !true
});

console.log(nonPremium);