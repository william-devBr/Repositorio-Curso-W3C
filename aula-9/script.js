/**
 * author william-devBr github
 *  curso fullstack web developer
 *   Html5 javascript / php / mysql / node
 */


 class Point{

    constructor(x,y){

        this.x  = x;
        this.y = y;
        Point.nbPointsCreated++;

    }

    static distance(a, b) {

         const dx = a.x - b.x;
         const dy = a.y - b.y;

         return Math.sqrt(dx * dx + dy * dy)
    }

 }

 // static Point.nbPointsCeated chamado fora da classe
 Point.nbPointsCreated = 0;

 const p1 = new Point(5 ,5);
 const p2 = new Point(6,8);

 document.getElementById("points").innerText = Point.distance(p1, p2) ;
