//a) Serve para recebar parâmetros que serão passados para criar uma instância. Podemos chamá-lo através do this.

//b) 1 vez.



  //c) Só pode ter acesso de dentro da classe. Pra isso usamos o keyword 'this'.




//2

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string,
     ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.description = description;
        this.value = value;
        this.date = date;
     }
     public getDesc(){
        return this.description
     }
     public getValue(){
        return this.value
     }
     public getDate(){
        return this.date
     }

  }
  
  let instancia = new Transaction('BK', 20, '02/02/2022')
  console.log(instancia)



  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf(){
        return this.cpf
     }
     public getName(){
        return this.name
     }
     public getAge(){
        return this.age
     }


     public setAll(description: string, value: number, date: string){
         const newTransaction = new Transaction(description, value, date)
         this.transactions.push(newTransaction)
     }
     
  }

  const usuario = new UserAccount('258.456.852-30', 'Mariana', 22);
  const transaction = new Transaction('Salário', 2500, '02/02/2022')
  const transaction2 = new Transaction('Pagar Nubank', 1000, '02/02/2022')

usuario.setAll(transaction.getDesc(), transaction.getValue(), transaction.getDate())
usuario.setAll(transaction2.getDesc(), transaction2.getValue(), transaction2.getDate())

console.log(usuario)



class Bank{
    private accounts: UserAccount[];
    private transaction: Transaction[];

    constructor(accounts: UserAccount[], transaction: Transaction[]){
        this.accounts = accounts
        this.transaction = transaction
    }


    setTrans(newTrans: Transaction):void{
        this.transaction.push(newTrans)
    }

    getTrans(): Transaction[]{
        return this.transaction
    }


    setAccounts(newAccount: UserAccount): void{
        this.accounts.push(newAccount)
    }

    getAccounts(): UserAccount[]{
        return this.accounts
    }

}

const nuBank = new Bank([], [])
nuBank.setAccounts(usuario)
console.log(nuBank.getAccounts())
nuBank.setTrans(instancia)
console.log(nuBank.getTrans())
