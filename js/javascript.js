/** * 2007-2015 PrestaShop * * NOTICE OF LICENSE * * This source file is subject to the Open Software License (OSL 3.0) * that is bundled with this package in the file LICENSE.txt. * It is also available through the world-wide-web at this URL: * http://opensource.org/licenses/osl-3.0.php * If you did not receive a copy of the license and are unable to * obtain it through the world-wide-web, please send an email * to license@prestashop.com so we can send you a copy immediately. * * DISCLAIMER * * Do not edit or add to this file if you wish to upgrade PrestaShop to newer * versions in the future. If you wish to customize PrestaShop for your * needs please refer to http://www.prestashop.com for more information. * *  @author    PrestaShop SA <contact@prestashop.com> *  @copyright 2007-2015 PrestaShop SA *  @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0) *  International Registered Trademark & Property of PrestaShop SA */function ShowHideSceauLog() {		var div = document.getElementById('sceau_log');	if(div.style.display == "none") { 		div.style.display = "block"; 	} else { 		div.style.display = "none";	}}function loadSubCategories(elem_id){		var category_id = $('#fianetsceau_'+elem_id+'_category option:selected').val();	var token = $("#token_fianetsceau").attr('value');	var id_shop = $("#id_shop_fianetsceau").attr('value');		$.ajax({		url: '../modules/fianetsceau/subcategory.php', 		type:'POST', 		data: "category_id="+category_id+"&elem_id="+elem_id+"&token="+token+"&id_shop="+id_shop,		cache:false, 		success:function(reponse){						$("#subcategory_"+elem_id).empty();			$("#subcategory_"+elem_id).show();			$("#subcategory_"+elem_id).append(reponse);		}	})}