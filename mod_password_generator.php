<?php
/*
*App name: Password Generator
*Version:1.0
*Author:Boyko Dmitry
*Site:itdix.net
*Date:07.06.2022
*Description: генератор надійних паролів.
*/
defined('_JEXEC') or die('Restricted access');


$doc = JFactory::getDocument();
$doc->addStyleSheet('modules/mod_password_generator/acces/style.css'); 
$doc->addScript('modules/mod_password_generator/acces/script.js');    



require(JModuleHelper::getLayoutPath('mod_password_generator'));




