//Set Places to Pieces
var BLACK = 'b';
var WHITE = 'w';

var PAWN = 'p';
var KNIGHT = 'n';
var BISHOP = 'b';
var ROOK = 'r';
var QUEEN = 'q';
var KING = 'k';

var LEFT='l';
var RIGHT='r';

// Colomn Names
var col=['a','b','c','d','e','f','g','h'];
// Row Names
var row=[1,2,3,4,5,6,7,8];

//Pawns Black & White
var pawns=['bp1','bp2','bp3','bp4','bp5','bp6','bp7','bp8','wp1','wp2','wp3','wp4','wp5','wp6','wp7','wp8'];
//Rooks Black & White
var rooks=['brr','brl','wrr','wrl'];
//Bishops Black & White
var bishops=['bbr','bbl','wbr','wbl'];
//Knights Black & White
var knights=['bnr','bnl','wnr','wnl'];
//Knigs Black & White
var kings=['bk','wk'];
//Queens Black & White
var queens=['bq','wq'];
// All Peices
var allPieces=['bp1','bp2','bp3','bp4','bp5','bp6','bp7','bp8','wp1','wp2','wp3','wp4','wp5','wp6','wp7','wp8','brr','brl','wrr','wrl','bbr','bbl','wbr','wbl','bnr','bnl','wnr','wnl','bk','wk','bq','wq'];
// All White Blocks
var whiteBlocks=['a8','c8','e8','g8','b7','d7','f7','h7','a6','c6','e6','g6','b5','d5','f5','h5','a4','c4','e4','g4','b3','d3','f3','h3','a2','c2','e2','g2','b1','d1','f1','h1'];
// All Black Blocks
var RedBlocks=['b8','d8','f8','h8','a7','c7','e7','g7','b6','d6','f6','h6','a5','c5','e5','g5','b4','d4','f4','h4','a3','c3','e3','g3','b2','d2','f2','h2','a1','c1','e1','g1'];
// Board Char Positions
var chessChars=["a","b","c","d","e","f","g","h"];
// All Black Pieces
var BlackPices=['bp1','bp2','bp3','bp4','bp5','bp6','bp7','bp8','brr','brl','bbr','bbl','bnr','bnl','bk','bq'];
// All White Pieces
var WhitePices=['wp1','wp2','wp3','wp4','wp5','wp6','wp7','wp8','wrr','wrl','wbr','wbl','wnr','wnl','wk','wq'];
//Pieces Names List
var chessPieces=[
    "wRook",
    "wKnight",
    "wBishop",
    "wQueen",
    "wKing",
    "wBishop",
    "wKnight",
    "wRook",

    "wPawn",
    "wPawn",
    "wPawn",
    "wPawn",
    "wPawn",
    "wPawn",
    "wPawn",
    "wPawn",

    "bPawn",
    "bPawn",
    "bPawn",
    "bPawn",
    "bPawn",
    "bPawn",
    "bPawn",
    "bPawn",

    "bRook",
    "bKnight",
    "bBishop",
    "bQueen",
    "bKing",
    "bBishop",
    "bKnight",
    "bRook"
];
//Pice Numbers to Pieces Placement
var pieceNo=[
    WHITE+ROOK+LEFT,
    WHITE+KNIGHT+LEFT,
    WHITE+BISHOP+LEFT,
    WHITE+QUEEN,
    WHITE+KING,
    WHITE+BISHOP+RIGHT,
    WHITE+KNIGHT+RIGHT,
    WHITE+ROOK+RIGHT,

    WHITE+PAWN+"1",
    WHITE+PAWN+"2",
    WHITE+PAWN+"3",
    WHITE+PAWN+"4",
    WHITE+PAWN+"5",
    WHITE+PAWN+"6",
    WHITE+PAWN+"7",
    WHITE+PAWN+"8",

    BLACK+PAWN+"8",
    BLACK+PAWN+"7",
    BLACK+PAWN+"6",
    BLACK+PAWN+"5",
    BLACK+PAWN+"4",
    BLACK+PAWN+"3",
    BLACK+PAWN+"2",
    BLACK+PAWN+"1",

    BLACK+ROOK+RIGHT,
    BLACK+KNIGHT+RIGHT,
    BLACK+BISHOP+RIGHT,
    BLACK+QUEEN,
    BLACK+KING,
    BLACK+BISHOP+LEFT,
    BLACK+KNIGHT+LEFT,
    BLACK+ROOK+LEFT
];
//Squares
var squares=[
    a1, b1, c1, d1, e1, f1, g1, h1,
    a2, b2, c2, d2, e2, f2, g2, h2,
    a3, b3, c3, d3, e3, f3, g3, h3,
    a4, b4, c4, d4, e4, f4, g4, h4,
    a5, b5, c5, d5, e5, f5, g5, h5,
    a6, b6, c6, d6, e6, f6, g6, h6,
    a7, b7, c7, d7, e7, f7, g7, h7,
    a8, b8, c8, d8, e8, f8, g8, h8
];

//Class to find Pwans First & Second Moves
var PawnMovements ={
    wp1:false, wp2:false, wp3:false , wp4:false , wp5:false , wp6:false , wp7:false , wp8:false ,
    bp1:false , bp2:false , bp3:false , bp4:false , bp5:false , bp6:false , bp7:false , bp8:false
};
//Pawn promotion positions
var blackPawnPromotionPositions=['a1','b1','c1','d1','e1','f1','g1','h1'];
var whitePawnPromotionPositions=['a8','b8','c8','d8','e8','f8','g8','h8'];

