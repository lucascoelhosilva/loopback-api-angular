--Usuario
CREATE SEQUENCE sq_usuario INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1;
CREATE TABLE usuario(
    id bigint NOT NULL DEFAULT nextval('sq_usuario'::regclass),
    nome character varying(255),
    email character varying(255),
    CONSTRAINT usuario_pkey PRIMARY KEY (id),
    CONSTRAINT usuario_email_uniq UNIQUE (email)
);

-- Tasks
CREATE SEQUENCE sq_task INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1;
CREATE TABLE task
(
  id bigint NOT NULL DEFAULT nextval('sq_task'::regclass),
  title character varying(255),
  description character varying(255),
  date character varying(255),
  reminder boolean,
  completed boolean,
  usuario_id bigint,
  CONSTRAINT tarefa_pkey PRIMARY KEY (id),
  CONSTRAINT usuario_fk FOREIGN KEY (usuario_id)
      REFERENCES usuario (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);