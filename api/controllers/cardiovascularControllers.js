module.exports = {
    menuCardiovascularControllers,   
};

function menuCardiovascularControllers(req, res){
    res.render('cardiovascular/frm_cardiovascularMenu.ejs', {title: 'Menu Cardiovascular',
                                                 texto: 'Menu do Sistema Cardiovascular'});
}