//To add Chess Pieces to the Board
function setChessPieces() {
    var pointer=0;
    var pieceId="";

    for (var i=0;i<8;i++){
        for (var j=0;j<8;j++){
            if(i>1 && i<6)continue;
            pieceId=chessChars[j]+(i+1);
            $('#'+pieceId+'').prepend('<img src="/Chess-Mate/images/chess_Board/'+chessPieces[pointer]+'.png" draggable="true" onmouseover="pathSetter(id)" onmouseout="refreshBoxes()" class="hover" id="'+pieceNo[pointer]+
                '" width="80px" height="80px" style="position: absolute;" ondragstart="drag(event)">');
            pointer+=1;
        }
    }
}
// To Stop dragging Black Pieces
function stopBlack() {
    var availablePieces=getAvailableBlackPieces();
    for(var i=0;i<availablePieces.length;i++){
        var element=document.getElementById(availablePieces[i]);
        element.setAttribute('draggable', false);
    }
}

// To Stop dragging White Pieces
function stopWhite() {
    var availableWhitePices=getAvailableWhitePieces();
    for(var i=0;i<availableWhitePices.length;i++){
        var element=document.getElementById(availableWhitePices[i]);
        element.setAttribute('draggable', false);
    }
}

// To Start dragging White Pieces
function startWhite() {
    var availableWhitePices=getAvailableWhitePieces();
    for(var i=0;i<availableWhitePices.length;i++){
        var element=document.getElementById(availableWhitePices[i]);
        element.setAttribute('draggable',true);
    }
}

// To Start dragging White Pieces
function startBlack() {
    var availablePieces=getAvailableBlackPieces();
    for(var i=0;i<availablePieces.length;i++){
        var element=document.getElementById(availablePieces[i]);
        element.setAttribute('draggable',true);
    }
}

//Available black pieces
function getAvailableBlackPieces() {
    var avPices=[];
    for(var i=0;i<squares.length;i++){
        if(squares[i].childNodes.length>0){
            if((squares[i].childNodes[0].id).substring(0,1)=="b"){
                avPices.push(squares[i].childNodes[0].id);
            }
        }
    }
    return avPices;
}

//Available white pieces
function getAvailableWhitePieces() {
    var avPices=[];
    for(var i=0;i<squares.length;i++){
        if(squares[i].childNodes.length>0){
            if((squares[i].childNodes[0].id).substring(0,1)=="w"){
                avPices.push(squares[i].childNodes[0].id);
            }
        }
    }
    return avPices;
}

//Refresh all Blocks After Moouse out
function mouseOut() {
    refreshBoxes();
}

//Path Chooser to Choose Piece Paths
function pathSetter(id) {
    var pieceType = checkPiece(id);
    if (pieceType == "pawn") {
        var pawnColor = id.substring(0, 1);

        if (pawnColor == "b") {
            setBlackPawnPath(id);
            return;
        } else {
            setWhitePawnPath(id);
            return;
        }
    }else if(pieceType=="rook"){
        var rookColor = id.substring(0, 1);

        if(rookColor=="b"){
            setBlackRookPath(id);
            return;
        }else{
            setWhiteRookPath(id);
            return;
        }

    }else if(pieceType=="knight"){
        var knightColor = id.substring(0, 1);

        if(knightColor=="b"){
            setBlackKnightPath(id);
            return;
        }else{
            setWhiteKnightPath(id);
            return;
        }

    }else if(pieceType=="bishop"){
        var bishopColor = id.substring(0, 1);

        if (bishopColor == "b") {
            setBlackBishopPath(id);
            return;
        }else{
            setWhiteBishopPath(id);
            return;
        }
    }else if(pieceType=="king"){
        var kingColor = id.substring(0, 1);

        if(kingColor=="b"){
            setBlackKingPath(id);
            return;
        }else{
            setWhiteKingPath(id);
            return;
        }

    }else if(pieceType=="queen"){
        var queenColor = id.substring(0,1);

        if(queenColor=="b"){
            setBlackQueenPath(id);
            return;
        }else{
            setWhiteQueenPath(id);
            return;
        }
    }
}

//Return the type of the Piece
function checkPiece(clicked_id) {
    if (clicked_id != undefined) {
        for (var i = 0; i < pawns.length; i++) {
            if (pawns[i] === clicked_id) {
                return "pawn"
            }
        }

        for (var i = 0; i < rooks.length; i++) {
            if (rooks[i] === clicked_id) {
                return "rook";
            }
        }

        for (var i = 0; i < bishops.length; i++) {
            if (bishops[i] === clicked_id) {
                return "bishop";
            }
        }

        for (var i = 0; i < knights.length; i++) {
            if (knights[i] === clicked_id) {
                return "knight";
            }
        }

        for (var i = 0; i < kings.length; i++) {
            if (kings[i] === clicked_id) {
                return "king";
            }
        }

        for (var i = 0; i < queens.length; i++) {
            if (queens[i] === clicked_id) {
                return "queen";
            }
        }
    }
}

