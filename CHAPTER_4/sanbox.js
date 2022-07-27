// object methods

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@company.com',
    location: 'south pole',
    blogs: ['why mac and cheese rules', '10 things i love about berlin'],
    login: function(){
        console.log('the user logged in');
    },
    logout: () => console.log('the user logged out'),



    logBlogs:function(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog =>{
            console.log(blog)
        })
    }
};

// user.logout();
user.logBlogs();
console.log(this);


