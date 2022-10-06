//Global Variables

const dealerCards = document.getElementsByClassName('dealer')
const playerCards = document.getElementsByClassName('player')
const firstDealerCard = document.getElementById('d-card-1')
const secondDealerCard = document.getElementById('d-card-2')
const firstPlayerCard = document.getElementById('p-card-1')
const secondPlayerCard = document.getElementById('p-card-2')
const oneChip = document.querySelector('#one-chip')
const fiveChip = document.querySelector('#five-chip')
const tenChip = document.querySelector('#ten-chip')
const twentyFiveChip = document.querySelector('#twenty-five-chip')
const fiftyChip = document.querySelector('#fifty-chip')
const hundredChip = document.querySelector('#hundred-chip')
const winningCondition = 21
let gameOver = 0
let amountDisplay = document.getElementById('amount')
let amount = 0
let deal = document.querySelector('.deal')
let chipsCount = 0
let chipsTotal = document.getElementById('chips-display')
let playAgain = document.querySelector('#play-again')
const hit = document.querySelector('.hit')
const stand = document.querySelector('.stand')
const positionAddPlayerCard = document.body.children[3]

// Cards
const backOfCard =
  "<img src = 'https://opengameart.org/sites/default/files/card%20back%20red.png'>"
const aceOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2c%2F8b%2F93%2F2c8b938ef31c8f61a74bfdcba4d165f0.png&f=1&nofb=1&ipt=834a95b4d71da3fdffce6b1a06413f32027ea8d834798fa867283ef10865506f&ipo=images'>"
const aceOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsweetclipart.com%2Fmultisite%2Fsweetclipart%2Ffiles%2Face_of_spades.png&f=1&nofb=1&ipt=2d6b121b252d1d255ec7e482e190ffcfadc800861a6b6ec785e3512aaf8e0f07&ipo=images'>"
const aceOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z6Q0lgWMN2ie9-4F1jckqAHaJ_%26pid%3DApi&f=1&ipt=387cfcc90a15c48293d948efd6df5679b81dda72d0290bdacbbb2001e8f550c5&ipo=images'>"
const aceOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F167-1677960_spades-clip-art.png&f=1&nofb=1&ipt=08e446aa5cf7530233f663b0a6ceb1f6e02adad275ab91bdf4a09838614471e7&ipo=images'>"
const twoOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_wG8RymXSv5U%2FTPnJz-7qa7I%2FAAAAAAAAAMg%2FSK4-_Jhizls%2Fs1600%2F200px-Playing_card_heart_2_svg.png&f=1&nofb=1&ipt=15b5e0e1c5544b02a39565ca30fb3c5ca55589bcc846d6dd8203a9b00542434f&ipo=images'>"
const twoOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopenclipart.org%2Fimage%2F2400px%2Fsvg_to_png%2F192443%2F1396231837.png&f=1&nofb=1&ipt=119898c01e1ffa58cc48714aa9dd17325e0d0733fb5095008126b35c8365076c&ipo=images'>"
const twoOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftekeye.uk%2Fplaying_cards%2Fimages%2Fsvg_playing_cards%2Ffronts%2Fpng_96_dpi%2Fdiamonds_2.png&f=1&nofb=1&ipt=8f7487b6ccf7c687ce875033a7ec474baf59a87913087d9fb615378a04ba84f3&ipo=images'>"
const twoOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Fcliparts%2F75495%2Ftwo-of-clubs-clipart-md.png&f=1&nofb=1&ipt=5a8a83de8ed1f77908464c714ea4649023292e04a094878bb2fefe292bf90904&ipo=images'>"
const threeOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2FBcg%2FKx6%2FBcgKx6rXi.png&f=1&nofb=1&ipt=a14c623a21e9518110a09c08caf3609f6e315803e1fc7a6ad33cd2b2a67fde37&ipo=images'>"
const threeOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2F5iRrgK9AT.png&f=1&nofb=1&ipt=8fd24067493fbae375af14a5677af267931a0ed88f2c351929d286a981afd647&ipo=images'>"
const threeOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fusercontent1.hubimg.com%2F718466_f260.jpg&f=1&nofb=1&ipt=311505834981e579f4f3dd0df61a3f9819f93424f29a662dbb573f7303ce2cb5&ipo=images'>"
const threeOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.media4math.com%2Fsites%2Fdefault%2Ffiles%2Flibrary_asset%2Fimages%2FMathClipArt--Playing-Card--The-3-of-Clubs.jpg&f=1&nofb=1&ipt=6fe0946f9738cd118861421364ebf04fcb40abaaa0c513615953afe6eca00d36&ipo=images'>"
const fourOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopengameart.org%2Fsites%2Fdefault%2Ffiles%2Foga-textures%2F92832%2Fhearts_4.png&f=1&nofb=1&ipt=f3d80a5a1ff543626deadb0b6847f8dfca8bbe02faa77fd5d1b5f53c94714234&ipo=images'>"
const fourOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F51%2F56%2F25%2F5156259e1f30dece1376dc5695a9a1d4.png&f=1&nofb=1&ipt=665904913e3f7e020ea8e9c0bd523260984d611874d0db25dbebba9ca1dc6e28&ipo=images'>"
const fourOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.media4math.com%2Fsites%2Fdefault%2Ffiles%2Flibrary_asset%2Fimages%2FMathClipArt--Playing-Card--The-4-of-Diamonds.jpg&f=1&nofb=1&ipt=c283a459f25cd787e5782ab1c7f60028515a48e3d2639ba6b86f95b4112ecd66&ipo=images'>"
const fourOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F7986%2Ff%2F2011%2F180%2F0%2Fb%2F4_of_clubs_by_farvei-d3kgfzf.png&f=1&nofb=1&ipt=04b1856568aaeb8873e47bae51201435d0c220bf74bf3e5c5756e89de2ddc052&ipo=images'>"
const fiveOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FniX%2Fpbb%2FniXpbbzGT.png&f=1&nofb=1&ipt=aba3def2e5e59679bc42d159ce36e2a346065cf44755ece901f830bb2971dbc2&ipo=images'>"
const fiveOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig14.deviantart.net%2F2557%2Ff%2F2011%2F180%2F6%2Fd%2F5_of_spades_by_farvei-d3kgfwn.png&f=1&nofb=1&ipt=904e5a017672355bf55a3dddb05be95009e18c4c45940753ad23e298c48e9f46&ipo=images'>"
const fiveOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftekeye.uk%2Fplaying_cards%2Fimages%2Fsvg_playing_cards%2Ffronts%2Fpng_96_dpi%2Fdiamonds_5.png&f=1&nofb=1&ipt=2cc720443afc5a6e322094fdf7d35c7897400aee5d27bb56f6e5b65d3240f4b9&ipo=images'>"
const fiveOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig01.deviantart.net%2Fe975%2Ff%2F2011%2F180%2Fd%2Fd%2F5_of_clubs_by_farvei-d3kgfts.png&f=1&nofb=1&ipt=402c67f1a8077555b02c2f4abdd1231361f08418f5c3a4d6f21971c6799454d5&ipo=images'>"
const sixOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2Face%2FGE9%2FaceGE9nc4.png&f=1&nofb=1&ipt=357e0c4a4fe7bf94be358664ae82b88631d2f53f303ce893743d927d0539d604&ipo=images'>"
const sixOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc9%2F9b%2F0f%2Fc99b0f04000841e5f3db53d64b3f7034.png&f=1&nofb=1&ipt=02ae9fc83da1baac9de710698865cdd1961bfb31bb70328aa935a273f8d73e68&ipo=images'>"
const sixOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb0%2F2b%2Ff1%2Fb02bf1cb45dad43ede1f90fcf44b077e.png&f=1&nofb=1&ipt=6a1c4cd583e1d2c36420d6e96e950d371aada06b95a8c6c34da69d630271c8ea&ipo=images'>"
const sixOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc03.deviantart.net%2Ffs70%2Ff%2F2011%2F180%2F0%2F8%2F6_of_clubs_by_farvei-d3kgfnt.png&f=1&nofb=1&ipt=12e4b6e8e7f08a4bed6325507f2c5ab36bcd2fa975373832d5d109eed52f0d3f&ipo=images'>"
const sevenOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bjinsider.com%2Fnewsletter_117_poker_Image95.gif&f=1&nofb=1&ipt=a1db06232fcfec5fd6d683bed4450cabf9a6f3815c18512bdba60f08b6e80dd6&ipo=images'>"
const sevenOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F82%2Fd6%2F28%2F82d62864ff67ff7b5e20150316d26872.jpg&f=1&nofb=1&ipt=4c9af24e8a7aed3a2d117f8d0348555f1a956f54b96884e6faaede24c5097a5e&ipo=images'>"
const sevenOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_wG8RymXSv5U%2FTFTrSQNijFI%2FAAAAAAAAAIE%2FavzE21jpnqg%2Fs320%2FSeven%2Bof%2BDiamonds.png&f=1&nofb=1&ipt=2f1f22ac38c192b444a52d2059bd770b5c2d24669d9f3589301731354b73f314&ipo=images'>"
const sevenOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopengameart.org%2Fsites%2Fdefault%2Ffiles%2F7_of_clubs.png&f=1&nofb=1&ipt=759dd10907b20ba225743b1f752431b8dbedca273ecad026b9c548f520ca0074&ipo=images'>"
const eightOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F_wG8RymXSv5U%2FTB7idR-OJuI%2FAAAAAAAAAFM%2FhjZUROVMbl4%2Fs320%2F200px-Playing_card_heart_8_svg.png&f=1&nofb=1&ipt=efeab765c42e5b3ce3fdf1e11a957e5983d65bfa12092bfcd5920220d84eb4bd&ipo=images'>"
const eightOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc05.deviantart.net%2Ffs71%2Ff%2F2011%2F180%2Fd%2F6%2F8_of_spades_by_farvei-d3kgffc.png&f=1&nofb=1&ipt=e66a15e61c33598427ea67755fa5753a410a8455143170368987404be40edb0c&ipo=images'>"
const eightOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flivingwithcards.com%2Fwp-content%2Fuploads%2F2015%2F11%2F8_of_diamonds.png&f=1&nofb=1&ipt=9b08d8ea1416ba942ef4efa45b19d0029609d0fa1c48d0934112c558875ed0bc&ipo=images'>"
const eightOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2Fkc8%2FoXd%2Fkc8oXdjKi.png&f=1&nofb=1&ipt=723b6b153ed158379cbc40262b808492d36dd73a1745582d67ace02491b013e9&ipo=images'>"
const nineOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F_wG8RymXSv5U%2FS_nEroTfFEI%2FAAAAAAAAADs%2Fa-ZxFgQzmjA%2Fs320%2F200px-Playing_card_heart_9_svg.png&f=1&nofb=1&ipt=df8a93fc437d03e3815be14f109fad20caa1533da4889dcc546552752eddf5c7&ipo=images'>"
const nineOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F50%2Fca%2Fac%2F50caac183ef66afe6cdda1d2e3daafda.jpg&f=1&nofb=1&ipt=a255b8a2901399f4c0571cd36ff16d853f6c69d1d6a309c6287d577c613afb4f&ipo=images'>"
const nineOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1885070.png&f=1&nofb=1&ipt=8e96f3fcfc6fb7e72fcfad4d02f51b2aa79bb807bad3f4615e820d4a834706b6&ipo=images'>"
const nineOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.media4math.com%2Fsites%2Fdefault%2Ffiles%2Flibrary_asset%2Fimages%2FMathClipArt--Playing-Card--The-9-of-Clubs.jpg&f=1&nofb=1&ipt=de0649ae737685dc61bbfd7a78e95863433b9790ea9f69972353f78e287db093&ipo=images'>"
const tenOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopengameart.org%2Fsites%2Fdefault%2Ffiles%2Foga-textures%2F92832%2Fhearts_10.png&f=1&nofb=1&ipt=400c19b65bc19599bd77c58a7a447bb2e6124a7c46157d391ba5ecbe88d898ff&ipo=images'>"
const tenOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.media4math.com%2Fsites%2Fdefault%2Ffiles%2Flibrary_asset%2Fimages%2FMathClipArt--Playing-Card--The-10-of-Spades.jpg&f=1&nofb=1&ipt=99fc9e51cb42ffbe1885bd34b536818ae8f66cb86eb442dd58a3cacfa118811b&ipo=images'>"
const tenOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheadguruteacher.files.wordpress.com%2F2017%2F04%2Fplaying_card_diamond_10-svg.png&f=1&nofb=1&ipt=4437a44fcc6b684833de05c13ac1fca7ee2430b0d1436b71207f3ad829703160&ipo=images'>"
const tenOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.pdSHv-ixtnbYH2b8rmFp9AAAAA%26pid%3DApi&f=1&ipt=01ce5e4444237631a03ec4895467a6638595acb547d99a88e86ace483e802baf&ipo=images'>"
const jackOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ffd%2Ff4%2Fff%2Ffdf4ffc434ac567c6b77905cb1b11c8a.png&f=1&nofb=1&ipt=998cd5168ce1847e80ef8dec7f352334b7b889d8c0993639333f5c1e8ed4fddc&ipo=images'>"
const jackOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw0.pngwave.com%2Fpng%2F433%2F896%2Fjack-playing-card-spades-valet-de-pique-card-game-cards-png-clip-art.png&f=1&nofb=1&ipt=d70ee421b3aa5d09660acfdb32da306bef400459bb89fe6a341291959f58fb0e&ipo=images'>"
const jackOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_wG8RymXSv5U%2FS7_ecve61jI%2FAAAAAAAAAC0%2FWGb6ZR-XOmQ%2Fs1600%2FJack%2Bof%2BDiamonds-sm-234-Jd.png&f=1&nofb=1&ipt=9e4753b08ce1ff54cacd64294ea12ef982ff48cbe4a85fa006b077f98a1ae278&ipo=images'>"
const jackOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0011%2F1492%2Ffiles%2Fjack-clubs.png%3F1258321008&f=1&nofb=1&ipt=c29b4af47fb21163df1eb05c4141f175617a5b3c3dd6c0e77951dfe8d2291d39&ipo=images'>"
const queenOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F4d364ce1-cddf-46f1-8a9d-c0e8cc9c36cc%2Fdawrv5t-05dc2dcc-2d2f-4133-b15d-d3592e606da6.png%2Fv1%2Ffill%2Fw_1024%2Ch_1364%2Cq_80%2Cstrp%2Fmy_playing_cards_v2___queen_of_hearts_by_gabe0530_dawrv5t-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NCIsInBhdGgiOiJcL2ZcLzRkMzY0Y2UxLWNkZGYtNDZmMS04YTlkLWMwZThjYzljMzZjY1wvZGF3cnY1dC0wNWRjMmRjYy0yZDJmLTQxMzMtYjE1ZC1kMzU5MmU2MDZkYTYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6q0yXJzHS5JGt64DC00NejbCS4qvY2kH5UN5qlHCntM&f=1&nofb=1&ipt=f6e54349720e4a799c710b00eb6755cbd145fb366e7626374ecdb0c136b33203&ipo=images'>"
const queenOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F4d364ce1-cddf-46f1-8a9d-c0e8cc9c36cc%2Fdawrv2l-d5e735db-bea6-46e2-be6a-51c4e289b36b.png%2Fv1%2Ffill%2Fw_774%2Ch_1032%2Cq_70%2Cstrp%2Fmy_playing_cards_v2___queen_of_spades_by_gabe0530_dawrv2l-pre.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NCIsInBhdGgiOiJcL2ZcLzRkMzY0Y2UxLWNkZGYtNDZmMS04YTlkLWMwZThjYzljMzZjY1wvZGF3cnYybC1kNWU3MzVkYi1iZWE2LTQ2ZTItYmU2YS01MWM0ZTI4OWIzNmIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pLihV6HdFGd320zaUUf2N5STrKNH7KHndBhcw4GJh1k&f=1&nofb=1&ipt=d256f7f802f63393f05e116d083a30c3fae16e500d6de615dba287560af9ddfa&ipo=images'>"
const queenOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F4d364ce1-cddf-46f1-8a9d-c0e8cc9c36cc%2Fdawrvc0-af18fd6f-c1b1-4985-80bf-e2763ace008c.png%2Fv1%2Ffill%2Fw_774%2Ch_1032%2Cq_70%2Cstrp%2Fmy_playing_cards_v2___queen_of_diamonds_by_gabe0530_dawrvc0-pre.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NCIsInBhdGgiOiJcL2ZcLzRkMzY0Y2UxLWNkZGYtNDZmMS04YTlkLWMwZThjYzljMzZjY1wvZGF3cnZjMC1hZjE4ZmQ2Zi1jMWIxLTQ5ODUtODBiZi1lMjc2M2FjZTAwOGMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.szU2Qcd_963F4g5TMm8bEJ5XyfYUA_GmckXVot6BfZY&f=1&nofb=1&ipt=3c9fcfbc4e0e4976089efdc2a6a0370d1a12cab9bb18df7247e4b006e3dfd63f&ipo=images'>"
const queenOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih0.redbubble.net%2Fimage.356309996.5610%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg&f=1&nofb=1&ipt=36345436066a0a39c4fb1c26b42e8622a64a2cf236dcc2ec65255fc78191e04d&ipo=images'>"
const kingOfHearts =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2Fpi7%2FdM6%2Fpi7dM65yT.jpg&f=1&nofb=1&ipt=f35ef479edc55094f7dab3ef3e9c5e98ba98c6655816522da1309dabb5b3390c&ipo=images'>"
const kingOfSpades =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.356105977.0499%2Fbg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.u1.jpg&f=1&nofb=1&ipt=c5a2b6aff87432441c1fa5722042749b4cb1f87a3239868e67a7bb9acab24c0a&ipo=images'>"
const kingOfDiamonds =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fdc%2F99%2F11%2Fdc991171bc77734cf999ff4b4ee78d7d.jpg&f=1&nofb=1&ipt=753f96ff5214da987b5cd4e027d24dfc0a345fb88dd7dcd2c22ff5658166e6a8&ipo=images'>"
const kingOfClovers =
  "<img src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F12%2Ff7%2Fa4%2F12f7a4211bbbbae45ffa90de88e20b40.png&f=1&nofb=1&ipt=5d7db6c27c613be10d4d31fb2e14c6233c8a633e899105be6872d3340dcdf46c&ipo=images'>"

