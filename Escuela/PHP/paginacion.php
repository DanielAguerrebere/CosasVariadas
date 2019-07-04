<?php

        class db {
                public $server = 'localhost';
                public $user = 'root';
                public $passwd = '';
                public $db = 'base_ejemplo';
                public $dbCon;

        function __construct(){
                $this->dbCon = mysqli_connect($this->server, $this->user, $this->passwd, $this->db);
        }

          function __destruct(){
                mysqli_close($this->dbCon);
        }

        function select($myQuery){
                $results = mysqli_query($this->dbCon, $myQuery);
                return $results;
        }

    }

?>