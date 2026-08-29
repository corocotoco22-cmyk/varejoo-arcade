function Chamar_TTY (Mensagem: string) {
    TTY = game.ask(Mensagem)
    game.showLongText("TTY não foi feito, preciso de ajuda da comunidade", DialogLayout.Full)
}
let TTY = false
let myMenu2: Sprite = null
console.log("WaringLite: PT-BR UFT.8 selecionado")
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("LiteOS", assets.image`LiteOS`),
miniMenu.createMenuItem("LiRE", assets.image`LiRE`),
miniMenu.createMenuItem("Mais Index", assets.image`More`),
miniMenu.createMenuItem("Desligar", assets.image`Power Off`)
)
miniMenu.setTitle(myMenu, "LiManager")
miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
    miniMenu.close(myMenu)
    if (selectedIndex == 0) {
        console.log("LiManager: A opcão  selecionada é \"Keep LiteOS\"")
        console.log("LiteOS inicializado")
    } else if (selectedIndex == 1) {
        game.showLongText("Read DATA: USB", DialogLayout.Center)
        console.log("LiManager: A opcão  selecionada é \"LiRE\"")
        pause(100)
        console.log("RE: nada preciso")
        myMenu2 = miniMenu.createMenu(
        miniMenu.createMenuItem("Read.Rev", assets.image`More`),
        miniMenu.createMenuItem("Exit", assets.image`Power Off`)
        )
        miniMenu.setTitle(myMenu2, "GRUB")
        miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
                game.showLongText("Read DATA: USB", DialogLayout.Center)
                game.reset()
            } else {
                game.showLongText("uft8 retont: Saindo", DialogLayout.Center)
                game.reset()
            }
        })
    } else if (selectedIndex == 2) {
        game.showLongText("Mais index não funciona no momento, será adicionado mais tarde", DialogLayout.Center)
        game.reset()
    } else {
        game.showLongText("Toque no botão de desligar ou deslize o interruptor para desligar ou toque duas vezes no botão de ligar/desligar", DialogLayout.Center)
    }
})
