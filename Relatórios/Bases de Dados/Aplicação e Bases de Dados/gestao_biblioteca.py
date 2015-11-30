#!/usr/bin/python
# -*- coding: utf-8 -*-

# Programa para ser executado em Python 2.x
__author__ = 'Diogo Daniel Ferreira e Luis Davide Leira'
# Diogo Daniel Soares Ferreira e Luís Davide Leira
# Laboratórios de Informática, 2015
# Relatório - Bases de dados

import sys
import datetime
import sqlite3 as sql

# Programa desenhado totalmente com programação defensiva
# Alguma introdução errada de algum valor não fará o programa parar a execução (em princípio)
# Todas as entradas foram descodificadas para poder escrever na base de dados com acentos


# Função que permite localizar um livro pelo autor, pelo título ou pelo estado
# Não é necessário introduzir o autor ou o título inteiro, apenas uma parte, pois o programa procura por padrões idênticos.
def localizar():
    try:
        db = sql.connect("biblioteca.db")
    except:
        print "Não foi possível conectar-se com a base de dados."
        return

    try:
        print "\nDeseja localizar:"
        print "1 - Autor"
        print "2 - Título"
        print "3 - Estado"
        print "0 - Voltar ao Menu Inicial"
        inp = input("Escolha -> ")

        if inp == 1:
            autor = raw_input("Insira o autor: ").decode('utf-8')
            result = db.execute("SELECT Book_Name, Author, Book_State FROM books WHERE Author LIKE ? ORDER BY Book_Name ASC", ('%'+autor+'%',))
            rows = result.fetchall()

            print "\nResultados:"

            resultados = False
            for row in rows:
                resultados = True
                print "Titulo: %40s |Autor: %30s |Estado: %10s" % (row[0], row[1], row[2])

            if not resultados:
                print "Nada encontrado!"

            print "\n"
            menu()

        elif inp == 2:
            titulo = raw_input("Insira o título do livro: ").decode('utf-8')
            result = db.execute("SELECT Book_Name, Author, Book_State FROM books WHERE Book_Name LIKE ? ORDER BY Book_Name ASC", ('%'+titulo+'%',))
            rows = result.fetchall()

            print "\nResultados:"

            resultados = False
            for row in rows:
                resultados = True
                print "Titulo: %40s |Autor: %30s |Estado: %10s" % (row[0], row[1], row[2])

            if not resultados:
                print "Nada encontrado!"

            print "\n"
            menu()

        elif inp == 3:
            print "Deseja procurar livros com o estado:"
            print "1 - Disponível"
            print "2 - Requisitado"
            estado = input("Opção -> ")

            if estado == 1:
                result = db.execute("SELECT Book_Name, Author, Book_State FROM books WHERE Book_State = \"Disponivel\" ORDER BY Book_Name ASC")
                rows = result.fetchall()
                print "\nResultados:"
                resultados = False

                for row in rows:
                    resultados = True
                    print "Titulo: %40s |Autor: %30s |Estado: %10s" % (row[0], row[1], row[2])
                if not resultados:
                    print "Nada encontrado!"

                print "\n"
                menu()

            elif estado == 2:
                result = db.execute("SELECT Book_Name, Author, Book_State FROM books WHERE Book_State = \"Requisitado\" ORDER BY Book_Name ASC")
                rows = result.fetchall()
                print "\nResultados:"
                resultados = False

                for row in rows:
                    resultados = True
                    print "Titulo: %40s |Autor: %30s |Estado: %10s" % (row[0], row[1], row[2])
                if not resultados:
                    print "Nada encontrado!"

                print "\n"
                menu()

            else:
                raise Exception

        elif inp == 0:
            menu()
        else:
            raise Exception

    except:
        print "\nEntrada inválida! Insira novamente o que deseja.\n"
        localizar()

