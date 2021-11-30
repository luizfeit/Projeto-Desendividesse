import  db  from "./SqLiteDataBase";

/*
    Iniciando a tabela
    - Ele sempre vai executar, mas só vai criar a tabela caso ela não exista
*/
db.transaction((tx) =>{
    //<<<<<<SOMENTE PARA TESTES>>>>>>
    // tx.executeSql("DROP TABLE usuarios;");
    //<<<<<<SOMENTE PARA TESTES>>>>>>

    tx.executeSql(
        "create table if not exists movimentacoes (id_mov integer primary key autoincrement not null," +
           "valor float not null, tipo text not null, tag text not null, descricao text, id_user int not null);"
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
     return new Promise((resolve, reject) => {
       db.transaction((tx) => {
         //comando SQL modificável
         tx.executeSql(
           "INSERT INTO movimentacoes (valor, tipo, tag, descricao, id_user) values (?, ?, ?, ?, ?);",
           [obj.valor, obj.tipo, obj.tag, obj.descricao, obj.id_user],
           //-----------------------
           (_, { rowsAffected, insertId }) => {
             if (rowsAffected > 0) resolve(insertId);
             else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
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
   const update = (id, obj) => {
     return new Promise((resolve, reject) => {
       db.transaction((tx) => {
         //comando SQL modificável
         tx.executeSql(
           "UPDATE cars SET brand=?, model=?, hp=? WHERE id=?;",
           [obj.brand, obj.model, obj.hp, id],
           //-----------------------
           (_, { rowsAffected }) => {
             if (rowsAffected > 0) resolve(rowsAffected);
             else reject("Error updating obj: id=" + id); // nenhum registro alterado
           },
           (_, error) => reject(error) // erro interno em tx.executeSql
         );
       });
     });
   };
   
   /**
    * BUSCA UM REGISTRO POR MEIO DO ID
    * - Recebe o ID do registro;
    * - Retorna uma Promise:
    *  - O resultado da Promise é o objeto (caso exista);
    *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
    */
   const find = (id) => {
     return new Promise((resolve, reject) => {
       db.transaction((tx) => {
         //comando SQL modificável
         tx.executeSql(
           "SELECT * FROM atividades WHERE id_user=?;",
           [id],
           //-----------------------
           (_, { rows }) => {
             if (rows.length > 0) resolve(rows._array);
             else reject("Obj not found: id=" + id); // nenhum registro encontrado
           },
           (_, error) => reject(error) // erro interno em tx.executeSql
         );
       });
     });
   };

   /**
 * BUSCA SALDO TOTAL DO USUARIO
 * - Recebe o ID do usuario;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o objeto (caso exista);
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
 const saldo = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT SUM(valor) FROM movimentacoes WHERE id_user = ?",
        [id],
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
    * BUSCA TODOS OS REGISTROS DE UMA DETERMINADA TABELA
    * - Não recebe parâmetros;
    * - Retorna uma Promise:
    *  - O resultado da Promise é uma lista (Array) de objetos;
    *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL;
    *  - Pode retornar um array vazio caso não existam registros.
    */
   const all = () => {
     return new Promise((resolve, reject) => {
       db.transaction((tx) => {
         //comando SQL modificável
         tx.executeSql(
           "SELECT * FROM movimentacoes;",
           [],
           //-----------------------
           (_, { rows }) => resolve(rows._array),
           (_, error) => reject(error) // erro interno em tx.executeSql
         );
       });
     });
   };
   
   /**
    * REMOVE UM REGISTRO POR MEIO DO ID
    * - Recebe o ID do registro;
    * - Retorna uma Promise:
    *  - O resultado da Promise a quantidade de registros removidos (zero indica que nada foi removido);
    *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
    */
   const remove = (id) => {
     return new Promise((resolve, reject) => {
       db.transaction((tx) => {
         //comando SQL modificável
         tx.executeSql(
           "DELETE FROM movimentacao WHERE id=?;",
           [id],
           //-----------------------
           (_, { rowsAffected }) => {
             resolve(rowsAffected);
           },
           (_, error) => reject(error) // erro interno em tx.executeSql
         );
       });
     });
   };
   
   export default {
     create,
     update,
     find,
     all,
     remove,
     saldo
   };



