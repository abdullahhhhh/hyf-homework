-- select * from meal;
show databases;
use meal_sharing;
		  insert into meal values (null, 'egg' ,'for break fast', 'copenhogen', '2019-09-20', 9,20.00, '2019-07-20');
		  insert into meal values (null, 'spagiti' ,'for lunch', 'copenhogen', '2019-09-25', 5,20.00, '2019-07-23');
           insert into meal values (null, 'pizza' ,'for lunch', 'copenhogen', '2019-09-23', 9,20.00, '2019-07-25');
		  insert into meal values (null, 'chekken' ,'for dinner', 'copenhogen', '2019-09-18', 5,20.00, '2019-06-17');
          select * from reservation;
use meal_sharing;
select * from reservation;
          insert into reservation values (null, 10,1, '2019-8-28');
select * from review;
          insert into review values (null, 'great food', 'It was very delicios', 4, 2, '2019-07-15');
           insert into review values (null, 'very good', 'It was fantastic', 3, 3, '2019-08-16');
           insert into review values (null, 'prefect food', 'It was very pain', 6, 4, '2019-09-17');
           
-- select * from meal where id =2; 

          update meal set title = 'soup' where id =2;
select * from meal;
          delete from meal where id =3;
select * from reservation;
		          insert into reservation values (null, 11,2,'2019-08-26');
				  insert into reservation values (null, 12,6,'2019-08-27');
				 insert into reservation values (null, 13,4,'2019-08-29');
select * from review;
select * from review;
delete from review where id =2 or id=4;
update review set stars = 4 where id =3;
 select * from meal where price < 30;
 select * from reservation;
 select * from meal join reservation on meal.id = reservation.meal_id;
 select * from meal where title like '%great food%';
 select * from meal limit 4;
 select * from review;
 select * from meal join review on meal.id=review.meal_id where stars >3;
 select * from meal join reservation on meal.id =reservation.meal_id order by reservation.created_date asc;
 select *,avg(review.stars) as a_stars from meal join review on meal.id = review . meal_id order by stars asc;
          
          
          
          
