import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js n'a pas encore été chargé.
      // Assurez-vous de désactiver la soumission du formulaire tant que Stripe.js n'est pas chargé.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Assurez-vous de changer cela vers votre page de confirmation de paiement
        return_url: window.location.origin + '/payment-successful', // Vous pouvez rediriger vers une page de succès
      },
    });

    // Ce point ne sera atteint que s'il y a une erreur immédiate lors de la
    // confirmation du paiement. Sinon, votre client sera redirigé vers
    // votre `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("Une erreur inattendue est survenue.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? "Traitement..." : `Payer ${(amount / 100).toFixed(2)} EUR`}
        </span>
      </button>
      {/* Afficher les messages d'erreur ou de succès */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;