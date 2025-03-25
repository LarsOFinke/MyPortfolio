import sqlite3
from os import path


CONNECTIONSTRING: str = path.join(path.dirname(__file__), "db", "contactDB.db")


def create_db():
    with sqlite3.connect(CONNECTIONSTRING) as con:
        cursor = con.cursor()
        
        sql: str =  "CREATE TABLE tblCntct( " \
                    "CntctID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, " \
                    "CntctGender TEXT NOT NULL, " \
                    "CtnctFirstname TEXT NOT NULL, " \
                    "CtnctLastname TEXT NOT NULL, " \
                    "CntctPhone TEXT, " \
                    "CntctMail TEXT NOT NULL, " \
                    "CntctCompany TEXT NOT NULL, " \
                    "CntctMessage TEXT)"
        cursor.execute(sql)

if not path.exists(CONNECTIONSTRING):
    create_db()


def add_contact(gender: str, first_name: str, last_name: str, phone: str, mail: str, company: str, message: str) -> bool:
    try:
        with sqlite3.connect(CONNECTIONSTRING, check_same_thread=False) as con:
            cursor = con.cursor()
            
            sql: str = "INSERT INTO tblCntct(CntctGender, CtnctFirstname, CtnctLastname, CntctPhone, CntctMail, CntctCompany, CntctMessage) VALUES (?, ?, ?, ?, ?, ?, ?)"
            cursor.execute(sql, (gender, first_name, last_name, phone, mail, company, message))
            
            return True
        
    except Exception as e:
        return False
