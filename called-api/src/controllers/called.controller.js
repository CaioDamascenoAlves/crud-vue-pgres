/**
 * arquivo: controllers/called-routes.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Called)
 * data: 04/06/2022
 */

const db = require("../config/database");

// ==> Método responsável por criar um novo 'Chamado':
exports.createCalled = async (req, res) => {
  const { name, state, category, called_date, description } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO called (name, state, category, called_date, description) VALUES ($1, $2, $3, $4, $5)",
      [name, state, category, called_date, description]
    );
    res.status(201).send({
      message: "Called added successfully!",
      body: {
        called: { name, state, category, called_date, description},
      },
    });
  } catch (error) {
    console.error('createCalled', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por listar todos os 'Calleds':
exports.listAllCalleds = async (req, res) => {
	try {
	  const { rows } = await db.query(`SELECT 
										called_id,
										name, 
										state, 
										category,
										to_char(called_date, 'yyyy-MM-dd') as called_date,
										description 
									  FROM called ORDER BY called_id desc`);
	  res.status(200).send(rows);
	} catch (error) {
	  console.error('listAllCalleds', error);
	  res.status(500).send({
		message: "Ocorreu um erro."
	  });
	}
  };

// ==> Método responsável por listar um determinado 'Called' por Id:
exports.findCalledById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT 
										called_id,
										name, 
										state, 
										category, 
										to_char(called_date, 'yyyy-MM-dd') as called_date, 
										description
                                    FROM called WHERE called_id = $1`,
      [id]
    );
    if (!rows.length) {
      throw 'called_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findCalledById', error);
    if (error == 'called_not_found') {
      res.status(404).send({
        message: "Called not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

// ==> Método responsável por atualizar um determinado 'Called' por Id:
exports.updateCalledById = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, state, category, called_date, description } = req.body;
    const { rows } = await db.query(`UPDATE called 
                                    SET name = $1, 
                                    state = $2, 
                                    category = $3, 
                                    called_date = $4, 
                                    description = $5 
                                    WHERE called_id = $6`,
      [name, state, category, called_date, description, id]
    );
    res.status(200).send({ message: "Called Updated Successfully!" });
  } catch (error) {
    console.error('updateCalledById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por deletar um determinado 'Called' por Id:
exports.deleteCalledById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM called WHERE called_id = $1", [id]);
    res.status(200).send({ message: "Called deleted successfully!" });
  } catch (error) {
    console.error('deleteCalledById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};
