const express = require('express');
const router = express.Router();

const catalogueController = require('../controllers/catalogue_controller');

router.post('/ajouterProduit', catalogueController.ajouterProduit)
router.get('/listerProduits', catalogueController.listerProduits)
router.get('/Produit/:id', catalogueController.unProduit)
router.put('/modifierProduit/:id', catalogueController.updateProduit)
router.delete('/effacerProduit/:id', catalogueController.effacerProduit)


module.exports = router