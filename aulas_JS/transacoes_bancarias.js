const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function createTransaction(createTrans){
   user.transactions.push(createTrans)
}

function debitAcconut(contaUserTrans){
    for(let userTrans of contaUserTrans){

        if(userTrans.type == 'credit'){
           let soma = userTrans.value
            user.balance += soma

        }else{
            let sub = userTrans.value
            user.balance -= sub
        }
    }
}

function getHigherTransactionByType (AccountType){
    let HigherTransaction = 0
    let transactionHigher = {}

    for(let userTrans of user.transactions){
        if(userTrans.type == AccountType){

           if(HigherTransaction < userTrans.value){
                HigherTransaction = userTrans.value
                transactionHigher = userTrans
            }
        }
    }
    console.log(transactionHigher)
}

function getAverageTransactionValue(){
    let sum = 0
    let totalSumValue = 0

    for(let userTrans of user.transactions){
       totalSumValue += userTrans.value
       sum ++
    }
    const media = totalSumValue/sum
    console.log(media)
}

function getTransictionAccont(){
    let countDebit = 0
    let countCredit = 0
    
    for(let userTrans of user.transactions){
        if(userTrans.type == 'credit'){
            countCredit ++
        }
        if(userTrans.type == 'debit'){
            countDebit ++
        }
    }
    console.log(`{ credit: ${countCredit}, debit: ${countDebit} }`)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

debitAcconut(user.transactions)
getHigherTransactionByType('debit')
getHigherTransactionByType('credit')
getAverageTransactionValue()
getTransictionAccont()