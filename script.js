//your JS code here. If required.
let ans="";
for(let i=1;i<=20;i++){
	if(i%3==0 && i%5==0){
		ans+="FizzBuzz";
		ans+='\n';
	}else if(i%3==0){
		ans+="Fizz";
		ans+='\n';
	}else if(i%5==0){
		ans+="Buzz";
		ans+='\n';
	}else{
		ans+=i;
		ans+='\n';
	}
	
}
alert(ans)