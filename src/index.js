/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count=0;
    for(var i=0;i<preferences.length;i++){
        if(preferences[preferences[preferences[i]-1]-1]==(i+1)&&preferences[i]!=preferences[preferences[i]-1]&&preferences[i]-1>=0){
            //only triangles, no self-lovers, only positive
            count++;
                }
    }
    count/=3;
  return count;
  };