# Função que permite listar os livros, os utilizadores ou as requisições
def listar():
    try:
        db = sql.connect("biblioteca.db")
    except:
        print "Não foi possível conectar-se com a base de dados."
        return

    try:
        print "\nDeseja listar:"
        print "1 - Livros"
        print "2 - Utilizadores"
        print "3 - Requisições"
        print "0 - Voltar ao Menu Inicial"
        inp = input("Escolha -> ")

        if inp == 1:
            result = db.execute("SELECT Book_Name, Author, Book_State FROM books ORDER BY Book_Name ASC")
            rows = result.fetchall()

            for row in rows:
                print "Titulo: %40s |Autor: %30s |Estado: %10s" % (row[0], row[1], row[2])

            print "\n"
            menu()

        elif inp == 2:
            result = db.execute("SELECT User_Name FROM users ORDER BY User_Name ASC")
            rows = result.fetchall()

            for row in rows:
                print "Nome de Utilizador: "+row[0]

            print "\n"
            menu()

        elif inp == 3:
            res = []
            names = []
            books = []
            start_dates = []
            end_dates = []
            req = db.execute("SELECT * FROM requisitions")
            rows = req.fetchall()

            i=0
            for row in rows:
                names.append(row[0])
                books.append(row[1])
                start_dates.append(row[2])
                end_dates.append(row[3])
                i=i+1

            print "\n"

            i=0
            for i in range(0,len(names)):
                nam = db.execute("SELECT User_Name FROM users WHERE Id_User LIKE ?", (names[i],))
                result = nam.fetchall()
                book = db.execute("SELECT Book_Name, Author FROM books WHERE Id_Book LIKE ?", (books[i],))
                result2 = book.fetchall()
                print "Nome de Utilizador: %20s|Titulo do Livro: %40s|Autor do Livro: %20s|\nData de requisicao: %20s|Data limite de entrega: %20s\n" % (result[0][0], result2[0][0], result2[0][1], str(start_dates[i]),str(end_dates[i]))

            print "\n"
            menu()

        elif inp == 0:
            menu()
        else:
            raise Exception

    except:
        print "\nEntrada inválida! Insira novamente o que deseja.\n"
        listar()

# Cria utilizadores, livros ou requisiçoes
def criar():
    try:
        db = sql.connect("biblioteca.db")
    except:
        print "Não foi possível conectar-se com a base de dados."
        return

    try:
        print "\nDeseja criar:"
        print "1 - Utilizadores"
        print "2 - Livros"
        print "3 - Requisicoes"
        print "0 - Voltar ao Menu Inicial"
        inp = input("Escolha -> ")

        if inp == 1:
            name = raw_input("Escreva o nome do novo utilizador: ").decode('utf-8')

            # Verificar se já existe na base de dados. Caso aconteça, lançar erro.
            result = db.execute("SELECT User_Name FROM users WHERE User_Name=?", (name,))
            rows = result.fetchall()

            if len(rows) != 0:
                print "Utilizador já existe! Insira um nome de utilizador diferente."
                raise Exception

            db.execute("INSERT INTO users VALUES(NULL, ?)", (name,))
            db.commit()

            print "\n"+name+" adicionado com sucesso na base de dados!\n"
            menu()

        elif inp == 2:
            book = raw_input("Escreva o nome do novo livro: ").decode('utf-8')
            author = raw_input("Escreva o nome do autor do livro: ").decode('utf-8')

            # Verificar se já existe na base de dados. Caso aconteça, lançar erro.
            result = db.execute("SELECT Book_Name, Author FROM books WHERE Book_Name=? AND Author=?", (book, author,))
            rows = result.fetchall()

            if len(rows) != 0:
                print "Livro já existe na base de dados."
                raise Exception

            db.execute("INSERT INTO books VALUES(NULL, ?, ?, \"Disponivel\")", (book, author, ))
            db.commit()

            print "\n"+book+" de "+" adicionado com sucesso na base de dados!\n"
            menu()

        elif inp == 3:
            user = raw_input("Escreva o nome do utilizador que vai requisitar um livro: ").decode('utf-8')
            book = raw_input("Escreva o título do livro que o utilizador vai requisitar: ").decode('utf-8')
            author = raw_input("Escreva o nome do autor do livro que o utilizador vai requisitar: ").decode('utf-8')
            ndate = raw_input("Escreva a data de término do prazo de entrega do livro(AAAA-MM-DD): ").decode('utf-8')

            result = db.execute("SELECT Id_Book FROM books WHERE Book_Name = ? AND Author = ?", (book,author,))
            id_book = result.fetchall()[0][0]

            result = db.execute("SELECT Id_User FROM users WHERE User_Name LIKE ?", (user,))
            id_user = result.fetchall()[0][0]

            # Se o livro já foi requisitado, não é possível ser requisitado outra vez
            req = db.execute("SELECT Id_Book FROM requisitions")
            res = req.fetchall()
            for i in res:
                if i[0] == id_book:
                    print "O livro já está requisitado!"
                    raise Exception


            db.execute("INSERT INTO requisitions VALUES(?, ?, ?, ?)", (int(id_user), int(id_book), str(datetime.date.today()), ndate , ))
            db.commit()
            # Alterar o estado do livro de Disponivel para Requisitado
            db.execute("UPDATE books SET Book_State=\"Requisitado\" WHERE Id_Book = ?", (id_book,))
            db.commit()

            print "Requisição adicionada com sucesso!\n"
            menu()

        elif inp == 0:
            menu()
        else:
            raise Exception

    except:
        print "Entrada invalida! Insira novamente o que deseja."
        criar()

