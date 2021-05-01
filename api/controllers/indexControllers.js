module.exports = {
    indexControllers,   
};

function indexControllers(req, res){
    res.render('index.ejs', {title: 'Projeto Anatomia Humana',
                             texto: 'Menu Principal'});
}
