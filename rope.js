class rope{
	constructor(bodyA, pointB)
	{ var options ={
bodyA: bodyA,
pointB : pointB ,
stiffness : 0.04 ,
lenght : 200
}

//create rope constraint here
this.pointB=pointB
this.rope = Constraint.create(options)
World.add(world, this.rope)
}


    //create display() here 
display() {
if (this.chain.bodyA) {
	
var pointA = this.chain.bodyA.position;
var pointB = this.pointB;
strokeWeight(4)
line(pointA.x,pointA.y, pointB.x, pointB.y)
}




}
}