# Função que permite alterar utilizadores ou livros sem alterar as suas requisições
def alterar():
    try:
        db = sql.connect("biblioteca.db")
    except:
        print "Não foi possível conectar-se com a base de dados."
        return

    try:
        print "\nDeseja alterar:"
        print "1 - Utilizador"
        print "2 - Livro"
        print "0 - Voltar ao Menu Inicial"
        print "NOTA: ESTAS ALTERAÇÕES NÃO IRÃO ALTERAR AS REQUISIÇÕES ATUAIS."
        inp = input("Escolha -> ")

        if inp == 1:
            nome = raw_input("Escreva o nome antigo: ").decode('utf-8')

             # Verificar se o utilizador existe
            result = db.execute("SELECT User_Name FROM users")
            rows = result.fetchall()

            existe = False
            for row in rows:
                if row[0] == nome:
                    existe = True

            if not existe:
                raise Exception

            new_nome = raw_input("Escreva agora o novo nome: ").decode('utf-8')

            result = db.execute("UPDATE users SET User_Name = ? WHERE User_Name = ?", (new_nome,nome,))
            db.commit()

            print "Nome alterado com sucesso!\n"
            menu()

        elif inp == 2:
            titulo = raw_input("Escreva o titulo do livro a retirar: ").decode('utf-8')
            autor = raw_input("Escreva o nome do autor do livro a retirar: ").decode('utf-8')

            # Verificar se o livro existe
            result = db.execute("SELECT Book_Name, Author FROM books")
            rows = result.fetchall()

            existe = False
            for row in rows:
                if row[0] == titulo and row[1]==autor:
                    existe = True

            if not existe:
                raise Exception

            novo_titulo = raw_input("Escreva o novo título: ").decode('utf-8')
            novo_autor = raw_input("Escreva o nome do autor: ").decode('utf-8')

            result = db.execute("UPDATE books SET Book_Name = ?, Author = ? WHERE Book_Name = ? AND Author = ?", (novo_titulo, novo_autor, titulo, autor,))
            db.commit()

            print "Título e autor do livro alterado com sucesso!\n"
            menu()

        elif inp == 0:
            menu()
        else:
            raise Exception

    except:
        print "Entrada inválida! Insira novamente o que deseja."
        alterar()

