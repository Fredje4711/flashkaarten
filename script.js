document.addEventListener('DOMContentLoaded', () => {
    const flashcards = document.querySelectorAll('.flashcard');
    let currentlyFlippedCard = null; // Deze variabele houdt de referentie naar de momenteel omgedraaide kaart bij

    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            // Controleer of er al een kaart is omgedraaid EN of het niet de kaart is die zojuist is aangeklikt
            if (currentlyFlippedCard && currentlyFlippedCard !== card) {
                currentlyFlippedCard.classList.remove('flipped'); // Draai de vorige kaart terug
            }

            // Draai de zojuist aangeklikte kaart om (of terug)
            card.classList.toggle('flipped');

            // Update de referentie naar de momenteel omgedraaide kaart
            if (card.classList.contains('flipped')) {
                currentlyFlippedCard = card; // Deze kaart is nu omgedraaid
            } else {
                currentlyFlippedCard = null; // Deze kaart is teruggedraaid, dus geen kaart meer omgedraaid
            }
        });

        // Optioneel: Maak het ook mogelijk om met Enter te flippen voor toegankelijkheid
        card.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' || event.keyCode === 13) {
                // Herhaal dezelfde logica als hierboven voor de toetsaanslag
                if (currentlyFlippedCard && currentlyFlippedCard !== card) {
                    currentlyFlippedCard.classList.remove('flipped');
                }

                card.classList.toggle('flipped');

                if (card.classList.contains('flipped')) {
                    currentlyFlippedCard = card;
                } else {
                    currentlyFlippedCard = null;
                }
            }
        });
    });
});