const cards = [
  aceOfHearts,
  aceOfSpades,
  aceOfDiamonds,
  aceOfClovers,
  twoOfHearts,
  twoOfSpades,
  twoOfDiamonds,
  twoOfClovers,
  threeOfHearts,
  threeOfSpades,
  threeOfDiamonds,
  threeOfClovers,
  fourOfHearts,
  fourOfSpades,
  fourOfDiamonds,
  fourOfClovers,
  fiveOfHearts,
  fiveOfSpades,
  fiveOfDiamonds,
  fiveOfClovers,
  sixOfHearts,
  sixOfSpades,
  sixOfDiamonds,
  sixOfClovers,
  sevenOfHearts,
  sevenOfSpades,
  sevenOfDiamonds,
  sevenOfClovers,
  eightOfHearts,
  eightOfSpades,
  eightOfDiamonds,
  eightOfClovers,
  nineOfHearts,
  nineOfSpades,
  nineOfDiamonds,
  nineOfClovers,
  tenOfHearts,
  tenOfSpades,
  tenOfDiamonds,
  tenOfClovers,
  jackOfHearts,
  jackOfSpades,
  jackOfDiamonds,
  jackOfClovers,
  queenOfHearts,
  queenOfSpades,
  queenOfDiamonds,
  queenOfClovers,
  kingOfHearts,
  kingOfSpades,
  kingOfDiamonds,
  kingOfClovers
]
const startPositions = [secondDealerCard, firstPlayerCard, secondPlayerCard]
let randomCard1 = cards[Math.floor(Math.random() * 52)]
let randomCard2 = cards[Math.floor(Math.random() * 52)]
let randomCard3 = cards[Math.floor(Math.random() * 52)]