//Set path to black Pwan
function setBlackPawnPath(childId) {
    refreshBoxes();
    var parentId = document.getElementById(childId).parentNode.id;
    var childId = childId;
    var isFirstMove = PawnMovements[childId];
    for (var i = 0; i < col.length; i++) {
        for (var j = 0; j < row.length; j++) {
            //Find Position
            if (parentId === col[i] + row[j]) {
                if (!isFirstMove) {
                    //If first Move,Set 1st path
                    var path1 = (col[i]) + row[j - 1];
                    if ((document.getElementById(path1).childNodes.length) == 0) {
                        var pathId = "#" + path1;

                        $(pathId).addClass('pathViewer');
                        $(pathId).attr('ondrop', 'drop(event,this)');
                        $(pathId).attr('ondragover', 'allowDrop(event,this)');
                    }
                    //Set 2nd path
                    var path2 = (col[i]) + row[j - 2];
                    if ((document.getElementById(path2).childNodes.length) == 0) {
                        //get the path
                        pathId = "#" + path2;
                        //path combine with #
                        $(pathId).addClass('pathViewer');
                        $(pathId).attr('ondrop', 'drop(event,this)');
                        $(pathId).attr('ondragover', 'allowDrop(event,this)');
                    }
                    //If a trap,Set trap path
                    if(i > 7 & j >= 1 ){
                        var path3 = (col[i + 1]) + row[j - 1];
                        if ((document.getElementById(path3).childNodes.length) > 0) {
                            var child = document.getElementById(path3).childNodes[0].id;
                            var isTrap = false;
                            for (var k = 0; k < WhitePices.length; k++) {
                                if (child == WhitePices[k]) {
                                    isTrap = true;
                                    break;
                                }
                            }
                            if (isTrap) {
                                pathId = "#" + path3;
                                //path combine with #
                                $(pathId).addClass('redSquare');
                                $(pathId).attr('ondrop', 'drop(event,this)');
                                $(pathId).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                    }
                    //If a trap,Set trap path
                    if(i >= 1 & j >= 1 ){
                        var path4 = (col[i - 1]) + row[j - 1];
                        if ((document.getElementById(path4).childNodes.length) > 0) {
                            var child = document.getElementById(path4).childNodes[0].id;
                            var isTrap = false;
                            for (var k = 0; k < WhitePices.length; k++) {
                                if (child == WhitePices[k]) {
                                    isTrap = true;
                                    break;
                                }
                            }
                            if (isTrap) {
                                pathId = "#" + path4;
                                //path combine with #
                                $(pathId).addClass('redSquare');
                                $(pathId).attr('ondrop', 'drop(event,this)');
                                $(pathId).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                    }
                    //If the Second move,Set second path
                } else {
                    var path5 = col[i] + row[j - 1];
                    if ((document.getElementById(path5).childNodes.length) == 0) {
                        //get the path
                        pathId = "#" + path5;
                        //path combine with #
                        $(pathId).addClass('pathViewer');
                        $(pathId).attr('ondrop', 'drop(event,this)');
                        $(pathId).attr('ondragover', 'allowDrop(event,this)');
                    }
                    //If a trap,Set trap path
                    var path6 = col[(i-1)] + row[j - 1];
                        if ((document.getElementById(path6).childNodes.length) > 0) {
                            var child = document.getElementById(path6).childNodes[0].id;
                            var isTrap = false;
                            for (var k = 0; k < WhitePices.length; k++) {
                                if (child == WhitePices[k]) {
                                    isTrap = true;
                                    break;
                                }
                            }
                            if (isTrap) {
                                pathId = "#" + path6;
                                //path combine with #
                                $(pathId).addClass('redSquare');
                                $(pathId).attr('ondrop', 'drop(event,this)');
                                $(pathId).attr('ondragover', 'allowDrop(event,this)');
                            }
                    }
                    //If a trap,Set trap path
                    var path7 = col[i+1] + row[j - 1];
                        if ((document.getElementById(path7).childNodes.length) > 0) {
                            var child = document.getElementById(path7).childNodes[0].id;
                            var isTrap = false;
                            for (var k = 0; k < WhitePices.length; k++) {
                                if (child == WhitePices[k]) {
                                    isTrap = true;
                                    break;
                                }
                            }
                            if (isTrap) {
                                pathId = "#" + path7;
                                //path combine with #
                                $(pathId).addClass('redSquare');
                                $(pathId).attr('ondrop', 'drop(event,this)');
                                $(pathId).attr('ondragover', 'allowDrop(event,this)');
                            }
                    }
                    return;
                }

            }
        }
    }
}


//Wite Pawn Path
function setWhitePawnPath(childId) {
    refreshBoxes();
    var parentId = document.getElementById(childId).parentNode.id;
    var childId = childId;
    var isFirstMove=PawnMovements[childId];
    for (var i = 0; i < col.length; i++) {
        for (var j = 0; j < row.length; j++) {
            if (parentId === col[i] + row[j]) {
                //Find Position
                if (!isFirstMove) {
                    //If first Move,Set 1st path
                    var path1 = (col[i]) + row[j + 1];
                    var pathId = "#" + path1;
                    if((document.getElementById(path1).childNodes.length)==0) {
                        $(pathId).addClass('pathViewer');
                        $(pathId).attr('ondrop', 'drop(event,this)');
                        $(pathId).attr('ondragover', 'allowDrop(event,this)');
                    }

                    //Set 2nd path
                    var path2 = (col[i]) + row[j + 2];
                    if((document.getElementById(path2).childNodes.length)==0) {
                        pathId = "#" + path2;
                        //path combine with #
                        $(pathId).addClass('pathViewer');
                        $(pathId).attr('ondrop', 'drop(event,this)');
                        $(pathId).attr('ondragover', 'allowDrop(event,this)');
                    }
                    //If a trap,Set trap path
                    if(i < 7 & j < 7 ){
                        var path3 = (col[i+1]) + row[j + 1];
                        if ((document.getElementById(path3).childNodes.length) > 0) {
                            var child = document.getElementById(path3).childNodes[0].id;
                            var isTrap = false;
                            for (var k = 0; k < BlackPices.length; k++) {
                                if (child == BlackPices[k]) {
                                    isTrap = true;
                                    break;
                                }
                            }
                            if(isTrap) {
                                pathId = "#" + path3;
                                //path combine with #
                                $(pathId).addClass('redSquare');
                                $(pathId).attr('ondrop', 'drop(event,this)');
                                $(pathId).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                    }
                    //If a trap,Set trap path
                    if(i >= 1 & j < 7 ){
                        var path4 = (col[i-1]) + row[j + 1];
                        if ((document.getElementById(path4).childNodes.length) > 0) {
                            var child = document.getElementById(path4).childNodes[0].id;
                            var isTrap = false;
                            for (var k = 0; k < BlackPices.length; k++) {
                                if (child == BlackPices[k]) {
                                    isTrap = true;
                                    break;
                                }
                            }
                            if(isTrap) {
                                pathId = "#" + path4;
                                //path combine with #
                                $(pathId).addClass('redSquare');
                                $(pathId).attr('ondrop', 'drop(event,this)');
                                $(pathId).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                    }
                } else {
                    //If a Second move,Set move path
                    var path5 = (col[i]) + row[j + 1];
                    if((document.getElementById(path5).childNodes.length)==0) {
                        //get the path
                        var pathId = "#" + path5;
                        //path combine with #
                        $(pathId).addClass('pathViewer');
                        $(pathId).attr('ondrop', 'drop(event,this)');
                        $(pathId).attr('ondragover', 'allowDrop(event,this)');
                    }
                    //If a trap,Set trap path
                    if(i < 7 & j < 7 ){
                        var path6 = (col[i+1]) + row[j + 1];
                        if ((document.getElementById(path6).childNodes.length) > 0) {
                            var child = document.getElementById(path6).childNodes[0].id;
                            var isTrap = false;
                            for (var k = 0; k < BlackPices.length; k++) {
                                if (child == BlackPices[k]) {
                                    isTrap = true;
                                    break;
                                }
                            }
                            if(isTrap) {
                                pathId = "#" + path6;
                                //path combine with #
                                $(pathId).addClass('redSquare');
                                $(pathId).attr('ondrop', 'drop(event,this)');
                                $(pathId).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                    }
                    //If a trap,Set trap path
                    if(i >= 1 & j < 7 ){
                        var path7 = (col[i-1]) + row[j + 1];
                        if ((document.getElementById(path7).childNodes.length) > 0) {
                            var child = document.getElementById(path7).childNodes[0].id;
                            var isTrap = false;
                            for (var k = 0; k < BlackPices.length; k++) {
                                if (child == BlackPices[k]) {
                                    isTrap = true;
                                    break;
                                }
                            }
                            if(isTrap) {
                                pathId = "#" + path7;
                                //path combine with #
                                $(pathId).addClass('redSquare');
                                $(pathId).attr('ondrop', 'drop(event,this)');
                                $(pathId).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                    }
                    return;
                }
            }
        }
    }
}

//White Rook Path
function setWhiteRookPath(id) {
    refreshBoxes();
    var parentId = document.getElementById(id).parentNode.id;
    for (var i = 0; i < col.length; i++) {
        for (var j = 0; j < row.length; j++) {
            //Check Position
            if(parentId === col[i]+row[j]){

                //Select botton
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            //If there any traps,Select them
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i]+row[j-k]).addClass('redSquare');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Select right
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            //If there any traps,Select them
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i+k]+row[j]).addClass('redSquare');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }

                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //Select left
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            //If there any traps,Select them
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i-k]+row[j]).addClass('redSquare');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //Select top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        //If there any traps,Select them
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i]+row[j+k]).addClass('redSquare');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }

    }
}
//Black Rook Path
function setBlackRookPath(id) {
        refreshBoxes();
        var parentId = document.getElementById(id).parentNode.id;
        for (var i = 0; i < col.length; i++) {
            for (var j = 0; j < row.length; j++) {
                if(parentId === col[i]+row[j]){
                //Select bottom
                for(var k=1;k<=8;k++){
                        if($("#"+col[i]+row[j-k]).find("img").length > 0){
                            var chil=$("#"+col[i]+row[j-k]).children("img");
                            for(var b=0; b<BlackPices.length; b++){
                                if($(chil).attr('id')===BlackPices[b]){
                                    break;
                                }
                            }
                            //If there any traps,Select them
                            for(var r=0; r<WhitePices.length; r++){
                                if($(chil).attr('id')===WhitePices[r]){
                                    $("#"+col[i]+row[j-k]).addClass('redSquare');
                                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                                }
                            }
                            break;
                        }
                        $("#"+col[i]+row[j-k]).addClass('pathViewer');
                        $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                        $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                    }
                    //Select right
                    for(var k=1;k<=8;k++){
                        if($("#"+col[i+k]+row[j]).find("img").length > 0){
                            var chil=$("#"+col[i+k]+row[j]).children("img");
                            //If there any traps,Select them
                            for(var b=0; b<BlackPices.length; b++){
                                if($(chil).attr('id')===BlackPices[b]){
                                    break;
                                }
                            }
                            //If there any traps,Select them
                            for(var r=0; r<WhitePices.length; r++){
                                if($(chil).attr('id')===WhitePices[r]){
                                    $("#"+col[i+k]+row[j]).addClass('redSquare');
                                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                                }
                            }

                            break;
                        }
                        $("#"+col[i+k]+row[j]).addClass('pathViewer');
                        $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                        $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                    }

                    //Select left
                    for(var k=1;k<=8;k++){
                        if($("#"+col[i-k]+row[j]).find("img").length > 0){
                            var chil=$("#"+col[i-k]+row[j]).children("img");
                            //If there any traps,Select them
                            for(var b=0; b<BlackPices.length; b++){
                                if($(chil).attr('id')===BlackPices[b]){
                                    break;
                                }
                            }
                            //If there any traps,Select them
                            for(var r=0; r<WhitePices.length; r++){
                                if($(chil).attr('id')===WhitePices[r]){
                                    $("#"+col[i-k]+row[j]).addClass('redSquare');
                                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                                }
                            }
                            break;
                        }
                        $("#"+col[i-k]+row[j]).addClass('pathViewer');
                        $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                        $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                    }
                    //Select top
                    for(var k=1;k<=8;k++){
                        if($("#"+col[i]+row[j+k]).find("img").length > 0){
                            var chil=$("#"+col[i]+row[j+k]).children("img");
                            //If there any traps,Select them
                            for(var b=0; b<BlackPices.length; b++){
                                if($(chil).attr('id')===BlackPices[b]){
                                    break;
                                }
                            }
                            //If there any traps,Select them
                            for(var r=0; r<WhitePices.length; r++){
                                if($(chil).attr('id')===WhitePices[r]){
                                    $("#"+col[i]+row[j+k]).addClass('redSquare');
                                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                                }
                            }
                            break;
                        }
                        $("#"+col[i]+row[j+k]).addClass('pathViewer');
                        $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                        $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                    }
                    return;
                }
            }

        }
}

//set white bishop path
function setWhiteBishopPath(id) {
    refreshBoxes();
    var parentId=document.getElementById(id).parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //Check Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        //If there any traps,Select them
                        for(var b=0; b<BlackPices.length; b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i+k]+row[j+k]).addClass('redSquare');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                            }
                        }
                        for(var r=0; r<WhitePices.length; r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Left Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        //If there any traps,Select them
                        for(var b=0; b<BlackPices.length; b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i-k]+row[j-k]).addClass('redSquare');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhitePices.length; r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Right Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        //If there any traps,Select them
                        for(var b=0; b<BlackPices.length; b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i+k]+row[j-k]).addClass('redSquare');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhitePices.length; r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0; b<BlackPices.length; b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i-k]+row[j+k]).addClass('redSquare');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhitePices.length; r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
            }
        }
    }
}
//set path to black bishop
function setBlackBishopPath(id) {
    refreshBoxes();
    var parentId=document.getElementById(id).parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //Check Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0; b<BlackPices.length; b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0; r<WhitePices.length; r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i+k]+row[j+k]).addClass('redSquare');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Left Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0; b<BlackPices.length; b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0; r<WhitePices.length; r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i-k]+row[j-k]).addClass('redSquare');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Right Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0; b<BlackPices.length; b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0; r<WhitePices.length; r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i+k]+row[j-k]).addClass('redSquare');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0; b<BlackPices.length; b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0; r<WhitePices.length; r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i-k]+row[j+k]).addClass('redSquare');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
            }
        }
    }
}
//set path to black Knight
function setBlackKnightPath(id) {
    refreshBoxes();
    var parentId=document.getElementById(id).parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i+2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j+1]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            //If there any traps,Select them
                            $("#"+col[i+2]+row[j+1]).addClass('redSquare');
                            $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Check Right Top
                    $("#"+col[i+2]+row[j+1]).addClass('pathViewer');
                    $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+2]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            //If there any traps,Select them
                            $("#"+col[i+1]+row[j+2]).addClass('redSquare');
                            $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+2]).addClass('pathViewer');
                    $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j-1]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            //If there any traps,Select them
                            $("#"+col[i+2]+row[j-1]).addClass('redSquare');
                            $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Check Right Bottom
                    $("#"+col[i+2]+row[j-1]).addClass('pathViewer');
                    $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j-2]).find("img").length > 0){
                    //If there any traps,Select them
                    var chil=$("#"+col[i+1]+row[j-2]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            //If there any traps,Select them
                            $("#"+col[i+1]+row[j-2]).addClass('redSquare');
                            $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-2]).addClass('pathViewer');
                    $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j+1]).children("img");
                    //If there any traps,Select them
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){

                            $("#"+col[i-2]+row[j+1]).addClass('redSquare');
                            $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Check Left Bottom
                    $("#"+col[i-2]+row[j+1]).addClass('pathViewer');
                    $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+2]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            //If there any traps,Select them
                            $("#"+col[i-1]+row[j+2]).addClass('redSquare');
                            $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+2]).addClass('pathViewer');
                    $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j-1]).children("img");
                    //If there any traps,Select them
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){

                            break;
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            $("#"+col[i-2]+row[j-1]).addClass('redSquare');
                            $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Check left Top
                    $("#"+col[i-2]+row[j-1]).addClass('pathViewer');
                    $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }



                if($("#"+col[i-1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-2]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            //If there any traps,Select them
                            $("#"+col[i-1]+row[j-2]).addClass('redSquare');
                            $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-2]).addClass('pathViewer');
                    $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}
