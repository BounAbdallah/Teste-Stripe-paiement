import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import './App.css'; // Nous allons mettre à jour ce fichier CSS


import ThieboudienneImg from './images/Thieboudienne.jpg';
import YassaPouletImg from './images/Yassa_Poulet.jpg';
import MafeImg from './images/Mafé.jpg';


const stripePromise = loadStripe('pk_test_*******************************************************');

function App() {
  const dishes = [
    { id: 1, name: 'Thieboudienne', price: 250, image: ThieboudienneImg, description: 'Le plat national, riz au poisson et légumes.' },
    { id: 2, name: 'Yassa Poulet', price: 200, image: YassaPouletImg, description: 'Poulet mariné au citron et oignons caramélisés.' },
    { id: 3, name: 'Mafé', price: 180, image: MafeImg, description: 'Ragoût de viande à la sauce arachide.' },
  ];

  const [selectedDish, setSelectedDish] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const handleSelectDish = (dish) => {
    setSelectedDish(dish);
    setShowPayment(false); // Réinitialiser le formulaire de paiement lorsqu'un nouveau plat est sélectionné
    setClientSecret(''); // Effacer le secret client précédent
  };

  const handleProceedToPayment = async () => {
    if (!selectedDish) {
      alert('Veuillez d\'abord sélectionner un plat succulent !');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/create-payment-intent', { // Vérifiez bien ce port !
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: selectedDish.price }),
      });
      const data = await response.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        setShowPayment(true);
      } else {
        alert(`Oups ! Erreur lors de la préparation du paiement : ${data.error}`);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du secret client :', error);
      alert('Échec de l\'initialisation du paiement. Veuillez réessayer. Notre chef y travaille !');
    }
  };

  const options = clientSecret ? {
    clientSecret: clientSecret,
  } : {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Saveurs Futuristes du Sénégal</h1>
        <p>Découvrez nos délices traditionnels avec une touche moderne et payez en toute simplicité avec Stripe.</p>
      </header>

      <div className="dish-list-container"> {/* Nouveau conteneur pour l'alignement */}
        <h2>Nos Plats Traditionnels</h2>
        <div className="dish-list"> {/* Grid ou Flexbox pour aligner les cartes */}
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className={`dish-card ${selectedDish && selectedDish.id === dish.id ? 'selected' : ''}`}
              onClick={() => handleSelectDish(dish)}
            >
              <img src={dish.image} alt={dish.name} className="dish-image" />
              <div className="dish-info">
                <h3>{dish.name}</h3>
                <p className="dish-description">{dish.description}</p>
                <p className="dish-price">{(dish.price / 100).toFixed(2)} EUR</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDish && (
        <div className="selected-dish-summary">
          <h2>Votre Choix : {selectedDish.name}</h2>
          <img src={selectedDish.image} alt={selectedDish.name} className="selected-dish-image" />
          <p className="summary-price">Prix : **{(selectedDish.price / 100).toFixed(2)} EUR**</p>
          {!showPayment && (
            <button onClick={handleProceedToPayment} className="proceed-button">Procéder au paiement</button>
          )}
        </div>
      )}

      {showPayment && clientSecret && (
        <div className="payment-section">
          <h2>Finalisez votre paiement</h2>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm amount={selectedDish.price} />
          </Elements>
        </div>
      )}

      <footer className="App-footer">
        <p>&copy; 2025 Cuisine Sénégalaise. Propulsé par Stripe.</p>
      </footer>
    </div>
  );
}

export default App;