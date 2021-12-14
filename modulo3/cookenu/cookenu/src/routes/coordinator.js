export const goToLogin = (history)=>{
    history.push('/login')
}

export const goSignUp = (history)=>{
    history.push('/cadastro')
}

export const goToRecipes = (history)=>{
    history.push('/')
}

export const goToAddRecipes = (history)=>{
    history.push('/adicionar-receita')
}

export const goToRecipeDetail = (history, id)=>{
    history.push(`/detalhe/${id}`)
}

