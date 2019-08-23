create database school;
drop database school;
use school;
drop table `class`;
create table `class` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL, 
	`begins` date ,
	`ends` date,
	PRIMARY KEY (`id`)
);
select * from class;
insert into class(name,begins,ends) values ('html','2019-07-10','2020-02-02');
select * from class;
create table `student` (
	`id` int(10) not null,
	`name` varchar (150) not null,
	`email` varchar(200) not null,
	`phone` varchar (12) not null,
	`adress` text not null,
    `class_id` int unsigned,
	primary key (`id`),
	foreign key (`class_id`) references class(id) on delete cascade
);
drop table student;
insert into student (id,name,email,phone,adress, class_id) values (2,'josef','jos@gmail.com','44455','denmark',1);
select * from student ;

describe class;