function userCard(number) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = number;

    function getCardOptions() {
        return { key, balance, transactionLimit, historyLogs }
    }

    function addHistory(operationType, credits, operationTime) {
        historyLogs.push({ operationType, credits, operationTime });
    }

    function putCredits(credit) {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        balance += credit;
        addHistory('putCredits', credit, date + ' ' + time);
    }
    function takeCredits(credit) {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (credit <= transactionLimit && credit < balance) {
            balance = +(balance - credit).toFixed(2);
            addHistory('takeCredits', credit, date + ' ' + time);
        } else {
            console.error('ERROR in takeCredits');
        }
    }

    function setTransactionLimit(number) {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        transactionLimit = number;
        addHistory('setTransactionLimit', number, date + ' ' + time);
    }

    function transferCredits(sum, card) {
        let credit = +(sum * 1.005).toFixed(2);
        if (credit <= transactionLimit && credit < balance) {
            takeCredits(credit);
            card.putCredits(sum);
        }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}





class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        if (this.cards.length < 3) {
            this.cards.push(new userCard(this.cards.length + 1))
        } else {
            console.log('card limit over');
        }
    }
    getCardByKey(number) {
        return this.cards.find(val => val.getCardOptions().key === number)
    }
}
