var express=require("express");
const authorsRouter= express.Router();

var authors= [
{
    name:"Leo Tolstoy",
    age:"NA",
    image:"05.jpg"
},
{
    name:"Judy Donnelly",
    age:"80",
    image:"06.jpg"
},
{
    name:"Victor Hugo",
    age:"NA",
    image:"07.jpg"
},
{
    name:"Gabrielle-Suzanne de Villeneuve",
    age:"NA",
    image:"08.jpg"
},
];

function router(nav){
    authorsRouter.route('/')
    .get((req,res)=>{
        res.render("authors.ejs",{nav,title:"Authors", authors});
    });

    authorsRouter.route('/:id')
    .get((req,res)=>{
    var i=req.params.id;
    res.render("author.ejs",{nav,author:authors[i]})
    });

return authorsRouter;
}

module.exports=router;