//set path to white king
function setWhiteKnightPath(id) {
    refreshBoxes();
    var parentId=document.getElementById(id).parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i+2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j+1]).children("img");
                    //If there any traps,Select them
                    for(var b=0; b<BlackPices.length; b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i+2]+row[j+1]).addClass('redSquare');
                            $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhitePices.length; r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    //Check Right Top
                    $("#"+col[i+2]+row[j+1]).addClass('pathViewer');
                    $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+2]).children("img");
                    //If there any traps,Select them
                    for(var b=0; b<BlackPices.length; b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i+1]+row[j+2]).addClass('redSquare');
                            $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhitePices.length; r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+2]).addClass('pathViewer');
                    $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j-1]).children("img");
                    //If there any traps,Select them
                    for(var b=0; b<BlackPices.length; b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i+2]+row[j-1]).addClass('redSquare');
                            $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhitePices.length; r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    //Check Right Bottom
                    $("#"+col[i+2]+row[j-1]).addClass('pathViewer');
                    $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-2]).children("img");
                    //If there any traps,Select them
                    for(var b=0; b<BlackPices.length; b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i+1]+row[j-2]).addClass('redSquare');
                            $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhitePices.length; r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-2]).addClass('pathViewer');
                    $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j+1]).children("img");
                    //If there any traps,Select them
                    for(var b=0; b<BlackPices.length; b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i-2]+row[j+1]).addClass('redSquare');
                            $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhitePices.length; r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    //Check Left Bottom
                    $("#"+col[i-2]+row[j+1]).addClass('pathViewer');
                    $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+2]).children("img");
                    //If there any traps,Select them
                    for(var b=0; b<BlackPices.length; b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i-1]+row[j+2]).addClass('redSquare');
                            $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhitePices.length; r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+2]).addClass('pathViewer');
                    $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j-1]).children("img");
                    //If there any traps,Select them
                    for(var b=0; b<BlackPices.length; b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i-2]+row[j-1]).addClass('redSquare');
                            $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhitePices.length; r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    //Check left Top
                    $("#"+col[i-2]+row[j-1]).addClass('pathViewer');
                    $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }



                if($("#"+col[i-1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-2]).children("img");
                    //If there any traps,Select them
                    for(var b=0; b<BlackPices.length; b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i-1]+row[j-2]).addClass('redSquare');
                            $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhitePices.length; r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-2]).addClass('pathViewer');
                    $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}
