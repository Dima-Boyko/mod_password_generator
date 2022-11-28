<?php
defined('_JEXEC') or die;
?>
<div class="ItDix-Generate-Passwords">
	<div class="GenPW-Settings">
		<div class="GenPW-row">
			<div class="GenPW-button" onclick="Generate_passwords()">Згенерувати паролі</div>
		</div>
		<div class="GenPW-row">
			Довжина:</br>
			<input type="number"  id="password_length" value="16" min="4" max="64">
		</div>
		<div class="GenPW-row">
			<input type="checkbox" id="pw_number" checked >
			<label for="pw_number">Цифри</label>
		</div>
		<div class="GenPW-row">
			<input type="checkbox" id="pw_low" checked >
			<label for="pw_low">Малі літери</label>
		</div>
		<div class="GenPW-row">
			<input type="checkbox" id="pw_upp"  checked >
			<label for="pw_upp">Великі літери</label>
		</div>
		<div class="GenPW-row">
			<input type="checkbox" id="pw_special" checked >
			<label for="pw_special">Спеціальні символи</label>
		</div>
		
		
		
	</div>
	<div class="GenPW-Passwords_List">
		<div id="password_list"></div>
	</div>

</div>
