CREATE SEQUENCE seq_stores;
CREATE TABLE stores (
	id INT PRIMARY KEY DEFAULT NEXTVAL('seq_stores'),
	rank INT NOT NULL DEFAULT 999,
	image_url VARCHAR(255),
	phone VARCHAR(255),
	email VARCHAR(255),
	--
	created_by_user_id INT,
	updated_by_user_id INT,
	--
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMP,
	--
	CONSTRAINT fk_stores_cr_users FOREIGN KEY (created_by_user_id) REFERENCES users,
	CONSTRAINT fk_stores_upd_users FOREIGN KEY (updated_by_user_id) REFERENCES users
);
