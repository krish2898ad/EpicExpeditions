const about = (req, res) => {
    res.render('generic-text', { title: 'About Epic Expeditions' });
};

const confirmOrder = (req, res) => {
    const confirmedOrder = req.body.cartItems ? JSON.parse(req.body.cartItems) : null;
  
    // Check if the order was passed; if not, render an error
    if (!confirmedOrder || confirmedOrder.length === 0) {
      res.render('confirm', { order: null, error: 'No order placed. Please add items to your cart first.' });
    } else {
      // Render the confirm page with the order details and no error
      res.render('confirm', { order: confirmedOrder, error: null });
    }
  };

module.exports = {
    about,
    confirmOrder
};
