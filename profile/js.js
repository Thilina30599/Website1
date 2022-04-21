//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';  
        document.getElementById('day');
        day.innerHTML = `Sunday`
        
       
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Monday morning blues!';
        document.getElementById('day');
        day.innerHTML = `Monday`
       
       

        break;
    case 2:
        nameOfDay = 'Tuesday';
        document.getElementById('day');
        day.innerHTML = `Tuesday`
        document.getElementById('class1');
        class1.innerHTML = `14:30/16:30-Litreture`
        

        break;
   

    case 3:
        nameOfDay = 'Wednesday';
        document.getElementById('class1');
        class1.innerHTML = `14:30/17:30-English`
        document.getElementById('day');
        day.innerHTML = `Wednesday`
        break;
    case 4:
        nameOfDay = 'Thursday';
        document.getElementById('class1');
        day.innerHTML = `Thursday`
        
        break;
    case 5:
        nameOfDay = 'Friday';
        document.getElementById('class1');
        class1.innerHTML = `15:00/18:00-ICT`
        document.getElementById('day');
        day.innerHTML = `Friday`
        
        break;
    case 6:
        nameOfDay = 'Saturday';
         document.getElementById('class1');
        class1.innerHTML = `07:30/10:00-Science`
        document.getElementById('class2');
        class2.innerHTML = `10:30/12:30-Maths`
        document.getElementById('class3');
        class3.innerHTML = `13:30/15:30-History`
        document.getElementById('day');
        day.innerHTML = `Saturday`
        break;

}