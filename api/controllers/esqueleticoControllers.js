module.exports = {
    menuEsqueleticoControllers,   
};

function menuEsqueleticoControllers(req, res){
    res.render('esqueletico/frm_esqueleticoMenu.ejs', {title: 'Menu Esqueletico',
                                                 texto: 'Menu do Sistema Esqueletico'});
}
