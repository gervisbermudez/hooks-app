import React from 'react';

export const HookApp = ({ amount }) => {

    const getInitialState = (quantity) => {
        let arrayCards = [];
        for (let index = 0; index < quantity; index++) {
            arrayCards.push({
                active: false
            });
        }
        return arrayCards;
    }

    const [cards, setCards] = React.useState(getInitialState(amount));

    const handleClickCard = (key) => {
        let tempCards = getInitialState(amount);
        tempCards[key] = {
            active: true
        }
        setCards(tempCards);
    }

    return (
        <table>
            <tbody>
                <tr>
                    {
                        cards.map((card, key) => {
                            return (
                                <td key={key} onClick={() => { handleClickCard(key) }}>
                                    {card.active ? "up" : "down"}
                                </td>
                            )
                        })
                    }
                </tr>
            </tbody>
        </table>
    );
}
