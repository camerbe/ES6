const numbers=[1,2,3,4,5,6,7,8,9,10];
const doubleNumbers=numbers.map(function(number){
    return number*2
});

doubleNumbers


let images = [
    { height: '34px', width: '67px', color: '#ff0032' },
    { height: '54px', width: '167px', color: '#ee0032' },
    { height: '74px', width: '267px', color: '#000032' },
    { height: '4px', width: '367px', color: '#cc0032' },
    { height: '94px', width: '667px', color: '#dd0032' }
   ];
   const heights=images.map(function(obj){
        return obj.height;
   });
   console.log(heights);