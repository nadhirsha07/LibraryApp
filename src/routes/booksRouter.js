var express=require("express");
const booksRouter= express.Router();



var books= [
    {
        title:"War and Peace",
        genre:"Historical fiction",
        author:"Leo Tolstoy",
        image:"01.jpg"
    },
    {
        title:"Life Treasure",
        genre:"Satire",
        author:"Judy Donnelly",
        image:"02.jpg"
    },
    {
        title:"Les Miserables",
        genre:"Science Fiction",
        author:"Victor Hugo",
        image:"03.jpg"
    },
    {
        title:"Beauty and the Beast",
        genre:"Drama",
        author:"Gabrielle-Suzanne de Villeneuve",
        image:"04.jpg"
    },
];



function router(nav){
    booksRouter.route('/')
    .get((req,res)=>{
        res.render("books.ejs",{nav,title:"Books", books});
    });

    booksRouter.route('/addBooks')
    .get((req,res)=>{
        res.render("addBooks.ejs",{nav,title:"Add Books"});
    });
    booksRouter.route('/save')
    .post((req,res)=>{
        console.log(req.body);
        res.send("You have submitted successfully");
    });

    booksRouter.route('/:id')
    .get((req,res)=>{
    var i=req.params.id;
    res.render("book.ejs",{nav,book:books[i]})
    });
return booksRouter;
}

module.exports=router;

