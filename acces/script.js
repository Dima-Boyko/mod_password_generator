




function Generate_passwords(){
	
	let password_length = document.getElementById('password_length').value;
	
	let num=document.getElementById('pw_number').checked;
	let low=document.getElementById('pw_low').checked;
	let upp=document.getElementById('pw_upp').checked;
	let spc=document.getElementById('pw_special').checked;
	
	let htm_password='';
	let password='';
	for(let i=0;i<15;i++){
		password=Password_Generator(password_length,num,low,upp,spc);
		htm_password+='<div class="password"><input type="input" id="password_'+i+'" onclick="gpwCopy('+i+')" value="'+password+'"></div>'
	}
	document.getElementById('password_list').innerHTML=htm_password;
}

function Password_Generator(PasswordLength=12,num=true,low=true,upp=true,spc=true){
	let Password = '';
	let chars = "";
	let chars_num = "0123456789";
	let chars_low = "abcdefghijklmnopqrstuvwxyz";
	let chars_upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let chars_spc = "!?@#$%^&*()[]{}+-_";
	
	
	if(num)chars+=chars_num;
	if(low)chars+=chars_low;
	if(upp)chars+=chars_upp;
	if(spc)chars+=chars_spc;
	
	if(chars==''){
		chars+=chars_num;
		chars+=chars_low;
		chars+=chars_upp;
		chars+=chars_spc;
	}
	
	
	for(let i = 0;i<PasswordLength;i++){
		
		let RandomNumber = Math.floor(Math.random() * chars.length);
		Password+=chars.substring(RandomNumber,RandomNumber+1);
	}
	return Password;
}

function gpwCopy(i=0){
	let CopyText=document.getElementById('password_'+i);
	CopyText.select();
	document.execCommand("copy");

}


document.addEventListener('DOMContentLoaded', function(){
	Generate_passwords();
});