//set path to white king
function setWhiteKingPath(id) {
    refreshBoxes();
    var parentId=document.getElementById(id).parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i]+row[j+1]).find("img").length > 0){
                    //If there any traps,Select them
                    var chil=$("#"+col[i]+row[j+1]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i]+row[j+1]).addClass('redSquare');
                            $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    //Check top
                    $("#"+col[i]+row[j+1]).addClass('pathViewer');
                    $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+1]).children("img");
                    //If there any traps,Select them
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i+1]+row[j+1]).addClass('redSquare');
                            $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+1]).addClass('pathViewer');
                    $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+1]).children("img");
                    //If there any traps,Select them
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i-1]+row[j+1]).addClass('redSquare');
                            $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+1]).addClass('pathViewer');
                    $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j-1]).children("img");
                    //If there any traps,Select them
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i]+row[j-1]).addClass('redSquare');
                            $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;

                        }
                    }

                }else{
                    //Check bottom
                    $("#"+col[i]+row[j-1]).addClass('pathViewer');
                    $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-1]).children("img");
                    //If there any traps,Select them
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i+1]+row[j-1]).addClass('redSquare');
                            $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;

                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-1]).addClass('pathViewer');
                    $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-1]).children("img");
                    //If there any traps,Select them
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i-1]+row[j-1]).addClass('redSquare');
                            $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;

                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-1]).addClass('pathViewer');
                    $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j]).children("img");
                    //If there any traps,Select them
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            $("#"+col[i-1]+row[j]).addClass('redSquare');
                            $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){
                            break;

                        }
                    }

                }else{
                    //Check right
                    $("#"+col[i-1]+row[j]).addClass('pathViewer');
                    $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j]).children("img");
                    //If there any traps,Select them
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){

                            $("#"+col[i+1]+row[j]).addClass('redSquare');
                            $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){

                            break;
                        }
                    }

                }else{
                    //Check Left
                    $("#"+col[i+1]+row[j]).addClass('pathViewer');
                    $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}
