type extrato={
    valor: number,
    data: string,
    descricao: string
}

type Usuario={
nome: string,
cpf: string,
dtNascimento: string
saldo: number,
extrato: extrato[]
}

export const usuarios:Usuario[]=[
    {
        nome: 'Mariana',
        cpf: '000.000.0000-1',
        dtNascimento: '03/01/2000',
        saldo: 4955,
        extrato: [
            {
                valor: 50,
                data: '02/01/2022',
                descricao: 'Restaurante Dona conceição'
            },
            {
                valor: 500,
                data: '03/01/2022',
                descricao: 'Colar loja Vivara'
            }
        ]
    },
    {
        nome: 'Leonardo',
        cpf: '000.000.000-02',
        dtNascimento: '17/01/1995',
        saldo: 2300,
        extrato: [
            {
                valor: 50,
                data: '02/01/2022',
                descricao: 'Restaurante Dona conceição'
            },
            {
                valor: 500,
                data: '03/01/2022',
                descricao: 'Colar loja Vivara'
            }
        ]
    },
    {
        nome: 'Larissa',
        cpf: '000.000.000-03',
        dtNascimento: '15/04/1998',
        saldo: 5255,
        extrato: [
            {
                valor: 50,
                data: '02/01/2022',
                descricao: 'Restaurante Dona conceição'
            },
            {
                valor: 500,
                data: '03/01/2022',
                descricao: 'Colar loja Vivara'
            }
        ]
    },
    {
        nome: 'Anne',
        cpf: '000.000.000-04',
        dtNascimento: '03/01/1996',
        saldo: 3900,
        extrato: [
            {
                valor: 50,
                data: '02/01/2022',
                descricao: 'Restaurante Dona conceição'
            },
            {
                valor: 500,
                data: '03/01/2022',
                descricao: 'Colar loja Vivara'
            }
        ]
    }
]