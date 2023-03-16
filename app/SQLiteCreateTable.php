<?php

namespace App;

class SQLiteCreateTable {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function createTables() {
        $this->pdo->exec('create table if not exists users (
                        id integer not null constraint tests_pk primary key autoincrement,
                        login text not null,  
                        password text not null
                    )');

        $stmt = $this->pdo->query("SELECT COUNT(*) FROM users");

        $count = $stmt->fetch(\PDO::FETCH_COLUMN);

        if ($count == 0) {
            $sql = "insert into users (login, password) values (:login, :password)";

            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([
                ":login" => "admin",
                ":password" => password_hash("admin", PASSWORD_DEFAULT)
            ]);
        }
    }
}