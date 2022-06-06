CREATE TABLE called (
	called_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	name VARCHAR(255) NOT NULL,
	state VARCHAR(255) NOT NULL,
	category VARCHAR(255) NOT NULL,
	called_date DATE NOT NULL,
<<<<<<< HEAD
	description VARCHAR NOT NULL
=======
	description VARCHAR(255) NOT NULL
>>>>>>> 3083125dcd0a5b221f566722ed21944dca4bc3c5
)

