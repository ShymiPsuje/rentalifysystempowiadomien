export const notificationData = {
  transactions: {
    title: "Transakcje podstawowe",
    items: {
      TRANS_RENTAL_TENANT_NEW: {
        title: "Nowa prośba o rezerwację (Najemca)",
        receiver: "Najemca",
        email: true,
        sms: false,
        web: true,
        chat: true,
        emailTitle: 'Twoja prośba o rezerwację terminu na Rentalify.pl została wysłana',
        emailTemplate: 'trans',
        emailVersion: 'trans_rental_tenant_new',
        webNotificationText: 'Wysłano prośbę o rezerwację {{nazwaSprzetu}}. Oczekuj na odpowiedź właściciela.',
        webNotificationLink: '${urlDetaleTransakcji}',
        smsText: false,
        chatText: 'Wysłano prośbę o rezerwację sprzętu {{nazwaSprzetu}}. Sprawdź szczegóły rezerwacji i oczekuj na odpowiedź właściciela.',
        context: "Inicjacja procesu - najemca wysyła prośbę o rezerwację"
      },
      // ... [pozostałe dane powiadomień - skopiuj z poprzedniego artefaktu]
    }
  },
  // ... [pozostałe kategorie - skopiuj z poprzedniego artefaktu]
};
