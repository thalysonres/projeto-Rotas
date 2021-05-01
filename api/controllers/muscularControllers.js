module.exports = {
    menuMuscularControllers,
    menuMuscularSuperioresControllers,
    menuMuscularSuperioresCutaneosControllers
};

function menuMuscularControllers(req, res){
    res.render('muscular/frm_muscularMenu.ejs', {title: 'Menu Muscular',
                                                 texto: 'Menu do Sistema Muscular'});
}

function menuMuscularSuperioresControllers(req, res){
    res.render('muscular/frm_muscularSuperioresMenu.ejs', {title: 'Menu Superiores',
                                                        texto: 'Menu de Membros Superiores'});
}

function menuMuscularSuperioresCutaneosControllers(req, res){
    res.render('muscular/frm_muscularSuperioresCutaneosMenu.ejs', {title: 'Menu Cutâneo',
                                                        texto: 'Menu de Membros Superiores Cutanêos'});
}
