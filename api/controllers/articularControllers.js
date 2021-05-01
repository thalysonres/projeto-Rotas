module.exports = {
    menuArticularControllers,   
};

function menuArticularControllers(req, res){
    res.render('articular/frm_articularMenu.ejs', {title: 'Menu Articular',
                                                 texto: 'Menu do Sistema Articular'});
}
