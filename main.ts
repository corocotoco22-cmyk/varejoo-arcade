function Chamar_TTY (Mensagem: string) {
    TTY = game.ask(Mensagem)
    game.showLongText("TTY não foi feito, preciso de ajuda da comunidade", DialogLayout.Full)
}
let TTY = false
let mouse = sprites.create(assets.image`mouse`, SpriteKind.Player)
controller.moveSprite(mouse)
console.log("WaringLite: PT-BR UFT.8 selecionado")
console.log("LiManager: A opcão  selecionada é \"Keep LiteOS\"")
console.log("LiManager: Segure A para entrar no LiRE(Modo de recuperação)")
pause(5000)
if (controller.A.isPressed()) {
    console.log("LiManager: Mudando para \"LiRE\"")
    console.log("RE: nada preciso")
}
console.log("LiteOS inicializado")
