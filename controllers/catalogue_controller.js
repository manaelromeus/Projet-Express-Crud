const catalogueModel = require('../models/catalogue_model');

// ➕ Ajouter un produit
exports.ajouterProduit = async (req, res) => {
    try {
        const nouveauProduit = await catalogueModel.create(req.body);
        res.status(201).json(nouveauProduit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 📃 Lister tous les produits
exports.listerProduits = async (req, res) => {
    try {
        const produits = await catalogueModel.find();
        res.status(200).json(produits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 🔍 Afficher un produit par ID
exports.unProduit = async (req, res) => {
    try {
        const produit = await catalogueModel.findById(req.params.id);
        if (!produit) {
            return res.status(404).json({ message: "Le produit n'a pas été retrouvé" });
        }
        res.status(200).json(produit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✏️ Modifier un produit
exports.updateProduit = async (req, res) => {
    try {
        const produitMisAJour = await catalogueModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!produitMisAJour) {
            return res.status(404).json({ message: "Le produit n'a pas été retrouvé" });
        }
        res.status(200).json(produitMisAJour);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ❌ Supprimer un produit
exports.effacerProduit = async (req, res) => {
    try {
        const produitSupprime = await catalogueModel.findByIdAndDelete(req.params.id);
        if (!produitSupprime) {
            return res.status(404).json({ message: "Le produit n'a pas été retrouvé" });
        }
        res.status(200).json({ message: "Produit supprimé avec succès !" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
