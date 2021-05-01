module.exports = {
    menuRespiratorioControllers,   
};

function menuRespiratorioControllers(req, res){
    res.render('respiratorio/frm_respiratorioMenu.ejs', {title: 'Menu Respiratorio',
                                                 texto: 'Menu do Sistema Respiratorio'});
}
