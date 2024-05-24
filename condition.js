// easy
// 1.Check if given number is positive, negative, or zero .
// declare random number and 
// Өгөгдсөн тоо эерэг бол "positive" , сөрөг бол "negative" , 0 бол "zero" гэж хэвлэнэ үү . console.log("the number is positive")

// 2.Check age for driving.
// Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү . 

// 3.Check the given number is odd or even .
// Өгөгдсөн тоог шалгаад тэгш тоо бол "even" , сондгой тоо бол "odd" гэж хэвлэнэ үү .

// 7.Check if a given number is divisible by 5 .
// Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.

// 9.Check if a given number is within the range of 1 to 100 .
// Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .

// 10.Check if a password is strong (starong password is at least 8 characters long) .
// Пасспортыг хүчтэй үгүйг шалгаад хүчтэй бол "strong" , сул бол "weak" гэж хэвлэнэ үү. Багадаа 8 тэмдэгт агуулвал хүчтэй гэж тооцно .

// medium
// 4.Categorize age group (children, youth, adults , seniors) .
// Өгөгдсөн нас нь 14-өөс доош бол "Children", 14-24 бол "Youth" , 24-64 бол "Adults" , 64-өөс дээш бол "Seniors" гэж хэвлэнэ үү .

// 5.Check triangle validity . 
// Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .
// for example : 
//      a=5 b=6 c=7 / is valid 
//      a=4 b=8 c=19 / is invalid 

// 6.Find the largest of two number .
// 2 тооноос ихийг нь олж хэвлэнэ үү .

// 8.Check if a given character is a vowel or a consonant .
// Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .

// 11.Find the largest of three number
// 3 тооноос хамгийн ихийг нь олж хэвлэнэ үү .

// 12.Check year is an Olympic year
// Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .

// 13.Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай. 
// Өгөгдсөн өдөр ажлын өдөр бол "working day" , амралтын өдөр бол "weekend" гэж хэвлэнэ үү .
// for example : 
//      day = Thursday / working day  
//      day = Saturday / weekend 

// 14.Check the given number is not a prime number .
// Өгөгдсөн тоог анхны тоо мөн бишийг шалгана уу . (1 болон өөртөө хуваагддаг тоог анхны тоо гэнэ)
// example : 
// number = 2 // true
// number = 15 // false

// 15.Өгөгдсөн сурагчийн дүнг A , B , C , D , F бүлэгт ангилж хэвлэнэ үү .
//    80-100, A
//    70-89, B
//    60-69, C
//    50-59, D
//    0-49, F

//hard
// 16.Check if the season is Autumn, Winter, Spring or Summer.
// Өгөгдсөн сарыг шалгаад тохирох улирлыг хэвлэнэ үү .
// for example : month = November / Autumn

// 17.Яг одоогийн цагийг шалган өглөө бол "Good morning", өдөр бол "Good afternoon", орой бол "Good evening" гэж хэвлэнэ үү .

// 18.Цаг агаар температур , "sunny" эсвэл "rainy" гэж өгөгдөх ба бороотой бол "Don't forget your umbrella!" , нартай бол температур нь 30-аас их бол "It's a hot day!" , 20-30 градус бол "It's a warm day" , 20-оос бага бол "It's a bit cool today" гэж хэвлэнэ үү .
// for example : weather = "sunny" temperature = 25 / It's a warm day.

// 19.yearOfBirth гэсэн хувьсагчид төрсөн оныг оноож өгнө үү. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
// 0 <= old <= 1 үед "Infant"  
// 1 < old <= 3 үед "Toddler" 
// 3 < old <= 5 үед "Preschool"
// 5 < old <=12 үед "Gradeschooler"
// 12 <old <= 18 үед "Teen"
// 18 < old <=21 үед "Young adult"
// 21 < old үед "Adult"