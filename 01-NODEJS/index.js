function obterUsuario(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date()
            })
        }, 1000)

    })

}

function obterTelefone(idUsuario){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '11232122',
                ddd: 13
            })
        }, 2000)
    })

}

function obterEndereco(idUsuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: 'São Paulo',
                numero: 345
            })
        }, 2000);
    })

}

const usuarioPromisse = obterUsuario()

usuarioPromisse
    .then((resultado) => {
        console.log('resultado', resultado);
    })
    .catch((error) => {
        console.error("Deu Ruim", error);

    })


const telefonePromisse = obterTelefone()
    .then((resultado) => {
        console.log('resultado', resultado);
    })
    .catch((error) => {
        console.error("Deu Ruim", error);

    })

const   enderecoPromisse = obterEndereco()
    .then((resultado) => {
        console.log('resultado', resultado);
    })
    .catch((error) => {
        console.error("Deu Ruim", error);

    })

    

//usando callback
// obterUsuario((error, usuario) => {
//     if(error){
//         console.error("Deu ruim", error);
//         return;
//     }
//     obterTelefone(usuario.id, (error1, telefone) => {
//         if(error1){
//             console.error("Deu ruim", error);
//             return;
//         }
        
//         obterEndereco(usuario.id, (error2, endereco) =>  {
//             if(error2){
//                 console.error("Deu ruim", error);
//                 return;
//             }
            
//             console.log(`
//             Nome: ${usuario.nome},
//             Endereço: ${endereco.rua},${endereco.numero},
//             Telefone: (${telefone.ddd}) ${telefone.telefone}
//             `)
//         })
//     })
    
// });