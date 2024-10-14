const about = (req, res) => {
    res.render('about', { title: 'About Epic Expeditions' });
};

module.exports = {
    about
};