# Função que permite apagar utizidaroes, livros e requisições
def apagar():
    try:
        db = sql.connect("biblioteca.db")
    except:
        print "Não foi possível conectar-se com a base de dados."
        return
    try:
        print "\nDeseja apagar:"
        print "1 - Utilizador"
        print "2 - Livro"
        print "3 - Requisição"
        print "0 - Voltar ao Menu Iniciar"
        print "NOTA: SE APAGAR UM UTILIZADOR OU UM LIVRO, IRÁ APAGAR TODAS AS SUAS REQUISIÇÕES FEITAS."
        inp = input("Escolha -> ")

        if inp == 1:
            user_name = raw_input("Escreva o nome do utilizador que deseja apagar: ").decode('utf-8')

            result = db.execute("SELECT Id_User FROM users WHERE User_Name = ?", (user_name,))
            rows = result.fetchall()
            Id_User = rows[0]

            # Verificar se existe alguma requisição desse utilizador
            req = db.execute("SELECT * FROM requisitions")
            rows = req.fetchall()

            names = []
            books = []
            start_dates = []
            end_dates = []

            for row in rows:
                names.append(row[0])
                books.append(row[1])
                start_dates.append(row[2])
                end_dates.append(row[3])

            print "\n"

            # Se existir, é necessário apagá-la e alterar o estado do livro para "Disponivel"
            i=0
            for i in range(0,len(names)):
                if names[i] == Id_User[0]:
                    nam = db.execute("SELECT Id_Book FROM requisitions WHERE Id_User = ?", (Id_User[0], ))
                    result = nam.fetchall()

            for row in result:
                change = db.execute("UPDATE books SET Book_State=\"Disponivel\" WHERE Id_Book = ?", (row[0],))
                db.commit()
                delete = db.execute("DELETE FROM requisitions WHERE Id_Book = ?",(row[0],))
                db.commit()

            # Irá apagar o utilizador após terem sido apagados todos os seus registos nas requisições
            db.execute("DELETE FROM users WHERE Id_User = ?", (Id_User[0],))
            db.commit()

            print "Utilizador apagado com sucesso!\n"
            menu()

        elif inp == 2:
            book_name = raw_input("Escreva o título do livro que deseja apagar: ").decode('utf-8')
            author = raw_input("Escreva o nome do autor do livro que deseja apagar: ").decode('utf-8')

            result = db.execute("SELECT Id_Book FROM books WHERE Book_Name = ? AND Author = ?",(book_name, author, ))
            rows = result.fetchall()
            Id_Book = rows[0][0]


            db.execute("DELETE FROM requisitions WHERE Id_Book = ?", (int(Id_Book),))
            db.commit()
            db.execute("DELETE FROM books WHERE Id_Book = ?", (int(Id_Book),))
            db.commit()

            print "Livro apagado com sucesso!\n"
            menu()

        elif inp == 3:
            book_name = raw_input("Escreva o título do livro que foi devolvido: ").decode('utf-8')
            author = raw_input("Escreva o nome do autor do livro que foi devolvido: ").decode('utf-8')

            result = db.execute("SELECT Id_Book FROM books WHERE Book_Name = ?", (book_name,))
            rows = result.fetchall()
            Id_Book = rows[0][0]

            db.execute("UPDATE books SET Book_State = \"Disponivel\" WHERE Id_Book = ?", (Id_Book,))
            db.commit()

            result = db.execute("DELETE FROM requisitions WHERE Id_Book = ?", (Id_Book,))
            db.commit()

            print "Requisição apagada com sucesso!\n"
            menu()

        elif inp == 0:
            menu()
        else:
            raise Exception

    except:
        print "Entrada invalida! Insira novamente o que deseja."
        apagar()


# Função para mostrar o menu disponível e escolher a função desejada
def menu():
    print "MENU (prima o número que desejar):"
    print "1 - Localizar livro"
    print "2 - Listar (livros, utilizadores ou requisições)"
    print "3 - Criar (utilizador, livro ou requisição)"
    print "4 - Alterar (utilizador ou livro)"
    print "5 - Apagar (utilizador, livro ou requisição)"
    print "0 - Terminar o programa\n"

    try:
        inp = input("Número desejado -> ")
        if inp == 1:
            localizar()
        elif inp == 2:
            listar()
        elif inp == 3:
            criar()
        elif inp == 4:
            alterar()
        elif inp == 5:
            apagar()
        elif inp == 0:
            return
        else:
            raise Exception

    except:
        print "Número inválido! Escolha outra vez.\n"
        menu()


menu()