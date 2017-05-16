## Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## user_settings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
avatar_url      | string    |
firstname       | string    | not null
lastname        | string    | not null  
location        | string    |
roles           | array     | not null

## business_settings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
avatar_url      | string    |
business name   | string    | not null
contact name    | string    |
location        | string    | not null
images          | array     |

## jobs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
title           | string    |
start_date      | date      |
end_date        | date      |
roles           | array     | not null
description     | text      | not null
status          | string    | not null, default: 'open'
rate            | float     | default: 10.00

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
business_id     | integer   | not null, foreign key (references users), indexed
rating          | integer   | not null, default: 4
details         | text      | not null  

## upcoming_jobs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
listing_Id      | integer   | not null, foreign key (references jobs), indexed

## current_jobs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
listing_Id      | integer   | not null, foreign key (references jobs), indexed

## past_jobs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
listing_Id      | integer   | not null, foreign key (references jobs), indexed
