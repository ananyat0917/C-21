function isTouching(objt2,objt3){
    if (objt2.x - objt3.x < objt3.width/2 + objt2.width/2
      && objt3.x - objt2.x < objt3.width/2 + objt2.width/2
      && objt2.y - objt3.y < objt3.height/2 + objt2.height/2
      && objt3.y - objt2.y < objt3.height/2 + objt2.height/2) {
      return true;
    }
    else {
      return false;
    }
  }
  function bounceOff(a,b){
    if (a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2 &&
      a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
    a.velocityX = a.velocityX * (-1);
    b.velocityX = b.velocityX * (-1);
    a.velocityY = a.velocityY * (-1);
    b.velocityY = b.velocityY * (-1);
  }
  }