//set path to Black King
function setBlackKingPath(id) {
    refreshBoxes();
    var parentId=document.getElementById(id).parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j+1]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    //If there any traps,Select them
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){

                            $("#"+col[i]+row[j+1]).addClass('redSquare');
                            $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Check top
                    $("#"+col[i]+row[j+1]).addClass('pathViewer');
                    $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+1]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    //If there any traps,Select them
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){

                            $("#"+col[i+1]+row[j+1]).addClass('redSquare');
                            $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+1]).addClass('pathViewer');
                    $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+1]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    //If there any traps,Select them
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){

                            $("#"+col[i-1]+row[j+1]).addClass('redSquare');
                            $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+1]).addClass('pathViewer');
                    $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j-1]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    //If there any traps,Select them
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){

                            $("#"+col[i]+row[j-1]).addClass('redSquare');
                            $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Check bottom
                    $("#"+col[i]+row[j-1]).addClass('pathViewer');
                    $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-1]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){

                            $("#"+col[i+1]+row[j-1]).addClass('redSquare');
                            $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-1]).addClass('pathViewer');
                    $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-1]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    //If there any traps,Select them
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){

                            $("#"+col[i-1]+row[j-1]).addClass('redSquare');
                            $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-1]).addClass('pathViewer');
                    $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    //If there any traps,Select them
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){

                            $("#"+col[i-1]+row[j]).addClass('redSquare');
                            $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Check right
                    $("#"+col[i-1]+row[j]).addClass('pathViewer');
                    $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j]).children("img");
                    for(var b=0;b<BlackPices.length;b++){
                        if($(chil).attr('id')===BlackPices[b]){
                            break;
                        }
                    }
                    //If there any traps,Select them
                    for(var r=0;r<WhitePices.length;r++){
                        if($(chil).attr('id')===WhitePices[r]){

                            $("#"+col[i+1]+row[j]).addClass('redSquare');
                            $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Check Left
                    $("#"+col[i+1]+row[j]).addClass('pathViewer');
                    $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}
function setBlackQueenPath(id) {
    refreshBoxes();
    var parentId=document.getElementById(id).parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //Check bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i]+row[j-k]).addClass('redSquare');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check right
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i+k]+row[j]).addClass('redSquare');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //Check left
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i-k]+row[j]).addClass('redSquare');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //Check top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i]+row[j+k]).addClass('redSquare');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i+k]+row[j+k]).addClass('redSquare');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Left Bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i-k]+row[j-k]).addClass('redSquare');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Right Bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        //If there any traps,Select them
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i+k]+row[j-k]).addClass('redSquare');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Right
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        //If there any traps,Select them
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                break;
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                $("#"+col[i-k]+row[j+k]).addClass('redSquare');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }
    }
}
//Set WhiteQueen Path
function setWhiteQueenPath(id) {
    refreshBoxes();
    var parentId=document.getElementById(id).parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //Check bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        //If there any traps,Select them
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i]+row[j-k]).addClass('redSquare');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check right
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        //If there any traps,Select them
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i+k]+row[j]).addClass('redSquare');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //Chek left
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            //If there any traps,Select them
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i-k]+row[j]).addClass('redSquare');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        //If there any traps,Select them
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i]+row[j+k]).addClass('redSquare');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        //If there any traps,Select them
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i+k]+row[j+k]).addClass('redSquare');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Left Bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        //If there any traps,Select them
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i-k]+row[j-k]).addClass('redSquare');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Right Bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0;b<BlackPices.length;b++){
                            //If there any traps,Select them
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i+k]+row[j-k]).addClass('redSquare');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('pathViewer');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Check Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        //If there any traps,Select them
                        for(var b=0;b<BlackPices.length;b++){
                            if($(chil).attr('id')===BlackPices[b]){
                                $("#"+col[i-k]+row[j+k]).addClass('redSquare');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhitePices.length;r++){
                            if($(chil).attr('id')===WhitePices[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('pathViewer');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }
    }
}

//Refresh all Blocks After every path view
function refreshBoxes() {
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            for(var k=0; k<whiteBlocks.length; k++){
                if(col[i]+row[j] === whiteBlocks[k]){
                    $("#"+col[i]+row[j]).removeClass('redSquare');
                    $("#"+col[i]+row[j]).removeClass('pathViewer');
                    $("#"+col[i]+row[j]).addClass('squareWhite');
                    $("#"+col[i]+row[j]).attr('ondrop','');
                    $("#"+col[i]+row[j]).attr('ondragover','');
                }
            }
            for(var k=0; k<RedBlocks.length; k++){
                if(col[i]+row[j] === RedBlocks[k]){
                    $("#"+col[i]+row[j]).removeClass('redSquare');
                    $("#"+col[i]+row[j]).removeClass('pathViewer');
                    $("#"+col[i]+row[j]).addClass('squareBlack');
                    $("#"+col[i]+row[j]).attr('ondrop','');
                    $("#"+col[i]+row[j]).attr('ondragover','');
                }
            }
        }
    }
}

