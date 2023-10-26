/* テーブルの作成 */
create table user(
    user_id varchar(30) not null,
    name varchar(20) not null,
    pass varchar(256) not null,
    room_no varchar(10) not null,
    left_room int(10) not null,
    primary key (user_id)
);

create table payment_date(
    date_id int(10) auto_increment not null,
    billing_year int(10) not null,
    billingMonth int(10) not null,
    primary key (date_id)
);

create table billing(
    billing_id int(10) auto_increment not null,
    user_id varchar(30) not null,
    use_amount int(10) not null,
    price int(10) not null,
    before_carry_over int(10) not null,
    carry_over_type varchar(10) not null,
    carry_over_price int(10) not null,
    date_id int(10),
    paid_price int(10) not null,
    paid int(10) not null,
    primary key (billing_id),
    foreign key (user_id) references user(user_id) on delete cascade
);