var panelSelector = '#comments',openPanelText = "Buka Diskusi",closePanelText = "Tutup Diskusi",slideDownPanelSpeed = 600,slideUpPanelSpeed = 400;
jQuery(function() {jQuery(panelSelector).hide().addClass('kerenPanel') .before('<a class="openpanel" href="#">' + openPanelText + '<em></em></a>').after('<div class="paneline"></div>');jQuery('a.openpanel').toggle(function() {jQuery(this).addClass('active').html(closePanelText + '<em></em>');jQuery('div.kerenPanel').slideDown(slideDownPanelSpeed);return false;}, function(){jQuery(this).removeClass('active').html(openPanelText + '<em></em>');jQuery('div.kerenPanel').slideUp(slideUpPanelSpeed);return false;});});