// object methods

// const blogs = [ 
//     { title: 'why mac and cheese rules', likes: 30},
//     { title: '10 things i love about berlin', likes: 20}
// ];


let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@company.com',
    location: 'south pole',
    blogs: [{ title: 'why mac and cheese rules', likes: 30},
            { title: '10 things i love about berlin', likes: 20}],
    login: function(){
        console.log('the user logged in');
    },
    logout: () => console.log('the user logged out'),



    logBlogs:function(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        })
    }
};

// user.logout();
user.logBlogs();
// console.log(this);


