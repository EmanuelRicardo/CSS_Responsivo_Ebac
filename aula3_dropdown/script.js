var abrir_menu_celular = window.document.getElementById ('abrir_menu_celular')
var abrir_submenu_celular = window.document.getElementsByClassName ('submenu')[0]
var abrir_submenu_celular2 = window.document.getElementsByClassName ('submenu')[1]

function botao_menu() {
    
    if (abrir_menu_celular.style.display == 'none' && abrir_submenu_celular.style.display == 'none' && abrir_submenu_celular2.style.display == 'none'){
        abrir_menu_celular.style.display = 'block'
        abrir_submenu_celular.style.display = 'block'
        abrir_submenu_celular2.style.display = 'block' 
    } else {
        abrir_menu_celular.style.display = 'none'
        abrir_submenu_celular.style.display = 'none'
        abrir_submenu_celular2.style.display = 'none' 
    }
}