const oneChipListener = () => {
  chipsCount = 1
  chipsTotal.innerHTML -= chipsCount
  amount += 1
  amountDisplay.innerText = amount
}
const fiveChipListener = () => {
  chipsCount = 5
  chipsTotal.innerHTML -= chipsCount
  amount += 5
  amountDisplay.innerText = amount
}
const tenChipListener = () => {
  chipsCount = 10
  chipsTotal.innerHTML -= chipsCount
  amount += 10
  amountDisplay.innerText = amount
}
const twentyFiveChipListener = () => {
  chipsCount = 25
  chipsTotal.innerHTML -= chipsCount
  amount += 25
  amountDisplay.innerText = amount
}
const fiftyChipListener = () => {
  chipsCount = 50
  chipsTotal.innerHTML -= chipsCount
  amount += 50
  amountDisplay.innerText = amount
}
const hundredChipListener = () => {
  chipsCount = 100
  chipsTotal.innerHTML -= chipsCount
  amount += 100
  amountDisplay.innerText = amount
}
const lose = (sum) => {
  if (sum > winningCondition) {
    gameOver = 1
  }
}

const startGame = () => {
  amountDisplay.innerText = 0
  firstDealerCard.innerHTML = backOfCard
  secondDealerCard.innerHTML = randomCard1
  firstPlayerCard.innerHTML = randomCard2
  secondPlayerCard.innerHTML = randomCard3
}
const startOver = () => {
  firstDealerCard.innerHTML = ' '
  secondDealerCard.innerHTML = ' '
  firstPlayerCard.innerHTML = ' '
  secondPlayerCard.innerHTML = ' '
  randomCard1 = cards[Math.floor(Math.random() * 52)]
  randomCard2 = cards[Math.floor(Math.random() * 52)]
  randomCard3 = cards[Math.floor(Math.random() * 52)]
}
const works = () => {
  console.log('works')
}
const hitMe = () => {
  document.createElement
}

deal.addEventListener('click', startGame)
playAgain.addEventListener('click', startOver)
oneChip.addEventListener('click', oneChipListener)
fiveChip.addEventListener('click', fiveChipListener)
tenChip.addEventListener('click', tenChipListener)
twentyFiveChip.addEventListener('click', twentyFiveChipListener)
fiftyChip.addEventListener('click', fiftyChipListener)
hundredChip.addEventListener('click', hundredChipListener)
// hit.addEventListener('click', works)
// stand.addEventListener('click', works)
