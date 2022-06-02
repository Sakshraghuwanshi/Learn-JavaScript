const getSleepHours = (day) => {
    switch (day) {
        case "monday":
           return 6;
    
        case "tuesday":
            return 17;   
    
        case "wednesday":
            return 3; 
        
        case "thursday":
            return 24; 
            
        case "friday":
            return 21;   
        
        case "saturday":
            return 16;  
        
        case "sunday":
            return 9;   
        };
    };

const getActualSleepHours = () => {
return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
    );
};

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours) {
        console.log('you got enough sleep')
    } else if(actualSleepHours > idealSleepHours) {
        console.log('bht soliya')
    } else {
        console.log('kaam soye')
    }

};


calculateSleepDebt();