var PicesCount={
    wKnights:2 , wRooks:2 , wBishops:2 , wQueen:1,
    bKnights:2 , bRooks:2 , bBishops:2 , bQueen:1,
};
//Pieces Allow to drop
function allowDrop(ev,e) {
    var movedChild=document.getElementById(e.id);
    if($("#"+e.id).find("img").length > 0){
        var removingChild=document.getElementById(e.id).childNodes[0].id;
        $("#"+e.id).children("img").remove();

        var removedColor=removingChild.substring(0,1);
        var check=checkPiece(removingChild);

        //Set Score
        if(removedColor=="b" & check=="pawn"){
            var oldValue=parseInt(document.getElementById('player2_text').value);
            var newValue=oldValue+1;
            document.getElementById('player2_text').value = newValue;

        }else if(removedColor=="b" & check=="knight"){
            var oldValue=parseInt(document.getElementById('player2_text').value);
            var newValue=oldValue+3;
            document.getElementById('player2_text').value = newValue;
            PicesCount.bKnights-=1;

        }else if(removedColor=="b" & check=="bishop"){
            var oldValue=parseInt(document.getElementById('player2_text').value);
            var newValue=oldValue+3;
            document.getElementById('player2_text').value = newValue;
            PicesCount.bBishops-=1;

        }else if(removedColor=="b" & check=="rook"){
            var oldValue=parseInt(document.getElementById('player1_text').value);
            var newValue=oldValue+5;
            document.getElementById('player2_text').value = newValue;
            PicesCount.bRooks-=1;

        }else if(removedColor=="b" & check=="queen"){
            var oldValue=parseInt(document.getElementById('player2_text').value);
            var newValue=oldValue+9;
            document.getElementById('player2_text').value = newValue;
            PicesCount.bQueen-=1;

        }else if(removedColor=="w" & check=="pawn"){
            var oldValue=parseInt(document.getElementById('player1_text').value);
            var newValue=oldValue+1;
            document.getElementById('player1_text').value = newValue;

        }else if(removedColor=="w" & check=="knight"){
            var oldValue=parseInt(document.getElementById('player1_text').value);
            var newValue=oldValue+3;
            document.getElementById('player1_text').value = newValue;
            PicesCount.wKnights-=1;

        }else if(removedColor=="w" & check=="bishop"){
            var oldValue=parseInt(document.getElementById('player1_text').value);
            var newValue=oldValue+3;
            document.getElementById('player1_text').value = newValue;
            PicesCount.wBishops-=1;

        }else if(removedColor=="w" & check=="rook"){
            var oldValue=parseInt(document.getElementById('player1_text').value);
            var newValue=oldValue+5;
            document.getElementById('player1_text').value = newValue;
            PicesCount.wRooks-=1;

        }else if(removedColor=="w" & check=="queen"){
            var oldValue=parseInt(document.getElementById('player1_text').value);
            var newValue=oldValue+9;
            document.getElementById('player1_text').value = newValue;
            PicesCount.wQueen-=1;

        }else if(removedColor=="b" & check=="king"){
            var $toastContent = $('<span>Congratulations! Player two Wins</span>').add($('<button onclick="location.reload(true)" class="btn-flat toast-action">Replay</button>'));
            Materialize.toast($toastContent, 4000);
        }else if(removedColor=="w" & check=="king"){
            var $toastContent = $('<span>Congratulations! Player one Wins</span>').add($('<button onclick="location.reload(true)" class="btn-flat toast-action">Replay</button>'));
            Materialize.toast($toastContent, 4000);
        }

    }
    ev.preventDefault();
}

