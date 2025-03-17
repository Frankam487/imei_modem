import React, { useState } from "react";

function Payment() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePayment = () => {
    if (!phoneNumber) {
      alert("Veuillez entrer un numéro de téléphone valide.");
      return;
    }

    FlutterwaveCheckout({
      public_key: "VOTRE_PUBLIC_KEY_FLUTTERWAVE",
      tx_ref: "transaction-" + Date.now(),
      amount: 5000,
      currency: "XAF",
      payment_options: "mobilemoney",
      customer: {
        phone_number: phoneNumber,
        email: "client@example.com",
        name: "Utilisateur",
      },
      customizations: {
        title: "Paiement Omiie",
        description: "Achat de produit",
        logo: "https://omiie.com/logo.png",
      },
      callback: function (response) {
        console.log(response);
        if (response.status === "successful") {
          alert("Paiement réussi !");
        } else {
          alert("Paiement échoué !");
        }
      },
      onclose: function () {
        alert("Paiement annulé.");
      },
    });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Payer avec Mobile Money</h2>
      <input
        type="tel"
        placeholder="Entrer votre numéro MTN ou Orange"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
      />
      <button
        onClick={handlePayment}
        className="w-full bg-blue-500 text-white p-2 rounded-lg"
      >
        Valider et Payer
      </button>
    </div>
  );
}

export default Payment;
