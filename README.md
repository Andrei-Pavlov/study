
# Тема - API для обмена учебными материалами<br>
Команда - <br>
Andrei Pavlov<br>
Roma Kukalev<br>
JPTV21<br>

# Инструкция по запуску проекта
1. Скачать проект из ветки Final<br>
2. Запустить проект и в терминале прописать npm install<br>
3. Включить xampp, включить в xampp'e apach и mysql и создать базу данных study_db | если хотите другое название базы данных, то нужно ещё сделать под пунктом 3.1<br>
3.1 Перейти в папку config открыть файл config.json и изменить данные под себя<br>
4. для запуска проекта в терминале прописать npm run dev<br>
5. для открытия swagger перейти по ссылке http://localhost:3000/api-docs<br>

# Функциональные требования <br>
1. Регистрация и аутентификация пользователей.<br>
2. CRUD операции для работы с учебными материалами.<br>
3. Система рейтингов и отзывов для материалов.<br>
4. Поиск материалов по категориям и ключевым словам.<br>


# Выбранные технологии<br>
1. Node.js: Среда выполнения JavaScript, используемая для создания серверной части приложения.<br>
2. Express.js: Веб-фреймворк для Node.js, используемый для построения RESTful API.<br>
3. Sequelize: ORM (Object-Relational Mapping) библиотека для Node.js, которая используется для взаимодействия с базой данных MySQL.<br>
4. JWT (JSON Web Tokens): Используется для аутентификации и авторизации пользователей.<br>
5. bcrypt: Библиотека для хеширования паролей.<br>
6. MySQL: Реляционная база данных, используемая для хранения данных. <br>
7. Swagger: Инструмент для документирования RESTful API. Swagger предоставляет интерактивную документацию, которая позволяет тестировать API.<br>


# Схема базы данных (ER диаграмма)<br>
![image](https://github.com/Andrei-Pavlov/study/assets/102020580/10d1a198-3deb-473d-b249-fb1e18bd4210)

