exports.signo = function(m,d){

	let day = parseInt(d);
    

if(isNaN(day)){return "Ingrese un dia valido";}

switch(m){

		case '1': 
			if( day >= 20){

				return "Acuario";
			
			}else{

				return "Capricornio";
			}

		break;

		case '2': 
			if( day > 21){

				return "Aries";
			
			}else{

				return "Tauro";
			}

		break;	

		case '3': 

	}

}