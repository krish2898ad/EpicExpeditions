const about = (req, res) => {
    res.render('generic-text', { title: 'About Epic Expeditions' });
};

module.exports = {
    about
};
