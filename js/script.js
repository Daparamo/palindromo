window.onload = function()
{	
	var esPalindromo = function esPalindromo(frase)
	{
		var palindromo = frase; 
		var validar =""; 
		var Tmp; //variable donde se va a guardar "palindromo" para que no sea modificada
		var cont=0;//Variable para contar cuantas letras son iguales
		while(palindromo.search(" ")!=-1) // se quitan los espacios a la frase en palindromo y en Tmp 
		{
			palindromo=palindromo.replace(" ",""); //se deja sin espacios			
		};
		palindromo = palindromo.toLowerCase(); // se vuelven minusculas para luego poder validar que sean iguales 
		Tmp = palindromo; // se iguala TMP
		palindromo=palindromo.split(""); 
		Tmp=Tmp.split("");// se separan las letras
		validar=palindromo.reverse(); // se invierte el string palindromo 

		//se itera y se compara la palabra al derecho con la palabra al revez si son iguales aumenta cont
		for (var i = 0; i < validar.length; i++) 
		{
			validar[i] == Tmp[i] ? cont++ :console.log("nada");
		}		
		//Se valida con operador ternario si es o no palindromo (comparando la longitud de la palabra o frase con el cont)
		(cont == validar.length)? swal("\""+frase+"\"", " Es palindromo", "success") : swal("\""+frase+"\"", " NO es palindromo", "error");
		event.preventDefault(); 
		return false;
	};	
	nom_div("validar").addEventListener('click', function(event) 
	{
		var frase = nom_div("frase").value;		
		if(nom_div("frase").value!= "") //se valida que no esté vacio el input
			{
				esPalindromo(frase);// se llama la funcion esPalindromo()		
			}
			else
			{
				swal("ERROR ", "Ingrese una palabra o frase", "error");//mensaje de error si el input está vacio
				event.preventDefault();
			}			
	});

	function nom_div(div)
	{
		return document.getElementById(div);
	}
}
