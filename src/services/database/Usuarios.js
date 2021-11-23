import  db  from "./SqLiteDataBase";

/*
    Iniciando a tabela
    - Ele sempre vai executar, mas só vai criar a tabela caso ela não exista
*/
db.transaction((tx) =>{
    //<<<<<<SOMENTE PARA TESTES>>>>>>
    //tx.executeSql("DROP TABLE usuarios;");
    //<<<<<<SOMENTE PARA TESTES>>>>>>

    tx.executeSql(
        "create table if not exists usuarios (id_usuario integer primary key autoincrement not null, nome text not null, email not null, senha not null);"
    )
})

/**
 * CRIAÇÃO DE UM NOVO REGISTRO
 * - Recebe um objeto;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o ID do registro (criado por AUTOINCREMENT)
 *  - Pode retornar erro (reject) caso exista erro no SQL ou nos parâmetros.
 */

const create = (obj) => {
    return new Promise((resolve, reject) =>{
        db.transaction(tx =>{
            //Comando SQL modificável
            tx.executeSql(
                "insert into usuarios (nome, email, senha) values (?, ?, ?);",
               [obj.nome, obj.email, obj.senha],
                //_______________________//
                (_, {rowsAffected, insertId}) =>{
                    if(rowsAffected > 0) resolve(insertId)
                    else reject("Erro inserting obj: " + JSON.stringify(obj)) // Insert falhou
                },
                (_, error) => reject(error) // Erro interno em tx.executeSql
            )
        })
    })
}



/**
 * BUSCAR UM REGISTRO JÁ EXISTENTE POR MEIO DO ID
 * -Receber o id do registro;
 * -Retornar o seus dados.
 * -O resultado da Promisse é o objeto (Caso exista);
 * -Pode retornar erro(reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */

 const find = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "SELECT * FROM cars WHERE id=? and email = ? and senha = ?;",
          [id, id.email, id.senha],
          //-----------------------
          (_, { rows }) => {
            if (rows.length > 0) resolve(rows._array[0]);
            else reject("Obj not found: id=" + id); // nenhum registro encontrado
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
  


/**
 * ATUALIZA UM REGISTRO JÁ EXISTENTE
 * - Recebe o ID do registro e um OBJETO com valores atualizados;
 * - Retorna uma Promise:
 *  - O resultado da Promise é a quantidade de registros atualizados;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */





/**
 * BUSCA UM REGISTRO POR MEIO DO ID
 * - Recebe o ID do registro;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o objeto (caso exista);
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
//  const find = (id) => {
//     return new Promise((resolve, reject) => {
//       db.transaction((tx) => {
//         //comando SQL modificável
//         tx.executeSql(
//           "SELECT * FROM usuarios WHERE id=?;",
//           [id],
//           //-----------------------
//           (_, { rows }) => {
//             if (rows.length > 0) resolve(rows._array[0]);
//             else reject("Obj not found: id=" + id); // nenhum registro encontrado
//           },
//           (_, error) => reject(error) // erro interno em tx.executeSql
//         );
//       });
//     });
//   };

    

export default{
    create,
    find
}



