create table users(
            id serial primary key,
            username varchar(25) not null,
            password varchar(25),
            profile_picture text
)