//Function run when drag
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

//Function run on page load
window.onload=function resetScore() {
    document.getElementById('player1_text').value = '0';
    document.getElementById('player2_text').value = '0';
}

//Set drop possibilitis of Pieces
function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    var transferColor = data.substring(0, 1);
    var startCol = (document.getElementById(data).parentElement.id);
    var endCol = (document.getElementById(ev.target.id).id);

    if (startCol != endCol) {
        PawnMovements[data] = true;
    }
    ev.preventDefault();
    //var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var audio = new Audio('peice sound.wav');
    audio.play();
    refreshBoxes();
    if(data.substring(0,1)=="b"){
        startWhite();
        stopBlack();
    }else{
        startBlack();
        stopWhite();
    }

}
//Set pawn promotions
function checkPawnPromotions(id) {
    var color= id.substring(0,1);
    var pointer=0;
    var count=0;
    var availablePices=[];

    //Identify Pieces and stop
    if(id=="wQueen"){
        if(PicesCount.wQueen==1){
            return;
        }
    }else if(id=="wRook"){
        if(PicesCount.wRooks==2){
            return;
        }
    }else if(id=="wBishop"){
        if(PicesCount.wBishops==2){
            return;
        }
    }else if(id=="wKnight"){
        if(PicesCount.wKnights==2){
            return;
        }
    }else if(id=="bQueen"){
        if(PicesCount.bQueen==1){
            return;
        }
    }else if(id=="bRook"){
        if(PicesCount.bRooks==2){
            return;
        }
    }else if(id=="bBishop"){
        if(PicesCount.bBishops==2){
            return;
        }
    }else if(id=="wKnight"){
        if(PicesCount.wKnights==2){
            return;
        }
    }
    //Check availability of pawns
    var availability=pawnPromotionAvalibility(color);
    if(availability=="none"){
        return;
    }else if((availability.substring(0,1))==color){

            for(var i=0;i<squares.length;i++){
                if(squares[i].childNodes.length>0){
                    availablePices.push(squares[i].childNodes[0].id);
                }
            }
            var temp='';
            var parent=document.getElementById(availability).parentNode;
            $(parent).children("img").remove();
            out:for(var j=0;j<chessPieces.length;j++){
                if(id==chessPieces[j]){
                    var peiceNo=pieceNo[j].substring(2);
                    var pieceColor=pieceNo[j].substring(0,1);
                    for(var m=0;m<availablePices.length;m++){
                        if(peiceNo==(availablePices[m]).substring(2)){
                            temp=(availablePices[m]).substring(0,1);
                            continue out;
                        }
                    }
                    if(temp==pieceColor){
                        pointer=i;
                    }else{
                        continue out;
                    }

                }
            }
            //Set piece
            $(parent).prepend('<img src="/Chess-Mate/images/chess_Board/'+id+'.png" draggable="true" onmouseover="pathSetter(id)" onmouseout="refreshBoxes()" class="hover" id="'+pieceNo[pointer]+
                '" width="80px" height="80px" style="position: absolute;" ondragstart="drag(event)">');
    }

}

//Check pawns availability
function pawnPromotionAvalibility(color) {
    //Check white pawns availability
    if (color == "w") {
        for (var i = 0; i < whitePawnPromotionPositions.length; i++) {
            if (document.getElementById(whitePawnPromotionPositions[i]).childNodes.length > 0) {
                var piece = document.getElementById(whitePawnPromotionPositions[i]).childNodes[0].id;
                if ((piece.substring(1, 2)) == "p") {
                    return piece;
                }
            }
        }
        return "none";
    //Check white pawns availability
    } else {
            for (var i = 0; i < blackPawnPromotionPositions.length; i++) {
                if (document.getElementById(blackPawnPromotionPositions[i]).childNodes.length > 0) {
                    var piece = document.getElementById(blackPawnPromotionPositions[i]).childNodes[0].id;
                    if ((piece.substring(1, 2)) == "p") {
                        return piece;
                    }
                }
            }
            return "none";
        }
}


